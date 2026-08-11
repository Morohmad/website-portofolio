"use client";

import React from "react";
import { projectsData } from "../data/projects";
import { Code2, FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-cyber-bg relative">
      {/* Container dibuat lebih lebar (max-w-[1400px]) agar mengisi layar & tidak menumpuk di tengah */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="w-6 h-6 text-cyber-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            <span className="text-cyber-accent font-mono">03.</span> Featured Projects
          </h2>
        </div>

        {/* Grid 3 Kolom Menyamping */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
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
                <p className="text-sm text-cyber-text leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Metrics Badge */}
                {project.metrics && (
                  <div className="mb-4 inline-block px-2.5 py-1 rounded bg-slate-900 border border-cyber-border text-emerald-400 font-mono text-xs">
                    Key Result: {project.metrics}
                  </div>
                )}

                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cyber-border/50">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
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