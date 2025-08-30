import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import BlogContent from '@/components/BlogContent';

export const metadata = {
  title: 'Blog | Sabina Scattola – Psicologa e Psicoterapeuta',
  description: 'Articoli e approfondimenti su psicologia e psicoterapia.',
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

const blogDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

function getPosts(): Post[] {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: fileName.replace(/\.md$/, ''),
        title: data.title ?? fileName.replace(/\.md$/, ''),
        date: data.date ?? new Date().toISOString(),
        description: (data.excerpt ?? data.description ?? '').toString(),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getPosts();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sabinascattola.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://sabinascattola.com/blog' },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-base leading-relaxed">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline focus-visible:underline underline-offset-4">
              Home
            </Link>
          </li>
          <li>/</li>
          <li aria-current="page" className="font-semibold text-brand-text">
            Blog
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-text">Blog</h1>
        <p className="mt-2 text-gray-600">
          Articoli e approfondimenti sulla psicologia e psicoterapia
        </p>
      </section>

      <BlogContent posts={posts} />
    </main>
  );
}
