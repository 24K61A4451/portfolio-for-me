import React, { useState } from 'react';
import {
  ArrowRight,
  Code2,
  Database,
  Sparkles,
  Trophy,
  ExternalLink,
  Terminal,
  Layers,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'react' | 'dax'>('react');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Subtle Background Glows (No loud neon, refined high-tech aesthetic) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-900/20 via-blue-900/15 to-emerald-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Status Badge */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-slate-300 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-medium">Recruiter Ready</span>
            </div>

            {/* Name */}
            <h1
              id="hero-name"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-3"
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Role Header with Subtle Gradient */}
            <div
              id="hero-role"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 mb-5"
            >
              {PERSONAL_INFO.role}
            </div>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-3"
            >
              {PERSONAL_INFO.subtitle}
            </p>

            {/* Secondary Line */}
            <p
              id="hero-secondary-line"
              className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-2xl mb-8 flex items-center gap-2"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{PERSONAL_INFO.secondaryLine}</span>
            </p>

            {/* CTAs and GitHub Link */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                id="hero-cta-projects"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-cta-contact"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-500 transition-all duration-200 backdrop-blur-md cursor-pointer"
              >
                <span>Contact Me</span>
              </button>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group ml-1"
              >
                <span>GitHub</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Discipline</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">Frontend Dev</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Secondary</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">Power BI &amp; DAX</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Recognition</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">SIH 2026 Internal</div>
              </div>
            </div>
          </div>

          {/* Right Column: Developer-themed Visual Card & Mockup */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            {/* Main Interactive Developer Window */}
            <div
              id="hero-code-card"
              className="w-full max-w-md rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden relative"
            >
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800/90 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">charan-teja.dev</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveTab('react')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'react'
                        ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    React.tsx
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('dax')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'dax'
                        ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    PowerBI.dax
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#080d17]/90 min-h-[260px]">
                {activeTab === 'react' ? (
                  <div className="space-y-1">
                    <div className="text-slate-500">// Frontend Architect: S. Charan Teja</div>
                    <div>
                      <span className="text-purple-400">import</span> &#123;{' '}
                      <span className="text-cyan-300">useState</span>,{' '}
                      <span className="text-cyan-300">useEffect</span> &#125;{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-emerald-300">'react'</span>;
                    </div>
                    <div className="pt-2">
                      <span className="text-blue-400">const</span>{' '}
                      <span className="text-amber-300">DeveloperProfile</span> = () =&gt; &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">const</span> [skills] ={' '}
                      <span className="text-cyan-300">useState</span>([
                    </div>
                    <div className="pl-8 text-emerald-300">
                      'React', 'JavaScript', 'CSS Grid', 'Responsive'
                    </div>
                    <div className="pl-4">]);</div>
                    <div className="pl-4 pt-1">
                      <span className="text-purple-400">return</span> (
                    </div>
                    <div className="pl-8 text-slate-300">
                      &lt;<span className="text-rose-400">Experience</span>{' '}
                      <span className="text-cyan-400">focus</span>=
                      <span className="text-emerald-300">"User Centric"</span>
                    </div>
                    <div className="pl-12 text-slate-300">
                      <span className="text-cyan-400">responsive</span>=&#123;
                      <span className="text-amber-400">true</span>&#125;
                    </div>
                    <div className="pl-12 text-slate-300">
                      <span className="text-cyan-400">performance</span>=
                      <span className="text-emerald-300">"Optimized"</span> /&gt;
                    </div>
                    <div className="pl-4">);</div>
                    <div>&#125;;</div>
                    <div className="pt-1 text-slate-500">// Output: High-fidelity web experience</div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="text-slate-500">// Power BI DAX & Analytics Model</div>
                    <div>
                      <span className="text-purple-400">DEFINE</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">MEASURE</span>{' '}
                      <span className="text-amber-300">SalesShipment</span>[TotalDeliveryRate] =
                    </div>
                    <div className="pl-8 text-cyan-300">
                      DIVIDE(
                    </div>
                    <div className="pl-12 text-slate-300">
                      <span className="text-blue-400">CALCULATE</span>(
                      <span className="text-purple-400">SUM</span>(Boxes[Delivered])),
                    </div>
                    <div className="pl-12 text-slate-300">
                      <span className="text-purple-400">SUM</span>(Boxes[TotalShipped]),
                    </div>
                    <div className="pl-12 text-amber-400">0</div>
                    <div className="pl-8 text-cyan-300">)</div>
                    <div className="pl-4 pt-1">
                      <span className="text-blue-400">EVALUATE</span>{' '}
                      <span className="text-rose-400">PerformanceDashboard</span>
                    </div>
                    <div className="pl-8 text-emerald-300">
                      ORDER BY Region, Salesperson DESC
                    </div>
                    <div className="pt-1 text-slate-500">// Actionable Business Intelligence</div>
                  </div>
                )}
              </div>

              {/* Status footer bar */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Build: passing</span>
                </span>
                <span className="text-slate-500">Node v20 • React 19</span>
              </div>
            </div>

            {/* Floating Highlight Card 1: SIH Internal Hackathon 2026 */}
            <div
              id="hero-floating-hackathon"
              className="absolute -bottom-6 -left-6 sm:-left-8 max-w-[220px] p-3 rounded-xl bg-slate-900/90 border border-amber-500/40 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-none"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 flex-shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-amber-300 font-mono font-medium">SIH 2026 Internal</div>
                <div className="text-xs font-semibold text-white leading-tight">Selected Solution</div>
              </div>
            </div>

            {/* Floating Highlight Card 2: Analytics & Frontend Balance */}
            <div
              id="hero-floating-analytics"
              className="absolute -top-6 -right-4 sm:-right-6 max-w-[210px] p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 flex-shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-cyan-400 font-mono font-medium">Data Analytics</div>
                <div className="text-xs font-semibold text-white leading-tight">Power BI &amp; DAX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
