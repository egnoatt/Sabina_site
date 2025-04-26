import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi Sono | Sabina Scattola',
  description: 'Sabina Scattola, psicologa e psicoterapeuta con oltre vent’anni di esperienza, specializzata in psicoterapia psicodinamica. Scopri di più sul suo approccio e sulla sua esperienza.',
};

export default function ChiSonoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
