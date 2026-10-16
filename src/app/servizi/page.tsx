import Link from 'next/link';
import ServiziContent from '@/components/ServiziContent';

export default function Servizi() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sabinascattola.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ambiti di esperienza',
        item: 'https://www.sabinascattola.com/servizi',
      },
    ],
  };

  return (
    <div className="editorial-page">
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
    </div>
  );
}
