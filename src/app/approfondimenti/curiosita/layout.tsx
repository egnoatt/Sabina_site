import type { Metadata } from 'next';


import React from 'react';

export const metadata: Metadata = {
  title: "Curiosità psicologiche | Sabina Scattola",
  description: "Approfondimenti divulgativi e spunti informativi su psicologia, emozioni e linguaggio clinico.",
  alternates: { canonical: "/approfondimenti/curiosita" },
  openGraph: { images: ['/og.png'], title: "Curiosità psicologiche | Sabina Scattola", description: "Approfondimenti divulgativi e spunti informativi su psicologia, emozioni e linguaggio clinico.", url: "/approfondimenti/curiosita" },
  twitter: { images: ['/og.png'], card: 'summary_large_image', title: "Curiosità psicologiche | Sabina Scattola", description: "Approfondimenti divulgativi e spunti informativi su psicologia, emozioni e linguaggio clinico." },
};

export default function CuriositaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
