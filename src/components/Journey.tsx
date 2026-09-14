import React from 'react';
import { Milestone, ArrowRight, Code2, BarChart3, Rocket } from 'lucide-react';
import { JOURNEY_TRACKS } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const trackIcons = {
    'Frontend Development': <Code2 className="w-5 h-5 text-cyan-400" />,
    'Data Analytics': <BarChart3 className="w-5 h-5 text-emerald-400" />,
    'Projects & Hackathons': <Rocket className="w-5 h-5 text-amber-400" />,
  };

  const trackBorderColors = {
    'Frontend Development': 'border-cyan-500/30 hover:border-cyan-400/50',
    'Data Analytics': 'border-emerald-500/30 hover:border-emerald-400/50',
    'Projects & Hackathons': 'border-amber-500/30 hover:border-amber-400/50',
  };

  return (
    <section id="journey" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400 mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Learning Milestones</span>
          </div>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            My Development Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A methodical progression from core web foundations to modern frontend component frameworks, data analytics pipelines, and competitive hackathon projects.
          </p>
        </div>

        {/* 3 Tracks */}
        <div className="space-y-8">
          {JOURNEY_TRACKS.map((track) => (
            <div
              key={track.title}
              id={`journey-track-${track.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className={`rounded-2xl bg-slate-900/60 border ${
                trackBorderColors[track.title as keyof typeof trackBorderColors] || 'border-slate-800'
              } p-6 sm:p-8 transition-all duration-300 shadow-lg`}
            >
              {/* Track Title and Description */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    {trackIcons[track.title as keyof typeof trackIcons]}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {track.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{track.category}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 max-w-md hidden sm:block">
                  {track.description}
                </p>
              </div>

              {/* Step Sequence Flow */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
                {track.steps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-750 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:border-slate-500 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{step}</span>
                    </div>

                    {idx < track.steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
