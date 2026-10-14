import type { Metadata } from 'next';

const title = 'Privacy e trattamento dei dati | Sabina Scattola';
const description = 'Informazioni sul trattamento dei dati nella navigazione e nei contatti del sito.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy' },
  openGraph: { title, description, url: '/privacy' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
