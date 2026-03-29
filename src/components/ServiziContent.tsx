import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { professionalStatus } from '@/config/professionalStatus';

export default function ServiziContent() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 text-base leading-relaxed">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <SparklesIcon aria-hidden="true" className="mx-auto h-16 w-16 text-brand-primary" />
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-brand-text">
          Ambiti di Esperienza Clinica e Professionale
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          Una panoramica sintetica del percorso clinico e professionale maturato nel tempo
        </p>
      </section>

      {/* Introduzione */}
      <section className="max-w-2xl mx-auto mb-16 text-center">
        <p className="text-lg text-brand-primary">
          Questa pagina presenta i principali ambiti di esperienza clinica e professionale della
          Dott.ssa Sabina Scattola, senza indicare servizi privati attualmente attivi.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-16 rounded-xl border border-brand-accent bg-brand-bg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand-text">Nota informativa</h2>
        <p className="mt-3 text-gray-700">{professionalStatus.availabilityMessage}</p>
        <p className="mt-3 text-gray-700">{professionalStatus.institutionalRoleMessage}</p>
        <p className="mt-3 text-gray-700">{professionalStatus.sitePurposeMessage}</p>
      </section>

      {/* Ambiti principali */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Consulenza e valutazione */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <ChatBubbleLeftRightIcon
            aria-hidden="true"
            className="h-10 w-10 text-brand-primary mb-4"
          />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">
            Consulenza e Valutazione Clinica
          </h2>
          <p className="text-gray-700">
            Nel corso dell&apos;attività clinica e istituzionale mi sono occupata di consultazione,
            valutazione e orientamento su problematiche di natura bio-psico-sociale:
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
          <h2 className="text-2xl font-semibold text-brand-text mb-2">
            Esperienza in Psicoterapia e Sostegno
          </h2>
          <p className="text-gray-700">
            L&apos;esperienza professionale ha incluso percorsi di sostegno e psicoterapia
            individuale, con attenzione alle problematiche psicologiche complesse e ai diversi
            strumenti clinici impiegati nel tempo.
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
            Esperienza di supervisione rivolta ad équipe del privato sociale e a professionisti
            interessati ad approfondire la pratica clinica attraverso:
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

      </section>

      {/* Aree di esperienza clinica */}
      <section className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <ExclamationCircleIcon
            aria-hidden="true"
            className="mx-auto h-10 w-10 text-brand-primary"
          />
          <h2 className="text-2xl font-semibold text-brand-text mt-2">
            Aree di Esperienza Clinica
          </h2>
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

      {/* Call to Action */}
      <section className="max-w-2xl mx-auto text-center">
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-full bg-brand-primary bg-[#1F5C4A] px-8 py-3 text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary shadow-md transition"
        >
          {professionalStatus.infoCtaLabel}
        </Link>
      </section>
    </section>
  );
}
