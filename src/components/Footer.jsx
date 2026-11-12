import React from 'react';
import {
  ArrowUp,
  MessageSquare,
  Sparkles,
  Heart,
  Globe,
  Shield,
  Layers
} from 'lucide-react';
import {
  InstagramIcon as Instagram,
  FacebookIcon as Facebook,
  LinkedinIcon as Linkedin
} from './SocialIcons';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
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
    <footer className="relative bg-brand-deep text-white border-t border-brand-purple/20 overflow-hidden pt-16 pb-12">
      {/* Background Subtle Purple Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Studio Identity & Description */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purpleLight via-brand-purple to-brand-purpleDark p-[1px] shadow-md shadow-brand-purple/30">
                <div className="w-full h-full bg-brand-deep rounded-[11px] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-purpleLight"
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
              </div>

              <div>
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  NEXBYTE
                  <span className="text-xs px-1.5 py-0.5 rounded bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30 font-semibold tracking-wide">
                    STUDIO
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-grey font-mono block -mt-0.5">
                  Innovating Today, Transforming Tomorrow
                </span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-sm text-brand-grey leading-relaxed max-w-sm">
              Building modern digital experiences through creativity, technology and innovation.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card border border-brand-cardBorder text-xs text-brand-grey">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Global Studio · Accepting Q1/Q2 Projects</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-brand-grey">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleLinkClick(e, '#work')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-brand-grey">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  Mobile Applications
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  Software Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-brand-purpleLight transition-colors"
                >
                  E-commerce Platforms
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Media & Channels */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Social Media
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-grey">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-purpleLight transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-brand-purpleLight group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-purpleLight transition-colors group"
                >
                  <Facebook className="w-4 h-4 text-brand-purpleLight group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-purpleLight transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-brand-purpleLight group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-grey">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {currentYear} Nexbyte Tech Studio. All rights reserved.</span>
            <span className="hidden sm:inline text-brand-greyDark">•</span>
            <span className="text-[11px] text-brand-greyDark">
              Concept Demonstrations Engineered for Modern Tech Enterprises.
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-charcoal hover:bg-brand-purple/20 border border-brand-cardBorder hover:border-brand-purple/40 text-brand-grey hover:text-white transition-all"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
