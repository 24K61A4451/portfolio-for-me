import React, { useState } from 'react';
import { X, ShieldAlert, PhoneCall, MapPin, Bell, CheckCircle, AlertTriangle } from 'lucide-react';

interface SafeHerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SafeHerModal: React.FC<SafeHerModalProps> = ({ isOpen, onClose }) => {
  const [sosActive, setSosActive] = useState(false);
  const [alertSent, setAlertSent] = useState(false);

  if (!isOpen) return null;

  const handleTriggerSOS = () => {
    setSosActive(true);
    setTimeout(() => {
      setAlertSent(true);
    }, 800);
  };

  const handleReset = () => {
    setSosActive(false);
    setAlertSent(false);
  };

  return (
    <div
      id="safeher-preview-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="safeher-modal-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="p-5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 id="safeher-modal-title" className="text-lg font-bold text-white tracking-tight">
                SafeHer — Interactive Application Preview
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Women Safety &amp; Emergency Support Web Application
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Interactive Simulated SOS UI */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-1">About the Project</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              A women safety web application focused on providing quick access to emergency support through an SOS feature and emergency contact information. Built with semantic HTML, modern CSS styling, and responsive JavaScript DOM event handling.
            </p>
          </div>

          {/* Interactive Mockup Component */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-medium">
                Live Interactive Interface Demo
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Status: {sosActive ? (alertSent ? '🚨 SOS Alert Dispatched' : '⏳ Transmitting...') : '🟢 Standby Ready'}
              </span>
            </div>

            {/* Central SOS Trigger Button */}
            <div className="flex flex-col items-center justify-center py-6 text-center">
              {!sosActive ? (
                <button
                  type="button"
                  onClick={handleTriggerSOS}
                  className="group relative flex flex-col items-center justify-center w-36 h-36 rounded-full bg-gradient-to-tr from-rose-600 to-red-500 text-white shadow-xl shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-4 border-rose-400/40"
                >
                  <Bell className="w-8 h-8 mb-1 group-hover:animate-bounce" />
                  <span className="text-lg font-extrabold tracking-wider">SOS</span>
                  <span className="text-[10px] text-rose-200 font-mono mt-0.5">TAP TO TRIGGER</span>
                </button>
              ) : (
                <div className="w-full max-w-md p-4 rounded-xl bg-rose-950/40 border border-rose-700/50 text-left space-y-3">
                  <div className="flex items-center gap-2.5 text-rose-300 font-semibold text-sm">
                    <AlertTriangle className="w-5 h-5 text-rose-400 animate-pulse" />
                    <span>Emergency Protocol Triggered</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Live GPS coordinates and distress notification queued for emergency contacts and nearest authority helpline.
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/40 text-[11px] font-mono text-emerald-400 flex items-center justify-between">
                    <span>Dispatch status: Lat/Long pinpointed</span>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium transition-colors"
                  >
                    Reset Standby Mode
                  </button>
                </div>
              )}
            </div>

            {/* Emergency Contacts Mockup List */}
            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 mb-2">
                Simulated Emergency Quick-Dial Contacts:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-200 font-medium">National Women Helpline</span>
                  </div>
                  <span className="font-mono text-cyan-400">1091</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                    <span className="text-slate-200 font-medium">Emergency Services</span>
                  </div>
                  <span className="font-mono text-rose-400">112</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs font-mono text-slate-400">Tech Stack:</span>
            {['HTML', 'CSS', 'JavaScript'].map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
