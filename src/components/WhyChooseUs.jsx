import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Palette,
  Cpu,
  Smartphone,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Activity,
  Code
} from 'lucide-react';

export default function WhyChooseUs({ onOpenContact }) {
  const [activeBenefit, setActiveBenefit] = useState(0);

  const benefits = [
    {
      id: 'creative',
      title: 'Creative Digital Experiences',
      icon: Palette,
      shortDesc: 'Visually striking, brand-aligned interfaces that capture attention and create emotional connection with audiences.',
      details: 'We blend modern aesthetic direction, purposeful micro-animations, and typographic precision to give your digital products an unmistakable, memorable brand presence.',
      stat: '100%',
      statLabel: 'Bespoke Custom Styling'
    },
    {
      id: 'modern-tech',
      title: 'Modern Technology',
      icon: Cpu,
      shortDesc: 'Built with the latest frameworks and modern web architectures for blazing speed and effortless scalability.',
      details: 'Leveraging React 19, TypeScript, edge serverless computing, and headless architectures to ensure your digital foundation never turns into technical debt.',
      stat: '0.4s',
      statLabel: 'Avg Contentful Paint'
    },
    {
      id: 'responsive',
      title: 'Responsive Development',
      icon: Smartphone,
      shortDesc: 'Flawless performance across every screen size, device orientation, and platform without visual compromises.',
      details: 'Every interface is engineered mobile-first with adaptive layouts, touch gestures, and high-density retina asset optimization across iOS, Android, and 4K displays.',
      stat: '100%',
      statLabel: 'Device Cross-Compatibility'
    },
    {
      id: 'user-centred',
      title: 'User-Centred Design',
      icon: HeartHandshake,
      shortDesc: 'Interfaces designed around user psychology and frictionless interaction patterns that drive conversions.',
      details: 'We analyze real behavioral user flows and streamline navigation, reducing cognitive strain and turning curious visitors into committed clients.',
      stat: '+34%',
      statLabel: 'Avg Conversion Improvement'
    },
    {
      id: 'reliable',
      title: 'Reliable Solutions',
      icon: ShieldCheck,
      shortDesc: 'Robust engineering, clean test suites, enterprise-grade security, and dependable long-term maintenance.',
      details: 'We implement zero-trust security postures, automated CI/CD deployment checks, and real-time uptime monitoring to ensure uninterrupted digital operations.',
      stat: '99.99%',
      statLabel: 'Target System Availability'
    }
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 bg-brand-deep text-white overflow-hidden border-t border-brand-purple/15"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purpleLight/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-xs font-semibold text-brand-purpleLight uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Nexbyte Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Why Businesses <span className="text-gradient-purple">Choose Nexbyte.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-grey max-w-2xl mx-auto"
          >
            We don’t just build software. We forge strategic, high-performance digital partnerships that empower businesses to lead in their sectors.
          </motion.p>
        </div>

        {/* 2-Column Layout: Left Side Benefits List, Right Side Tech Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 5 Benefits (Animate into view as visitors scroll) */}
          <div className="lg:col-span-7 space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isSelected = activeBenefit === index;

              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveBenefit(index)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                    isSelected
                      ? 'bg-brand-charcoal border-brand-purple shadow-lg shadow-brand-purple/20 translate-x-1.5'
                      : 'bg-brand-card/70 border-brand-cardBorder hover:border-brand-purple/40 hover:bg-brand-card'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/40'
                          : 'bg-brand-deep text-brand-purpleLight border border-brand-purple/20'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {benefit.title}
                        </h3>
                        <span className="text-xs font-mono font-semibold text-brand-purpleLight hidden sm:block">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-1.5 text-xs sm:text-sm text-brand-grey leading-relaxed">
                        {benefit.shortDesc}
                      </p>

                      {/* Expandable details when active */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pt-3 border-t border-brand-cardBorder text-xs text-white/90 leading-relaxed"
                        >
                          {benefit.details}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Visually Interesting Technology Showcase Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-charcoal to-brand-card border border-brand-purple/40 p-6 sm:p-8 shadow-2xl shadow-brand-purple/20 overflow-hidden">
              
              {/* Top Graphic Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-brand-purpleLight animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Studio Engineering Monitor
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30">
                  Realtime Health
                </span>
              </div>

              {/* Interactive Performance Radar / Metric Cards */}
              <div className="space-y-4">
                
                {/* Lighthouse 100/100 Visual */}
                <div className="p-4 rounded-xl bg-brand-deep/90 border border-brand-purple/25">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-grey">Core Web Vitals Benchmark</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">PASSED</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-[#141224] border border-emerald-500/20">
                      <div className="text-base sm:text-lg font-bold font-mono text-emerald-400">100</div>
                      <div className="text-[9px] text-brand-grey">Performance</div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#141224] border border-emerald-500/20">
                      <div className="text-base sm:text-lg font-bold font-mono text-emerald-400">100</div>
                      <div className="text-[9px] text-brand-grey">Accessibility</div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#141224] border border-emerald-500/20">
                      <div className="text-base sm:text-lg font-bold font-mono text-emerald-400">100</div>
                      <div className="text-[9px] text-brand-grey">Best Practices</div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#141224] border border-emerald-500/20">
                      <div className="text-base sm:text-lg font-bold font-mono text-emerald-400">100</div>
                      <div className="text-[9px] text-brand-grey">SEO Health</div>
                    </div>
                  </div>
                </div>

                {/* Highlighted active benefit card */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-brand-purple/20 via-brand-card to-brand-deep border border-brand-purple/40">
                  <div className="text-[11px] font-mono text-brand-purpleLight font-semibold uppercase mb-1">
                    Featured Metric Highlight
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-1">
                    {benefits[activeBenefit].stat}
                  </div>
                  <div className="text-xs text-brand-grey mb-3">
                    {benefits[activeBenefit].statLabel}
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {benefits[activeBenefit].details}
                  </p>
                </div>

                {/* Engineering guarantee pill */}
                <div className="p-3.5 rounded-xl bg-[#120F24] border border-brand-cardBorder flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-purpleLight shrink-0" />
                  <span className="text-xs text-brand-grey">
                    Code delivered with comprehensive testing, documentation, and zero technical debt.
                  </span>
                </div>
              </div>

              {/* Bottom CTA within showcase */}
              <div className="mt-6 pt-5 border-t border-white/10 text-center">
                <a
                  href="#contact"
                  onClick={onOpenContact}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-purple hover:bg-brand-purpleLight text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-brand-purple/30"
                >
                  <span>Build With Nexbyte Tech Studio</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
