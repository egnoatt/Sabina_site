import { BookOpenIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { professionalStatus } from '@/config/professionalStatus';

export default function ApprofondimentiClinici() {
  return (
    <main className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <BookOpenIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Approfondimenti Clinici</h1>
        <p className="mt-2 text-xl text-gray-500">
          Temi, strumenti e prospettive cliniche presentati in chiave informativa.
        </p>
      </div>

      {/* Contenuto Principale */}
      <section className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
        <h2 className="text-2xl font-semibold text-green-800">Nota editoriale</h2>
        <p>
          Questa sezione raccoglie contenuti di taglio clinico e divulgativo, pensati per presentare
          approcci, strumenti ed esperienza professionale senza configurare un servizio terapeutico
          privato attivo.
        </p>

        <h2 className="text-2xl font-semibold text-green-800">Temi e strumenti clinici</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Colloqui clinici individuali</li>
          <li>Psicoterapia psicodinamica ad orientamento psicoanalitico</li>
          <li>Lettura del linguaggio simbolico e dei vissuti emotivi</li>
          <li>Approfondimento delle dinamiche relazionali</li>
          <li>Strumenti clinici per comprendere ansia, stress e momenti di crisi</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-800">Finalità di questi contenuti</h2>
        <p>
          I contenuti pubblicati hanno finalità esclusivamente informativa e descrivono temi e
          prospettive cliniche maturati nel tempo. Per questo motivo non vanno letti come
          presentazione di trattamenti privati attualmente disponibili.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <a
          href="/contatti"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          <EnvelopeIcon className="h-6 w-6" /> {professionalStatus.infoCtaLabel}
        </a>
      </section>
    </main>
  );
}
