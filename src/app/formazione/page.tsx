"use client";

import dynamic from 'next/dynamic';
import { 
  AcademicCapIcon, 
  ClipboardDocumentListIcon, 
  UserGroupIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

const MotionSection = dynamic(() => import('@/components/MotionSection'), { ssr: false });

export default function Formazione() {
  return (
    <main className="container mx-auto py-12 px-4">

      {/* Hero Section */}
      <MotionSection className="text-center mb-12">
        <AcademicCapIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Formazione e Aggiornamento</h1>
        <p className="mt-2 text-xl text-gray-500">
          Un percorso continuo per garantire qualità e competenza professionale
        </p>
      </MotionSection>

      {/* Introduzione */}
      <MotionSection className="max-w-2xl mx-auto mb-12 text-center" delay={0.2}>
        <p className="text-lg text-gray-700">
          La mia formazione professionale è continua e approfondita, volta a garantire il più alto standard di professionalità e aggiornamento scientifico.
        </p>
      </MotionSection>

      {/* Formazione Accademica e Specializzazioni */}
      <MotionSection className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg" delay={0.4}>
        <div className="text-center mb-6">
          <ClipboardDocumentListIcon className="h-10 w-10 text-green-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Formazione Accademica e Specializzazioni</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>Laurea in Psicologia Clinica e di Comunità.</li>
          <li>Specializzazione quadriennale in Psicoterapia Psicodinamica (orientamento Psicoanalitico).</li>
          <li>Iscrizione all&apos;Ordine degli Psicologi del Veneto, n°4157 dal 31 gennaio 2003.</li>
          <li>Master in Psicoterapia Psicanalitica del bambino, adolescente, adulto, coppia, famiglia (2016-2018).</li>
          <li>Corso di formazione in Valutazione Neuropsicologica del Decadimento cognitivo tenuto dalla dr.ssa S. Turati presso CePoSS nel 2018.</li>
          <li>Training certificato di EMDR con Isabel Fernandez del centro EMDR Europe Association, 2022.</li>
        </ul>
      </MotionSection>

      {/* Pubblicazioni */}
      <MotionSection className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg" delay={0.6}>
        <div className="text-center mb-6">
          <ClipboardDocumentListIcon className="h-10 w-10 text-green-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Pubblicazioni</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li><strong>9 giugno 2017:</strong> Pubblicazione libro: <em>RESTITUIRE LA MENTE AL CORPO</em>. Autrice Sabina Scattola. Edizioni EAI.</li>
          <li><strong>24 gennaio 2014:</strong> Catalogo <em>IDENTITÀ</em>. Uso del medium pittorico in Arteterapia con utenti psichiatrici.</li>
          <li><strong>25 settembre 2015:</strong> Catalogo <em>PAESAGGI EMOTIVI</em>. Attività artistica-pittorica terapeutica in Arteterapia.</li>
          <li><strong>2004:</strong> Articolo &quot;Lavorare con gli uditori di voci&quot;, Psychiatry online.</li>
          <li><strong>29-30 agosto 2002:</strong> Paper scientifico, Poitiers, Francia, sull&apos;integrazione testo-immagini nella comprensione spaziale.</li>
        </ul>
      </MotionSection>
           {/* Training Personale e Supervisioni */}
           <MotionSection className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg" delay={0.8}>
        <div className="text-center mb-6">
          <UserGroupIcon className="h-10 w-10 text-green-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Training Personale e Supervisioni</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>Training psicoanalitico con analista SPI e IPA.</li>
          <li>Supervisioni cliniche individuali e di gruppo.</li>
        </ul>
      </MotionSection>

      {/* Aggiornamenti e Corsi Recenti (2024-2025) */}
      <MotionSection className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg" delay={1.0}>
        <div className="text-center mb-6">
          <CalendarDaysIcon className="h-10 w-10 text-green-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Aggiornamenti e Corsi Recenti (2024-2025)</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li><strong>2025:</strong> Seminario sulla qualità del testing psicologico, Istituto di Ricerca e Intervento per la Salute di Milano.</li>
          <li><strong>2024:</strong> Seminari di Psicoterapia e Psicoanalisi.</li>
          <li><strong>2024:</strong> FAMILY CONNECTIONS: Aiuto per familiari di pazienti con DPB, NEA-BPD, IRCSS Fatebenefratelli, Brescia.</li>
          <li><strong>2024:</strong> Corso sulla perdita e il lutto, contesti applicativi e tecniche intervento (FCP, online).</li>
          <li><strong>2024:</strong> Congresso Triveneto S.I.R.P., buone pratiche in riabilitazione psicosociale, Arzignano.</li>
          <li><strong>2024:</strong> Congresso Annuale PSIVE, modelli nella salute mentale, Rovigo.</li>
          <li><strong>2024:</strong> Social Skill Training - ULSS 7 Pedemontana.</li>
          <li><strong>2024:</strong> Formazione EMDR Livello 1, Verona.</li>
          <li><strong>2024:</strong> Home Sweet Home: Dialoghi in tempi pandemici (Psicologia.io).</li>
          <li><strong>Partecipazione continua:</strong> Seminari e convegni psicodinamici e diagnostici.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Questa è una selezione rappresentativa degli aggiornamenti e dei corsi recenti.
        </p>
      </MotionSection>

      {/* Call to Action */}
      <MotionSection className="max-w-2xl mx-auto text-center" delay={1.2}>
        <a
          href="/contatti"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow transition-colors duration-300"
        >
          Richiedi ulteriori informazioni
        </a>
      </MotionSection>

    </main>
  );
}