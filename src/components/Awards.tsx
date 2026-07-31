import React from 'react';
import { Award, Mic, TrendingUp } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Recognitions & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Awards & <span className="gradient-text">Leadership Impact</span>
          </h2>
          <p className="text-slate-400 text-base">
            Recognized across GE Healthcare and Visa for technical leadership, disaster recovery architecture, and execution.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.awards.map((award, idx) => {
            const icons = [Award, TrendingUp, Mic];
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-3xl glass-panel-hover flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    {award.highlightBadge && (
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono border border-amber-500/20">
                        {award.highlightBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">{award.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Awards;
