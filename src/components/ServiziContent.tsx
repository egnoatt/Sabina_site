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
    <section className="mx-auto max-w-5xl px-6 py-12 text-base leading-relaxed md:py-16">
      {/* Hero Section */}
      <section className="mb-14 text-center">
        <SparklesIcon aria-hidden="true" className="mx-auto h-14 w-14 text-brand-primary" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Ambiti professionali
        </p>
        <h1 className="mt-4 text-3xl font-bold text-brand-text md:text-4xl">
          Ambiti di esperienza clinica
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
          Una panoramica sintetica del percorso clinico e professionale maturato nel tempo
        </p>
      </section>

      {/* Introduzione */}
      <section className="mx-auto mb-14 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 text-center shadow-sm">
        <p className="text-base leading-relaxed text-slate-700">
          Questa pagina presenta i principali ambiti di esperienza clinica e professionale della
          Dott.ssa Sabina Scattola, senza indicare servizi privati attualmente attivi.
        </p>
      </section>

      <section className="mx-auto mb-16 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Nota istituzionale
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-text">Stato attuale</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {professionalStatus.availabilityMessage}
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {professionalStatus.institutionalRoleMessage}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          {professionalStatus.sitePurposeMessage}
        </p>
      </section>

      {/* Ambiti principali */}
      <section className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Consulenza e valutazione */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm md:p-7">
          <ChatBubbleLeftRightIcon
            aria-hidden="true"
            className="mb-4 h-10 w-10 text-brand-primary"
          />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">
            Consulenza e Valutazione Clinica
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Nel corso dell&apos;attività clinica e istituzionale mi sono occupata di consultazione,
            valutazione e orientamento su problematiche di natura bio-psico-sociale:
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600 marker:text-slate-400">
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
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm md:p-7">
          <UserIcon aria-hidden="true" className="mb-4 h-10 w-10 text-brand-primary" />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">
            Esperienza in Psicoterapia e Sostegno
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            L&apos;esperienza professionale ha incluso percorsi di sostegno e psicoterapia
            individuale, con attenzione alle problematiche psicologiche complesse e ai diversi
            strumenti clinici impiegati nel tempo.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600 marker:text-slate-400">
            <li>Psicoterapia di sostegno psicologico individuale</li>
            <li>Psicoterapia individuale ad orientamento psicodinamico</li>
            <li>EMDR per il superamento di traumi</li>
            <li>Mindfulness per disturbi d’ansia e depressivi</li>
            <li>Riabilitazione psichiatrica</li>
            <li>Stimolazione per il decadimento cognitivo (adulti e anziani)</li>
          </ul>
        </div>

        {/* Supervisione Clinica */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm md:col-span-2 md:p-7">
          <ClipboardDocumentCheckIcon
            aria-hidden="true"
            className="mb-4 h-10 w-10 text-brand-primary"
          />
          <h2 className="text-2xl font-semibold text-brand-text mb-2">Supervisione Clinica</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Esperienza di supervisione rivolta ad équipe del privato sociale e a professionisti
            interessati ad approfondire la pratica clinica attraverso:
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600 marker:text-slate-400 md:grid md:grid-cols-2 md:gap-x-6">
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
      <section className="mx-auto mb-16 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="text-center mb-6">
          <ExclamationCircleIcon
            aria-hidden="true"
            className="mx-auto h-10 w-10 text-brand-primary"
          />
          <h2 className="text-2xl font-semibold text-brand-text mt-2">
            Aree di Esperienza Clinica
          </h2>
        </div>
        <ul className="grid gap-3 text-base leading-relaxed text-slate-700 md:grid-cols-2">
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
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-brand-text shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
        >
          {professionalStatus.infoCtaLabel}
        </Link>
      </section>
    </section>
  );
}
