import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/60 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-slate-400 text-base">
            Proven track record of driving technical excellence and delivering high-scale enterprise microservices.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-800">
          
          {resumeData.experiences.map((exp, idx) => {
            const isVisa = exp.company === 'Visa';
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 z-10">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Content Box */}
                <div className="w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0">
                  <div className="glass-panel p-6 sm:p-8 rounded-3xl glass-panel-hover space-y-4">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800/80 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-slate-100">{exp.company}</h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              isVisa
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                            }`}
                          >
                            {exp.role}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <ul className="space-y-3">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Experience;