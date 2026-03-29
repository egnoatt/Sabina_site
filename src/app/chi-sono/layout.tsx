import type { Metadata } from 'next';

const title = 'Chi sono | Sabina Scattola';
const description =
  'Profilo professionale, esperienza e formazione della Dott.ssa Sabina Scattola. Attività privata sospesa.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/chi-sono',
  },
  openGraph: {
    title,
    description,
    url: '/chi-sono',
    images: ['/og.png'],
  },
  twitter: {
    title,
    description,
    images: ['/og.png'],
  },
};

export default function ChiSonoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
