import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Approfondimenti clinici | Sabina Scattola',
  description:
    'Contenuti informativi su temi, strumenti e prospettive cliniche della Dott.ssa Sabina Scattola.',
};

export default function CliniciLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
