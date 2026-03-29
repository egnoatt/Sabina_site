import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ambiti clinici e professionali | Sabina Scattola',
  description:
    'Sintesi degli ambiti di esperienza clinica e professionale della Dott.ssa Sabina Scattola. L’attività libero-professionale è attualmente sospesa.',
};

export default function ServiziLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
