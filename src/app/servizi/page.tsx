import React from 'react';
import { 
  SparklesIcon, 
  ChatBubbleLeftRightIcon, 
  VideoCameraIcon, 
  CreditCardIcon, 
  BuildingOfficeIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  ExclamationCircleIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function Servizi() {
  return (
    <main className="container mx-auto py-12 px-4">

      {/* Hero Section */}
      <div className="text-center mb-12">
        <SparklesIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Servizi Offerti</h1>
        <p className="mt-2 text-xl text-gray-500">
          Un percorso personalizzato per il tuo benessere psicologico
        </p>
      </div>

      {/* Introduzione */}
      <section className="max-w-2xl mx-auto mb-16 text-center">
        <p className="text-lg text-gray-700">
          Ogni servizio è pensato per adattarsi alle tue specifiche esigenze, offrendo sostegno e orientamento con professionalità e calore umano.
        </p>
      </section>

      {/* Servizi principali */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

        {/* Consulenza Psicologica */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <ChatBubbleLeftRightIcon className="h-10 w-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Consulenza Psicologica</h2>
          <p className="text-gray-700">
            Incontri orientati a comprendere la problematica portata dal singolo o dalla coppia (analisi della domanda) e a fornire delle indicazioni trattamenti di natura bio-psico-sociale:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Colloqui conoscitivi</li>
            <li>Valutazione psicodiagnostica</li>
            <li>Valutazione neuropsicologica del decadimento cognitivo per adulti e anziani</li>
            <li>Consulenza individuale</li>
            <li>Consulenza per la coppia</li>
            <li>Consulenza per la famiglia</li>
            <li>Consulenza per la genitorialità</li>
            <li>Intervento psicoeducazionale</li>
          </ul>
        </div>

        {/* Psicoterapia Individuale */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <UserIcon className="h-10 w-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Psicoterapia Individuale</h2>
          <p className="text-gray-700">
            Percorso di cura mirato a comprendere e affrontare problematiche psicologiche profonde attraverso un approccio personalizzato e tecniche specifiche.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Psicoterapia di sostegno psicologico individuale</li>
            <li>Psicoterapia individuale ad orientamento psicodinamico</li>
            <li>EMDR per il superamento di traumi</li>
            <li>Mindfulness per disturbi d’ansia e depressivi</li>
            <li>Riabilitazione psichiatrica</li>
            <li>Stimolazione per il decadimento cognitivo (adulti e anziani)</li>
          </ul>
        </div>

        {/* Supervisione Clinica */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <ClipboardDocumentCheckIcon className="h-10 w-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Supervisione Clinica</h2>
          <p className="text-gray-700">
            Rivolta ad equipe del Privato Sociale e a psicologi-psicoterapeuti che desiderano approfondire e migliorare la propria pratica clinica, attraverso:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Supervisione individuale</li>
            <li>Supervisione di gruppo per équipe residenziali</li>
            <li>Analisi di casi clinici</li>
            <li>Supervisione per singole figure professionali operanti nel sociale (educatori, coordinatori, ecc.)</li>
          </ul>
        </div>

        {/* Psicoterapia Online */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <VideoCameraIcon className="h-10 w-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Psicoterapia Online</h2>
          <p className="text-gray-700">
            Sessioni individuali a distanza per garantire supporto e continuità ovunque ti trovi.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Piattaforme: Zoom, Google Meet, FaceTime</li>
            <li>Massima flessibilità e comfort</li>
            <li>Privacy e riservatezza garantite</li>
          </ul>
        </div>

        {/* Psicoterapia in presenza (Intramoenia) */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg md:col-span-2">
          <BuildingOfficeIcon className="h-10 w-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Psicoterapia in presenza (Intramoenia)</h2>
          <p className="text-gray-700">
            L&apos;attività in libera professione sarà riattivata in modalità intramoenia presso le strutture dell&apos;AULSS 7 Pedemontana entro il 2025. Ulteriori informazioni saranno disponibili nei prossimi mesi.
          </p>
        </div>

      </section>

      {/* Testimonianza */}
      <section className="max-w-3xl mx-auto mb-16 bg-green-50 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <UserGroupIcon className="mx-auto h-10 w-10 text-green-600" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Cosa dicono i pazienti</h2>
        </div>
        <blockquote className="italic text-center text-gray-700">
          &quot;Il percorso terapeutico con la Dott.ssa Scattola è stato fondamentale per ritrovare equilibrio e serenità. Mi sono sentita sempre ascoltata e supportata con grande professionalità e calore umano.&quot;
        </blockquote>
        <p className="mt-4 text-center font-semibold text-green-700">— Testimonianza anonima</p>
      </section>

      {/* Disturbi trattati */}
      <section className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <ExclamationCircleIcon className="mx-auto h-10 w-10 text-green-600" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Disturbi Trattati</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
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
      </section>

      {/* Modalità e Costi */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="text-center mb-8">
          <CreditCardIcon className="mx-auto h-10 w-10 text-green-600 mb-2" />
          <h2 className="text-2xl font-semibold text-green-800">Modalità e Costi</h2>
        </div>
        <div className="text-lg text-gray-700 space-y-4">
          <p><strong>Durata sedute:</strong> circa 60 minuti.</p>
          <p><strong>Metodi di pagamento accettati:</strong> Carta di credito, contanti, pagamenti contactless.</p>
          <p>
            Per maggiori dettagli sui costi e sulle modalità, ti invito a contattarmi direttamente tramite email o telefono.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-2xl mx-auto text-center">
        <a
          href="/contatti"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow transition-colors duration-300"
        >
          Richiedi maggiori informazioni
        </a>
      </section>

    </main>
  );
}