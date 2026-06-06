import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import useLenis from './hooks/useLenis';

// Layout & Sections
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CampusFrance from './components/sections/CampusFrance';
import Services from './components/sections/Services';
import Vision from './components/sections/Vision';
import Team from './components/sections/Team';
import ContactForm from './components/sections/ContactForm';
import CTA from './components/sections/CTA';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

export default function App() {
  const { i18n } = useTranslation();

  // Initialize Lenis smooth scrolling
  useLenis();

  useEffect(() => {
    const currentLang = i18n.language || 'fr';
    const isAr = currentLang.startsWith('ar');
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = isAr ? 'ar' : 'fr';
  }, [i18n.language]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <CampusFrance />
        <Services />
        <Vision />
        <Team />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
