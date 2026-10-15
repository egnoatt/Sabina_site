import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy e trattamento dei dati | Sabina Scattola',
  description: 'Informazioni sul trattamento dei dati per navigazione, contatti e funzionalità tecniche del sito.',
  alternates: { canonical: '/privacy' },
};

/**
 * FOR OWNER / LEGAL REVIEW — NOT FOR PUBLIC RELEASE AS FINAL NOTICE.
 * Unconfirmed Article 13 details are not silently invented.
 * Release gate: docs/privacy-release-gate.md.
 */
export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-base leading-relaxed text-slate-700 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
        Informazioni sul sito
      </p>
      <h1 className="mt-3 text-3xl font-bold text-brand-text md:text-4xl">
        Privacy e trattamento dei dati
      </h1>
      <p className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        Informativa in revisione. Alcuni elementi richiesti dagli articoli 12 e 13
        del Regolamento (UE) 2016/679 sono in attesa di conferma da parte del
        titolare. Questa versione non è ancora un&apos;informativa definitiva.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">1. Titolare del trattamento e contatti</h2>
        <p>
          Il titolare del trattamento dei dati personali connessi a questo sito
          è la Dott.ssa Sabina Scattola, che gestisce il proprio sito personale.
        </p>
        <p>
          Per comunicazioni e per esercitare i diritti relativi ai dati personali
          è possibile utilizzare i recapiti pubblicati nella pagina{' '}
          <Link href="/contatti" className="text-brand-primary underline underline-offset-4">
            Contatti
          </Link>.
          Non è necessario un indirizzo email separato per queste richieste.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">2. Dati e finalità</h2>
        <p>
          Questo è un sito personale con finalità informative e divulgative.
          L&apos;attività libero-professionale privata della Dott.ssa Sabina
          Scattola è chiusa: non sono offerti servizi o prenotazioni private.
          Non include moduli di prenotazione, registrazione utenti o invio
          di informazioni cliniche.
        </p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>Navigazione:</strong> l&apos;infrastruttura che distribuisce il sito
            può trattare indirizzi IP, dati tecnici delle richieste e log,
            per fornire le pagine e proteggere il servizio. Devono essere
            verificati configurazioni, accessibilità ai log e tempi di conservazione.
          </li>
          <li>
            <strong>Messaggi email:</strong> scrivendo spontaneamente al recapito
            pubblicato vengono trasmessi indirizzo del mittente, contenuto
            ed eventuali allegati, per poter esaminare e rispondere alla richiesta.
            Non inviare dati sanitari o documenti clinici via email ordinaria.
          </li>
          <li>
            <strong>Preferenza dell&apos;avviso:</strong> la chiusura del banner
            informativo salva nel browser una data di scadenza in
            <em> localStorage</em>, impostata a 30 giorni. Non è una funzione
            di profilazione prevista dal codice del banner.
          </li>
        </ul>
        <p>
          Per ciascuna finalità devono essere confermate le pertinenti basi
          giuridiche ai sensi dell&apos;articolo 6 GDPR prima del rilascio finale.
          Non sono qui attribuiti consensi o interessi legittimi non verificati.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">3. Cookie e strumenti analoghi</h2>
        <p>
          Il codice dell&apos;avviso utilizza la memoria locale del browser per
          ricordarne la chiusura. Non risultano implementati nel codice
          applicativo esaminato moduli di profilazione o analytics espliciti.
          L&apos;eventuale utilizzo di cookie, sistemi di misurazione, log o altri
          strumenti predisposti dai servizi di hosting richiede una verifica
          dell&apos;ambiente realmente attivo prima di dichiararne la completa assenza.
        </p>
        <p>
          Se vengono utilizzati strumenti non strettamente tecnici, occorre
          applicare le relative regole di informativa e, quando richiesto,
          di consenso preventivo.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">4. Fornitori e destinatari</h2>
        <p>
          Il sito è distribuito tramite la piattaforma di hosting Vercel;
          l&apos;invio volontario di email comporta anche l&apos;utilizzo del
          servizio di posta del recapito pubblicato. Devono essere convalidati
          i soggetti coinvolti, il loro ruolo privacy, gli eventuali responsabili
          e sub-responsabili, le categorie di destinatari e, se applicabile,
          le garanzie relative a trasferimenti fuori dallo Spazio Economico Europeo.
        </p>
        <p>
          I collegamenti a Facebook e ad altri siti esterni portano fuori dal
          presente sito. Le informative dei rispettivi gestori si applicano
          alle visite alle loro pagine.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">5. Conservazione</h2>
        <p>
          La preferenza del banner prevede una scadenza di 30 giorni nel
          browser. Questo periodo non descrive la conservazione dei dati
          sui server. I tempi o criteri di conservazione dei log tecnici
          e dei messaggi email devono ancora essere verificati e definiti
          nell&apos;informativa finale.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">6. Facoltatività e decisioni automatizzate</h2>
        <p>
          L&apos;invio di email è facoltativo; senza dati di contatto non è possibile
          rispondere a una richiesta individuale. Il sito non implementa nel
          codice applicativo sistemi decisionali automatizzati relativi ai
          visitatori. Queste circostanze devono essere confermate rispetto
          all&apos;operatività reale prima della pubblicazione finale.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">7. Diritti degli interessati</h2>
        <p>
          Nei casi previsti dal GDPR possono essere esercitati i diritti di
          accesso, rettifica, cancellazione, limitazione, opposizione e
          portabilità, nonché il diritto di proporre reclamo al{' '}
          <a href="https://www.garanteprivacy.it/"
            target="_blank" rel="noopener noreferrer"
            className="text-brand-primary underline underline-offset-4">
            Garante per la protezione dei dati personali
          </a>.
          Il titolare deve confermare il canale e le modalità pratiche per
          ricevere queste richieste.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-brand-text">8. Aggiornamenti</h2>
        <p>
          L&apos;informativa sarà completata e aggiornata sulla base dei
          trattamenti effettivamente svolti e delle verifiche richieste.
          Non sono indicate date di validazione o versioni legali non approvate.
        </p>
      </section>
    </div>
  );
}
