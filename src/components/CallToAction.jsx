import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, MessageSquare } from 'lucide-react';

export default function CallToAction({ onSelectPage }) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-brand-charcoal via-[#19062D] to-brand-deep text-white border-t border-brand-purple/20">
      
      {/* Background Animated Gradient Orbs & Glowing Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-purple/25 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-purpleLight/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-purpleDark/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Geometric Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-1/6 w-3 h-3 rounded-full bg-brand-purpleLight opacity-60 animate-float-slow" />
        <div className="absolute bottom-20 left-1/4 w-4 h-4 rounded-lg border border-brand-purple/50 opacity-40 animate-float-reverse rotate-45" />
        <div className="absolute top-1/3 right-1/5 w-5 h-5 rounded-md bg-brand-purple/20 border border-brand-purple/40 opacity-50 animate-float-slow rotate-12" />
        <div className="absolute bottom-24 right-1/6 w-3 h-3 rounded-full bg-emerald-400 opacity-50 animate-ping" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purple/35 text-xs font-semibold text-brand-purpleLight uppercase tracking-wider mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready For The Next Level?</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto"
        >
          Have an Idea?{' '}
          <span className="bg-gradient-to-r from-brand-white via-brand-purpleLight to-brand-purple bg-clip-text text-transparent">
            Let's Build It.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-brand-grey max-w-2xl mx-auto leading-relaxed"
        >
          Your next digital project starts with a conversation. Let's turn your ideas into something extraordinary.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => onSelectPage && onSelectPage('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-brand-purple via-[#9647FF] to-brand-purpleDark hover:from-brand-purpleLight hover:to-brand-purple text-white font-extrabold text-base shadow-2xl shadow-brand-purple/40 hover:shadow-brand-purple/60 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </button>

          <a
            href="https://wa.me/1234567890?text=Hi%20Nexbyte%20Tech%20Studio,%20I'd%20like%20to%20discuss%20a%20new%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-2xl bg-brand-charcoal/90 border border-brand-purple/40 hover:border-brand-purple hover:bg-brand-card text-white font-bold text-base transition-all duration-300 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Sub-note */}
        <p className="mt-8 text-xs text-brand-grey font-mono">
          ⚡ Typically responding within 24 hours · NDA signed on request
        </p>
      </div>
    </section>
  );
}
