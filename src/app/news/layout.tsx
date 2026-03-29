import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aggiornamenti | Sabina Scattola',
  description:
    'Aggiornamenti professionali e informativi relativi al profilo della Dott.ssa Sabina Scattola.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
