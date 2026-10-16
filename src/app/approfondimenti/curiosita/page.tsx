export const metadata = {
  title: 'Curiosità Psicologiche | Sabina Scattola',
  description:
    'Approfondimenti divulgativi e spunti informativi su psicologia, emozioni e relazione d’aiuto, a cura della Dott.ssa Sabina Scattola.',
};

import { LightBulbIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { professionalStatus } from '@/config/professionalStatus';

export default function CuriositaPsicologiche() {
  return (
    <div className="editorial-page">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline focus-visible:underline underline-offset-4">
              Home
            </Link>
          </li>
          <li>/</li>
          <li aria-current="page" className="font-semibold text-brand-text">
            Curiosità psicologiche
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <LightBulbIcon className="mx-auto h-16 w-16 text-brand-primary" aria-hidden="true" />
        <h1 className="editorial-title mt-4">Curiosità Psicologiche</h1>
        <p className="mt-2 text-xl text-slate-600">
          Approfondimenti divulgativi per orientarsi tra mente, emozioni e linguaggio clinico.
        </p>
      </div>

      {/* Contenuto Principale */}
      <section className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
        <h2 className="editorial-heading">
          Cosa sapere in termini generali
        </h2>
        <p>
          Quando si parla di percorso clinico o psicoterapeutico è utile ricordare che ogni
          esperienza è diversa e richiede tempi, obiettivi e contesti valutati caso per caso.
          Questa pagina offre solo elementi orientativi e informativi.
        </p>

        <h2 className="editorial-heading">Alcuni punti utili per orientarsi</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Chiarire bisogni, domande e obiettivi aiuta a leggere meglio il proprio momento.</li>
          <li>Comprendere il contesto professionale e istituzionale è parte dell’orientamento.</li>
          <li>Il lavoro clinico richiede tempo, continuità e attenzione ai cambiamenti progressivi.</li>
          <li>Vulnerabilità e cambiamento possono far parte dei processi di cura e sostegno.</li>
        </ul>

        <h2 className="editorial-heading">Tempi e obiettivi</h2>
        <p>
          Durata, intensità e obiettivi di un percorso clinico possono variare in modo rilevante.
          Per questo i contenuti qui pubblicati non descrivono un servizio attualmente attivo, ma
          offrono una cornice divulgativa e professionale.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <Link
          href="/contatti"
          className="editorial-button"
        >
          <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
          {professionalStatus.infoCtaLabel}
        </Link>
      </section>
    </div>
  );
}
