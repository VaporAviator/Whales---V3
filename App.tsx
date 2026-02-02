import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InvestmentFramework } from './components/InvestmentFramework';
import { PortfolioProducts } from './components/PortfolioProducts';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  
  // Smooth scroll behavior hook for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-white selection:bg-slate-200 selection:text-graphite">
      <Navbar />
      <Hero />
      <InvestmentFramework />
      <PortfolioProducts />
      <Roadmap />
      <Footer />
    </main>
  );
};

export default App;
