import React from 'react';
import { Layers, Server, Zap, Brain, CheckCircle2, UserCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const corePillars = [
  {
    icon: Server,
    title: 'Distributed Systems & Failover',
    desc: 'Specialist in Active-Active multi-datacenter architecture, Hazelcast primitives, disaster recovery, and zero-downtime queue engineering.',
  },
  {
    icon: Zap,
    title: 'Performance & Memory Optimization',
    desc: 'Spearheaded Java Spring Boot memory optimization, reducing memory footprint by ~70% across 31+ production microservice templates.',
  },
  {
    icon: Brain,
    title: 'GenAI & Autonomous Agentic Workflows',
    desc: 'Applying LLMs, RAG pipelines, and function calling to build autonomous incident triage systems that minimize incident MTTR.',
  },
  {
    icon: Layers,
    title: 'Domain Expertise (Fintech & Healthcare)',
    desc: 'Engineered mission-critical imaging platform ATDs per international DICOMDIR standards (STOW/QIDO/WADO) and high-availability fintech solutions.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Professional Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Building Resilient, High-Throughput <br className="hidden sm:block" />
            <span className="gradient-text">Enterprise Infrastructures</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            With 5+ years of hands-on experience, I bridge low-level systems engineering with modern GenAI capabilities to build software that never fails.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Story Box */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-cyan-400"></span>
              Engineering Philosophy & Background
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              {resumeData.summary}
            </p>
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Active-Active Multi-Datacenter Deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mentored 5+ Engineers as Tech Lead</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>13 Total Corporate Impact Awards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>B.Tech IT - NIT Raipur (8.69 CGPA)</span>
              </div>
            </div>
          </div>

          {/* Quick Quote / Key Takeaway Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between border-l-4 border-l-indigo-500">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                Leadership & Execution
              </div>
              <blockquote className="text-lg font-medium text-slate-200 italic leading-snug">
                "Eliminating single points of failure through self-healing distributed primitives while accelerating root-cause analysis with GenAI."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-100">{resumeData.name}</div>
                <div className="text-xs text-cyan-400 font-mono">Visa • GE Healthcare</div>
              </div>
              <div className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20">
                Bengaluru, KA
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl glass-panel-hover space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-100 text-base">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;