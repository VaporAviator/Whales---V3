import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-graphite rounded-tr-lg rounded-bl-lg" />
          <span className="text-sm font-semibold tracking-tight text-graphite">WHALES</span>
        </div>
        
        <div className="text-xs text-slate-400 text-center md:text-right">
          <p>© 2024 Whales Capital. Sovereign Bio-AI Infrastructure.</p>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a href="#" className="hover:text-graphite transition-colors">Privacy</a>
            <a href="#" className="hover:text-graphite transition-colors">Terms</a>
            <a href="#" className="hover:text-graphite transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
