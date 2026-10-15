import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy e trattamento dei dati | Sabina Scattola',
  description: 'Come vengono gestiti i dati tecnici di navigazione e i messaggi inviati tramite i contatti del sito personale.',
  alternates: { canonical: '/privacy' },
};

const contactLinkClass = 'text-brand-primary underline underline-offset-4';

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-base leading-relaxed text-slate-700 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
        Sito personale
      </p>
      <h1 className="mt-3 text-3xl font-bold text-brand-text md:text-4xl">
        Privacy e trattamento dei dati
      </h1>
      <p className="mt-5 text-base leading-relaxed">
        Questa pagina descrive i dati utilizzati per il funzionamento del sito e
        quelli comunicati volontariamente attraverso i contatti pubblicati.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">1. Titolare e contatti</h2>
        <p>
          Il titolare del trattamento dei dati connessi al sito è la Dott.ssa
          Sabina Scattola. Questo è un sito personale, informativo e divulgativo:
          l&apos;attività privata è chiusa e non sono offerti servizi o
          prenotazioni private.
        </p>
        <p>
          Per comunicazioni e richieste relative ai dati personali è possibile
          utilizzare i recapiti presenti nella pagina{' '}
          <Link href="/contatti" className={contactLinkClass}>Contatti</Link>.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">2. Dati di navigazione</h2>
        <p>
          Per visualizzare le pagine, l&apos;infrastruttura di hosting e rete
          tratta informazioni tecniche necessarie alla richiesta, che possono
          includere indirizzo IP, data e ora, indirizzo della pagina richiesta,
          dati di connessione e registrazioni tecniche di sicurezza.
          Queste informazioni sono collegate al funzionamento, alla
          disponibilità e alla protezione del sito.
        </p>
        <p>
          Il sito non dispone di moduli per registrare utenti, fissare
          appuntamenti o inviare informazioni cliniche.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">3. Comunicazioni volontarie</h2>
        <p>
          Scrivendo ai recapiti pubblicati, il mittente comunica
          volontariamente il proprio indirizzo, il contenuto del messaggio
          e gli eventuali allegati. Questi dati servono a leggere
          e gestire la comunicazione ricevuta e, quando opportuno, a rispondere.
        </p>
        <p className="font-medium">
          Non inviare tramite email ordinaria dati sanitari, referti o altre
          informazioni cliniche personali.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">4. Cookie e memoria del browser</h2>
        <p>
          Il sito memorizza nel <em>localStorage</em> del dispositivo soltanto
          la scadenza della preferenza con cui viene chiuso l&apos;avviso
          informativo sull&apos;attività privata, impostata a 30 giorni.
          Tale preferenza non è utilizzata per profilare i visitatori.
        </p>
        <p>
          Nei controlli tecnici effettuati sulle pagine principali, in sessioni
          browser nuove, non sono stati rilevati cookie né richieste verso
          servizi di tracciamento esterni. Nel codice del sito non sono presenti
          moduli espliciti di pubblicità personalizzata.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">5. Servizi utilizzati e conservazione</h2>
        <p>
          Il sito è distribuito tramite il servizio di hosting Vercel.
          I messaggi inviati per email sono gestiti attraverso il servizio
          di posta collegato al recapito pubblicato nei{' '}
          <Link href="/contatti" className={contactLinkClass}>Contatti</Link>.
          I fornitori di questi servizi possono trattare dati tecnici e
          informazioni delle comunicazioni nell&apos;ambito dell&apos;erogazione
          e della sicurezza dei rispettivi servizi.
        </p>
        <p>
          La preferenza locale di chiusura dell&apos;avviso ha una scadenza di
          30 giorni. I dati dei messaggi e i log tecnici sono conservati
          nei rispettivi servizi di posta e hosting secondo le impostazioni
          e i criteri di gestione applicati a tali servizi.
          Per informazioni sui dati relativi a una comunicazione inviata,
          è possibile rivolgersi alla titolare tramite i{' '}
          <Link href="/contatti" className={contactLinkClass}>Contatti</Link>.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">6. Link ad altri siti</h2>
        <p>
          Alcuni collegamenti possono indirizzare a pagine esterne, come
          Facebook. Visitando tali pagine si applicano le informative e
          le condizioni dei rispettivi gestori.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">7. Diritti delle persone interessate</h2>
        <p>
          Nei casi previsti dalla normativa è possibile chiedere accesso,
          rettifica, cancellazione, limitazione, opposizione e portabilità
          dei dati personali. Per esercitare questi diritti si possono
          utilizzare i{' '}
          <Link href="/contatti" className={contactLinkClass}>Contatti</Link>.
          È inoltre possibile proporre reclamo al{' '}
          <a
            href="https://www.garanteprivacy.it/"
            target="_blank"
            rel="noopener noreferrer"
            className={contactLinkClass}
          >
            Garante per la protezione dei dati personali
          </a>.
        </p>
      </section>

      <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        Ultimo aggiornamento: 15 ottobre 2026.
      </p>
    </div>
  );
}
