import React from 'react';
import type { Metadata } from 'next';
import Markdown from 'react-markdown';
import { getAllPosts, getPostContent } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generazione dei parametri statici
export async function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Metadati specifici per ciascun articolo; evitano titoli e canonical generici.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) notFound();
  const title = String(post.data.title ?? 'Approfondimento');
  const description = String(post.data.description ?? post.data.excerpt ?? post.content.slice(0, 160)).trim();
  const url = '/blog/' + encodeURIComponent(slug);

  return {
    title: title + ' | Sabina Scattola',
    description,
    alternates: { canonical: url },
    openGraph: { images: ['/og.png'], type: 'article', title, description, url },
    twitter: { images: ['/og.png'], card: 'summary_large_image', title, description },
  };
}

function formatDate(value: unknown): string {
  if (!value) return '';
  const raw = String(value);
  const date = new Date(raw);
  return Number.isNaN(date.getTime())
    ? raw
    : new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

// Editorial template only; Markdown article content remains unchanged.
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) notFound();
  const title = String(post.data.title ?? 'Approfondimento');
  const date = post.data.date;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sabinascattola.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.sabinascattola.com/blog' },
      { '@type': 'ListItem', position: 3, name: title, item: 'https://www.sabinascattola.com/blog/' + slug },
    ],
  };

  return (
    <div className="min-h-screen bg-editorial-paper pb-16 pt-8 sm:pb-24 sm:pt-12">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="text-brand-primary underline-offset-4 hover:underline focus-visible:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog" className="text-brand-primary underline-offset-4 hover:underline focus-visible:underline">Blog</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="max-w-full min-w-0 break-words text-brand-text">{title}</li>
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="mx-auto mt-10 max-w-5xl px-6 sm:mt-14">
        <header className="max-w-[800px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Approfondimenti · Archivio</p>
          <h1 className="mt-5 max-w-[19ch] break-words font-display text-[clamp(2.55rem,5.5vw,4.85rem)] font-normal leading-[1.08] tracking-[-0.035em] text-brand-text">
            {title}
          </h1>
          {date && (
            <time dateTime={String(date)} className="mt-6 block text-base text-slate-600">
              {formatDate(date)}
            </time>
          )}
        </header>

        <div className="mt-9 h-px w-full bg-editorial-line sm:mt-12" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              keywords: post.data.tags ? post.data.tags.join(', ') : undefined,
              image: post.data.image ? 'https://www.sabinascattola.com' + post.data.image : undefined,
              datePublished: post.data.date,
              dateModified: post.data.updated ?? post.data.date,
              author: { '@type': 'Person', name: 'Sabina Scattola' },
              publisher: { '@type': 'Person', name: 'Sabina Scattola', url: 'https://www.sabinascattola.com' },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://www.sabinascattola.com/blog/' + slug,
              },
              description: post.data.excerpt || post.content.substring(0, 160).replace(/\n/g, ' '),
            }),
          }}
        />

        <div className="editorial-prose prose prose-lg mt-10 max-w-[70ch] text-slate-700 sm:mt-14">
          <Markdown>{post.content}</Markdown>
        </div>
        <footer className="mt-16 max-w-[70ch] border-t border-editorial-line pt-8">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
          >
            <span aria-hidden="true" className="mr-2">←</span> Torna agli articoli
          </Link>
        </footer>
      </article>
    </div>
  );
}
