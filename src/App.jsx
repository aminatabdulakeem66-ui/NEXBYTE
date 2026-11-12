import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
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
  const [activePage, setActivePage] = useState('home');
  const [prefilledService, setPrefilledService] = useState('');
  const [initialProjectDetails, setInitialProjectDetails] = useState('');

  // Sync with URL Hash on load & back/forward navigation
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'why-us', 'work', 'process', 'contact'];
      if (hash && validPages.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleSelectPage = (pageId, servicePreset = '', projectPreset = '') => {
    setActivePage(pageId);
    window.location.hash = pageId;

    if (servicePreset) {
      setPrefilledService(servicePreset);
    }
    if (projectPreset) {
      setInitialProjectDetails(projectPreset);
    }

    // Smooth scroll to top on page switch
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-brand-deep text-white antialiased flex flex-col selection:bg-brand-purple selection:text-white">
      {/* Sleek Dynamic Navigation Bar */}
      <Navbar activePage={activePage} onSelectPage={handleSelectPage} />

      {/* Main Content Area: Dedicated View Routing */}
      <main className="flex-1 pt-16">
        {/* HOME VIEW: Hero section, Studio Highlights, Featured Previews & CTA */}
        {activePage === 'home' && (
          <HomeView onSelectPage={handleSelectPage} />
        )}

        {/* ABOUT VIEW: Dedicated Technology Meets Creativity page */}
        {activePage === 'about' && (
          <div className="animate-in fade-in duration-300">
            <About onSelectPage={handleSelectPage} />
            <CallToAction onSelectPage={handleSelectPage} />
          </div>
        )}

        {/* SERVICES VIEW: Dedicated What We Do Best page with Estimator & Modal */}
        {activePage === 'services' && (
          <div className="animate-in fade-in duration-300">
            <Services
              onSelectServiceForContact={(serviceName) => handleSelectPage('contact', serviceName)}
              onSelectPage={handleSelectPage}
            />
            <ProjectEstimator
              onTransferScope={(serviceName, summary) => handleSelectPage('contact', serviceName, summary)}
            />
            <CallToAction onSelectPage={handleSelectPage} />
          </div>
        )}

        {/* WHY US VIEW: Dedicated Why Businesses Choose Nexbyte page */}
        {activePage === 'why-us' && (
          <div className="animate-in fade-in duration-300">
            <WhyChooseUs onSelectPage={handleSelectPage} />
            <CallToAction onSelectPage={handleSelectPage} />
          </div>
        )}

        {/* WORK VIEW: Dedicated Portfolio page with filters & interactive case studies */}
        {activePage === 'work' && (
          <div className="animate-in fade-in duration-300">
            <Portfolio
              onDiscussProject={(title) => handleSelectPage('contact', '', title)}
            />
            <CallToAction onSelectPage={handleSelectPage} />
          </div>
        )}

        {/* PROCESS VIEW: Dedicated How We Bring Ideas to Life page */}
        {activePage === 'process' && (
          <div className="animate-in fade-in duration-300">
            <Process onSelectPage={handleSelectPage} />
            <CallToAction onSelectPage={handleSelectPage} />
          </div>
        )}

        {/* CONTACT VIEW: Dedicated Contact page with validation & submission flow */}
        {activePage === 'contact' && (
          <div className="animate-in fade-in duration-300">
            <Contact
              prefilledService={prefilledService}
              initialProjectDetails={initialProjectDetails}
            />
          </div>
        )}
      </main>

      {/* Footer across all pages */}
      <Footer onSelectPage={handleSelectPage} />
    </div>
  );
}
