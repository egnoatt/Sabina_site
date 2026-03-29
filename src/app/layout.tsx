import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sabina Scattola | Profilo professionale di psicologa e psicoterapeuta',
  description:
    'Profilo professionale della Dott.ssa Sabina Scattola: esperienza clinica, formazione e approfondimenti in ambito psicologico e psicoterapeutico. L’attività libero-professionale è attualmente sospesa.',
  keywords:
    'Sabina Scattola, psicologa, psicoterapeuta, profilo professionale, esperienza clinica, formazione, approfondimenti psicologici',
  authors: [{ name: 'Sabina Scattola', url: 'https://sabinascattola.com' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Italic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sabina Scattola',
              url: 'https://sabinascattola.com',
              jobTitle: 'Psicologa e Psicoterapeuta',
              sameAs: [
                'https://www.linkedin.com/in/sabinascattola',
                'https://www.psicologi-italia.it/psicologo/sabina-scattola', // esempio, sostituire con link reali
              ],
            }),
          }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sabina Scattola — Blog"
          href="/api/feed"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-brand-primary focus:px-3 focus:py-2 focus:text-white"
        >
          Salta al contenuto
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
