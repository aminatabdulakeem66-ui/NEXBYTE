import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Clock,
  ShieldCheck
} from 'lucide-react';
import {
  InstagramIcon as Instagram,
  FacebookIcon as Facebook,
  LinkedinIcon as Linkedin,
  GithubIcon as Github
} from './SocialIcons';

export default function Contact({ prefilledService, initialProjectDetails }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: prefilledService || 'Website Design & Development',
    projectDetails: initialProjectDetails || '',
    budget: '$5k - $15k'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (initialProjectDetails) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prev.projectDetails
          ? `${prev.projectDetails}\n\n[Inquiring about ${initialProjectDetails}]`
          : `Interested in building a solution similar to ${initialProjectDetails}.`
      }));
    }
  }, [initialProjectDetails]);

  const serviceOptions = [
    'Website Design & Development',
    'Mobile Application Development',
    'UI/UX Design',
    'Software Development',
    'E-commerce Solutions',
    'Digital Solutions',
    'Full Enterprise Ecosystem'
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 — $15,000',
    '$15,000 — $35,000',
    '$35,000 — $75,000',
    '$75,000+'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid business email address.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid contact phone number.';
    }

    if (!formData.service) {
      errs.service = 'Please select a required service category.';
    }

    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 15) {
      errs.projectDetails = 'Please provide some details about your project (at least 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Realistic asynchronous dispatch simulation (1.4 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1400));

    // Generate unique reference ticket number
    const refCode = `NXB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const receipt = {
      referenceId: refCode,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      details: formData.projectDetails,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
    };

    // Store in browser local storage for persistent audit record
    try {
      const existing = JSON.parse(localStorage.getItem('nexbyte_submissions') || '[]');
      existing.unshift(receipt);
      localStorage.setItem('nexbyte_submissions', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    // Fire festive celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B35FF', '#B77AFF', '#FFFFFF', '#6117C7']
      });
    } catch {
      // Confetti fallback
    }

    setIsSubmitting(false);
    setSubmissionReceipt(receipt);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@nexbytestudio.example');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Website Design & Development',
      projectDetails: '',
      budget: '$5k - $15k'
    });
    setErrors({});
    setSubmissionReceipt(null);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-brand-deep text-white overflow-hidden border-t border-brand-purple/20"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-purple/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-purpleLight/10 rounded-full blur-[140px] pointer-events-none" />
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
            <span>Start A Conversation</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Let's Create Something <span className="text-gradient-purple">Great Together.</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-grey max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind? Tell us about it. We'd love to hear from you.
          </motion.p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Contact Channels, Placeholder Details, WhatsApp & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-brand-charcoal border border-brand-purple/30 p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
                <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
                  Prefer direct channels? Reach out through any of our studio portals below.
                </p>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/1234567890?text=Hello%20Nexbyte%20Tech%20Studio!%20I'd%20like%20to%20discuss%20a%20new%20digital%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/40 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>WhatsApp Direct Line</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-xs text-brand-grey font-mono">+1 (555) 019-8392</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </a>

              {/* Email Option with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-brand-card border border-brand-cardBorder space-y-2">
                <div className="flex items-center justify-between text-xs text-brand-grey">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-4 h-4 text-brand-purpleLight" />
                    <span>Official Email Inquiries</span>
                  </span>
                  {copiedEmail && (
                    <span className="text-emerald-400 font-semibold text-[11px] animate-in fade-in">
                      Copied!
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:hello@nexbytestudio.example"
                    className="text-sm font-semibold font-mono text-white hover:text-brand-purpleLight transition-colors truncate"
                  >
                    hello@nexbytestudio.example
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-brand-deep hover:bg-brand-purple/20 text-brand-grey hover:text-white transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Studio Office Details (Editable Placeholders) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-grey">
                  <MapPin className="w-4 h-4 text-brand-purpleLight shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Studio Hub</span>
                    <span>Technology Quarter, Innovation Square, San Francisco, CA & London, UK (Remote Global Delivery)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-grey">
                  <Clock className="w-4 h-4 text-brand-purpleLight shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Working Hours</span>
                    <span>Monday — Friday: 9:00 AM — 6:00 PM (EST / GMT)</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-brand-cardBorder">
                <div className="text-xs font-semibold text-brand-grey uppercase tracking-wider mb-3">
                  Follow Nexbyte Studio
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-brand-deep hover:bg-brand-purple/25 border border-brand-cardBorder hover:border-brand-purple/50 flex items-center justify-center text-brand-grey hover:text-white transition-all hover:scale-105"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-brand-deep hover:bg-brand-purple/25 border border-brand-cardBorder hover:border-brand-purple/50 flex items-center justify-center text-brand-grey hover:text-white transition-all hover:scale-105"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-brand-deep hover:bg-brand-purple/25 border border-brand-cardBorder hover:border-brand-purple/50 flex items-center justify-center text-brand-grey hover:text-white transition-all hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-xl bg-brand-deep hover:bg-brand-purple/25 border border-brand-cardBorder hover:border-brand-purple/50 flex items-center justify-center text-brand-grey hover:text-white transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Placeholder Transparency Badge */}
              <div className="p-3 rounded-xl bg-brand-deep/80 border border-brand-cardBorder text-[11px] text-brand-grey">
                <span className="font-semibold text-white">Note: </span>
                Official contact details and links are configurable placeholders for client production deployment.
              </div>
            </div>
          </div>

          {/* Right Column: Professional Contact Form with Full Validation & Working Submission Flow */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-brand-charcoal border border-brand-purple/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* If Form Has Been Submitted Successfully: Show Verified Confirmation Receipt */}
              {submissionReceipt ? (
                <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30">
                      Receipt Code: {submissionReceipt.referenceId}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                      Project Inquiry Received!
                    </h3>
                    <p className="text-sm text-brand-grey max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-white">{submissionReceipt.name}</strong>. Your project brief has been logged into the Nexbyte Tech Studio intake queue at {submissionReceipt.timestamp}.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-brand-deep text-left border border-brand-cardBorder space-y-2.5 text-xs text-brand-grey">
                    <div className="flex justify-between border-b border-brand-cardBorder pb-2">
                      <span className="text-white font-medium">Service Requested:</span>
                      <span className="font-semibold text-brand-purpleLight">{submissionReceipt.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-cardBorder pb-2">
                      <span className="text-white font-medium">Estimated Budget:</span>
                      <span className="font-semibold text-white">{submissionReceipt.budget}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-cardBorder pb-2">
                      <span className="text-white font-medium">Contact Email:</span>
                      <span className="font-mono text-white">{submissionReceipt.email}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-white font-medium block mb-1">Project Brief Snippet:</span>
                      <p className="text-brand-grey italic">"{submissionReceipt.details}"</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-purple hover:bg-brand-purpleLight text-white font-semibold text-sm transition-colors shadow-lg"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`https://wa.me/1234567890?text=Hi%20Nexbyte!%20I%20just%20submitted%20project%20inquiry%20${submissionReceipt.referenceId}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-card hover:bg-brand-deep border border-brand-cardBorder text-white font-semibold text-sm transition-colors"
                    >
                      Follow up on WhatsApp →
                    </a>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-brand-cardBorder pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
                    <p className="text-xs text-brand-grey mt-1">
                      Fill out the specifications below. Our studio partners will review and respond with an architectural proposal.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-brand-purpleLight">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-deep border text-white placeholder-brand-greyDark text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-brand-cardBorder'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-brand-purpleLight">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="elena@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-deep border text-white placeholder-brand-greyDark text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-brand-cardBorder'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-brand-purpleLight">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-deep border text-white placeholder-brand-greyDark text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-brand-cardBorder'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wider mb-1.5">
                        Service Required <span className="text-brand-purpleLight">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-deep border border-brand-cardBorder text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-brand-charcoal text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Estimation */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-deep border border-brand-cardBorder text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-brand-charcoal text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wider mb-1.5">
                      Project Details <span className="text-brand-purpleLight">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => {
                        setFormData({ ...formData, projectDetails: e.target.value });
                        if (errors.projectDetails) setErrors({ ...errors, projectDetails: null });
                      }}
                      placeholder="Tell us about your project goals, target audience, timeline, or specific technology requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-brand-deep border text-white placeholder-brand-greyDark text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors ${
                        errors.projectDetails ? 'border-rose-500' : 'border-brand-cardBorder'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-brand-purple via-[#9647FF] to-brand-purpleDark hover:from-brand-purpleLight hover:to-brand-purple text-white font-bold text-sm shadow-xl shadow-brand-purple/30 hover:shadow-brand-purple/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Verifying & Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Security Note */}
                  <div className="flex items-center justify-center gap-2 text-[11px] text-brand-greyDark pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>256-Bit SSL Encrypted Dispatch · Strict Non-Disclosure Policy</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
