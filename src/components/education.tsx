"use client";

import React from "react";
import { educationData } from "../data/education";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-10 bg-cyber-bg relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-cyber-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            <span className="text-cyber-accent font-mono">01.</span> Education
          </h2>
        </div>

        {/* Card Education */}
        <div className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-0.5">
                {educationData.degree}
              </h3>
              <p className="text-cyber-purple text-sm font-medium">
                {educationData.institution}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-cyber-border text-cyber-accent font-mono text-xs">
                {educationData.period}
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                GPA {educationData.gpa}
              </span>
            </div>
          </div>

          {/* Thesis */}
          <div className="mb-4 p-4 rounded-lg bg-slate-900/80 border border-cyber-border/80">
            <p className="text-xs font-mono text-cyber-accent mb-1 flex items-center gap-1.5 font-medium">
              <BookOpen className="w-3.5 h-3.5" /> Undergraduate Thesis
            </p>
            <p className="text-sm text-slate-200 italic leading-relaxed">
              "{educationData.thesisTitle}"
            </p>
          </div>

          {/* Coursework */}
          <div>
            <p className="text-xs font-mono text-cyber-text mb-2">
              Relevant Coursework:
            </p>
            <div className="flex flex-wrap gap-2">
              {educationData.courses.map((course, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 border border-cyber-border text-slate-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}