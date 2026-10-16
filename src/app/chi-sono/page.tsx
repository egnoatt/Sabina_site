import Link from 'next/link';
import { UserCircleIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { professionalStatus } from '@/config/professionalStatus';

export default function ChiSono() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sabinascattola.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Chi sono',
        item: 'https://www.sabinascattola.com/chi-sono',
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
            Chi sono
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="mb-14 text-center">
        <UserCircleIcon className="mx-auto h-14 w-14 text-brand-primary" aria-hidden="true" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
          Profilo professionale
        </p>
        <h1 className="editorial-title mt-4">Chi Sono</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-700">
          Sono la Dott.ssa <strong>Sabina Scattola</strong>, psicologa e psicoterapeuta ad
          orientamento psicodinamico. Questa pagina raccoglie il mio profilo professionale, la
          formazione e i principali ambiti di esperienza clinica maturati nel tempo.
        </p>
      </section>

      {/* Ruoli Attuali */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="editorial-note">
          <h2 className="editorial-heading">Ruolo corrente</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Dirigente Psicologo – AULSS 7 Pedemontana
          </p>
        </div>
        <div className="editorial-note">
          <h2 className="editorial-heading">Associazione</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">Vicepresidente “La Recherche”</p>
        </div>
      </section>

      <section className="editorial-note mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
          Nota istituzionale
        </p>
        <h2 className="editorial-heading mt-3">Stato professionale attuale</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {professionalStatus.availabilityMessage}
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {professionalStatus.institutionalRoleMessage}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {professionalStatus.sitePurposeMessage}
        </p>
      </section>

      <div className="space-y-8">
        {/* Esperienza */}
        <section className="editorial-panel">
          <h2 className="editorial-heading">Esperienza</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Oltre 20 anni di attività clinica, con incarichi in AULSS 7 e AULSS 8. Dal 2003 al
            2025 ho seguito progetti di valutazione neuropsicologica, sostegno ai caregiver e
            psicoterapia individuale, ricoprendo responsabilità su strutture residenziali
            psichiatriche.
          </p>
        </section>

        {/* Formazione */}
        <section className="editorial-panel">
          <h2 className="editorial-heading">
            Formazione Accademica e Professionale
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-700 marker:text-slate-400">
            <li>Laurea in Psicologia Clinica e di Comunità – Università di Padova (2000).</li>
            <li>Iscrizione all’Ordine degli Psicologi del Veneto n. 4157 (dal 31/01/2003).</li>
            <li>Specializzazione in Psicoterapia Psicodinamica – CERP Trento.</li>
            <li>Master in Psicoterapia Psicoanalitica.</li>
            <li>Training personale con analista SPI/IPA.</li>
            <li>Supervisioni individuali e di gruppo.</li>
            <li>Aggiornamento su valutazione diagnostica PDM-2 con prof. V. Lingiardi.</li>
          </ul>
        </section>

        {/* Filosofia & Metodo */}
        <section className="editorial-panel">
          <h2 className="editorial-heading">Filosofia e Metodo</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Credo nella centralità dell’ascolto e dell’alleanza terapeutica. Lavoro nel qui ed ora
            ma con attenzione alle dinamiche storiche e relazionali. Il controtransfert diventa uno
            strumento per comprendere in profondità i vissuti, mentre il percorso terapeutico si
            fonda su obiettivi chiari e condivisi.
          </p>
        </section>

        {/* A chi mi rivolgo */}
        <section className="editorial-panel">
          <h2 className="editorial-heading">A chi mi rivolgo</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Nel corso dell&apos;attività clinica e istituzionale mi sono occupata di persone
            pre-adolescenti, adolescenti, adulti e anziani, oltre che di caregiver e professionisti
            in periodi di stress o cambiamento.
          </p>
        </section>
      </div>

      {/* Citazione */}
      <blockquote className="editorial-note mt-12 text-center text-lg font-medium italic text-brand-primary">
        &quot;La psicoterapia è un viaggio di scoperta e crescita personale.&quot;
      </blockquote>

      {/* CTA finale */}
      <div className="mt-12 text-center">
        <Link
          href="/contatti"
          className="editorial-button"
        >
          <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
          {professionalStatus.infoCtaLabel}
        </Link>
      </div>
    </div>
  );
}
