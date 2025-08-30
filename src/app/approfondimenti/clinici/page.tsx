import React from 'react';
import { BookOpenIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Approfondimenti Clinici | Sabina Scattola Psicologa e Psicoterapeuta',
  description:
    'Scopri le tecniche terapeutiche e le esperienze cliniche della Dott.ssa Sabina Scattola per migliorare il tuo benessere psicologico.',
};

export default function ApprofondimentiClinici() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-base leading-relaxed">
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
                item: 'https://sabinascattola.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Approfondimenti clinici',
                item: 'https://sabinascattola.com/approfondimenti/clinici',
              },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <div className="text-center mb-12">
        <BookOpenIcon className="mx-auto h-16 w-16 text-brand-primary" aria-hidden="true" />
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-brand-text">
          Approfondimenti Clinici
        </h1>
        <p className="mt-2 text-xl text-gray-500">
          Esplora tecniche ed esperienze per il benessere psicologico.
        </p>
      </div>

      {/* Contenuto Principale */}
      <section className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
        <h2 className="text-2xl font-semibold text-brand-text">
          Esperienza di un paziente anonimo
        </h2>
        <p>
          &quot;Inizialmente ero scettico sull&apos;efficacia della terapia, ma ho deciso comunque
          di provare. Nel corso delle sedute ho trovato uno spazio in cui mi sono sentito ascoltato
          e compreso, senza alcun tipo di giudizio. Questo mi ha permesso di affrontare problemi che
          da solo non riuscivo a gestire.&quot;
        </p>

        <h2 className="text-2xl font-semibold text-brand-text">Tecniche terapeutiche utilizzate</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Colloqui clinici individuali</li>
          <li>Psicoterapia psicodinamica orientata alla psicoanalisi</li>
          <li>Analisi dei sogni e del linguaggio simbolico</li>
          <li>Tecniche di esplorazione profonda delle emozioni e dei vissuti personali</li>
          <li>Supporto nella gestione dello stress e dell&apos;ansia quotidiana</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-text">
          Benefici ottenibili dalla terapia
        </h2>
        <p>
          Tra i principali benefici della psicoterapia clinica vi sono un miglioramento
          significativo della qualità della vita, una maggiore consapevolezza di sé e delle proprie
          emozioni, e l&apos;acquisizione di strumenti utili per affrontare le difficoltà quotidiane
          con maggiore equilibrio e serenità.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary shadow transition"
        >
          <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
          Contattami per un incontro
        </Link>
      </section>
    </main>
  );
}
