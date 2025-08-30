'use client';

import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  const list: Post[] = Array.isArray(posts)
    ? posts.filter((p) => typeof p?.slug === 'string' && p.slug.length > 0)
    : [];
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 text-base leading-relaxed">
      {/* Lista Articoli (senza header per evitare doppio titolo) */}
      <ul className="divide-y divide-gray-200 max-w-4xl mx-auto">
        {list.map(({ slug, title, date, description }) => (
          <li key={slug} className="py-6">
            <article>
              <h2 className="text-xl font-semibold text-brand-text">
                <Link
                  href={`/blog/${encodeURIComponent(slug)}`}
                  className="hover:underline focus-visible:underline underline-offset-4"
                >
                  {title}
                </Link>
              </h2>
              <time dateTime={date} className="block text-sm text-gray-500 mb-2">
                {new Date(date).toLocaleDateString('it-IT', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <p className="text-gray-700">{description}</p>
            </article>
          </li>
        ))}
      </ul>

      {list.length === 0 && (
        <p className="mt-6 text-center text-gray-600">Nessun articolo disponibile al momento.</p>
      )}

      {/* CTA finale robusta (no override) */}
      <p className="mt-12 text-center text-gray-700">
        Sei interessato ad approfondire uno di questi argomenti o hai richieste specifiche?
      </p>
      <div className="mt-4 text-center">
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: '#1F5C4A', color: '#ffffff' }}
        >
          <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
          Contattami
        </Link>
      </div>
    </section>
  );
}
