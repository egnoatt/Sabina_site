import Link from 'next/link';
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { professionalStatus } from '@/config/professionalStatus';

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
    <main className="mx-auto max-w-5xl px-6 py-12 text-base leading-relaxed md:py-16">
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
      <section className="mb-12 text-center">
        <EnvelopeIcon className="mx-auto h-14 w-14 text-brand-primary" aria-hidden="true" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Informazioni
        </p>
        <h1 className="mt-4 text-3xl font-bold text-brand-text md:text-4xl">Contatti</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
          Informazioni generali e professionali, con indicazione chiara dello stato attuale
          dell’attività.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Per comunicazioni generali e istituzionali (non per prenotazioni private).
        </p>
      </section>

      {/* Cards: Email + Social */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-brand-text">Email</h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Per comunicazioni generali o professionali scrivi a
            <a
              href="mailto:sabinascat@live.com"
              className="ml-2 font-medium text-brand-primary hover:underline focus-visible:underline underline-offset-4"
            >
              sabinascat@live.com
            </a>
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
          <div className="flex items-center gap-3">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-brand-text">Social</h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Seguimi su
            <a
              href="https://www.facebook.com/sabinascattolapsicologa"
              className="ml-2 font-medium text-brand-primary hover:underline focus-visible:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </article>
      </section>

      {/* Note informative (come nel PDF) */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Nota istituzionale
        </p>
        <h2 className="mt-3 text-center text-2xl font-semibold text-brand-text">
          Informazioni Istituzionali
        </h2>

        {/* Disponibilità Attuale */}
        <div className="mt-8 border-b border-slate-200 pb-6">
          <h3 className="text-brand-text font-semibold">Disponibilità Attuale</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            {professionalStatus.availabilityMessage}
          </p>
        </div>

        {/* Profilo Attuale */}
        <div className="border-b border-slate-200 py-6">
          <h3 className="text-brand-text font-semibold">Profilo Attuale</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            {professionalStatus.institutionalRoleMessage}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            {professionalStatus.sitePurposeMessage}
          </p>
        </div>

        <div className="border-b border-slate-200 py-6">
          <h3 className="text-brand-text font-semibold">Comunicazioni</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            {professionalStatus.contactMessage}
          </p>
        </div>

        {/* Aree Principali di Intervento */}
        <div className="pt-6">
          <h3 className="text-brand-text font-semibold">Aree di Esperienza Clinica</h3>
          <ul className="mt-4 grid gap-3 text-base leading-relaxed text-slate-700 md:grid-cols-2">
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
              <li key={item} className="rounded-xl bg-white px-4 py-3 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
