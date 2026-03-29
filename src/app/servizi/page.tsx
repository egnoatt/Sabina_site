import Link from 'next/link';
import ServiziContent from '@/components/ServiziContent';

export const metadata = {
  title: 'Ambiti di esperienza clinica | Sabina Scattola',
  description:
    'Ambiti di esperienza clinica e professionale della Dott.ssa Sabina Scattola, presentati in chiave informativa. L’attività libero-professionale è attualmente sospesa.',
};

export default function Servizi() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sabinascattola.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ambiti di esperienza',
        item: 'https://sabinascattola.com/servizi',
      },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-base leading-relaxed">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline focus-visible:underline underline-offset-4">
              Home
            </Link>
          </li>
          <li>/</li>
          <li aria-current="page" className="font-semibold text-brand-text">
            Ambiti di esperienza
          </li>
        </ol>
      </nav>

      {/* JSON-LD BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Contenuto */}
      <ServiziContent />
    </main>
  );
}
