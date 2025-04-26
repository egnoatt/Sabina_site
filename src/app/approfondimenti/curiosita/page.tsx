export const metadata = {
  title: 'Curiosità Psicologiche | Sabina Scattola',
  description: 'Scopri approfondimenti e consigli utili sulla psicologia, per comprendere meglio la mente e le emozioni, a cura della Dott.ssa Sabina Scattola.'
};

import { LightBulbIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function CuriositaPsicologiche() {
  return (
    <main className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <LightBulbIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Curiosità Psicologiche</h1>
        <p className="mt-2 text-xl text-gray-500">
          Approfondimenti utili per comprendere meglio la mente e le emozioni.
        </p>
      </div>

      {/* Contenuto Principale */}
      <section className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
        <h2 className="text-2xl font-semibold text-green-800">Cosa dovrebbe sapere un paziente</h2>
        <p>
          Ogni percorso terapeutico è unico e si basa sulla relazione che si crea tra terapeuta e paziente. È fondamentale essere consapevoli che la terapia è uno spazio sicuro e riservato in cui esprimere liberamente i propri pensieri ed emozioni, senza il timore di essere giudicati.
        </p>

        <h2 className="text-2xl font-semibold text-green-800">Consigli utili prima di iniziare un percorso</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Cerca di essere aperto e sincero fin dall'inizio.</li>
          <li>Poni domande se qualcosa non è chiaro durante la terapia.</li>
          <li>Impegnati ad applicare ciò che emerge in seduta anche nella vita quotidiana.</li>
          <li>Ricorda che è normale sentirsi vulnerabili: è parte del processo di crescita.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-800">Aspettative realistiche</h2>
        <p>
          Un percorso terapeutico può essere breve o lungo in base agli obiettivi che si vogliono raggiungere. L'importante è stabilire obiettivi chiari con il proprio terapeuta e lavorare assieme verso un cambiamento significativo e duraturo.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <a
          href="/contatti"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          <EnvelopeIcon className="h-6 w-6" /> Richiedi maggiori informazioni
        </a>
      </section>
    </main>
  );
}