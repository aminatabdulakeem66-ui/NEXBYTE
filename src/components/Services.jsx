import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Palette,
  Cpu,
  ShoppingBag,
  Workflow,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ServiceModal from './ServiceModal';

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Palette: Palette,
  Cpu: Cpu,
  ShoppingBag: ShoppingBag,
  Workflow: Workflow,
};

export default function Services({ onSelectServiceForContact }) {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-brand-charcoal text-white overflow-hidden border-t border-brand-purple/20"
    >
      {/* Background Lighting & Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-purpleLight/10 rounded-full blur-[130px] pointer-events-none" />
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
            <span>Our Core Capabilities</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            What We Do <span className="text-gradient-purple">Best.</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-grey max-w-2xl mx-auto leading-relaxed"
          >
            From creative digital experiences to powerful software solutions, we help turn ideas into technology.
          </motion.p>
        </div>

        {/* 6 Services Grid (3-column desktop layout, stacks beautifully on mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative rounded-2xl bg-brand-card p-7 sm:p-8 border border-brand-cardBorder hover:border-brand-purple/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-purple/20 flex flex-col justify-between"
              >
                {/* Subtle Hover Glow Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Header: Unique Icon & Card Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-brand-purple/25 to-[#241744] border border-brand-purple/30 flex items-center justify-center text-brand-purpleLight group-hover:text-white group-hover:scale-110 group-hover:bg-brand-purple transition-all duration-300 shadow-md shadow-brand-purple/20">
                      <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-greyDark group-hover:text-brand-purpleLight transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purpleLight transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-brand-grey leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Tech stack badge tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-brand-deep/80 text-brand-grey border border-brand-cardBorder group-hover:border-brand-purple/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Learn More Link */}
                <div className="pt-4 border-t border-brand-cardBorder flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purpleLight group-hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForContact && onSelectServiceForContact(service.title)}
                    className="text-xs text-brand-grey hover:text-brand-purpleLight transition-colors"
                    title="Request this service directly"
                  >
                    Book Consultation →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom studio advisory note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-brand-deep/70 border border-brand-cardBorder text-xs sm:text-sm text-brand-grey">
            <Layers className="w-4 h-4 text-brand-purpleLight" />
            <span>Need a custom technology architecture or cross-disciplinary team?</span>
            <a
              href="#contact"
              className="font-semibold text-white hover:text-brand-purpleLight underline underline-offset-4 transition-colors"
            >
              Contact our solutions architects
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestService={(serviceName) => {
            setSelectedService(null);
            if (onSelectServiceForContact) {
              onSelectServiceForContact(serviceName);
            }
          }}
        />
      )}
    </section>
  );
}
