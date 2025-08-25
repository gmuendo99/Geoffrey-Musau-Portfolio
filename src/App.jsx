import { useState } from 'react';
import Navigation from '@components/Navigation';
import HeroSection from '@components/HeroSection';
import AboutSection from '@components/AboutSection';
import ProjectsSection from '@components/ProjectsSection';
import ContactSection from '@components/ContactSection';
import Footer from '@components/Footer';
import { useScrollSpy, useScrolled } from './hooks/useScrollSpy';
import { NAV_ITEMS } from './constants';
import { scrollToSection } from './utils';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Use custom hooks for scroll functionality
  const isScrolled = useScrolled(50);
  const activeSection = useScrollSpy(NAV_ITEMS, 100);

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-slate-100 overflow-x-hidden">
      <Navigation 
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={handleScrollToSection}
      />
      <HeroSection scrollToSection={handleScrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
/*function App() {
  return (
    <div className="min-h-screen bg-primary-900 text-primary-50 flex items-center justify-center">
      <div className="bg-accent-600 p-8 rounded-lg">
        <h1 className="text-white text-4xl font-bold">Custom Colors Test</h1>
      </div>
    </div>
  )
}
export default App;*/

