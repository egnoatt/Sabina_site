import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';

interface LayoutProps {
  children: ReactNode;
  titolo: string;
  sottotitolo?: string;
  icona?: ReactNode;
}

const Layout = ({ children, titolo, sottotitolo, icona }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection titolo={titolo} sottotitolo={sottotitolo} icona={icona} />
      <main className="container mx-auto flex-1 py-12 px-4 md:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;