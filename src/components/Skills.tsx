import React, { useState } from 'react';
import { Terminal, Code, Cpu, Database, Sparkles, Layers } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code,
  'Concepts & Architecture': Layers,
  'Frameworks & Libraries': Cpu,
  'Cloud, Containers & Infra': Database,
  'GenAI & Agentic Engineering': Sparkles,
};

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...resumeData.skillCategories.map((c) => c.category)];

  const displayedSkills =
    selectedCategory === 'All'
      ? resumeData.skillCategories
      : resumeData.skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/80 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive toolkit built over 5+ years of enterprise systems engineering and active production deployment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-100 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((catObj, idx) => {
            const Icon = categoryIcons[catObj.category] || Code;
            const isGenAI = catObj.category.includes('GenAI');
            return (
              <div
                key={idx}
                className={`glass-panel p-6 rounded-3xl space-y-4 glass-panel-hover ${
                  isGenAI ? 'border-indigo-500/30 bg-indigo-950/10' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isGenAI
                        ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-100 text-base">{catObj.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {catObj.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/90 text-slate-200 text-xs font-mono border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;