'use client';
import dynamic from 'next/dynamic';
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const MotionSection = dynamic(() => import('@/components/MotionSection'), { ssr: false });

export default function ContattiContent() {
  return (
    <main className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <MotionSection className="text-center mb-16">
        <EnvelopeIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-5xl font-bold text-gray-800">Contatti</h1>
        <p className="mt-3 text-xl text-gray-500">Rimaniamo in contatto per qualsiasi informazione</p>
      </MotionSection>

      {/* Informazioni di Contatto */}
      <MotionSection className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {/* Email */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <EnvelopeIcon className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-2xl font-semibold text-center text-green-800">Email</h3>
          <p className="text-center text-gray-700 mt-2">
            <a href="mailto:sabinascat@live.com" className="text-green-600 hover:underline">
              sabinascat@live.com
            </a>
          </p>
        </div>

        {/* Social */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ChatBubbleLeftRightIcon className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-2xl font-semibold text-center text-green-800">Social</h3>
          <p className="text-center text-gray-700 mt-2">
            <a 
              href="https://www.facebook.com/sabinascattola" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-600 hover:underline"
            >
              Seguimi su Facebook
            </a>
          </p>
        </div>
      </MotionSection>

      {/* Note Informative */}
      <MotionSection className="max-w-4xl mx-auto my-16 bg-green-50 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">Note Informative</h2>

        <div className="space-y-6 text-lg text-gray-700">
          {/* Disponibilità attuale */}
          <div>
            <h3 className="text-xl font-semibold text-green-700">Disponibilità Attuale</h3>
            <p>
              Attualmente, l&apos;attività privata della dott.ssa Sabina Scattola è <strong>temporaneamente sospesa</strong> fino a nuova comunicazione, in seguito all&apos;assunzione come dirigente psicologo presso AULSS 7 Pedemontana.
            </p>
          </div>

          {/* Ruolo attuale */}
          <div>
            <h3 className="text-xl font-semibold text-green-700">Ruolo Attuale</h3>
            <p>
              Dal marzo 2025 ricopre il ruolo di <strong>Dirigente Psicologo – disciplina Psicoterapia presso AULSS 7 Pedemontana</strong>.
            </p>
          </div>

          {/* Principali aree di intervento */}
          <div>
            <h3 className="text-xl font-semibold text-green-700">Aree Principali di Intervento</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Ansia e attacchi di panico</li>
              <li>Disturbo post-traumatico da stress</li>
              <li>Depressione e disturbi dell&apos;umore</li>
              <li>Disturbi di personalità</li>
              <li>Disturbi dello spettro psicotico</li>
              <li>Disturbi neurocognitivi</li>
              <li>Psicopatologie dell’adolescenza</li>
              <li>Difficoltà genitoriali e familiari</li>
              <li>Sostegno in fasi critiche della vita</li>
              <li>Supporto in momenti di crisi personale e lavorativa</li>
            </ul>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}