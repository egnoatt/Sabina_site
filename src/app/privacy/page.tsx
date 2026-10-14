import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy e trattamento dei dati | Sabina Scattola',
  description: 'Informazioni sul trattamento dei dati nella navigazione e nelle comunicazioni al sito.',
  alternates: { canonical: '/privacy' },
};

/**
 * REVIEW GATE: testo provvisorio. NON pubblicare finché il titolare non avrà
 * verificato: identità e recapiti, hosting e log, basi giuridiche, tempi di
 * conservazione, destinatari, trasferimenti, diritti e tecnologie di tracking.
 */
export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-base leading-relaxed text-slate-700 md:py-16">
      <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
        Privacy e trattamento dei dati
      </h1>
      <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        Informativa in revisione. Prima della pubblicazione definitiva devono essere
        confermati dal titolare del sito i trattamenti effettivi e i relativi dettagli.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Navigazione e contatti</h2>
        <p>
          Il sito non presenta moduli per prenotazioni o raccolta di informazioni cliniche.
          La navigazione può comportare il trattamento di dati tecnici, come indirizzi IP
          e log di accesso, da parte dei servizi infrastrutturali utilizzati.
        </p>
        <p>
          Se invii volontariamente un&apos;email, l&apos;indirizzo del mittente e il contenuto
          del messaggio vengono utilizzati per gestire la comunicazione. Ti invitiamo a
          non trasmettere dati sanitari o dettagli clinici tramite email ordinaria.
        </p>
        <p>
          Il banner informativo utilizza la memoria locale del browser (localStorage)
          per ricordare, per un massimo di 30 giorni, la scelta di chiudere l&apos;avviso.
          L&apos;eventuale presenza di altre tecnologie di archiviazione o misurazione
          dipende anche dalla configurazione effettiva dei servizi di hosting.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">
          Informazioni da verificare
        </h2>
        <p>
          Identità e contatti del titolare, finalità e basi giuridiche dei trattamenti,
          destinatari, eventuali trasferimenti, tempi di conservazione, diritti degli
          interessati e modalità di reclamo saranno precisati al termine della revisione.
        </p>
        <p>
          Per comunicazioni relative al sito consulta la pagina{' '}
          <Link className="font-medium text-[#1F5C4A] underline" href="/contatti">
            Contatti
          </Link>.
        </p>
      </section>
    </main>
  );
}
