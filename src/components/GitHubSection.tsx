import React, { useState } from 'react';
import {
  Github,
  GitBranch,
  Terminal,
  ExternalLink,
  Copy,
  Check,
  Code2,
  FolderGit2,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const repositories = [
    {
      name: 'Rural-Healthcare-Referral-Supply-Network',
      description:
        'A technology-driven solution designed to improve rural healthcare referrals and supply coordination.',
      url: 'https://github.com/charantejasarika32-crypto/Rural-Healthcare-Referral-Supply-Network',
      language: 'JavaScript / React / Python',
      languageColor: 'bg-yellow-400',
    },
    {
      name: 'sales-shipment-performance-analysis',
      description:
        'An interactive Power BI dashboard designed to analyze sales, shipments, products, boxes and regions.',
      url: 'https://github.com/charantejasarika32-crypto/sales-shipment-performance-analysis',
      language: 'Power BI / DAX',
      languageColor: 'bg-amber-400',
    },
  ];

  return (
    <section id="developer-hub" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400 mb-3">
              <Github className="w-3.5 h-3.5" />
              <span>Version Control &amp; Open Source</span>
            </div>
            <h2
              id="github-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Code. Build. Learn. Repeat.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Transparent project repositories showcasing component hierarchies, clean directory structuring, and modern commits.
            </p>
          </div>

          {/* GitHub Profile CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              title="Copy GitHub Profile URL"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy URL</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-main-github"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-sm font-semibold border border-slate-700 hover:border-slate-500 shadow-md transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Repositories & Terminal Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Repositories Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>Public Repositories</span>
            </div>

            {repositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200 shadow-sm group"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    <span>{repo.name}</span>
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.languageColor}`} />
                    <span>{repo.language}</span>
                  </span>
                  <span>•</span>
                  <span>Public</span>
                </div>
              </a>
            ))}
          </div>

          {/* Developer Git Shell Visual */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-2xl font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-400">git-workflow@charanteja:~</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  main branch
                </span>
              </div>

              <div className="space-y-2 pt-1 text-[11px] leading-relaxed">
                <div className="text-slate-400">
                  $ <span className="text-white">git status</span>
                </div>
                <div className="text-emerald-400">
                  On branch main <br />
                  Your branch is up to date with 'origin/main'. <br />
                  Nothing to commit, working tree clean.
                </div>

                <div className="text-slate-400 pt-2">
                  $ <span className="text-white">git log --oneline -n 3</span>
                </div>
                <div className="space-y-1 text-slate-300">
                  <div className="flex gap-2">
                    <span className="text-cyan-400">e4b7c12</span>
                    <span>feat: optimize responsive layout and touch targets</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-cyan-400">89f02a1</span>
                    <span>feat(bi): DAX measure implementation for shipment KPIs</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-cyan-400">3a19bc4</span>
                    <span>docs: update project README and system architecture</span>
                  </div>
                </div>

                <div className="pt-2 text-slate-500">
                  # Active developer workspace: React + TypeScript + Power BI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
