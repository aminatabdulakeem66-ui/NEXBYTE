import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  BarChart3,
  Globe2,
  Smartphone
} from 'lucide-react';

export default function Hero({ onSelectPage }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F5F2FE] via-[#FAF8FF] via-75% to-[#080810]"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-brand-purpleLight/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-44 right-1/4 w-[420px] h-[420px] bg-brand-purple/20 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      
      {/* Subtle moving grid background */}
      <div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none" />

      {/* Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Studio Tagline Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-brand-purple/25 shadow-sm text-brand-deep text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span className="text-brand-purple font-bold">Nexbyte Tech Studio</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 font-medium">Innovating Today, Transforming Tomorrow</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A14] leading-[1.12]"
          >
            Building Digital Experiences That{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-brand-purple via-[#7C22E8] to-[#A855F7] bg-clip-text text-transparent">
                Move Businesses Forward.
              </span>
              {/* Subtle underline curve */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-brand-purple/30"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M1 9C50 3 150 2 299 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-[#3E3A54] max-w-2xl font-normal leading-relaxed"
          >
            We transform ideas into powerful digital experiences through innovative websites, mobile applications and smart technology solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => onSelectPage && onSelectPage('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-bold text-base bg-gradient-to-r from-brand-purple via-[#7E2FE8] to-brand-purpleDark hover:from-brand-purpleLight hover:to-brand-purple shadow-xl shadow-brand-purple/35 hover:shadow-brand-purple/50 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => onSelectPage && onSelectPage('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[#120F26] font-bold text-base bg-white border-2 border-brand-purple/30 hover:border-brand-purple hover:bg-brand-lavenderHero shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span>Start a Project</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </button>
          </motion.div>

          {/* Quick Credibility Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#4E4A68] font-medium"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-purple" />
              <span>Full-Stack Engineering</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-purple" />
              <span>Modern Micro-Interactions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-purple" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-purple" />
              <span>Performance 99+ Scores</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Technology Visual Showcase: Laptop, Mobile Interface, Dashboard, Floating UI Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 sm:mt-18 max-w-5xl mx-auto"
        >
          {/* Ambient Glow behind mockup */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/30 via-brand-purpleLight/20 to-transparent rounded-3xl blur-2xl -z-10" />

          {/* Laptop Frame Container */}
          <div className="relative mx-auto rounded-2xl bg-[#0F0D1C] border border-[#2F2952] shadow-2xl shadow-brand-purple/20 p-2 sm:p-3.5 backdrop-blur-xl">
            {/* Laptop Screen Top Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#241F3E] bg-[#141224] rounded-t-xl mb-2 sm:mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-3 text-[11px] font-mono text-[#827E9F]">
                  nexbyte-studio.app/workspace/cloud-core
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-brand-purple/20 text-brand-purpleLight border border-brand-purple/30">
                  ⚡ v3.4 LIVE
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* Laptop Interior: Live Multi-layer Studio Dashboard */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 p-2 sm:p-4 bg-[#0A0815] rounded-xl text-left">
              {/* Left Column: Metrics & Architecture */}
              <div className="col-span-12 lg:col-span-8 space-y-3 sm:space-y-4">
                {/* Metric row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#141126] border border-[#29224A] hover:border-brand-purple/40 transition-colors">
                    <div className="flex items-center justify-between text-xs text-brand-grey mb-1">
                      <span>Response Time</span>
                      <Zap className="w-3.5 h-3.5 text-brand-purpleLight" />
                    </div>
                    <div className="text-lg sm:text-2xl font-bold font-mono text-white">0.42s</div>
                    <div className="text-[10px] text-emerald-400 font-medium">99.98% P99 Latency</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#141126] border border-[#29224A] hover:border-brand-purple/40 transition-colors">
                    <div className="flex items-center justify-between text-xs text-brand-grey mb-1">
                      <span>Uptime SLA</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-lg sm:text-2xl font-bold font-mono text-white">99.99%</div>
                    <div className="text-[10px] text-brand-purpleLight font-medium">Multi-Region Failover</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#141126] border border-[#29224A] hover:border-brand-purple/40 transition-colors">
                    <div className="flex items-center justify-between text-xs text-brand-grey mb-1">
                      <span>Active Deploy</span>
                      <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <div className="text-lg sm:text-2xl font-bold font-mono text-white">48 Pods</div>
                    <div className="text-[10px] text-sky-400 font-medium">Auto-scaling clusters</div>
                  </div>
                </div>

                {/* Dashboard Chart Mockup Area */}
                <div className="p-4 rounded-xl bg-[#141126] border border-[#29224A]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-brand-purpleLight" />
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        Global Traffic Throughput & Performance Index
                      </span>
                    </div>
                    <span className="text-xs font-mono text-brand-purpleLight bg-brand-purple/15 px-2 py-0.5 rounded">
                      Real-time 120 FPS
                    </span>
                  </div>

                  {/* SVG Chart Graphic */}
                  <div className="h-28 sm:h-36 w-full relative">
                    <svg className="w-full h-full" viewBox="0 0 600 140" fill="none">
                      <defs>
                        <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8B35FF" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#8B35FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 110 Q 75 90 150 65 T 300 45 T 450 60 T 600 20 L 600 140 L 0 140 Z"
                        fill="url(#heroChartFill)"
                      />
                      <path
                        d="M0 110 Q 75 90 150 65 T 300 45 T 450 60 T 600 20"
                        stroke="#8B35FF"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Interactive Chart Nodes */}
                      <circle cx="150" cy="65" r="4" fill="#B77AFF" />
                      <circle cx="300" cy="45" r="4" fill="#B77AFF" />
                      <circle cx="450" cy="60" r="4" fill="#B77AFF" />
                      <circle cx="600" cy="20" r="5" fill="#FFFFFF" className="animate-ping" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column: Code Stream & Stack */}
              <div className="col-span-12 lg:col-span-4 flex flex-col justify-between space-y-3">
                {/* Micro Code Terminal */}
                <div className="p-3.5 rounded-xl bg-[#120F24] border border-[#2B244F] font-mono text-xs">
                  <div className="flex items-center justify-between text-brand-grey text-[11px] pb-2 border-b border-[#231C40] mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-brand-purpleLight" />
                      <span>nexbyte-engine.config.ts</span>
                    </div>
                    <span className="text-emerald-400">BUILD PASS</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <p className="text-purple-300">
                      <span className="text-pink-400">export default</span> defineStudio({`{`}
                    </p>
                    <p className="pl-3 text-slate-300">
                      framework: <span className="text-amber-300">'Modern Fullstack'</span>,
                    </p>
                    <p className="pl-3 text-slate-300">
                      designSystem: <span className="text-amber-300">'Nexbyte Luxe'</span>,
                    </p>
                    <p className="pl-3 text-slate-300">
                      responsive: <span className="text-emerald-400">true</span>,
                    </p>
                    <p className="pl-3 text-slate-300">
                      animations: <span className="text-emerald-400">'FramerMotion'</span>,
                    </p>
                    <p className="pl-3 text-slate-300">
                      security: <span className="text-sky-300">'Zero-Trust'</span>,
                    </p>
                    <p className="text-purple-300">{`}`});</p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="p-3.5 rounded-xl bg-[#141126] border border-[#29224A]">
                  <div className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-brand-purpleLight" />
                    <span>Technology Ecosystem</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['React 19', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'Figma', 'Cloud Native'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#1F193B] text-brand-purpleLight border border-brand-purple/20"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Mobile Interface Showcase (Bottom Left Overlay) */}
          <div className="hidden sm:block absolute -bottom-10 -left-8 md:-left-12 w-48 lg:w-56 rounded-2xl bg-[#100D22] border-2 border-brand-purple/40 shadow-2xl shadow-brand-purple/40 p-2.5 backdrop-blur-xl animate-float-slow">
            <div className="flex items-center justify-between pb-2 border-b border-[#261E47] mb-2">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-white">
                <Smartphone className="w-3.5 h-3.5 text-brand-purpleLight" />
                <span>Mobile Suite</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">
                iOS & Android
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="p-2 rounded-lg bg-[#181333] border border-[#2C2154] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-brand-grey">Conversion Rate</div>
                  <div className="text-sm font-bold text-white">+38.4%</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-brand-purple/30 flex items-center justify-center text-brand-purpleLight text-xs">
                  ↑
                </div>
              </div>
              <div className="text-[9px] text-center text-brand-grey font-mono">
                User Experience Optimized
              </div>
            </div>
          </div>

          {/* Floating UI Elements Badge (Top Right Overlay) */}
          <div className="hidden sm:block absolute -top-8 -right-6 md:-right-10 rounded-2xl bg-white/95 border border-brand-purple/30 shadow-2xl p-3 text-brand-deep backdrop-blur-md animate-float-reverse">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-purpleLight flex items-center justify-center text-white shadow-md">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#0E0D1B]">Global Standards</div>
                <div className="text-[11px] text-[#635F7E]">International Ambition Ready</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
