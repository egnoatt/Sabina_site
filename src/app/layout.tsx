import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = 'https://sabinascattola.com';
const homeTitle = 'Sabina Scattola – Psicologa e Psicoterapeuta';
const homeDescription =
  'Profilo professionale della Dott.ssa Sabina Scattola. Attività libero-professionale attualmente sospesa. Informazioni su esperienza clinica, formazione e approfondimenti.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: homeTitle,
  description: homeDescription,
  keywords:
    'Sabina Scattola, psicologa, psicoterapeuta, profilo professionale, esperienza clinica, formazione, approfondimenti psicologici',
  authors: [{ name: 'Sabina Scattola', url: 'https://sabinascattola.com' }],
  alternates: {
    canonical: '/',
  },
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
        alt: 'Sabina Scattola – Profilo professionale',
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
              url: siteUrl,
              jobTitle: 'Psicologa e Psicoterapeuta',
              description: homeDescription,
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
