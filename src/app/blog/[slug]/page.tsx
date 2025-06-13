import React from 'react';
import Markdown from 'react-markdown';
import { getPostContent } from '@/lib/posts';
import fs from 'fs';
import path from 'path';

// Generazione dei parametri statici
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const files = fs.readdirSync(postsDir);

  return files.map(filename => ({
    slug: filename.replace('.md', ''),
  }));
}

// Pagina dinamica corretta per Next.js >=13.3 (incluso 15.3)
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostContent(slug);

  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <article className="container max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-xl">
        <header className="border-b pb-6 mb-8">
          <h1 className="font-bold text-4xl text-green-700 mb-4">{post.data.title}</h1>
          <time className="text-gray-500 italic">{post.data.date}</time>
        </header>
        <section className="prose prose-green mx-auto">
          <Markdown>{post.content}</Markdown>
        </section>
      </article>
    </main>
  );
}