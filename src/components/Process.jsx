import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  FileSpreadsheet,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Process({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      subtitle: 'Understanding your business, ideas and goals.',
      icon: Compass,
      desc: 'We start by unpacking your vision, audience, competitors, and technical constraints. Through collaborative workshops, we define clear project objectives and success metrics.',
      deliverables: [
        'Stakeholder alignment sessions',
        'User persona & workflow mapping',
        'Technical feasibility & architecture assessment',
        'Comprehensive project scope & roadmap'
      ],
      timeframe: 'Week 1 — Alignment'
    },
    {
      number: '02',
      title: 'Planning',
      subtitle: 'Creating a clear strategy and project direction.',
      icon: FileSpreadsheet,
      desc: 'We architect the blueprint: wireframes, technical stack selection, database modeling, and interactive Figma design systems before writing a single line of production code.',
      deliverables: [
        'Interactive Figma UI/UX prototypes',
        'Component design system & tokens',
        'Database schemas & API specifications',
        'Sprint milestone schedule & backlog'
      ],
      timeframe: 'Weeks 2-3 — Blueprint'
    },
    {
      number: '03',
      title: 'Development',
      subtitle: 'Designing and building your digital solution.',
      icon: Code2,
      desc: 'Our full-stack engineers build modern, modular, and type-safe code with continuous integration. You receive regular demo builds to test features in real-time as they are created.',
      deliverables: [
        'Production frontend & backend engineering',
        'Responsive mobile & desktop implementations',
        'Third-party APIs & payment gateway setup',
        'Bi-weekly staging environment walkthroughs'
      ],
      timeframe: 'Weeks 4-8 — Construction'
    },
    {
      number: '04',
      title: 'Delivery',
      subtitle: 'Testing, refining and delivering the finished project.',
      icon: Rocket,
      desc: 'Rigorous cross-browser testing, accessibility compliance checks, and security audits culminate in a smooth production release, team training, and post-launch warranty.',
      deliverables: [
        'Cross-browser & mobile stress testing',
        'Lighthouse performance 95+ score tuning',
        'Domain DNS, SSL & cloud server configuration',
        '30-day post-launch hypercare & maintenance'
      ],
      timeframe: 'Launch & Hypercare'
    }
  ];

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 bg-brand-deep text-white overflow-hidden border-t border-brand-purple/15"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />
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
            <span>Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            How We Bring <span className="text-gradient-purple">Ideas to Life.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-grey max-w-2xl mx-auto"
          >
            A transparent, agile, four-stage development cycle engineered to take your product from early concept to global launch with zero surprises.
          </motion.p>
        </div>

        {/* Desktop Horizontal Process Timeline (lg screens) */}
        <div className="hidden lg:block relative mb-14">
          
          {/* Connected Process Line with Purple Gradient */}
          <div className="absolute top-1/2 -translate-y-1/2 left-12 right-12 h-[3px] bg-[#1E1C33] -z-0">
            <div
              className="h-full bg-gradient-to-r from-brand-purple to-brand-purpleLight transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isPast = activeStep >= index;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className="cursor-pointer group flex flex-col items-center text-center"
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl ${
                      isActive
                        ? 'bg-gradient-to-br from-brand-purpleLight to-brand-purple text-white scale-110 shadow-brand-purple/40 ring-4 ring-brand-purple/30'
                        : isPast
                        ? 'bg-brand-card text-brand-purpleLight border-2 border-brand-purple'
                        : 'bg-brand-charcoal text-brand-grey border border-brand-cardBorder group-hover:border-brand-purple/50'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Number & Title */}
                  <div className="mt-5">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest uppercase ${
                        isActive ? 'text-brand-purpleLight' : 'text-brand-greyDark'
                      }`}
                    >
                      Step {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-brand-purpleLight transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-brand-grey mt-1.5 max-w-[220px] mx-auto line-clamp-2">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Details Card (Desktop) */}
        <div className="hidden lg:block">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-3xl bg-brand-charcoal border border-brand-purple/40 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono font-bold text-brand-purpleLight">
                    {steps[activeStep].number}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {steps[activeStep].title} Phase
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-brand-purple/20 text-brand-purpleLight font-mono">
                    {steps[activeStep].timeframe}
                  </span>
                </div>

                <p className="text-base text-brand-grey leading-relaxed">
                  {steps[activeStep].desc}
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-purpleLight hover:text-white transition-colors"
                  >
                    <span>Next Milestone Phase</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="col-span-5 p-6 rounded-2xl bg-brand-card border border-brand-cardBorder space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Key Deliverables of this stage</span>
                </h4>
                {steps[activeStep].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-grey">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purpleLight mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Vertical Timeline (progressive stack on tablets and phones) */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-brand-charcoal border border-brand-cardBorder p-6 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/20 border border-brand-purple/40 text-brand-purpleLight flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-brand-purpleLight">
                        {step.number}
                      </span>
                      <span className="text-xs font-mono text-brand-greyDark">•</span>
                      <span className="text-xs font-mono text-brand-grey">{step.timeframe}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-grey mt-1">{step.subtitle}</p>
                    <p className="text-xs text-brand-grey mt-2 leading-relaxed">{step.desc}</p>

                    <div className="mt-4 pt-3 border-t border-brand-cardBorder space-y-1.5">
                      {step.deliverables.map((del, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-brand-grey">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
