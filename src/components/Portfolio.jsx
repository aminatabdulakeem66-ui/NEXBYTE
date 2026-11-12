import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, ArrowUpRight, Filter, Info } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

export default function Portfolio({ onDiscussProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = [
    'All',
    'Business Website',
    'E-commerce Website',
    'Landing Page',
    'Dashboard Interface',
    'Mobile Application UI'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-brand-charcoal text-white overflow-hidden border-t border-brand-purple/20"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-purpleLight/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-xs font-semibold text-brand-purpleLight uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Turning Ideas Into <span className="text-gradient-purple">Digital Experiences.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-grey max-w-2xl mx-auto"
          >
            Explore our curated concept projects and interface demonstrations engineered to international technology standards.
          </motion.p>

          {/* Important Concept Project Transparency Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-deep/80 border border-brand-purple/25 text-xs text-brand-grey"
          >
            <Info className="w-3.5 h-3.5 text-brand-purpleLight" />
            <span>Demonstration concept projects developed by Nexbyte Tech Studio to exhibit technical craft.</span>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/30 font-semibold'
                  : 'bg-brand-card text-brand-grey hover:text-white hover:bg-brand-deep border border-brand-cardBorder'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl bg-brand-card border border-brand-cardBorder hover:border-brand-purple/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-purple/20"
              >
                {/* Image Container with Zoom on Hover */}
                <div className="relative w-full aspect-[16/10] bg-black/60 overflow-hidden border-b border-brand-cardBorder">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Pill on top-left of image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-brand-deep/90 text-brand-purpleLight border border-brand-purple/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Concept Badge on top-right */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium bg-amber-400/20 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                      Concept Study
                    </span>
                  </div>

                  {/* Quick View Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-brand-deep font-bold text-xs shadow-xl hover:scale-105 transition-transform"
                    >
                      <Eye className="w-4 h-4 text-brand-purple" />
                      <span>Explore Case Study</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-purpleLight transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-grey leading-relaxed line-clamp-2 mb-4">
                      {project.shortDesc}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-deep/90 text-brand-grey border border-brand-cardBorder"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: View Project Button with Subtle Transition */}
                  <div className="pt-4 border-t border-brand-cardBorder flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-purpleLight group-hover:text-white transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <span className="text-[10px] text-brand-greyDark font-mono">
                      0.6s FCP
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onDiscussProject={(title) => {
            setSelectedProject(null);
            if (onDiscussProject) onDiscussProject(title);
          }}
        />
      )}
    </section>
  );
}
