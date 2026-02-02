import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Instruments', href: '#framework' },
  { label: 'Index', href: '#products' },
  { label: 'Roadmap', href: '#roadmap' },
];

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none`}
    >
      <div 
        className={`pointer-events-auto flex items-center justify-between px-8 py-4 transition-all duration-500 ease-out border border-transparent rounded-2xl ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-slate-200 shadow-sm w-full max-w-5xl' 
            : 'w-full max-w-7xl bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-graphite rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm" />
          <span className="text-lg font-semibold tracking-tight text-graphite">WHALES</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-500 hover:text-graphite transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action */}
        <button className="hidden md:block text-sm font-medium px-5 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-graphite">
          Client Login
        </button>
      </div>
    </motion.nav>
  );
};
