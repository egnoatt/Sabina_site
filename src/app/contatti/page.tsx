import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "Contatti - Sabina Scattola Psicologa e Psicoterapeuta",
  description: "Contatta la Dott.ssa Sabina Scattola per informazioni, appuntamenti e consulenze psicologiche presso lo studio di Mussolente o online.",
};

export default function Contatti() {
  return (
    <main className="container mx-auto py-16 px-4">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <EnvelopeIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-5xl font-bold text-gray-800">Contatti</h1>
        <p className="mt-3 text-xl text-gray-500">Rimaniamo in contatto per qualsiasi informazione</p>
      </div>

      {/* Informazioni di Contatto */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        {/* Indirizzo */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <MapPinIcon className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-2xl font-semibold text-center text-green-800">Indirizzo</h3>
          <p className="text-center text-gray-700 mt-2">
            <a 
              href="https://maps.app.goo.gl/kRPB7ZGMWnvmw9kq7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Via XI Settembre 2001, 3<br/>36065 Mussolente (VI)
            </a>
          </p>
        </div>

        {/* Telefono */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <PhoneIcon className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-2xl font-semibold text-center text-green-800">Telefono</h3>
          <p className="text-center text-gray-700 mt-2">
            <a href="tel:+393884279266" className="text-green-600 hover:underline">
              +39 388 4279266
            </a>
          </p>
        </div>

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

      </section>

{/* Note Informative */}
<section className="max-w-4xl mx-auto my-16 bg-green-50 rounded-xl p-8 shadow-lg">
  <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">Note Informative</h2>

  <div className="space-y-6 text-lg text-gray-700">

    {/* Disponibilità attuale */}
    <div>
      <h3 className="text-xl font-semibold text-green-700">Disponibilità Attuale</h3>
      <p>
        Attualmente, l'attività privata della dott.ssa Sabina Scattola è <strong>temporaneamente sospesa</strong> fino a nuova comunicazione, in seguito all'assunzione come dirigente psicologo presso AULSS 7 Pedemontana.
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
        <li>Depressione e disturbi dell'umore</li>
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
</section>

      {/* Mappa Google Embed */}
      <section className="mt-16 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl">
        <iframe
          title="Posizione Studio"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?q=Via%20XI%20Settembre%202001,%203%20Mussolente%20(VI)&t=&z=15&ie=UTF8&iwloc=&output=embed"
          style={{ border: 0 }}
          allowFullScreen
        />
      </section>

    </main>
  );
}