import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

interface PostData {
  date: string;
  title: string;
  description?: string;
  excerpt?: string;
  tags?: string[];
  image?: string;
  updated?: string;
}

export interface Post {
  slug: string;
  date: string;
  title: string;
  description: string;
  updated?: string;
}

export function getPostContent(slug: string): { data: PostData; content: string } | null {
  // Only file basenames are valid routes; never resolve user input outside the archive.
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
  let fileContent: string;
  try {
    fileContent = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), 'utf-8');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw error;
  }
  // Disable gray-matter cache: cached clones omit the raw, non-enumerable matter block.
  const parsed = matter(fileContent, {});
  const { data, content } = parsed;
  // Fail visibly on invalid source data rather than inventing a publication date.
  // YAML eagerly normalizes unquoted dates (e.g. February 30 becomes March 2).
  // Validate the original date-only scalar instead of its coerced Date value.
  const rawDate = parsed.matter.match(/^(?:date|"date"|'date'):[ \t]*(\d{4}-\d{2}-\d{2})[ \t]*(?:#.*)?$/m)?.[1];
  const date = data.date instanceof Date ? rawDate : data.date;
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) {
    throw new Error(`Invalid or missing publication date for article: ${slug}`);
  }
  if (data.title !== undefined && typeof data.title !== 'string') {
    throw new Error(`Invalid title for article: ${slug}`);
  }
  return {
    data: { ...data, date, title: data.title ?? slug },
    content,
  };
}

export function getAllPosts(): Post[] {
  return fs.readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const post = getPostContent(slug);
      if (!post) throw new Error(`Cannot load article: ${slug}`);
      return {
        slug,
        date: post.data.date,
        updated: post.data.updated,
        title: post.data.title,
        description: String(post.data.excerpt ?? post.data.description ?? ''),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}
