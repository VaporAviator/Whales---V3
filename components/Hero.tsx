import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      
      {/* Background Abstract "Fluke" */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="w-[80vw] h-[60vh] bg-gradient-radial from-slate-200 to-transparent rounded-[50%] blur-3xl transform rotate-12"
        />
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.6 }}
           transition={{ delay: 1, duration: 2 }}
           className="absolute w-[60vw] h-[40vh] border border-slate-100 rounded-[40%] transform -rotate-6"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-start w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 border border-slate-200 rounded-full text-xs font-semibold tracking-wider uppercase text-slate-500 mb-6 bg-slate-50/50">
            Institutional Bio-AI Infrastructure
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-graphite leading-[1.1]">
            Sovereign Exposure <br />
            <span className="text-slate-400">to the Longevity Economy.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
            Structured institutional access to Bio-AI cash flows. Invest in Data, Models, and IP pools through standardized yield instruments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-4 bg-graphite text-white text-sm font-medium rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm hover:bg-slate-800 transition-all hover:scale-[1.02]">
            Explore Pools
          </button>
          <button className="px-8 py-4 border border-slate-300 text-graphite text-sm font-medium rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm hover:bg-slate-50 transition-all">
            Institutional Onboarding
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
        <div className="w-[1px] h-12 bg-slate-200 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-slate-400 absolute top-[-50%]"
          />
        </div>
      </motion.div>
    </section>
  );
};
