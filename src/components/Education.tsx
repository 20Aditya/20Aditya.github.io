import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono border border-indigo-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education & <span className="gradient-text">Academic Background</span>
          </h2>
          <p className="text-slate-400 text-base">
            Solid foundation in computer science, information technology, and software engineering principles.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl gradient-border space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
            
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/10">
                <GraduationCap className="w-9 h-9" />
              </div>
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20 inline-block">
                  National Institute of Technology (NIT) Raipur
                </span>
                <h3 className="text-2xl font-bold text-slate-100">
                  {resumeData.education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {resumeData.education.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {resumeData.education.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center md:text-right shrink-0 min-w-[140px]">
              <div className="text-3xl font-extrabold text-cyan-400 font-mono">
                {resumeData.education.cgpa}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Cumulative GPA</div>
            </div>

          </div>

          {/* Key Coursework & Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {[
              'Data Structures & Algorithms',
              'Distributed Systems & Networks',
              'Object-Oriented System Design',
              'Database Management Systems',
              'Operating Systems & Concurrency',
              'Software Architecture & LLD'
            ].map((course, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-300 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
