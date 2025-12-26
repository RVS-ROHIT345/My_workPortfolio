import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import PublicationSection from './components/PublicationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isRocketFlying, setIsRocketFlying] = useState(false);

  const handleBackToTopClick = () => {
    setIsRocketFlying(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Duration should match the animation duration in index.html
    setTimeout(() => {
      setIsRocketFlying(false);
    }, 1000); 
  };

  return (
    <div className="bg-[#0a192f] text-slate-300">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <PublicationSection />
        <ContactSection />
      </main>
      <Footer onBackToTopClick={handleBackToTopClick} />
      
      {isRocketFlying && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 fly-to-top pointer-events-none">
           <span className="rocket-wrapper">
            <span className="text-8xl" role="img" aria-label="Rocket emoji">🚀</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default App;