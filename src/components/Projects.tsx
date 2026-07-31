import React from 'react';
import { Cpu, Check, Activity } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture & Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Key Engineering <span className="gradient-text">Innovations</span>
          </h2>
          <p className="text-slate-400 text-base">
            High-impact systems engineered for zero-downtime, maximum throughput, and autonomous triage.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.featuredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl glass-panel-hover flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Top Meta */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-cyan-400 text-xs font-mono border border-slate-800">
                    {proj.company}
                  </span>
                  {proj.metrics && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20 flex items-center gap-1">
                      <Activity className="w-3 h-3" />
                      {proj.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-100 leading-snug">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {proj.description}
                </p>
              </div>

              {/* Details List */}
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-4">
                {proj.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges Footer */}
              <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-800/60">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 text-xs font-mono border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;