// src/app/chi-sono/page.tsx
import {
  UserCircleIcon,
  AcademicCapIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Chi Sono | Sabina Scattola - Psicologa e Psicoterapeuta',
  description: 'Scopri il profilo professionale della Dott.ssa Sabina Scattola, psicologa e psicoterapeuta specializzata in psicoterapia psicodinamica con esperienza clinica e istituzionale.',
};

export default function ChiSono() {
  return (
    <main className="container mx-auto py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <UserCircleIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Chi Sono</h1>
        <p className="mt-2 text-xl text-gray-500">Psicologa e Psicoterapeuta Psicodinamica</p>
      </div>

      <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-10">
        <section>
          <p>
          Mi chiamo <strong>Sabina Scattola</strong>, sono una <strong>Psicologa</strong> e <strong>Psicoterapeuta</strong> con oltre vent'anni di esperienza clinica e istituzionale. Attualmente ricopro il ruolo <strong>Dirigente Psicologo</strong> presso l'<strong>AULSS 7 Pedemontana</strong>. Ho iniziato la mia attività professionale nel 2003, dopo la Laurea in Psicologia Clinica e di Comunità, conseguendo poi la specializzazione in Psicoterapia Psicodinamica ad orientamento Psicoanalitico. Dal 2003 al 2025 ho lavorato i nella salute mentale territoriale come responsabile di strutture residenziali psichiatriche per giovani ed adulti in Aulss 7 ed in Aulss 8.
            <br />
            Nel mio percorso formativo ho svolto un lungo training personale con psicoanalista membro della Società Psicoanalitica Italiana (SPI) e dell'International Psychoanalytical Association (IPA), supervisioni individuali e di gruppo e ho frequentato un Master biennale in Psicoterapia Psicoanalitica del ciclo di vita. Partecipo a seminari, corsi e conferenze per seguire un aggiornamento continuo accreditato, con particolare interesse per la clinica adulta.
          </p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-green-800 mb-4">
            <AcademicCapIcon className="h-7 w-7" /> Formazione Accademica e Professionale
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Laurea in Psicologia clinica e di comunità:</strong> l’Università degli Studi di Padova (2000)</li>
            <li><strong>Iscrizione Ordine Psicologi del Veneto:</strong> N°4157 (dal 31 gennaio 2003)</li>
            <li><strong>Specializzazione:</strong> Psicoterapia Psicodinamica (orientamento Psicoanalitico), presso CERP di Trento</li>
            <li><strong>Master:</strong> Psicoterapia Psicoanalitica</li>
            <li><strong>Training Personale:</strong> Psicoanalisi personale con analista SPI e IPA</li>
            <li><strong>Supervisioni:</strong> Individuali e di gruppo</li>
            <li><strong>Aggiornamenti specifici:</strong> Valutazione diagnostica (PDM-2) con prof. V. Ligiardi</li>
          </ul>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-green-800 mb-4">
            <BuildingOfficeIcon className="h-7 w-7" /> Ruoli Attuali e Attività Associative
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Dirigente Psicologo in disciplina Psicoterapia</strong> presso <strong>AULSS 7 Pedemontana</strong></li>
            <li><strong>Vicepresidente</strong> dell'Associazione <strong>«La Recherche»</strong></li>
          </ul>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-green-800 mb-4">
            <HeartIcon className="h-7 w-7" /> Filosofia e Metodo
          </h2>
          <p>
            Il mio lavoro si basa sull'ascolto analitico e sulla relazione terapeutica intesa come spazio privilegiato di incontro tra paziente e terapeuta. Attraverso l'esplorazione delle dinamiche relazionali storiche attivate nel 'qui ed ora', il paziente rivive e riconosce schemi emotivi e comportamentali inconsci, spesso derivanti da esperienze passate. Le reazioni controtransferali che emergono nel terapeuta diventano strumenti preziosi di comprensione, contribuendo a co-costruire una nuova consapevolezza condivisa e un cambiamento profondo e duraturo.
          </p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-green-800 mb-4">
            <UsersIcon className="h-7 w-7" /> A chi mi rivolgo
          </h2>
          <p>
          Il mio intervento è rivolto a soggetti in età pre-adolescenziale e adolescenziale, adulta,  anziani e ai loro caregiver che si trovano in situazioni di disagio emotivo, difficoltà relazionali, ansia, depressione o desiderano intraprendere un percorso di crescita personale e di autoconsapevolezza. Offro sedute individuali sia in presenza presso il mio studio a Mussolente (VI), che online tramite Zoom, Google Meet o FaceTime.
          </p>
        </section>

        <section className="mt-12 text-center">
          <a href="/contatti"
             className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
            Contattami per maggiori informazioni
          </a>
        </section>
      </div>
    </main>
  );
}