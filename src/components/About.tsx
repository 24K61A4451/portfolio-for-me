import React from 'react';
import {
  Code2,
  BarChart3,
  Trophy,
  MapPin,
  Sparkles,
  CheckCircle,
  FileCode2,
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_CARDS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative description */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 shadow-sm">
              {PERSONAL_INFO.aboutText1}
            </p>

            <p className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 shadow-sm">
              {PERSONAL_INFO.aboutText2}
            </p>

            {/* Quick recruiter note */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Location: {PERSONAL_INFO.location}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Primary Focus: Frontend UI/UX</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono">
                <FileCode2 className="w-4 h-4 text-blue-400" />
                <span>Secondary: Power BI &amp; Analytics</span>
              </div>
            </div>
          </div>

          {/* Small Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {HIGHLIGHT_CARDS.map((card, idx) => {
              const iconMap = {
                'code-2': <Code2 className="w-5 h-5 text-cyan-400" />,
                'bar-chart-3': <BarChart3 className="w-5 h-5 text-emerald-400" />,
                trophy: <Trophy className="w-5 h-5 text-amber-400" />,
              };

              return (
                <div
                  key={card.title}
                  id={`about-card-${idx + 1}`}
                  className={`p-5 rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 shadow-lg ${card.border}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                      {iconMap[card.icon as keyof typeof iconMap]}
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
