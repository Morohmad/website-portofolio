"use client";

import React from "react";
import { skillsData } from "../data/skills";
import { Cpu, Terminal, Database, Wrench, Layers } from "lucide-react";

export default function Skills() {
  // Pemetaan Ikon Kategori
  const categoryIcons = [
    <Terminal key="1" className="w-4 h-4 text-cyber-accent" />,
    <Layers key="2" className="w-4 h-4 text-cyber-purple" />,
    <Database key="3" className="w-4 h-4 text-emerald-400" />,
    <Wrench key="4" className="w-4 h-4 text-sky-400" />,
  ];

  return (
    <section id="skills" className="py-12 bg-cyber-bg relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Cpu className="w-6 h-6 text-cyber-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            <span className="text-cyber-accent font-mono">04.</span> Tech Stack & Skills
          </h2>
        </div>

        {/* Grid 4 Kolom Menyamping (Satu Baris Sejajar di Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div>
                {/* Header Kategori dengan Ikon */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyber-border/60">
                  {categoryIcons[idx % categoryIcons.length]}
                  <h3 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>

                {/* Badges Skill */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 text-xs font-mono rounded-md bg-slate-900/90 border border-cyber-border text-slate-300 group-hover:border-slate-700 hover:!border-cyber-accent hover:!text-white hover:bg-slate-800 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}