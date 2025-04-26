import { 
  AcademicCapIcon, 
  ClipboardDocumentListIcon, 
  UserGroupIcon,
  CalendarDaysIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';
export const metadata = {
  title: "Formazione | Sabina Scattola Psicologa e Psicoterapeuta",
  description: "Formazione, aggiornamento professionale e specializzazione della Dott.ssa Sabina Scattola in psicoterapia psicodinamica e valutazione diagnostica."
};

export default function Formazione() {
  return (
    <main className="container mx-auto py-12 px-4">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <AcademicCapIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Formazione e Aggiornamento</h1>
        <p className="mt-2 text-xl text-gray-500">
          Un percorso continuo per garantire qualità e competenza professionale
        </p>
      </div>

      {/* Introduzione */}
      <section className="max-w-2xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700">
          La mia formazione professionale è continua e approfondita, volta a garantire il più alto standard di professionalità e aggiornamento scientifico.
        </p>
      </section>

      {/* Formazione Accademica e Specializzazioni */}
      <section className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <ClipboardDocumentListIcon className="h-10 w-10 text-green-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Formazione Accademica e Specializzazioni</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>Laurea in Psicologia Clinica e di Comunità.</li>
          <li>Specializzazione quadriennale in Psicoterapia Psicodinamica (orientamento Psicoanalitico).</li>
          <li>Iscrizione all'Ordine degli Psicologi del Veneto, n°4157 dal 31 gennaio 2003.</li>
          <li> Master in Psicoterapia Psicanalitica del bambino, adolescente, adulto, coppia, famiglia (2016 -2018).</li>
          <li>Corso di formazione in Valutazione Neuropsicologica del Decadimento cognitivo tenuto dalla dr.ssa S. Turati - Psicologa e Neuropsicologa di Milano presso CePoSS nel 2018.</li>
          <li>Training certificato di EMDR con Isabel Fernandez del centro di ricerche e studi in psicotraumatologia e dell’EMDR Europe Association 2022.</li>
        </ul>
      </section>

      {/* Pubblicazioni */}
      <section className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <ClipboardDocumentListIcon className="h-10 w-10 text-green-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Pubblicazioni</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li><strong>9 giugno 2017:</strong> Pubblicazione del libro: <em>RESTITUIRE LA MENTE AL CORPO</em>. Autrice Sabina Scattola. Edizioni Accademiche Italiane (EAI).</li>
          <li><strong>24 gennaio 2014:</strong> Pubblicazione catalogo <em>IDENTITÀ</em>. Nascoste, mascherate, rivelate tra sogno e realtà. Esposizione sull’uso del medium pittorico come mediatore terapeutico in un gruppo di Arteterapia con utenti psichiatrici di comunità.</li>
          <li><strong>25 settembre 2015:</strong> Pubblicazione catalogo <em>PAESAGGI EMOTIVI</em>. Esposizione della prosecuzione del percorso di attività artistica-pittorica a mediazione terapeutica in un gruppo di Arteterapia con utenti psichiatrici di comunità.</li>
          <li><strong>2004:</strong> Pubblicazione su Pol.it - Psychiatry online, articolo "Lavorare con gli uditori di voci in una comunità". Intervento clinico con un paziente psichiatrico affetto da allucinazioni uditive inserito in una comunità per psicotici.</li>
          <li><strong>29-30 agosto 2002:</strong> Paper per il Scientific Meeting, Poitiers (Francia). Maison des sciences de l’homme e de la Société (MSHS): "The Effect Of The Text And Picture Integration On Comprehending Spatial Descriptions" – Francesca Pazzaglia, Sabina Scattola e Francesca Zanardi – Dipartimento di Psicologia Generale, Università di Padova.</li>
        </ul>
      </section>

      {/* Training Personale e Supervisioni */}
      <section className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <UserGroupIcon className="h-10 w-10 text-green-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Training Personale e Supervisioni</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li>Training psicoanalitico con analista SPI e IPA.</li>
          <li>Supervisioni cliniche individuali e di gruppo.</li>
        </ul>
      </section>


      {/* Aggiornamenti e Corsi Recenti (2024-2025) */}
      <section className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <CalendarDaysIcon className="h-10 w-10 text-green-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-800 mt-2">Aggiornamenti e Corsi Recenti (2024-2025)</h2>
        </div>
        <ul className="text-gray-700 list-disc list-inside space-y-3">
          <li><strong>2025:</strong> Seminario sulla qualità del testing psicologico, presso l’Istituto di Ricerca e Intervento per la Salute di Milano.</li>
          <li><strong>2024:</strong> Seminari di PSICOTERAPIA e PSICOANALISI.</li>
          <li><strong>2024:</strong> FAMILY CONNECTIONS: modello evidence-based di aiuto per familiari di pazienti con DPB organizzato da NEA-BPD con la dr.ssa M.E. Ridolfi e dr.ssa R. Rossi, IRCSS Fatebenefratelli, Brescia.</li>
          <li><strong>2024:</strong> Corso di Formazione sulla perdita e il lutto: contesti applicativi e tecniche di intervento (FCP, online).</li>
          <li><strong>2024:</strong> Congresso Triveneto S.I.R.P. - Raccomandazioni di buone pratiche in riabilitazione psicosociale: modelli e interventi, Arzignano.</li>
          <li><strong>2024:</strong> Congresso Annuale PSIVE - Trasformazione della domanda e ripensamento dei modelli nella salute mentale, Rovigo.</li>
          <li><strong>2024:</strong> Social Skill Training - ULSS 7 Pedemontana.</li>
          <li><strong>2024:</strong> Formazione EMDR Livello 1 - Training Certificato di Attendance, Verona.</li>
          <li><strong>2024:</strong> Home Sweet Home: Dialoghi tra le mura domestiche in tempi pandemici (Psicologia.io).</li>
          <li><strong>Partecipazione continua:</strong> Seminari e convegni di aggiornamento psicodinamico e diagnostico.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500 text-center">Questa è una selezione rappresentativa degli aggiornamenti e dei corsi recenti.</p>
      </section>

      {/* Call to Action */}
      <section className="max-w-2xl mx-auto text-center">
        <a
          href="/contatti"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow transition-colors duration-300"
        >
          Richiedi ulteriori informazioni
        </a>
      </section>

    </main>
  );
}