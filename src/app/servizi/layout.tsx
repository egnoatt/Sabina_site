import React from 'react';
import type { Metadata } from 'next';

const title = 'Ambiti di esperienza clinica | Sabina Scattola';
const description =
  'Ambiti di esperienza clinica e professionale della Dott.ssa Sabina Scattola. Attività libero-professionale attualmente sospesa.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/servizi',
  },
  openGraph: {
    title,
    description,
    url: '/servizi',
    images: ['/og.png'],
  },
  twitter: {
    title,
    description,
    images: ['/og.png'],
  },
};

export default function ServiziLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
