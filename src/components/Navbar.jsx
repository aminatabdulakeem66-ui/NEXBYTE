import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Our Work', href: '#work', id: 'work' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-deep/90 backdrop-blur-md border-b border-brand-purple/20 shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group cursor-pointer focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purpleLight via-brand-purple to-brand-purpleDark p-[1px] shadow-md shadow-brand-purple/30 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-brand-deep rounded-[11px] flex items-center justify-center">
                  {/* Geometric Monogram Icon */}
                  <svg
                    className="w-5 h-5 text-brand-purpleLight group-hover:text-white transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-xl bg-brand-purple/40 blur-sm -z-10 group-hover:blur-md transition-all duration-300 opacity-60"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1">
                  NEXBYTE
                  <span className="text-xs px-1.5 py-0.5 rounded bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30 font-semibold tracking-wide">
                    STUDIO
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-grey font-medium -mt-1 hidden sm:block">
                  Digital Tech Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-brand-charcoal/80 px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 group rounded-full ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-brand-grey hover:text-white'
                    }`}
                  >
                    {link.name}
                    {/* Animated Underline / Active indicator */}
                    <span
                      className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-brand-purpleLight to-brand-purple rounded-full transition-all duration-300 ${
                        isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-purpleDark rounded-xl hover:from-brand-purpleLight hover:to-brand-purple transition-all duration-300 shadow-md shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-brand-deep"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-brand-charcoal border border-brand-purple/30 text-brand-grey hover:text-white hover:bg-brand-card transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-brand-purpleLight" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-20 right-4 left-4 max-w-md mx-auto bg-brand-charcoal/95 border border-brand-purple/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-brand-cardBorder mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-purpleLight" />
                <span className="text-xs uppercase tracking-wider text-brand-grey font-semibold">
                  Navigation Menu
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30">
                ● Available Q1/Q2
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-brand-purple/15 text-brand-purpleLight border border-brand-purple/30 font-semibold'
                        : 'text-brand-grey hover:text-white hover:bg-brand-card'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </nav>

            <div className="mt-6 pt-5 border-t border-brand-cardBorder">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-brand-purple to-brand-purpleDark text-white font-semibold rounded-xl shadow-lg shadow-brand-purple/30 hover:opacity-95 transition-all text-sm"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
