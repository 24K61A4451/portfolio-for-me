import React from 'react';
import { Trophy, Medal, Award, Sparkles, CheckCircle2, Users } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-800/40 text-xs font-mono text-amber-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Recognition</span>
          </div>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Demonstrated problem-solving capabilities, technical rigor, and collaborative execution under hackathon conditions.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievement 1: SIH 2026 Internal Hackathon */}
          <div
            id="achievement-card-sih"
            className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/40 p-6 sm:p-8 shadow-2xl hover:border-amber-400/60 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform flex-shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                SIH 2026 Internal
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-amber-300 transition-colors">
              Selected – Smart India Hackathon Internal Hackathon 2026
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Selected for the SIH 2026 internal hackathon with a real-world technology solution.
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-amber-400 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Real-World Solution Pitch</span>
              </div>
              <span>Competitive Selection</span>
            </div>
          </div>

          {/* Achievement 2: 2nd Prize – College Hackathon */}
          <div
            id="achievement-card-college-hackathon"
            className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/40 border border-slate-700/80 p-6 sm:p-8 shadow-2xl hover:border-slate-500 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform flex-shrink-0">
                <Medal className="w-6 h-6 text-slate-200" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                2nd Prize Winner
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
              2nd Prize – College Hackathon
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Won 2nd prize in a college-level hackathon as part of a team, demonstrating teamwork, problem-solving and rapid solution development.
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Team Collaboration &amp; Rapid Prototyping</span>
              </div>
              <span>Hackathon Podium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
