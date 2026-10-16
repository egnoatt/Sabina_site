import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteUrl = 'https://www.sabinascattola.com';
const homeTitle = 'Sabina Scattola – Sito personale';
const homeDescription =
  'Sito personale di Sabina Scattola: biografia, percorso, esperienza e contenuti divulgativi. L’attività privata è chiusa e non sono offerte prestazioni private.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: homeTitle,
  description: homeDescription,
  keywords:
    'Sabina Scattola, sito personale, biografia, esperienza clinica, formazione, approfondimenti psicologici',
  authors: [{ name: 'Sabina Scattola', url: 'https://www.sabinascattola.com' }],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Sabina Scattola',
    title: homeTitle,
    description: homeDescription,
    url: '/',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Sabina Scattola – Sito personale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The pre-paint script owns only data-site-banner-dismissed on this element.
    // Child markup still hydrates normally; no page-wide warning suppression.
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          id="site-banner-prepaint"
          dangerouslySetInnerHTML={{
            __html: `try{var until=localStorage.getItem('siteBannerDismissedUntil-v2');if(until&&Date.parse(until)>Date.now()){document.documentElement.setAttribute('data-site-banner-dismissed','true')}}catch{}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sabina Scattola',
              url: siteUrl,
              jobTitle: 'Psicologa e Psicoterapeuta',
              description: homeDescription,
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-brand-primary focus:px-3 focus:py-2 focus:text-white"
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
