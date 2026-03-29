import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi Sono | Sabina Scattola',
  description:
    'Profilo professionale della Dott.ssa Sabina Scattola: esperienza clinica, ruolo attuale, formazione e approccio psicodinamico.',
};

export default function ChiSonoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
