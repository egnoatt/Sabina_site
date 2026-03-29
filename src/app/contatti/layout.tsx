
import React from 'react';
import type { Metadata } from 'next';

const title = 'Contatti | Sabina Scattola';
const description =
  'Contatti per comunicazioni generali e istituzionali. Attività privata sospesa, non sono attive prenotazioni.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/contatti',
  },
  openGraph: {
    title,
    description,
    url: '/contatti',
    images: ['/og.png'],
  },
  twitter: {
    title,
    description,
    images: ['/og.png'],
  },
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
