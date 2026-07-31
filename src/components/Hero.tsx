import React from 'react';
import { Cpu, Sparkles, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Senior Software Engineer @ Visa &bull; Ex-GE Healthcare Tech Lead
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
              Architecting <br />
              <span className="gradient-text">High-Performance</span> <br />
              Distributed Systems
            </h1>

            {/* Elevator Pitch */}
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Engineered self-healing <strong className="text-cyan-400 font-semibold">Active-Active event queues</strong> for zero-downtime failover, scaled microservices across medical imaging and fintech domains, and building <strong className="text-indigo-400 font-semibold">GenAI agentic workflows</strong> for autonomous enterprise triage.
            </p>

            {/* Quick Tech Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Java', 'Golang', 'Hazelcast', 'Kubernetes', 'RabbitMQ', 'Quartz', 'GenAI / Agentic'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-cyan-300 border border-slate-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="./AdityaChandelResume.pdf"
                download
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm hover:border-cyan-500/40 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Stats & Architecture Highlight Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden gradient-border space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 text-base">Engineering Highlights</h3>
                    <p className="text-xs text-slate-400 font-mono">Visa &bull; GE Healthcare</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                  Active-Active DR
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {resumeData.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Architecture Callouts */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900/80 border border-indigo-500/20 space-y-2.5">
                <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Key Innovations</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>Active-Active Event Queue:</strong> Hazelcast IMap/IQueue primitives for zero-downtime multi-DC failover at Visa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>DICOMDIR Standards:</strong> High-performance STOW, QIDO & WADO microservices for medical data sharing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>GenAI Incident Triage:</strong> Agentic workflows reducing enterprise production incident MTTR.</span>
                  </li>
                </ul>
              </div>

              {/* Location & Education Meta */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 font-mono">
                <span>📍 Bengaluru, India</span>
                <span>NIT Raipur (8.69 CGPA)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;