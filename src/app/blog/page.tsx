// ✅ Corretto (senza "use client")
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogContent from '@/components/BlogContent';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

function getPosts() {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function Blog() {
  const posts = getPosts();
  return <BlogContent posts={posts} />;
}