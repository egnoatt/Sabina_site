import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { professionalStatus } from '@/config/professionalStatus';

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
    <section className="text-base leading-relaxed">
      {/* Lista Articoli (senza header per evitare doppio titolo) */}
      <ul className="divide-y divide-editorial-line max-w-4xl mx-auto border-t border-editorial-line">
        {list.map(({ slug, title, date, description }) => (
          <li key={slug} className="py-8 md:py-10">
            <article>
              <h2 className="editorial-heading">
                <Link
                  href={`/blog/${encodeURIComponent(slug)}`}
                  className="hover:underline focus-visible:underline underline-offset-4"
                >
                  {title}
                </Link>
              </h2>
              <time dateTime={date} className="block text-sm text-slate-600 my-3">
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
        Per informazioni generali sul profilo professionale o sui contenuti pubblicati puoi usare i
        recapiti indicati nella pagina contatti.
      </p>
      <div className="mt-4 text-center">
        <Link
          href="/contatti"
          className="editorial-button"
        >
          <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
          {professionalStatus.infoCtaLabel}
        </Link>
      </div>
    </section>
  );
}
