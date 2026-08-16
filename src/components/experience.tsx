"use client";

import React from "react";
import { experiences } from "../data/experience";
import { Briefcase, Terminal } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-cyber-bg bg-cyber-grid relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Seksi */}
        <div className="flex items-center gap-3 mb-12">
          <Terminal className="w-6 h-6 text-cyber-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            <span className="text-cyber-accent font-mono">02.</span> Experience & Activities
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-cyber-border/80 ml-3 md:ml-6 pl-6 space-y-12">
          {experiences.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Glowing Dot Indicator */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyber-accent ring-4 ring-cyber-bg group-hover:bg-cyber-purple group-hover:scale-125 transition-all duration-300" />

              {/* Tanggal / Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyber-card border border-cyber-border text-cyber-accent font-mono text-xs mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{item.period}</span>
              </div>

              {/* Title & Org */}
              <h3 className="text-xl font-bold text-white group-hover:text-cyber-accent transition-colors">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-cyber-purple mb-4">
                {item.organization}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-4 text-cyber-text text-sm leading-relaxed">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyber-accent font-mono mt-1">›</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-900/80 border border-cyber-border text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}