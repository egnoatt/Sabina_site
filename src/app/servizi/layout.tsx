import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ambiti di esperienza clinica | Sabina Scattola',
  description:
    'Ambiti di esperienza clinica e professionale della Dott.ssa Sabina Scattola, presentati in chiave informativa. L’attività libero-professionale è attualmente sospesa.',
};

export default function ServiziLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
