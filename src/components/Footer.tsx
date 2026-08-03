import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-slate-100 flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-6 rounded-lg bg-cyan-500 text-slate-950 flex items-center justify-center text-xs font-black">
                AC
              </span>
              <span>{resumeData.name}</span>
            </div>
            <p className="text-xs text-slate-400">
              Senior Software Engineer &bull; Distributed Systems & GenAI Architecture
            </p>
          </div>

          {/* Copyright & Hosting badge */}
          <div className="text-center text-xs text-slate-400 space-y-1">
            <p>&copy; {new Date().getFullYear()} Aditya Chandel. All rights reserved.</p>
            <p className="text-slate-400 font-mono">
              Hosted on GitHub Pages &bull; Optimized for Sub-Second Load Times
            </p>
          </div>

          {/* Back to top button & Socials */}
          <div className="flex items-center gap-4">
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.email}`}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 border border-cyan-500/20 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;