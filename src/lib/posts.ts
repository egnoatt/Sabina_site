// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

export function getPostContent(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return { data, content };
}

// Definisci una interfaccia per i dati del post
interface Post {
  slug: string;
  date: string;
  title?: string;
  description?: string;
  [key: string]: unknown; // per eventuali proprietà aggiuntive
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts: Post[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const { data } = getPostContent(slug);
    return {
      slug,
      date: data.date,
      title: data.title,
      description: data.description,
      ...data, // include altre proprietà eventuali
    };
  });

  // Ordina i post per data (dal più recente al meno recente)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}