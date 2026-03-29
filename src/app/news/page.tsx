import type { Metadata } from 'next';
import { professionalStatus } from '@/config/professionalStatus';

export const metadata: Metadata = {
  title: 'Aggiornamenti | Sabina Scattola',
  description:
    'Aggiornamenti professionali e informativi relativi al profilo della Dott.ssa Sabina Scattola.',
};

import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const newsData = [
  {
    id: 1,
    titolo: 'Assunzione presso AULSS 7 Pedemontana',
    data: '10 marzo 2025',
    descrizione: professionalStatus.institutionalRoleMessage,
  },
  {
    id: 2,
    titolo: 'Formazione specialistica completata',
    data: '20 febbraio 2025',
    descrizione:
      'Ho concluso con successo il ciclo formativo sulla valutazione diagnostica basata sul Manuale Diagnostico Psicodinamico (PDM-2).',
  },
  {
    id: 3,
    titolo: 'Lancio del nuovo sito web',
    data: '15 aprile 2025',
    descrizione:
      'È online il sito professionale e informativo, con contenuti dedicati a profilo, formazione e approfondimenti.',
  },
];

export default function News() {
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
            News
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <ChatBubbleOvalLeftEllipsisIcon className="mx-auto h-16 w-16 text-brand-primary" />
        <h1 className="mt-4 text-4xl font-bold text-brand-text">News</h1>
        <p className="mt-2 text-xl text-gray-500">Aggiornamenti professionali e informativi</p>
      </div>

      {/* Lista delle News */}
      <section className="max-w-3xl mx-auto space-y-8">
        {newsData.map((news) => (
          <article key={news.id} className="bg-gray-50 p-6 rounded-xl shadow-md">
            <div className="mb-2 text-sm text-gray-500">{news.data}</div>
            <h2 className="text-2xl font-semibold text-brand-text mb-2">{news.titolo}</h2>
            <p className="text-lg text-gray-700">{news.descrizione}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
