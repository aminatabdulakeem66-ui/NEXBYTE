import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, ShieldAlert, Cpu, BarChart2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose, onDiscussProject }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-brand-charcoal border border-brand-purple/40 rounded-2xl sm:rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-cardBorder bg-[#131122]">
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30 font-semibold tracking-wide">
              {project.category}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
              <Sparkles className="w-3 h-3" />
              <span>Concept Showcase</span>
            </div>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-brand-deep text-brand-grey hover:text-white hover:bg-brand-card transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Title & Important Concept Notice */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-base text-brand-grey leading-relaxed">
              {project.shortDesc}
            </p>

            {/* Prominent Concept Project Banner as required */}
            <div className="mt-4 p-3.5 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-brand-purpleLight shrink-0 mt-0.5" />
              <div className="text-xs text-brand-grey leading-relaxed">
                <span className="font-bold text-white uppercase tracking-wider block mb-0.5">
                  Studio Concept Project Disclosure
                </span>
                {project.clientStatus}. This project is designed as an architectural exploration and creative standard benchmark by Nexbyte Tech Studio to showcase technical capabilities and interface design.
              </div>
            </div>
          </div>

          {/* Realistic High-Fidelity Mockup Preview Box */}
          <div className="relative rounded-2xl overflow-hidden border border-brand-purple/30 bg-black/60 shadow-xl group">
            <img
              src={project.previewImage}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[460px] mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-brand-deep/90 border border-brand-purple/30 text-[11px] font-mono text-brand-purpleLight backdrop-blur-md">
              High-Fidelity Interface Prototype
            </div>
          </div>

          {/* Metric Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-purpleLight mb-3 flex items-center gap-2">
              <BarChart2 className="w-4 h-4" />
              <span>Target Benchmark Performance</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-brand-deep border border-brand-cardBorder text-center">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-brand-purpleLight">{m.value}</div>
                  <div className="text-xs text-brand-grey mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* In-depth Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-purpleLight mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Architectural Specifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-card/70 border border-brand-cardBorder">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-brand-grey">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-purpleLight mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-brand-deep border border-brand-purple/25 text-xs font-mono text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-brand-cardBorder bg-[#131122] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-brand-grey hidden sm:block">
            Need a similar product built for your business?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-semibold text-brand-grey hover:text-white transition-colors"
            >
              Close Preview
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onDiscussProject) onDiscussProject(project.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purpleDark hover:from-brand-purpleLight hover:to-brand-purple text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-brand-purple/30"
            >
              <span>Build A Similar Solution</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
