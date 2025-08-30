import Link from 'next/link';
import { UserCircleIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export const metadata = {
  title: 'Chi Sono | Sabina Scattola - Psicologa e Psicoterapeuta',
  description:
    'Profilo professionale della Dott.ssa Sabina Scattola: formazione, esperienza clinica, ruoli attuali e filosofia di lavoro in psicoterapia psicodinamica.',
};

export default function ChiSono() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sabinascattola.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Chi sono',
        item: 'https://sabinascattola.com/chi-sono',
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
            Chi sono
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="text-center mb-10">
        <UserCircleIcon className="mx-auto h-16 w-16 text-brand-primary" aria-hidden="true" />
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-brand-text">Chi Sono</h1>
        <p className="mt-2 text-gray-700">
          Sono la Dott.ssa <strong>Sabina Scattola</strong>, psicologa e psicoterapeuta ad
          orientamento psicodinamico. Lavoro con attenzione alla storia della persona e alla
          relazione terapeutica, per costruire percorsi rispettosi e realmente utili.
        </p>
      </section>

      {/* Ruoli Attuali */}
      <section className="mb-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-brand-accent bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-brand-text">Ruolo corrente</h3>
          <p className="mt-2 text-gray-700">Dirigente Psicologo – AULSS 7 Pedemontana</p>
        </div>
        <div className="rounded-xl border border-brand-accent bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-brand-text">Associazione</h3>
          <p className="mt-2 text-gray-700">Vicepresidente “La Recherche”</p>
        </div>
      </section>

      {/* Esperienza */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">Esperienza</h2>
        <p className="text-gray-700">
          Oltre 20 anni di attività clinica, con incarichi in AULSS 7 e AULSS 8. Dal 2003 al 2025 ho
          seguito progetti di valutazione neuropsicologica, sostegno ai caregiver e psicoterapia
          individuale, ricoprendo responsabilità su strutture residenziali psichiatriche.
        </p>
      </section>

      {/* Formazione */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">
          Formazione Accademica e Professionale
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
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
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">Filosofia e Metodo</h2>
        <p className="text-gray-700">
          Credo nella centralità dell’ascolto e dell’alleanza terapeutica. Lavoro nel qui ed ora ma
          con attenzione alle dinamiche storiche e relazionali. Il controtransfert diventa uno
          strumento per comprendere in profondità i vissuti, mentre il percorso terapeutico si fonda
          su obiettivi chiari e condivisi.
        </p>
      </section>

      {/* A chi mi rivolgo */}
      <section className="mb-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">A chi mi rivolgo</h2>
        <p className="text-gray-700">
          Persone pre-adolescenti, adolescenti, adulti e anziani. Supporto ai caregiver e percorsi
          rivolti a professionisti in periodi di stress o cambiamento. Ricevo presso lo studio di
          Mussolente (VI) e online tramite Zoom, Google Meet e FaceTime.
        </p>
      </section>

      {/* Citazione */}
      <blockquote className="mt-6 text-brand-primary">
        &quot;La psicoterapia è un viaggio di scoperta e crescita personale.&quot;
      </blockquote>

      {/* CTA finale */}
      <div className="mt-10 text-center">
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-full bg-brand-primary bg-[#1F5C4A] px-8 py-3 text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary shadow-md transition"
        >
          <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
          Contattami per maggiori informazioni
        </Link>
      </div>
    </main>
  );
}
