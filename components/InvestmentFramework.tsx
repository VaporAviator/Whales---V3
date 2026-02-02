import React from 'react';
import { motion } from 'framer-motion';
import { Instrument } from '../types';

const instruments: Instrument[] = [
  {
    title: "Structured Exposure",
    subtitle: "Data & IP Pools",
    description: "Direct fractional ownership in high-value biological datasets and proprietary ML models vetted by top research institutions.",
    tags: ["IP Rights", "Model Weights"]
  },
  {
    title: "Standardized Yield",
    subtitle: "Fixed Income Notes",
    description: "Senior secured notes backed by licensing revenue flows from deployed diagnostic AI systems in clinical settings.",
    tags: ["Senior Secured", "Quarterly Yield"]
  },
  {
    title: "Thematic Portfolios",
    subtitle: "Sector Specific",
    description: "Curated baskets targeting high-growth verticals: Radical Life Extension, Oncology Detection, and Rare Disease Therapeutics.",
    tags: ["Oncology", "Longevity"]
  }
];

export const InvestmentFramework: React.FC = () => {
  return (
    <section id="framework" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-graphite mb-4">The Instruments</h2>
          <div className="w-24 h-[1px] bg-slate-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instruments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="group relative bg-white border border-slate-200 p-8 h-96 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                   <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                   <div className="w-2 h-2 bg-slate-200 rounded-full group-hover:bg-blue-200 transition-colors" />
                </div>
                <h3 className="text-2xl font-medium text-graphite mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-6">{item.subtitle}</p>
                <p className="text-slate-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex gap-2 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-50 border border-slate-100 text-[10px] uppercase tracking-wider text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
