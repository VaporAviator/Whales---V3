import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from '../types';

const milestones: Milestone[] = [
  {
    phase: "Phase 01",
    title: "Whitelisted Pilot",
    status: "completed",
    description: "Initial capital deployment into 3 flagship oncology data pools. Closed beta for institutional partners."
  },
  {
    phase: "Phase 02",
    title: "Structured Finance Layer",
    status: "active",
    description: "Implementation of AI-driven risk rating agency (Whales Ratings). Launch of tranches: Senior, Mezzanine, Equity."
  },
  {
    phase: "Phase 03",
    title: "Secondary Market",
    status: "future",
    description: "Launch of the Whales Exchange. Liquid trading of fractionalized notes and model weight royalties via Quant APIs."
  }
];

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
           <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-graphite mb-4">Strategic Path</h2>
           <p className="text-slate-500">The evolution of biological finance.</p>
        </div>

        <div className="space-y-0 relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-[1px] bg-slate-200 z-0" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex gap-8 pb-16 last:pb-0"
            >
              {/* Status Dot */}
              <div className="relative pt-1">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                   milestone.status === 'completed' ? 'bg-graphite border-graphite' : 
                   milestone.status === 'active' ? 'bg-white border-slate-900' : 'bg-white border-slate-200'
                 }`}>
                    {milestone.status === 'completed' && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {milestone.status === 'active' && (
                      <div className="w-2 h-2 bg-graphite rounded-full animate-pulse" />
                    )}
                 </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{milestone.phase}</span>
                <h3 className="text-xl font-medium text-graphite mt-1 mb-3">{milestone.title}</h3>
                <p className="text-slate-600 font-light max-w-lg leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
