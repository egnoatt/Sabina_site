import Link from 'next/link';
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { professionalStatus } from '@/config/professionalStatus';

export const metadata = {
  title: 'Contatti e Informazioni | Sabina Scattola',
  description:
    'Informazioni generali e professionali sulla Dott.ssa Sabina Scattola, con nota istituzionale sulla sospensione dell’attività libero-professionale.',
};

export default function ContattiPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sabinascattola.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contatti',
        item: 'https://sabinascattola.com/contatti',
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
            Contatti
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="text-center mb-8">
        <EnvelopeIcon className="mx-auto h-16 w-16 text-brand-primary" aria-hidden="true" />
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-brand-text">Contatti</h1>
        <p className="mt-2 text-gray-600">Informazioni generali e professionali</p>
      </section>

      {/* Cards: Email + Social */}
      <section className="grid gap-6 md:grid-cols-2 mb-10">
        <article className="rounded-xl border border-brand-accent bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-brand-text">Email</h2>
          </div>
          <p className="mt-3 text-gray-700">
            Per comunicazioni generali o professionali scrivi a
            <a
              href="mailto:sabinascat@live.com"
              className="ml-2 text-brand-primary hover:underline focus-visible:underline underline-offset-4"
            >
              sabinascat@live.com
            </a>
          </p>
        </article>
        <article className="rounded-xl border border-brand-accent bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-brand-text">Social</h2>
          </div>
          <p className="mt-3 text-gray-700">
            Seguimi su
            <a
              href="https://www.facebook.com/sabinascattolapsicologa"
              className="ml-2 text-brand-primary hover:underline focus-visible:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </article>
      </section>

      {/* Note informative (come nel PDF) */}
      <section className="rounded-xl border border-brand-accent bg-brand-bg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand-text text-center mb-4">
          Informazioni Istituzionali
        </h2>

        {/* Disponibilità Attuale */}
        <div className="mb-5">
          <h3 className="text-brand-text font-semibold">Disponibilità Attuale</h3>
          <p className="mt-1 text-gray-700">{professionalStatus.availabilityMessage}</p>
        </div>

        {/* Profilo Attuale */}
        <div className="mb-5">
          <h3 className="text-brand-text font-semibold">Profilo Attuale</h3>
          <p className="mt-1 text-gray-700">{professionalStatus.institutionalRoleMessage}</p>
          <p className="mt-3 text-gray-700">{professionalStatus.sitePurposeMessage}</p>
        </div>

        <div className="mb-5">
          <h3 className="text-brand-text font-semibold">Comunicazioni</h3>
          <p className="mt-1 text-gray-700">{professionalStatus.contactMessage}</p>
        </div>

        {/* Aree Principali di Intervento */}
        <div>
          <h3 className="text-brand-text font-semibold">Aree di Esperienza Clinica</h3>
          <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
            {[
              'Ansia e attacchi di panico',
              'Disturbo post-traumatico da stress',
              "Depressione e disturbi dell'umore",
              'Disturbi di personalità',
              'Disturbi dello spettro psicotico',
              'Disturbi neurocognitivi',
              "Psicopatologie dell'adolescenza",
              'Difficoltà genitoriali e familiari',
              'Sostegno in fasi critiche della vita',
              'Supporto in momenti di crisi personale e lavorativa',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
