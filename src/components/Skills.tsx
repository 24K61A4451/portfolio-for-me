import React, { useState } from 'react';
import { Layers, Check, Filter } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Frontend Development',
    'Programming & Database',
    'Data Analytics',
    'Tools',
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Skills &amp; Technologies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Specialized in modern client-side architectures, component design, and data-driven analytical dashboards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            id="skills-category-filters"
            className="flex flex-wrap gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl max-w-full overflow-x-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="group p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-cyan-500/5 hover:-translate-y-0.5 cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TechIcon name={skill.iconKey} className="w-5 h-5" />
                </div>
                {skill.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                )}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Category Breakdown Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800/70">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
              Frontend Development Focus
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Writing clean, modular React components, semantic HTML5, modern CSS Layouts (Flexbox &amp; Grid), and responsive interfaces optimized for diverse devices.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
              Data Analytics &amp; Power BI
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Synthesizing raw datasets into clear executive dashboards with DAX measures, automated data cleaning, and insightful interactive reporting.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-semibold">
              Developer Workflow &amp; Logic
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Version control with Git &amp; GitHub, scripting fundamentals in Python, and relational database querying with structured SQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
