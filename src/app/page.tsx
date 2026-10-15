import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { professionalStatus } from '@/config/professionalStatus';
import SiteBanner from '@/components/SiteBanner';
import EditorialBotanical from '@/components/EditorialBotanical';

export const metadata: Metadata = { alternates: { canonical: '/' } };

type BlogTeaser = {
  slug: string;
  title?: string;
  date?: string;
  description?: string;
  excerpt?: string;
};

const experience = [
  { title: 'Ansia', text: 'Comprendere i sintomi per ritrovare respiro e ritmo.' },
  { title: 'Umore', text: 'Riconnettersi a energie e interessi in modo graduale.' },
  { title: 'Stress lavoro', text: 'Riorganizzare confini e priorità per maggiore equilibrio.' },
  { title: 'Caregiver', text: 'Sostenere chi assiste, senza dimenticare se stessi.' },
  { title: 'Cognitivo', text: 'Valutazioni e interventi in età adulta e anziana.' },
  { title: 'Relazioni', text: 'Leggere i pattern relazionali e trovare nuove strade.' },
];

const chapters = [
  { label: '01', title: 'Il mio percorso', description: 'Esperienza e approccio', href: '/chi-sono' },
  { label: '02', title: 'Formazione', description: 'Studi e aggiornamento', href: '/formazione' },
  { label: '03', title: 'Gli articoli', description: 'Riflessioni e approfondimenti', href: '/blog' },
];

