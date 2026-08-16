"use client";

import React from "react";
import { educationData } from "../data/education";
import { GraduationCap, BookOpen, ExternalLink, Award } from "lucide-react";

export default function Education() {
  const edu = educationData;

  return (
    <section id="education" className="py-12 bg-cyber-bg relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Seksi */}
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-cyber-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            <span className="text-cyber-accent font-mono">01.</span> Education
          </h2>
        </div>

        {/* Card Utama Education */}
        <div className="p-6 md:p-8 rounded-2xl bg-cyber-card border border-cyber-border/80 hover:border-cyber-accent/50 transition-all duration-300 shadow-lg shadow-black/20">
          
          {/* Header Card: Gelar, Universitas, Periode & GPA */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm md:text-base font-semibold text-cyber-purple">
                {edu.institution}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-cyber-border text-slate-300 font-mono text-xs">
                {edu.period}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                GPA {edu.gpa}
              </span>
            </div>
          </div>

          {/* Kotak Skripsi & Publikasi Jurnal */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-cyber-border/60 mb-6">
            
            {/* Header Skripsi & Tautan Jurnal */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-cyber-accent font-mono text-xs font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Undergraduate Thesis & Publication</span>
              </div>

              {edu.thesis.journalUrl && (
                <a
                  href={edu.thesis.journalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent hover:bg-cyber-accent hover:text-slate-950 transition-all duration-200 text-xs font-mono font-medium self-start sm:self-auto"
                >
                  <span>Published in {edu.thesis.journal}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Judul Skripsi */}
            <h4 className="text-sm md:text-base font-bold text-white mb-3 italic">
              "{edu.thesis.title}"
            </h4>

            {/* Poin-Poin Detail Penelitian */}
            <ul className="space-y-2 text-xs md:text-sm text-cyber-text leading-relaxed pl-1">
              {edu.thesis.highlights.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyber-accent font-mono">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Relevant Coursework */}
          <div>
            <span className="block text-xs font-mono text-slate-400 mb-2.5">
              Relevant Coursework:
            </span>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded bg-slate-900 border border-cyber-border text-slate-300"
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