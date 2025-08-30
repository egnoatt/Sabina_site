import React from 'react';
import Markdown from 'react-markdown';
import { getPostContent } from '@/lib/posts';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// Generazione dei parametri statici
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pagina dinamica corretta per Next.js >=13.3 (incluso 15.3)
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostContent(slug);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sabinascattola.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://sabinascattola.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.data.title,
        item: `https://sabinascattola.com/blog/${slug}`,
      },
    ],
  };

  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <nav
        aria-label="Breadcrumb"
        className="container max-w-4xl mx-auto px-6 -mt-4 mb-6 text-sm text-gray-600"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline focus-visible:underline underline-offset-4">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/blog"
              className="hover:underline focus-visible:underline underline-offset-4"
            >
              Blog
            </Link>
          </li>
          <li>/</li>
          <li aria-current="page" className="font-semibold text-brand-text truncate max-w-[60ch]">
            {post.data.title}
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="container max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-xl">
        <header className="border-b pb-6 mb-8">
          <h1 className="font-bold text-4xl text-brand-text mb-4">{post.data.title}</h1>
          <time className="text-gray-500 italic">{post.data.date}</time>
        </header>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.data.title,
              keywords: post.data.tags ? post.data.tags.join(', ') : undefined,
              image: post.data.image ? `https://sabinascattola.com${post.data.image}` : undefined,
              datePublished: post.data.date,
              dateModified: new Date().toISOString(),
              author: {
                '@type': 'Person',
                name: 'Sabina Scattola',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Sabina Scattola',
                url: 'https://sabinascattola.com',
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://sabinascattola.com/blog/${slug}`,
              },
              description: post.data.excerpt || post.content.substring(0, 160).replace(/\n/g, ' '),
            }),
          }}
        />
        <section className="prose mx-auto">
          <Markdown>{post.content}</Markdown>
        </section>
      </article>
    </main>
  );
}
