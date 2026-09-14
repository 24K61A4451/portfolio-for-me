import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800 bg-[#06090f] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-850">
          {/* Left: Branding & Role */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400 font-mono">
              Frontend Developer • Data Analytics Enthusiast
            </p>
            <p className="text-xs text-slate-400 italic">
              "Building ideas into meaningful digital experiences."
            </p>
          </div>

          {/* Center / Right: Clickable Social Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-link"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-link"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="footer-email-link"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              id="btn-back-to-top"
              aria-label="Back to top"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer group"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div>
            © {PERSONAL_INFO.year} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Bhimavaram, Andhra Pradesh, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
