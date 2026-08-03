import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Copy, Check, ArrowUp } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/90 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-base">
            Open for architectural discussions, tech talks, and engineering opportunities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          
          {/* Direct Contact Cards */}
          <div className="space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <a
                    href={`mailto:${resumeData.email}`}
                    className="text-sm sm:text-base font-bold text-slate-100 hover:text-cyan-400 transition-colors"
                  >
                    {resumeData.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(resumeData.email)}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors flex items-center justify-center cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl flex items-center justify-between group hover:border-cyan-500/40 transition-colors block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">LinkedIn Profile</div>
                </div>
              </div>
              <span className="text-xs text-cyan-400 font-mono underline">Connect &rarr;</span>
            </a>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-slate-400 flex items-center justify-center border border-slate-800">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Current Base</div>
                <div className="text-sm sm:text-base font-bold text-slate-100">
                  {resumeData.location}
                </div>
              </div>
            </div>

          </div>

          {/* Back to Top */}
          <div className="pt-6 flex justify-center">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all text-sm font-medium"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
