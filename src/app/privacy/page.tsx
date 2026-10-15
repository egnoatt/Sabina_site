import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy e trattamento dei dati | Sabina Scattola',
  description: 'Informazioni sulla navigazione, sulle comunicazioni e sui dati tecnici relativi al sito.',
  alternates: { canonical: '/privacy' },
};

/**
 * DRAFT / LEGAL APPROVAL REQUIRED.
 * This page intentionally distinguishes facts verifiable in the repository
 * from contractual and organizational details not yet established.
 * Do not merge before owner/legal review in docs/privacy-evidence-matrix.md.
 */
export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-base leading-relaxed text-slate-700 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
        Sito professionale informativo
      </p>
      <h1 className="mt-3 text-3xl font-bold text-brand-text md:text-4xl">
        Privacy e trattamento dei dati
      </h1>
      <p className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        Documento in fase di revisione: i dettagli organizzativi e contrattuali indicati
        di seguito devono essere confermati dal titolare prima della pubblicazione
        definitiva. Questa bozza non sostituisce l&apos;informativa completa prevista
        dagli articoli 12 e 13 del GDPR.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-brand-text">1. Finalità del sito</h2>
        <p>
          Il sito presenta il profilo e i contenuti informativi della Dott.ssa Sabina
          Scattola. Non offre prenotazioni private né moduli di invio di informazioni
          cliniche. Le comunicazioni tramite recapiti pubblicati sono destinate a
          richieste generali o professionali, non a consulenze sanitarie.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-brand-text">2. Dati trattati durante la navigazione</h2>
        <p>
          Per rendere accessibile il sito, i sistemi di hosting e rete possono
          trattare dati tecnici, inclusi l&apos;indirizzo IP, gli identificativi
          della richiesta e i log di accesso o sicurezza. Occorre verificare
          le impostazioni effettive del servizio, i destinatari e i tempi di
          conservazione di tali dati.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-brand-text">3. Comunicazioni volontarie</h2>
        <p>
          Scrivendo all&apos;indirizzo email indicato nei <Link href="/contatti"
          className="font-semibold text-brand-primary underline underline-offset-4">
          contatti</Link>, il mittente trasmette almeno il proprio indirizzo,
          il testo e gli eventuali allegati. Tali dati possono essere trattati
          per gestire la comunicazione; modalità e tempi di conservazione della
          casella email devono essere verificati.
        </p>
        <p className="font-medium">
          Non inviare tramite email ordinaria dati relativi alla salute,
          referti o informazioni cliniche personali.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-brand-text">4. Memoria locale e strumenti tecnici</h2>
        <p>
          La scelta di chiudere l&apos;avviso sull&apos;attività privata viene
          memorizzata nel <em>localStorage</em> del browser con una scadenza
          impostata a 30 giorni. Il codice del sito non implementa un form di
          prenotazione o un sistema di profilazione; la presenza di eventuali
          cookie, strumenti statistici e tecnologie aggiunte a livello di
          piattaforma richiede una verifica sulla configurazione realmente attiva.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-brand-text">5. Collegamenti esterni</h2>
        <p>
          Alcuni link possono condurre a siti e servizi esterni, ad esempio
          piattaforme social o servizi cartografici. Dopo l&apos;apertura del
          collegamento si applicano le condizioni e le informative del sito
          di destinazione. Il solo collegamento non dimostra l&apos;esistenza
          di un servizio incorporato nella pagina.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-brand-text">6. Titolare, basi giuridiche e conservazione</h2>
        <p>
          Prima della pubblicazione definitiva devono essere completati e
          verificati: identità e recapiti del titolare del trattamento, finalità
          e basi giuridiche specifiche, destinatari e responsabili del trattamento,
          eventuali trasferimenti extra SEE e relativi presupposti, periodi o
          criteri di conservazione per ciascuna categoria di dati.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-brand-text">7. Diritti degli interessati</h2>
        <p>
          Il GDPR riconosce, alle condizioni previste, diritti di accesso,
          rettifica, cancellazione, limitazione, opposizione e portabilità.
          È inoltre possibile proporre reclamo al Garante per la protezione
          dei dati personali. La procedura di esercizio dei diritti e i relativi
          recapiti devono essere specificati nell&apos;informativa definitiva.
        </p>
      </section>
    </div>
  );
}