function formatDate(value?: string): string {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? String(value)
    : new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export default function Home() {
  const posts = getAllPosts().slice(0, 3) as BlogTeaser[];

  return (
    <div className="bg-editorial-paper text-brand-text">
      <SiteBanner />

      <section aria-labelledby="home-title" className="overflow-hidden border-b border-editorial-line">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pb-16 pt-14 sm:pt-20 lg:min-h-[650px] lg:grid-cols-[minmax(0,1.13fr)_minmax(0,0.87fr)] lg:gap-12 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary sm:text-sm">
              Sito personale · Psicologia e psicoterapia
            </p>
            <h1 id="home-title" className="mt-7 font-display text-[clamp(3.35rem,7vw,6.5rem)] font-normal leading-[1.03] tracking-[-0.045em] text-brand-text">
              Sabina<br />Scattola
            </h1>
            <p className="mt-5 font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-tight text-brand-primary">
              Psicologa e Psicoterapeuta
            </p>
            <p className="mt-7 max-w-[54ch] text-base leading-8 text-slate-700 sm:text-lg">
              Esperienza clinica, formazione e approfondimenti in ambito psicologico e
              psicoterapeutico.
            </p>
            <p className="mt-4 max-w-[60ch] text-sm leading-7 text-slate-600 sm:text-base">
              Questo sito personale raccoglie informazioni sul percorso e sull&apos;esperienza
              di Sabina Scattola. L&apos;attività privata è chiusa.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
              >
                Leggi gli articoli <span aria-hidden="true" className="ml-3">↗</span>
              </Link>
              <Link
                href="/chi-sono"
                className="inline-flex min-h-12 items-center justify-center border-b border-brand-primary px-2 py-3 font-semibold text-brand-primary transition-colors hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
              >
                Il mio percorso <span aria-hidden="true" className="ml-3">→</span>
              </Link>
            </div>
          </div>
          <EditorialBotanical />
        </div>
      </section>

      <nav aria-label="Esplora il sito" className="border-b border-editorial-line bg-white/70">
        <div className="mx-auto grid max-w-6xl divide-y divide-editorial-line px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
          {chapters.map((chapter) => (
            <Link
              key={chapter.href}
              href={chapter.href}
              className="group flex items-start gap-4 py-8 transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-primary md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <span className="mt-1 text-xs font-bold tracking-widest text-brand-primary">{chapter.label}</span>
              <span className="flex-1">
                <span className="block font-display text-2xl leading-snug">{chapter.title}</span>
                <span className="mt-1 block text-sm text-slate-600">{chapter.description}</span>
              </span>
              <span aria-hidden="true" className="mt-1 text-brand-primary transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          ))}
        </div>
      </nav>

      <section aria-labelledby="experience-heading" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Esperienza</p>
              <h2 id="experience-heading" className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
                Ambiti di esperienza clinica
              </h2>
            </div>
            <p className="max-w-[58ch] text-base leading-8 text-slate-700 md:justify-self-end">
              Una sintesi dei principali ambiti clinici e professionali maturati nel corso
              dell&apos;esperienza.
            </p>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {experience.map((item, index) => (
              <div key={item.title} className="border-t border-editorial-line py-6">
                <span className="text-xs font-semibold tracking-widest text-brand-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="border-y border-editorial-line bg-editorial-mist py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Un percorso</p>
            <h2 id="approach-heading" className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Approccio professionale</h2>
            <p className="mt-6 max-w-[62ch] text-base leading-8 text-slate-700">
              L&apos;approccio psicodinamico e la centralità della relazione terapeutica hanno
              orientato il mio lavoro clinico e istituzionale, con attenzione alla storia della
              persona e al significato dei vissuti emotivi.
            </p>
            <p className="mt-4 max-w-[62ch] text-base leading-8 text-slate-700">
              Questa prospettiva continua a informare il profilo professionale e i contenuti
              pubblicati su questo sito.
            </p>
          </div>
          <aside className="border-l-2 border-brand-primary pl-6 lg:self-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Stato attuale</p>
            <p className="mt-4 font-display text-2xl leading-snug text-brand-text">
              {professionalStatus.availabilityMessage}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">{professionalStatus.sitePurposeMessage}</p>
          </aside>
        </div>
      </section>

      <section aria-label="Profilo in sintesi" className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
          {[
            { label: 'Ruolo', value: 'Dirigente Psicologo – AULSS 7 Pedemontana' },
            { label: 'Associazione', value: 'Vicepresidente “La Recherche”' },
            { label: 'Esperienza', value: '20+ anni di lavoro clinico' },
          ].map((item) => (
            <div key={item.label} className="border-t border-editorial-line pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">{item.label}</p>
              <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="articles-heading" className="border-t border-editorial-line bg-editorial-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Letture</p>
              <h2 id="articles-heading" className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Approfondimenti</h2>
              <p className="mt-4 max-w-[58ch] text-base leading-8 text-slate-700">Ultimi articoli dal blog.</p>
            </div>
            <Link href="/blog" className="inline-flex min-h-11 items-center font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">
              Tutti gli articoli <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>
          {posts.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="border-t border-editorial-line pt-6">
                  {post.date && <time dateTime={String(post.date)} className="text-sm text-slate-600">{formatDate(String(post.date))}</time>}
                  <h3 className="mt-3 font-display text-[1.65rem] leading-tight text-brand-text">
                    <Link
                      href={'/blog/' + encodeURIComponent(post.slug)}
                      className="underline decoration-transparent underline-offset-4 transition-colors hover:text-brand-primary hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                    >
                      {post.title ?? 'Approfondimento'}
                    </Link>
                  </h3>
                  {(post.excerpt || post.description) && (
                    <p className="mt-4 text-base leading-7 text-slate-700">{post.excerpt || post.description}</p>
                  )}
                  <Link
                    href={'/blog/' + encodeURIComponent(post.slug)}
                    className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                  >
                    Leggi l&apos;articolo <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-base text-slate-700">Nessun articolo disponibile al momento.</p>
          )}
        </div>
      </section>

      <section aria-labelledby="contacts-heading" className="border-t border-editorial-line bg-white py-14 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Informazioni</p>
            <h2 id="contacts-heading" className="mt-3 font-display text-3xl sm:text-4xl">Contatti e informazioni</h2>
            <p className="mt-3 max-w-[60ch] text-base leading-7 text-slate-700">
              Per informazioni generali o professionali consulta la pagina contatti.
              Le prestazioni private non sono disponibili.
            </p>
          </div>
          <Link href="/contatti" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-brand-primary px-6 py-3 font-semibold text-brand-primary transition-colors hover:bg-editorial-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">
            Vai ai contatti <span aria-hidden="true" className="ml-3">↗</span>
          </Link>
        </div>
        <div className="mx-auto mt-6 max-w-6xl px-6">
          <Link href="/privacy" className="text-sm text-brand-primary underline underline-offset-4 hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">
            Informativa privacy
          </Link>
        </div>
      </section>
    </div>
  );
}
