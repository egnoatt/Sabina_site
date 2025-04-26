import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servizi - Sabina Scattola',
  description: 'Consulenza psicologica e psicoterapia online con la Dott.ssa Sabina Scattola. Scopri i servizi offerti per il tuo benessere psicologico e relazionale.',
};

export default function ServiziLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}