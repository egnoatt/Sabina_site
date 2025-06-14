import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sabina Scattola | Psicologa e Psicoterapeuta a Mussolente',
  description: 'Sabina Scattola, Psicologa e Psicoterapeuta specializzata in psicoterapia psicodinamica a Mussolente (VI). Scopri i servizi di consulenza psicologica e supporto emotivo offerti.',
  keywords: 'Sabina Scattola, psicologa Mussolente, psicoterapeuta psicodinamica, consulenza psicologica, terapia individuale, supporto emotivo',
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
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}