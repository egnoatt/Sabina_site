import React from 'react';
import { BookOpenIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "Approfondimenti Clinici | Sabina Scattola Psicologa e Psicoterapeuta",
  description: "Scopri le tecniche terapeutiche e le esperienze cliniche della Dott.ssa Sabina Scattola per migliorare il tuo benessere psicologico.",
};

export default function ApprofondimentiClinici() {
  return (
    <main className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <BookOpenIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Approfondimenti Clinici</h1>
        <p className="mt-2 text-xl text-gray-500">
          Esplora tecniche ed esperienze per il benessere psicologico.
        </p>
      </div>

      {/* Contenuto Principale */}
      <section className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
        <h2 className="text-2xl font-semibold text-green-800">Esperienza di un paziente anonimo</h2>
        <p>
          &quot;Inizialmente ero scettico sull&apos;efficacia della terapia, ma ho deciso comunque di provare. Nel corso delle sedute ho trovato uno spazio in cui mi sono sentito ascoltato e compreso, senza alcun tipo di giudizio. Questo mi ha permesso di affrontare problemi che da solo non riuscivo a gestire.&quot;
        </p>

        <h2 className="text-2xl font-semibold text-green-800">Tecniche terapeutiche utilizzate</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Colloqui clinici individuali</li>
          <li>Psicoterapia psicodinamica orientata alla psicoanalisi</li>
          <li>Analisi dei sogni e del linguaggio simbolico</li>
          <li>Tecniche di esplorazione profonda delle emozioni e dei vissuti personali</li>
          <li>Supporto nella gestione dello stress e dell&apos;ansia quotidiana</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-800">Benefici ottenibili dalla terapia</h2>
        <p>
          Tra i principali benefici della psicoterapia clinica vi sono un miglioramento significativo della qualità della vita, una maggiore consapevolezza di sé e delle proprie emozioni, e l&apos;acquisizione di strumenti utili per affrontare le difficoltà quotidiane con maggiore equilibrio e serenità.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <a
          href="/contatti"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          <EnvelopeIcon className="h-6 w-6" /> Contattami per un incontro
        </a>
      </section>
    </main>
  );
}