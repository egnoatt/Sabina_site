// src/app/privacy/page.tsx
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-32 bg-gradient-to-r from-[#2e7d32] to-[#102027]">
        <ShieldCheckIcon className="h-16 w-16 text-green-100 mb-4" />
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg md:text-xl text-green-200 italic drop-shadow-sm">
          Informazioni sulla privacy e trattamento dati
        </p>
      </section>

      {/* Contenuto centrale */}
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-gray-700">
        <h2 className="text-2xl font-semibold text-green-800">Privacy Policy del sito</h2>
        <p className="text-lg">
          Questo sito non raccoglie, utilizza o conserva alcun tipo di dato personale degli utenti. Non utilizziamo cookie per profilazione o tracciamento e non raccogliamo dati personali tramite form, email o altri mezzi. La navigazione è completamente anonima e sicura.
        </p>
        <p className="text-lg">
          Per eventuali chiarimenti o maggiori informazioni, potete contattare direttamente il titolare del sito utilizzando le informazioni presenti nella pagina Contatti.
        </p>
        {/* Sezione Cookie Policy */}
        <section className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-green-800">Cookie Policy</h2>
          <p className="text-lg">
            Questo sito utilizza esclusivamente cookie tecnici necessari per garantire il corretto funzionamento e la navigabilità del sito web. Non vengono utilizzati cookie di profilazione né cookie analitici di terze parti.
          </p>
          <p className="text-lg">
            I cookie tecnici non richiedono consenso esplicito da parte degli utenti poiché sono essenziali per il funzionamento del sito. Tuttavia, è possibile disabilitare o eliminare questi cookie modificando le impostazioni del proprio browser web.
          </p>
          <p className="text-lg">
            Per ulteriori informazioni su come gestire o disabilitare i cookie tramite browser, visita i seguenti link:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-green-700 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" className="text-green-700 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" className="text-green-700 hover:underline">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" className="text-green-700 hover:underline">Microsoft Edge</a></li>
          </ul>
        </section>
      </section>
    </div>
  );
}