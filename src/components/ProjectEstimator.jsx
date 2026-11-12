import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Layers } from 'lucide-react';

export default function ProjectEstimator({ onTransferScope }) {
  const [platform, setPlatform] = useState('web');
  const [timeline, setTimeline] = useState('standard');
  const [selectedFeatures, setSelectedFeatures] = useState(['responsive', 'seo']);

  const platformOptions = [
    { id: 'web', name: 'Website Design & Dev', basePrice: 4500, timeWeeks: 3 },
    { id: 'mobile', name: 'Mobile App (iOS & Android)', basePrice: 8500, timeWeeks: 6 },
    { id: 'uiux', name: 'UI/UX Design System', basePrice: 3800, timeWeeks: 2 },
    { id: 'software', name: 'Custom Cloud Software', basePrice: 9500, timeWeeks: 7 },
    { id: 'ecommerce', name: 'Headless E-commerce', basePrice: 6200, timeWeeks: 4 },
  ];

  const featureOptions = [
    { id: 'responsive', name: 'Responsive Mobile-First Architecture', price: 0 },
    { id: 'seo', name: 'Lighthouse 95+ SEO & Speed Tuning', price: 400 },
    { id: 'cms', name: 'Headless CMS Integration', price: 850 },
    { id: 'auth', name: 'User Authentication & RBAC', price: 1200 },
    { id: 'payments', name: 'Stripe / Global Payment Gateway', price: 950 },
    { id: 'ai', name: 'Custom AI / LLM Workflow Integration', price: 1800 },
  ];

  const timelineMultipliers = {
    expedited: { label: 'Expedited Sprint (Priority Delivery)', factor: 1.25, timeFactor: 0.65 },
    standard: { label: 'Standard Agile Sprints', factor: 1.0, timeFactor: 1.0 },
    relaxed: { label: 'Flexible Phased Milestones', factor: 0.95, timeFactor: 1.3 },
  };

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const currentPlatform = platformOptions.find((p) => p.id === platform) || platformOptions[0];
  const featuresTotal = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find((f) => f.id === fId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const rawPrice = (currentPlatform.basePrice + featuresTotal) * timelineMultipliers[timeline].factor;
  const estimatedCost = Math.round(rawPrice / 50) * 50;
  const estimatedWeeks = Math.max(2, Math.round(currentPlatform.timeWeeks * timelineMultipliers[timeline].timeFactor));

  const handleApplyToContact = () => {
    const summary = `Estimated Scope: ${currentPlatform.name} | Timeline: ~${estimatedWeeks} weeks (${timelineMultipliers[timeline].label}) | Selected Features: ${selectedFeatures.join(', ')} | Approx. Est: $${estimatedCost.toLocaleString()}`;
    if (onTransferScope) {
      onTransferScope(currentPlatform.name, summary);
    }
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-brand-charcoal border-t border-brand-purple/20 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30 text-xs font-semibold uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Scope Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Estimate Your Project Timeline & Scope
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-brand-grey">
            Select your technical requirements to generate an instant feasibility estimate.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6 bg-brand-card p-6 sm:p-7 rounded-2xl border border-brand-cardBorder">
            
            {/* Step 1: Platform Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-purpleLight mb-2.5 block">
                1. Select Solution Platform
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {platformOptions.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlatform(p.id)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                      platform === p.id
                        ? 'bg-brand-purple text-white border-brand-purple shadow-md shadow-brand-purple/30'
                        : 'bg-brand-deep text-brand-grey border-brand-cardBorder hover:text-white hover:border-brand-purple/40'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Feature Addons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-purpleLight mb-2.5 block">
                2. Key Capabilities & Addons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all border flex items-center justify-between ${
                        isChecked
                          ? 'bg-brand-purple/20 text-white border-brand-purple/50'
                          : 'bg-brand-deep text-brand-grey border-brand-cardBorder hover:text-white'
                      }`}
                    >
                      <span className="truncate pr-2">{feat.name}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 text-[10px] ${
                          isChecked ? 'bg-brand-purple text-white' : 'border border-brand-greyDark'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Timeline Pace */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-purpleLight mb-2.5 block">
                3. Delivery Timeline Priority
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(timelineMultipliers).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTimeline(key)}
                    className={`p-2.5 rounded-xl text-center text-xs transition-all border ${
                      timeline === key
                        ? 'bg-brand-purple text-white border-brand-purple font-semibold shadow-md'
                        : 'bg-brand-deep text-brand-grey border-brand-cardBorder hover:text-white'
                    }`}
                  >
                    {key.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-charcoal to-[#18112C] p-6 sm:p-8 rounded-2xl border border-brand-purple/40 shadow-xl space-y-6">
            <div>
              <span className="text-[11px] font-mono text-brand-purpleLight uppercase font-semibold">
                Estimated Project Investment
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-mono">
                ${estimatedCost.toLocaleString()}
                <span className="text-xs font-normal text-brand-grey font-sans block mt-0.5">
                  Approximate budget benchmark
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-deep/80 border border-brand-cardBorder space-y-2">
              <div className="flex justify-between text-xs text-brand-grey">
                <span>Estimated Timeline:</span>
                <span className="font-bold text-white font-mono">~{estimatedWeeks} Weeks</span>
              </div>
              <div className="flex justify-between text-xs text-brand-grey">
                <span>Active Framework:</span>
                <span className="font-semibold text-brand-purpleLight">Next.js / React</span>
              </div>
              <div className="flex justify-between text-xs text-brand-grey">
                <span>Post-Launch Warranty:</span>
                <span className="text-emerald-400 font-semibold">30 Days Included</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleApplyToContact}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purpleDark hover:from-brand-purpleLight hover:to-brand-purple text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-purple/30 transition-all"
            >
              <span>Transfer Scope to Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-brand-greyDark font-mono">
              * Non-binding estimate. Official proposal is finalized after discovery call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
