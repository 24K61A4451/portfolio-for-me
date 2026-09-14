import React from 'react';
import {
  MonitorSmartphone,
  Palette,
  Lightbulb,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const iconMap = {
    'monitor-smartphone': <MonitorSmartphone className="w-6 h-6 text-cyan-400" />,
    palette: <Palette className="w-6 h-6 text-blue-400" />,
    lightbulb: <Lightbulb className="w-6 h-6 text-amber-400" />,
    'trending-up': <TrendingUp className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="why-work-with-me" className="py-20 relative border-t border-slate-800/60 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value Proposition</span>
          </div>
          <h2
            id="why-work-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Why Work With Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A developer mindset centered on user satisfaction, cross-device responsiveness, structured problem solving, and relentless learning.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={item.title}
              id={`why-card-${idx + 1}`}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[item.iconName as keyof typeof iconMap]}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>0{idx + 1}</span>
                <span className="text-cyan-400 font-medium">Core Principle</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
