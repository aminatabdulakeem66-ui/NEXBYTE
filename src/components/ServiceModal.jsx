import React from 'react';
import { X, CheckCircle, ArrowRight, Sparkles, Layers, Clock, ShieldCheck } from 'lucide-react';

export default function ServiceModal({ service, onClose, onRequestService }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-brand-charcoal border border-brand-purple/40 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-brand-cardBorder">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-purpleLight mb-1.5 uppercase">
              <span>Service {service.number}</span>
              <span>•</span>
              <span>Nexbyte Studio Solution</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {service.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-brand-deep text-brand-grey hover:text-white hover:bg-brand-card transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-brand-purpleLight uppercase tracking-wider mb-2">
              Strategic Scope & Overview
            </h4>
            <p className="text-sm sm:text-base text-brand-grey leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="p-5 rounded-xl bg-brand-deep/80 border border-brand-cardBorder">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-purpleLight" />
              <span>Standard Production Deliverables</span>
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-grey">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack used */}
          <div>
            <h4 className="text-xs font-bold text-brand-purpleLight uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Tooling & Frameworks</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-brand-card text-xs font-mono text-white border border-brand-purple/25"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal for note */}
          <div className="p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-xs text-brand-grey">
            <span className="font-semibold text-white">Ideal For: </span>
            {service.idealFor}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-brand-cardBorder flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-brand-grey hover:text-white transition-colors"
          >
            Close Overview
          </button>

          <button
            type="button"
            onClick={() => {
              onRequestService(service.title);
              const contactEl = document.querySelector('#contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purpleDark hover:from-brand-purpleLight hover:to-brand-purple text-white font-semibold text-sm shadow-lg shadow-brand-purple/30 transition-all duration-200"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
