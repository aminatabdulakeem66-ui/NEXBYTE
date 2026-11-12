import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import Hero from './Hero';
import CallToAction from './CallToAction';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';

export default function HomeView({ onSelectPage }) {
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section (Light Lavender Background + Interactive Tech Visuals) */}
      <Hero onSelectPage={onSelectPage} />

      {/* 2. Studio Snapshot / About Teaser */}
      <section className="py-20 bg-brand-deep text-white border-t border-brand-purple/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30 text-xs font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nexbyte Tech Studio Identity</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Technology Meets <span className="text-gradient-purple">Creativity.</span>
              </h2>
              <p className="text-base text-brand-grey leading-relaxed max-w-2xl">
                Nexbyte Tech Studio is a digital technology brand focused on creating modern websites, innovative applications and practical digital solutions. We combine creativity, technology and strategic thinking to help businesses establish and grow their digital presence.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectPage('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-card hover:bg-brand-purple/30 border border-brand-purple/40 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 group cursor-pointer"
                >
                  <span>Explore Our Full Story & Architecture</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectPage('why-us')}
                  className="text-xs text-brand-purpleLight hover:text-white transition-colors cursor-pointer"
                >
                  Why businesses choose us →
                </button>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 text-center">
              <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-cardBorder">
                <div className="text-2xl font-bold font-mono text-brand-purpleLight">99.9%</div>
                <div className="text-xs text-brand-grey mt-1">Uptime Reliability</div>
              </div>
              <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-cardBorder">
                <div className="text-2xl font-bold font-mono text-emerald-400">100/100</div>
                <div className="text-xs text-brand-grey mt-1">Core Web Vitals</div>
              </div>
              <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-cardBorder">
                <div className="text-2xl font-bold font-mono text-white">0.42s</div>
                <div className="text-xs text-brand-grey mt-1">Avg Load Speed</div>
              </div>
              <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-cardBorder">
                <div className="text-2xl font-bold font-mono text-brand-purpleLight">Zero</div>
                <div className="text-xs text-brand-grey mt-1">Technical Debt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Preview on Home */}
      <section className="py-20 bg-brand-charcoal text-white border-t border-brand-purple/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30 text-xs font-semibold uppercase mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Core Capabilities</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                What We Do <span className="text-gradient-purple">Best.</span>
              </h2>
              <p className="mt-2 text-sm text-brand-grey max-w-xl">
                From creative digital experiences to powerful software solutions, we help turn ideas into technology.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectPage('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-purple hover:bg-brand-purpleLight text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-brand-purple/30 transition-all cursor-pointer self-start sm:self-auto"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectPage('services')}
                className="p-6 rounded-2xl bg-brand-card border border-brand-cardBorder hover:border-brand-purple/60 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-brand-purpleLight">
                    {service.number}
                  </span>
                  <span className="text-[10px] text-brand-greyDark group-hover:text-brand-purpleLight transition-colors">
                    Click to explore →
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-purpleLight transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-grey leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-brand-deep text-brand-grey border border-brand-cardBorder"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Concept Showcase Preview on Home */}
      <section className="py-20 bg-brand-deep text-white border-t border-brand-purple/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30 text-xs font-semibold uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demonstration Work</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Turning Ideas Into <span className="text-gradient-purple">Digital Experiences.</span>
              </h2>
              <p className="mt-2 text-sm text-brand-grey max-w-xl">
                Explore our sample concept projects engineered to international standards.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectPage('work')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-purple hover:bg-brand-purpleLight text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-brand-purple/30 transition-all cursor-pointer self-start sm:self-auto"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectPage('work')}
                className="rounded-2xl bg-brand-card border border-brand-cardBorder hover:border-brand-purple/60 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group shadow-xl"
              >
                <div className="aspect-[16/10] bg-black/60 relative overflow-hidden">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-deep/90 text-brand-purpleLight border border-brand-purple/30">
                    {project.category}
                  </div>
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] font-mono bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    Concept
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-purpleLight transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-grey line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-brand-cardBorder flex items-center justify-between text-xs text-brand-purpleLight font-semibold">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Highlight Strip */}
      <section className="py-16 bg-[#0E0C1C] border-t border-brand-purple/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-brand-charcoal border border-brand-purple/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-brand-purpleLight uppercase">
                Structured Execution
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                How We Bring Ideas to Life: Discovery → Planning → Dev → Launch
              </h3>
              <p className="text-xs sm:text-sm text-brand-grey mt-1.5 max-w-2xl">
                Our transparent four-stage delivery cycle takes your digital ideas from whiteboard concepts to world-class production releases.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectPage('process')}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-purple hover:bg-brand-purpleLight text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <span>Explore Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Call To Action on Home */}
      <CallToAction onSelectPage={onSelectPage} />
    </div>
  );
}
