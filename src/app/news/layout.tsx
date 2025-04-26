import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | Sabina Scattola',
  description: 'Ultime notizie, aggiornamenti professionali e novità sulla psicoterapia e sulla psicologia dalla Dott.ssa Sabina Scattola.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
