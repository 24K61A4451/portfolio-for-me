import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Trophy,
  BarChart3,
  Activity,
  ShieldAlert,
  ArrowUpRight,
  Eye,
  CheckCircle2,
  HeartPulse,
  Box,
  Truck,
  TrendingUp,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { SafeHerModal } from './SafeHerModal';
import { TechIcon } from './TechIcon';

export const Projects: React.FC = () => {
  const [safeHerModalOpen, setSafeHerModalOpen] = useState(false);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Curated Work</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Real-world web applications and business intelligence dashboards built for impactful problems and practical execution.
          </p>
        </div>

        {/* Project Cards Stack / Grid */}
        <div className="space-y-10">
          {/* PROJECT 2: Rural Healthcare Referral & Supply Network (Visually Prominent - Hackathon Problem Statement) */}
          <div
            id="project-card-rural-healthcare"
            className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/20 overflow-hidden hover:border-cyan-400/60 transition-all duration-300 group"
          >
            {/* Top Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-6 space-y-4">
                {/* Hackathon Prominence Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold tracking-wide">
                    <Trophy className="w-3.5 h-3.5 text-cyan-400" />
                    Hackathon Problem Statement Solution
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Full-Stack Web Architecture
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Rural Healthcare Referral &amp; Supply Network
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  A technology-driven solution designed to improve rural healthcare referrals and supply coordination by connecting healthcare stakeholders and supporting better access to essential healthcare services.
                </p>

                {/* Technologies */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'SQL'].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/80"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/charantejasarika32-crypto/Rural-Healthcare-Referral-Supply-Network"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-github-rural-healthcare"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-cyan-500/25"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Custom Visual Mockup */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-5 shadow-inner space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono font-medium text-slate-300">
                        Referral Coordination Node
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Live Network
                    </span>
                  </div>

                  {/* Simulated Referral Dashboard Visual */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        Emergency Referrals
                      </span>
                      <div className="text-lg font-bold text-white mt-1">Priority 1</div>
                      <span className="text-[11px] text-cyan-400 flex items-center gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Auto-routed to District Hub
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        Essential Supply Queue
                      </span>
                      <div className="text-lg font-bold text-white mt-1">100% Stocked</div>
                      <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Vaccine Cold-Chain Active
                      </span>
                    </div>
                  </div>

                  {/* Flow pipeline visual */}
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400 text-[10px]">
                      <span>PATIENT TRIAGE</span>
                      <span>TELE-VERIFICATION</span>
                      <span>SUPPLY DISPATCH</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-4/5 rounded-full" />
                    </div>
                    <div className="text-slate-400 text-[10px] text-right">Stakeholder Sync: 99.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 1 & 3: 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PROJECT 1: Sales Shipment Performance Analysis (Power BI) */}
            <div
              id="project-card-sales-shipment"
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold">
                    <BarChart3 className="w-3.5 h-3.5" />
                    Business Intelligence
                  </span>
                  <span className="text-xs font-mono text-slate-400">Power BI &amp; DAX</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  Sales Shipment Performance Analysis
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  An interactive Power BI dashboard designed to analyze sales, shipments, products, boxes, regions and salesperson performance. The dashboard helps transform business data into clear and actionable visual insights.
                </p>

                {/* Interactive Power BI Visual Mockup */}
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>EXECUTIVE KPI DASHBOARD</span>
                    <span className="text-amber-400">Live Model</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800/80 text-center">
                      <div className="text-[10px] text-slate-400 font-mono">Boxes Shipped</div>
                      <div className="text-sm font-bold text-white mt-0.5">148,200</div>
                      <div className="text-[9px] text-emerald-400">+14.2% YoY</div>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800/80 text-center">
                      <div className="text-[10px] text-slate-400 font-mono">On-Time Rate</div>
                      <div className="text-sm font-bold text-white mt-0.5">97.8%</div>
                      <div className="text-[9px] text-cyan-400">Target Met</div>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800/80 text-center">
                      <div className="text-[10px] text-slate-400 font-mono">Active Regions</div>
                      <div className="text-sm font-bold text-white mt-0.5">8 Zones</div>
                      <div className="text-[9px] text-amber-400">Full Coverage</div>
                    </div>
                  </div>

                  {/* Mini bar indicators */}
                  <div className="space-y-1 text-[10px] font-mono text-slate-400 pt-1">
                    <div className="flex justify-between items-center">
                      <span>Regional Delivery Efficiency</span>
                      <span>96.4%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[96%]" />
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Microsoft Power BI',
                      'DAX',
                      'Data Cleaning',
                      'Data Visualization',
                      'Dashboard Building',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href="https://github.com/charantejasarika32-crypto/sales-shipment-performance-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-github-sales-shipment"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 hover:border-slate-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <span className="text-[11px] font-mono text-slate-500">Repository Verified</span>
              </div>
            </div>

            {/* PROJECT 3: SafeHer (Women Safety Web Application) */}
            <div
              id="project-card-safeher"
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-semibold">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Safety Utility
                  </span>
                  <span className="text-xs font-mono text-slate-400">Frontend Web</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-rose-300 transition-colors">
                  SafeHer
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  A women safety web application focused on providing quick access to emergency support through an SOS feature and emergency contact information.
                </p>

                {/* SafeHer UI Visual Mockup */}
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>SOS EMERGENCY CONSOLE</span>
                    <span className="text-rose-400">Instant Access</span>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">One-Touch Emergency SOS</div>
                        <div className="text-[10px] text-slate-400 font-mono">Geo-pinpoint &amp; Help Alert</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSafeHerModalOpen(true)}
                      className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-mono hover:bg-rose-500/30 transition-colors cursor-pointer"
                    >
                      Test SOS
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      Emergency Contacts: Active
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                      Location Permission: Ready
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button (View Project opens modal, no broken fake link) */}
              <div className="p-6 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  id="btn-view-safeher"
                  onClick={() => setSafeHerModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View Project</span>
                </button>

                <span className="text-[11px] font-mono text-slate-400">
                  Interactive Demo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SafeHer Interactive Preview Dialog */}
      <SafeHerModal
        isOpen={safeHerModalOpen}
        onClose={() => setSafeHerModalOpen(false)}
      />
    </section>
  );
};
