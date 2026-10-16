import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import BlogContent from '@/components/BlogContent';

export const metadata = {
  title: 'Blog | Sabina Scattola – Psicologa e Psicoterapeuta',
  description: 'Articoli e approfondimenti su psicologia e psicoterapia.',
  alternates: { canonical: '/blog' },
  openGraph: {
    images: ['/og.png'],
    type: 'website',
    title: 'Blog | Sabina Scattola',
    description: 'Articoli e approfondimenti su psicologia e psicoterapia.',
    url: '/blog',
  },
  twitter: {
    images: ['/og.png'],
    card: 'summary_large_image',
    title: 'Blog | Sabina Scattola',
    description: 'Articoli e approfondimenti su psicologia e psicoterapia.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sabinascattola.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.sabinascattola.com/blog' },
    ],
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 text-base leading-relaxed">
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
    </div>
  );
}
