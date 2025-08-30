import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  ExclamationCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ServiziContent() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 text-base leading-relaxed">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <SparklesIcon aria-hidden="true" className="mx-auto h-16 w-16 text-brand-primary" />
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-brand-text">Servizi Offerti</h1>
        <p className="mt-2 text-xl text-gray-600">
          Un percorso personalizzato per il tuo benessere psicologico
        </p>
      </section>

      {/* Introduzione */}
      <section className="max-w-2xl mx-auto mb-16 text-center">
        <p className="text-lg text-brand-primary">
          Ogni servizio è pensato per adattarsi alle tue specifiche esigenze, offrendo sostegno e
          orientamento con professionalità e calore umano.
        </p>
      </section>

      {/* Servizi principali */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Consulenza Psicologica */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <ChatBubbleLeftRightIcon
            aria-hidden="true"
            className="h-10 w-10 text-brand-primary mb-4"
          />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">Consulenza Psicologica</h2>
          <p className="text-gray-700">
            Incontri orientati a comprendere la problematica portata dal singolo o dalla coppia
            (analisi della domanda) e a fornire delle indicazioni trattamenti di natura
            bio-psico-sociale:
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
          <UserIcon aria-hidden="true" className="h-10 w-10 text-brand-primary mb-4" />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">Psicoterapia Individuale</h2>
          <p className="text-gray-700">
            Percorso di cura mirato a comprendere e affrontare problematiche psicologiche profonde
            attraverso un approccio personalizzato e tecniche specifiche.
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
          <ClipboardDocumentCheckIcon
            aria-hidden="true"
            className="h-10 w-10 text-brand-primary mb-4"
          />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">Supervisione Clinica</h2>
          <p className="text-gray-700">
            Rivolta ad equipe del Privato Sociale e a psicologi-psicoterapeuti che desiderano
            approfondire e migliorare la propria pratica clinica, attraverso:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Supervisione individuale</li>
            <li>Supervisione di gruppo per équipe residenziali</li>
            <li>Analisi di casi clinici</li>
            <li>
              Supervisione per singole figure professionali operanti nel sociale (educatori,
              coordinatori, ecc.)
            </li>
          </ul>
        </div>

        {/* Psicoterapia Online */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <VideoCameraIcon aria-hidden="true" className="h-10 w-10 text-brand-primary mb-4" />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">Psicoterapia Online</h2>
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
          <BuildingOfficeIcon aria-hidden="true" className="h-10 w-10 text-brand-primary mb-4" />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">
            Psicoterapia in presenza (Intramoenia)
          </h2>
          <p className="text-gray-700">
            L&apos;attività in libera professione sarà riattivata in modalità intramoenia presso le
            strutture dell&apos;AULSS 7 Pedemontana entro il 2025. Ulteriori informazioni saranno
            disponibili nei prossimi mesi.
          </p>
        </div>
      </section>
      {/* Testimonianza */}
      <section className="max-w-3xl mx-auto mb-16 bg-brand-bg p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <UserGroupIcon aria-hidden="true" className="mx-auto h-10 w-10 text-brand-primary" />
          <h2 className="text-2xl font-semibold text-brand-text mt-2">Cosa dicono i pazienti</h2>
        </div>
        <blockquote className="italic text-center text-gray-700">
          &quot;Il percorso terapeutico con la Dott.ssa Scattola è stato fondamentale per ritrovare
          equilibrio e serenità. Mi sono sentita sempre ascoltata e supportata con grande
          professionalità e calore umano.&quot;
        </blockquote>
        <p className="mt-4 text-center font-semibold text-brand-primary">— Testimonianza anonima</p>
      </section>

      {/* Disturbi trattati */}
      <section className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <ExclamationCircleIcon
            aria-hidden="true"
            className="mx-auto h-10 w-10 text-brand-primary"
          />
          <h2 className="text-2xl font-semibold text-brand-text mt-2">Disturbi Trattati</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>Ansia e attacchi di panico</li>
          <li>Disturbo post-traumatico da stress</li>
          <li>Depressione e disturbi dell&apos;umore</li>
          <li>Disturbi di personalità</li>
          <li>Disturbi dello spettro psicotico</li>
          <li>Disturbi neurocognitivi</li>
          <li>Psicopatologie dell&apos;adolescenza</li>
          <li>Difficoltà genitoriali e familiari</li>
          <li>Sostegno in fasi critiche della vita</li>
          <li>Supporto in momenti di crisi personale e lavorativa</li>
        </ul>
      </section>

      {/* Modalità e Costi */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="text-center mb-8">
          <CreditCardIcon
            aria-hidden="true"
            className="mx-auto h-10 w-10 text-brand-primary mb-2"
          />
          <h2 className="text-2xl font-semibold text-brand-text">Modalità e Costi</h2>
        </div>
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            <strong>Durata sedute:</strong> circa 60 minuti.
          </p>
          <p>
            <strong>Metodi di pagamento accettati:</strong> Carta di credito, contanti, pagamenti
            contactless.
          </p>
          <p>
            Per maggiori dettagli sui costi e sulle modalità, ti invito a contattarmi direttamente
            tramite email o telefono.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-2xl mx-auto text-center">
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-full bg-brand-primary bg-[#1F5C4A] px-8 py-3 text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary shadow-md transition"
        >
          Richiedi maggiori informazioni
        </Link>
      </section>
    </section>
  );
}
