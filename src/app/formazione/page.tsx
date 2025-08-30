import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Formazione() {
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
            Formazione
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center mb-12">
        <AcademicCapIcon className="mx-auto h-16 w-16 text-brand-primary" aria-hidden="true" />
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-brand-text">
          Formazione e Aggiornamento
        </h1>
        <p className="mt-2 text-gray-600">
          Un percorso continuo per garantire qualità e competenza professionale
        </p>
      </section>

      {/* Introduzione */}
      <section className="max-w-2xl mx-auto mb-12 text-center">
        <p className="text-gray-700">
          La mia formazione professionale è continua e approfondita, volta a garantire il più alto
          standard di professionalità e aggiornamento scientifico.
        </p>
      </section>

      {/* Formazione Accademica e Specializzazioni */}
      <section className="max-w-3xl mx-auto mb-16 rounded-xl border border-brand-accent bg-white p-6 shadow-sm">
        <div className="text-center mb-6">
          <ClipboardDocumentListIcon
            className="h-10 w-10 text-brand-primary mx-auto"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-semibold text-brand-text mt-2">
            Formazione Accademica e Specializzazioni
          </h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>Laurea in Psicologia Clinica e di Comunità.</li>
          <li>
            Specializzazione quadriennale in Psicoterapia Psicodinamica (orientamento
            Psicoanalitico).
          </li>
          <li>
            Iscrizione all&apos;Ordine degli Psicologi del Veneto, n°4157 dal 31 gennaio 2003.
          </li>
          <li>
            Master in Psicoterapia Psicanalitica del bambino, adolescente, adulto, coppia, famiglia
            (2016-2018).
          </li>
          <li>
            Corso di formazione in Valutazione Neuropsicologica del Decadimento cognitivo tenuto
            dalla dr.ssa S. Turati presso CePoSS nel 2018.
          </li>
          <li>
            Training certificato di EMDR con Isabel Fernandez del centro EMDR Europe Association,
            2022.
          </li>
        </ul>
      </section>

      {/* Pubblicazioni */}
      <section className="max-w-3xl mx-auto mb-16 rounded-xl border border-brand-accent bg-white p-6 shadow-sm">
        <div className="text-center mb-6">
          <ClipboardDocumentListIcon
            className="h-10 w-10 text-brand-primary mx-auto"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-semibold text-brand-text mt-2">Pubblicazioni</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>
            <strong>9 giugno 2017:</strong> Pubblicazione libro:{' '}
            <em>RESTITUIRE LA MENTE AL CORPO</em>. Autrice Sabina Scattola. Edizioni EAI.
          </li>
          <li>
            <strong>24 gennaio 2014:</strong> Catalogo <em>IDENTITÀ</em>. Uso del medium pittorico
            in Arteterapia con utenti psichiatrici.
          </li>
          <li>
            <strong>25 settembre 2015:</strong> Catalogo <em>PAESAGGI EMOTIVI</em>. Attività
            artistica-pittorica terapeutica in Arteterapia.
          </li>
          <li>
            <strong>2004:</strong> Articolo &quot;Lavorare con gli uditori di voci&quot;, Psychiatry
            online.
          </li>
          <li>
            <strong>29-30 agosto 2002:</strong> Paper scientifico, Poitiers, Francia,
            sull&apos;integrazione testo-immagini nella comprensione spaziale.
          </li>
        </ul>
      </section>
      {/* Training Personale e Supervisioni */}
      <section className="max-w-3xl mx-auto mb-16 rounded-xl border border-brand-accent bg-white p-6 shadow-sm">
        <div className="text-center mb-6">
          <UserGroupIcon className="h-10 w-10 text-brand-primary mx-auto" aria-hidden="true" />
          <h2 className="text-2xl font-semibold text-brand-text mt-2">
            Training Personale e Supervisioni
          </h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>Training psicoanalitico con analista SPI e IPA.</li>
          <li>Supervisioni cliniche individuali e di gruppo.</li>
        </ul>
      </section>

      {/* Aggiornamenti e Corsi Recenti (2024-2025) */}
      <section className="max-w-3xl mx-auto mb-16 rounded-xl border border-brand-accent bg-white p-6 shadow-sm">
        <div className="text-center mb-6">
          <CalendarDaysIcon className="h-10 w-10 text-brand-primary mx-auto" aria-hidden="true" />
          <h2 className="text-2xl font-semibold text-brand-text mt-2">
            Aggiornamenti e Corsi Recenti (2024-2025)
          </h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>
            <strong>2025:</strong> Seminario sulla qualità del testing psicologico, Istituto di
            Ricerca e Intervento per la Salute di Milano.
          </li>
          <li>
            <strong>2024:</strong> Seminari di Psicoterapia e Psicoanalisi.
          </li>
          <li>
            <strong>2024:</strong> FAMILY CONNECTIONS: Aiuto per familiari di pazienti con DPB,
            NEA-BPD, IRCSS Fatebenefratelli, Brescia.
          </li>
          <li>
            <strong>2024:</strong> Corso sulla perdita e il lutto, contesti applicativi e tecniche
            intervento (FCP, online).
          </li>
          <li>
            <strong>2024:</strong> Congresso Triveneto S.I.R.P., buone pratiche in riabilitazione
            psicosociale, Arzignano.
          </li>
          <li>
            <strong>2024:</strong> Congresso Annuale PSIVE, modelli nella salute mentale, Rovigo.
          </li>
          <li>
            <strong>2024:</strong> Social Skill Training - ULSS 7 Pedemontana.
          </li>
          <li>
            <strong>2024:</strong> Formazione EMDR Livello 1, Verona.
          </li>
          <li>
            <strong>2024:</strong> Home Sweet Home: Dialoghi in tempi pandemici (Psicologia.io).
          </li>
          <li>
            <strong>Partecipazione continua:</strong> Seminari e convegni psicodinamici e
            diagnostici.
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Questa è una selezione rappresentativa degli aggiornamenti e dei corsi recenti.
        </p>
      </section>

      {/* Call to Action */}
      <section className="max-w-2xl mx-auto text-center">
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-full bg-brand-primary bg-[#1F5C4A] px-8 py-3 text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary shadow-md transition"
        >
          Richiedi ulteriori informazioni
        </Link>
      </section>
    </main>
  );
}
