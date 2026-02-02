import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { YieldDataPoint } from '../types';

const data: YieldDataPoint[] = [
  { month: 'Jan', yield: 4.2, liquidity: 20 },
  { month: 'Feb', yield: 4.5, liquidity: 25 },
  { month: 'Mar', yield: 4.8, liquidity: 40 },
  { month: 'Apr', yield: 4.6, liquidity: 35 },
  { month: 'May', yield: 5.1, liquidity: 50 },
  { month: 'Jun', yield: 5.4, liquidity: 65 },
  { month: 'Jul', yield: 5.8, liquidity: 80 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 p-3 shadow-lg rounded-sm">
        <p className="text-xs text-slate-500 mb-1">{label}</p>
        <p className="text-sm font-semibold text-graphite">{payload[0].value}% APY</p>
      </div>
    );
  }
  return null;
};

export const PortfolioProducts: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-white text-graphite">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">The Index</h2>
            <p className="text-slate-500 max-w-md">Real-time performance metrics of the aggregated Bio-AI economy.</p>
          </div>
          <button className="hidden md:block text-sm border-b border-slate-300 pb-1 hover:border-graphite transition-colors">
            View Full Analytics
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* Main Chart - Bento Large */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 bg-whales-gray border border-slate-100 p-8 rounded-tl-2xl rounded-tr-sm rounded-bl-sm rounded-br-2xl flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-medium">Longevity Model Index</h3>
                <p className="text-sm text-slate-400 mt-1">LMI-500 • Weighted Basket</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-light text-graphite">+12.4%</p>
                <p className="text-xs text-green-600">YTD Performance</p>
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#101112" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#101112" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 12}} 
                    dy={10}
                  />
                  <YAxis 
                    hide 
                    domain={['dataMin - 1', 'dataMax + 1']}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }} />
                  <Area 
                    type="monotone" 
                    dataKey="yield" 
                    stroke="#101112" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#colorYield)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Secondary Stats - Vertical Stack */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 bg-white border border-slate-200 p-6 rounded-sm hover:border-slate-300 transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                 <h4 className="font-medium text-slate-800">Tumor AI Basket</h4>
                 <svg className="w-5 h-5 text-slate-300 group-hover:text-graphite transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
              </div>
              <div className="h-32 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line type="step" dataKey="liquidity" stroke="#64748b" strokeWidth={1.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 bg-slate-900 text-white p-6 rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm"
            >
              <h4 className="font-medium text-slate-200 mb-1">Data Yield Fund</h4>
              <p className="text-xs text-slate-500 mb-8">Yield Distribution</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-sm font-light text-slate-400">Current APY</span>
                  <span className="text-lg font-mono">8.2%</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-sm font-light text-slate-400">Total Value Locked</span>
                  <span className="text-lg font-mono">$42.5M</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
