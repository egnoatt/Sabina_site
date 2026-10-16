import Link from 'next/link';
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { professionalStatus } from '@/config/professionalStatus';

export default function ContattiPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sabinascattola.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contatti',
        item: 'https://www.sabinascattola.com/contatti',
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
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
          Informazioni
        </p>
        <h1 className="editorial-title mt-4">Contatti</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
          Contatti per comunicazioni generali e informazioni relative al sito personale.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          L&apos;attività privata è chiusa e non si accettano prenotazioni.
          Non inviare via email ordinaria informazioni sanitarie o dettagli clinici personali.
        </p>
      </section>

      {/* Cards: Email + Social */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <article className="editorial-panel">
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
            <h2 className="editorial-heading">Email</h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Per comunicazioni generali scrivi a
            <a
              href="mailto:sabinascat@live.com"
              className="ml-2 font-medium text-brand-primary hover:underline focus-visible:underline underline-offset-4"
            >
              sabinascat@live.com
            </a>
          </p>
        </article>
        <article className="editorial-panel">
          <div className="flex items-center gap-3">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
            <h2 className="editorial-heading">Social</h2>
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

      <p className="mb-10 text-sm leading-relaxed text-slate-600">
        Per richieste relative al trattamento dei dati personali puoi utilizzare
        questi stessi contatti, specificando nell&apos;oggetto che si tratta di
        una richiesta privacy.
      </p>

      {/* Note informative (come nel PDF) */}
      <section className="editorial-note">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
          Nota istituzionale
        </p>
        <h2 className="editorial-heading mt-3 text-center">
          Informazioni Istituzionali
        </h2>

        {/* Disponibilità Attuale */}
        <div className="mt-8 border-b border-editorial-line pb-6">
          <h3 className="text-brand-text font-semibold">Disponibilità Attuale</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            {professionalStatus.availabilityMessage}
          </p>
        </div>

        {/* Profilo Attuale */}
        <div className="border-b border-editorial-line py-6">
          <h3 className="text-brand-text font-semibold">Profilo Attuale</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            {professionalStatus.institutionalRoleMessage}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {professionalStatus.sitePurposeMessage}
          </p>
        </div>

        <div className="border-b border-editorial-line py-6">
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
    </div>
  );
}
