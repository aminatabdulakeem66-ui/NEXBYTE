import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import ProjectEstimator from './components/ProjectEstimator';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledService, setPrefilledService] = useState('');
  const [initialProjectDetails, setInitialProjectDetails] = useState('');

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-us', 'work', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const servElem = document.querySelector('#services');
    if (servElem) {
      servElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceName) => {
    setPrefilledService(serviceName);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscussProject = (projectTitle) => {
    setInitialProjectDetails(projectTitle);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferScope = (serviceName, summary) => {
    setPrefilledService(serviceName);
    setInitialProjectDetails(summary);
  };

  return (
    <div className="min-h-screen bg-brand-deep text-white antialiased flex flex-col selection:bg-brand-purple selection:text-white">
      {/* Sleek Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Light Lavender / Soft Off-white Background + Tech Visuals) */}
        <Hero
          onOpenContact={handleOpenContact}
          onExploreServices={handleExploreServices}
        />

        {/* 2. About Us Section (Technology Meets Creativity, Dark + Purple Accents) */}
        <About onOpenContact={handleOpenContact} />

        {/* 3. Our Services Section (What We Do Best, 6 Cards) */}
        <Services onSelectServiceForContact={handleSelectServiceForContact} />

        {/* 4. Why Choose Nexbyte? (5 Benefits + Radar Showcase) */}
        <WhyChooseUs onOpenContact={handleOpenContact} />

        {/* 5. Our Work / Portfolio (5 Concept Projects + Filter Tabs) */}
        <Portfolio onDiscussProject={handleDiscussProject} />

        {/* 6. Our Working Process (4 Steps, Horizontal on Desktop, Vertical on Mobile) */}
        <Process onOpenContact={handleOpenContact} />

        {/* 7. Interactive Scope & Budget Estimator Tool */}
        <ProjectEstimator onTransferScope={handleTransferScope} />

        {/* 8. Call To Action Section (Have an Idea? Let's Build It) */}
        <CallToAction onOpenContact={handleOpenContact} />

        {/* 9. Contact Section (Working Validation & Submission Flow + WhatsApp) */}
        <Contact
          prefilledService={prefilledService}
          initialProjectDetails={initialProjectDetails}
        />
      </main>

      {/* 10. Footer Section */}
      <Footer />
    </div>
  );
}
