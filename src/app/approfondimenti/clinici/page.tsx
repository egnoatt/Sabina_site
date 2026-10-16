import React from 'react';
import { BookOpenIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { professionalStatus } from '@/config/professionalStatus';

export const metadata = {
  title: 'Approfondimenti clinici | Sabina Scattola',
  description:
    'Contenuti informativi su temi, strumenti e prospettive cliniche della Dott.ssa Sabina Scattola.',
};

export default function ApprofondimentiClinici() {
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
            Approfondimenti clinici
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.sabinascattola.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Approfondimenti clinici',
                item: 'https://www.sabinascattola.com/approfondimenti/clinici',
              },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <div className="text-center mb-12">
        <BookOpenIcon className="mx-auto h-16 w-16 text-brand-primary" aria-hidden="true" />
        <h1 className="editorial-title mt-4">
          Approfondimenti Clinici
        </h1>
        <p className="mt-2 text-xl text-slate-600">
          Temi, strumenti e prospettive cliniche presentati in chiave informativa.
        </p>
      </div>

      {/* Contenuto Principale */}
      <section className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
        <h2 className="editorial-heading">Nota editoriale</h2>
        <p>
          Questa sezione raccoglie contenuti di taglio clinico e divulgativo, pensati per
          presentare approcci, strumenti ed esperienza professionale senza configurare un servizio
          terapeutico privato attivo.
        </p>

        <h2 className="editorial-heading">Temi e strumenti clinici</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Colloqui clinici individuali</li>
          <li>Psicoterapia psicodinamica ad orientamento psicoanalitico</li>
          <li>Lettura del linguaggio simbolico e dei vissuti emotivi</li>
          <li>Approfondimento delle dinamiche relazionali</li>
          <li>Strumenti clinici per comprendere ansia, stress e momenti di crisi</li>
        </ul>

        <h2 className="editorial-heading">Finalità di questi contenuti</h2>
        <p>
          I contenuti pubblicati hanno finalità esclusivamente informativa e descrivono temi e
          prospettive cliniche maturati nel tempo. Per questo motivo non vanno letti come
          presentazione di trattamenti privati attualmente disponibili.
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
