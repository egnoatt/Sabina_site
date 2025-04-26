import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News | Sabina Scattola Psicologa e Psicoterapeuta",
  description: "Ultime notizie, aggiornamenti professionali e novità sulla psicoterapia e sulla psicologia dalla Dott.ssa Sabina Scattola."
};

import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const newsData = [
  {
    id: 1,
    titolo: 'Assunzione presso AULSS 7 Pedemontana',
    data: '10 marzo 2025',
    descrizione: 'Sono lieta di annunciare l\'inizio della mia attività come dirigente Psicologo-Psicoterapeuta presso l\'AULSS 7 Pedemontana.',
  },
  {
    id: 2,
    titolo: 'Formazione specialistica completata',
    data: '20 febbraio 2025',
    descrizione: 'Ho concluso con successo il ciclo formativo sulla valutazione diagnostica basata sul Manuale Diagnostico Psicodinamico (PDM-2).',
  },
  {
    id: 3,
    titolo: 'Lancio del nuovo sito web',
    data: '15 aprile 2025',
    descrizione: 'È finalmente online il nuovo sito web dello studio, con informazioni dettagliate sui servizi offerti e modalità di contatto.',
  },
];

export default function News() {
  return (
    <main className="container mx-auto py-12 px-4">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <ChatBubbleOvalLeftEllipsisIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">News</h1>
        <p className="mt-2 text-xl text-gray-500">Novità e aggiornamenti dallo studio</p>
      </div>

      {/* Lista delle News */}
      <section className="max-w-3xl mx-auto space-y-8">
        {newsData.map(news => (
          <article key={news.id} className="bg-gray-50 p-6 rounded-xl shadow-md">
            <div className="mb-2 text-sm text-gray-500">{news.data}</div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">{news.titolo}</h2>
            <p className="text-lg text-gray-700">{news.descrizione}</p>
          </article>
        ))}
      </section>

    </main>
  );
}