"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "../data/projects";
import { Code2, FolderGit2, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0);
  const total = projectsData.length;

  const handlePrev = () => {
    if (total === 0) return;
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    if (total === 0) return;
    setStartIndex((prev) => (prev + 1) % total);
  };

  const visibleProjects =
    total > 0
      ? [
          projectsData[startIndex % total],
          projectsData[(startIndex + 1) % total],
          projectsData[(startIndex + 2) % total],
        ]
      : [];

  return (
    <section id="projects" className="py-12 bg-cyber-bg relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header & Slider Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-cyber-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              <span className="text-cyber-accent font-mono">03.</span> Featured Projects
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-lg bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyber-accent hover:border-cyber-accent/60 transition-all duration-200 active:scale-95 flex items-center justify-center shadow-sm"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-lg bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyber-accent hover:border-cyber-accent/60 transition-all duration-200 active:scale-95 flex items-center justify-center shadow-sm"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid 3 Kolom Menyamping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => (
            <div
              key={`${project.id}-${startIndex}-${idx}`}
              className="rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-lg shadow-black/20"
            >
              <div>
                {/* Gambar Project Placeholder dari public/profile.jpeg */}
                <div className="relative w-full h-48 bg-slate-900 overflow-hidden border-b border-cyber-border/60">
                  <Image
                    src={(project as any).image || "/profile.jpeg"}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  {/* Header Card */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyber-purple font-medium">
                      {project.subtitle}
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-text hover:text-white transition-colors"
                        title="View Repository"
                      >
                        <FolderGit2 className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyber-accent transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-cyber-text leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                {/* Metrics Badge */}
                {project.metrics && (
                  <div className="mb-4 inline-block px-2.5 py-1 rounded bg-slate-900 border border-cyber-border text-emerald-400 font-mono text-xs">
                    Key Result: {project.metrics}
                  </div>
                )}

                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cyber-border/50">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded"
                    >
                      {tech}
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