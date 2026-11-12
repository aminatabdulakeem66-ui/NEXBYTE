import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Cpu,
  Shield,
  Lightbulb,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function About({ onSelectPage }) {
  const [activeTab, setActiveTab] = useState('engineering');
  const [showFullModal, setShowFullModal] = useState(false);

  const pillars = [
    {
      id: 'engineering',
      title: 'Technical Rigor',
      icon: Terminal,
      highlight: 'Production-Grade Infrastructure',
      desc: 'We write clean, modular, type-safe code that scales from day one. Every architecture is audited for security, test coverage, and high throughput.',
    },
    {
      id: 'design',
      title: 'Design Excellence',
      icon: Sparkles,
      highlight: 'Human-Centered Aesthetics',
      desc: 'Form and function converge. We build digital products that feel effortless to use while capturing your unique brand personality with precision.',
    },
    {
      id: 'strategy',
      title: 'Strategic Delivery',
      icon: TrendingUp,
      highlight: 'Measurable Business ROI',
      desc: 'Technology is an investment in your company’s future. We align engineering milestones directly with customer acquisition and revenue goals.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-brand-deep text-white overflow-hidden border-t border-brand-purple/15"
    >
      {/* Background Lighting & Moving Elements */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-brand-purple/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-purpleLight/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Technology Showcase (Reveals with subtle slide-in) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Outer Decorative Gradient Border */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-brand-purpleLight/40 via-brand-purple/20 to-transparent shadow-2xl shadow-brand-purple/20">
              <div className="relative rounded-[22px] bg-brand-charcoal overflow-hidden p-6 sm:p-8">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-brand-purpleLight">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white tracking-wide">STUDIO ARCHITECTURE</div>
                      <div className="text-xs text-brand-grey">Precision Engineering Benchmark</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Active Verified
                  </span>
                </div>

                {/* Interactive Pillar Switcher */}
                <div className="mt-6 grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-brand-deep/80 border border-brand-cardBorder">
                  {pillars.map((item) => {
                    const Icon = item.icon;
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveTab(item.id)}
                        className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/30 font-semibold'
                            : 'text-brand-grey hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Icon className="w-4 h-4 mb-1" />
                        <span className="truncate max-w-full">{item.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Content Display */}
                <div className="mt-6 p-5 rounded-xl bg-brand-card border border-brand-purple/20 relative">
                  {pillars.map((item) => {
                    if (item.id !== activeTab) return null;
                    return (
                      <div key={item.id} className="space-y-3 animate-in fade-in duration-300">
                        <div className="text-sm font-semibold text-brand-purpleLight flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>{item.highlight}</span>
                        </div>
                        <p className="text-sm text-brand-grey leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Quantitative Studio Benchmarks */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-5 border-t border-white/10 text-center">
                  <div className="p-2.5 rounded-lg bg-brand-deep/60">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white">100%</div>
                    <div className="text-[11px] text-brand-grey">Responsive Fidelity</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-brand-deep/60">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-brand-purpleLight">&lt; 1s</div>
                    <div className="text-[11px] text-brand-grey">Target Speed Index</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-brand-deep/60 col-span-2 sm:col-span-1">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">24/7</div>
                    <div className="text-[11px] text-brand-grey">International Standards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-purpleLight opacity-20 blur-xl pointer-events-none" />
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3 rounded-xl bg-brand-charcoal/95 border border-brand-purple/40 shadow-xl items-center gap-3 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-brand-purple/30 flex items-center justify-center text-brand-purpleLight">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Full IP Protection</div>
                <div className="text-[10px] text-brand-grey">Enterprise NDAs & Code Escrow</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Intro (Fades in on scroll) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-xs font-semibold text-brand-purpleLight uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Us</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Technology Meets <span className="text-gradient-purple">Creativity.</span>
            </h2>

            {/* Required Description */}
            <p className="text-base sm:text-lg text-brand-grey font-normal leading-relaxed">
              Nexbyte Tech Studio is a digital technology brand focused on creating modern websites, innovative applications and practical digital solutions. We combine creativity, technology and strategic thinking to help businesses establish and grow their digital presence.
            </p>

            {/* Key Value Points */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-brand-purple/20 text-brand-purpleLight flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Bespoke Architectural Craft</h4>
                  <p className="text-xs sm:text-sm text-brand-grey">No generic templates or rigid themes. Everything is built to measure your exact business objectives.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-brand-purple/20 text-brand-purpleLight flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">International Standard Execution</h4>
                  <p className="text-xs sm:text-sm text-brand-grey">Designed for ambitious teams requiring world-class digital products that stand out globally.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-brand-purple/20 text-brand-purpleLight flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Engineering Collaboration</h4>
                  <p className="text-xs sm:text-sm text-brand-grey">You communicate directly with senior full-stack designers and engineers who make decisions fast.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowFullModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-brand-card hover:bg-brand-purple/30 border border-brand-purple/40 hover:border-brand-purple transition-all duration-300 shadow-md group"
              >
                <span>Learn More About Our Studio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => onSelectPage && onSelectPage('contact')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purpleLight hover:text-white transition-colors cursor-pointer"
              >
                <span>Speak with our team</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Learn More Studio Modal */}
      {showFullModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-brand-charcoal border border-brand-purple/40 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-brand-cardBorder">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-brand-purpleLight" />
                <h3 className="text-xl font-bold text-white">About Nexbyte Tech Studio</h3>
              </div>
              <button
                onClick={() => setShowFullModal(false)}
                className="p-1.5 rounded-lg text-brand-grey hover:text-white hover:bg-brand-card transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-brand-grey leading-relaxed">
              <p>
                <strong className="text-white">Nexbyte Tech Studio</strong> was established with a singular focus: bringing world-class engineering and creative clarity to companies shaping the future.
              </p>
              <p>
                Our team unites senior full-stack developers, UI/UX designers, and systems architects who believe digital experiences should be both visually captivating and mathematically efficient. We reject cluttered templates, bloated dependencies, and sluggish load times in favor of precision, beauty, and speed.
              </p>
              
              <div className="p-4 rounded-xl bg-brand-deep/80 border border-brand-purple/30 my-4 space-y-2">
                <h4 className="text-sm font-bold text-brand-purpleLight uppercase tracking-wider">Studio Philosophy</h4>
                <p className="text-xs text-white">
                  "Innovating Today, Transforming Tomorrow." Every line of code, interaction state, and visual pixel we build is designed to give our partners an enduring competitive edge.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-brand-card border border-brand-cardBorder">
                  <div className="font-semibold text-white text-xs">Primary Tech Stack</div>
                  <div className="text-xs text-brand-grey mt-1">React, Next.js, Node.js, TypeScript, Tailwind, Python, AWS</div>
                </div>
                <div className="p-3 rounded-lg bg-brand-card border border-brand-cardBorder">
                  <div className="font-semibold text-white text-xs">Delivery Model</div>
                  <div className="text-xs text-brand-grey mt-1">Agile Sprints, Bi-weekly Demos, Direct Slack & Video Sync</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-cardBorder flex justify-end">
              <button
                type="button"
                onClick={() => setShowFullModal(false)}
                className="px-5 py-2.5 rounded-xl bg-brand-purple hover:bg-brand-purpleLight text-white font-semibold text-sm transition-colors"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
