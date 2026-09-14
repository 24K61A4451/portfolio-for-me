import React from 'react';
import {
  Code2,
  Database,
  Layout,
  Grid,
  Smartphone,
  Layers,
  Sparkles,
  Calculator,
  PieChart,
  LayoutDashboard,
  GitBranch,
  Terminal,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name.toLowerCase()) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#06B6D4" />
          <g stroke="#06B6D4" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 18c-.8 0-1.5-.4-1.9-1l1.1-1.1c.3.4.6.6 1 .6.6 0 1-.3 1-1.1v-6h1.6v6.1c0 1.6-1 2.5-2.8 2.5zm6.5-.1c-1.3 0-2.2-.8-2.6-1.7l1.3-.8c.3.5.7.9 1.4.9.6 0 1.1-.3 1.1-.8 0-.5-.4-.7-1.3-1.1-1.3-.5-2.1-1.1-2.1-2.2 0-1.3 1-2.2 2.4-2.2 1.1 0 1.8.4 2.3 1.3l-1.2.8c-.3-.5-.6-.7-1.1-.7-.5 0-.9.3-.9.7 0 .5.3.7 1.2 1 1.4.6 2.2 1.1 2.2 2.4 0 1.4-1.1 2.2-2.6 2.2z"
            fill="#000000"
          />
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z"
            fill="#E34F26"
          />
          <path
            d="M12 3.8v16.3l5.8-1.5L19.2 3.8H12z"
            fill="#EF652A"
          />
          <path
            d="M7.4 7.2h9.2l-.2 2H9.2l.2 2.2h7.4l-.5 5.5-4.3 1.2-4.3-1.2-.3-3.3H9l.2 1.6 2.8.8 2.8-.8.3-2.8H7.1l.3-5.3z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z"
            fill="#1572B6"
          />
          <path
            d="M12 3.8v16.3l5.8-1.5L19.2 3.8H12z"
            fill="#33A9DC"
          />
          <path
            d="M16.6 7.2H7.4l.2 2.2h8.8l-.3 3.3H9.4l.2 2.2h6.3l-.4 3.7-3.5 1-3.5-1-.2-2.2H6.9l.3 3.9 4.8 1.4 4.8-1.4.8-9.1z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M11.8 2c-4.2 0-3.9 1.8-3.9 1.8l.04 1.9h4v.6H6.3S2.5 6 2.5 10.3s3.3 4.1 3.3 4.1h1.1v-2c0-2.3 2-2.2 2-2.2h3.9c1.9 0 1.9-1.9 1.9-1.9V4.4C14.7 2.5 11.8 2 11.8 2zm-1.8 1.4c.4 0 .8.3.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z"
            fill="#387EB8"
          />
          <path
            d="M12.2 22c4.2 0 3.9-1.8 3.9-1.8l-.04-1.9h-4v-.6h5.6s3.8.3 3.8-4-3.3-4.1-3.3-4.1h-1.1v2c0 2.3-2 2.2-2 2.2h-3.9c-1.9 0-1.9 1.9-1.9 1.9v3.8c0 1.9 2.9 2.5 2.9 2.5zm1.8-1.4c-.4 0-.8-.3-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z"
            fill="#FFE052"
          />
        </svg>
      );
    case 'sql':
    case 'database':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#38BDF8" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#38BDF8" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" stroke="#38BDF8" />
        </svg>
      );
    case 'powerbi':
    case 'microsoft power bi':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="11" width="4" height="10" rx="1.5" fill="#F2C811" />
          <rect x="8" y="7" width="4" height="14" rx="1.5" fill="#E8A900" />
          <rect x="14" y="3" width="4" height="18" rx="1.5" fill="#D97706" />
          <path d="M18 10h4v11h-4z" fill="#B45309" opacity="0.8" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case 'git':
    case 'git-branch':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#F05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#7952B3" />
          <path
            d="M7 6h5.2c1.7 0 2.8.9 2.8 2.2 0 1-.6 1.7-1.5 2 1.2.3 1.9 1.1 1.9 2.3 0 1.5-1.2 2.5-3.1 2.5H7V6zm2.5 3.6h2.4c.6 0 1-.3 1-.8 0-.5-.4-.8-1-.8H9.5v1.6zm0 3.5h2.6c.7 0 1.2-.3 1.2-.9 0-.6-.5-.9-1.2-.9H9.5v1.8z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'layout':
      return <Layout className={`${className} text-cyan-400`} />;
    case 'grid':
      return <Grid className={`${className} text-indigo-400`} />;
    case 'smartphone':
      return <Smartphone className={`${className} text-teal-400`} />;
    case 'layers':
      return <Layers className={`${className} text-amber-400`} />;
    case 'sparkles':
      return <Sparkles className={`${className} text-emerald-400`} />;
    case 'calculator':
      return <Calculator className={`${className} text-orange-400`} />;
    case 'pie-chart':
      return <PieChart className={`${className} text-purple-400`} />;
    case 'layout-dashboard':
      return <LayoutDashboard className={`${className} text-blue-400`} />;
    default:
      return <Code2 className={`${className} text-slate-400`} />;
  }
};
