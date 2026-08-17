"use client";

import React, { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-border/60">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-white font-mono text-lg md:text-xl font-bold hover:text-cyber-accent transition-colors"
        >
          <Terminal className="w-6 h-6 text-cyber-accent" />
          <span>morohmad.</span>
        </a>

        {/* Navigation Links Desktop (01 s.d 05 Lengkap) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 font-mono text-sm md:text-base font-medium">
          <a href="#education" className="text-cyber-text hover:text-cyber-accent transition-colors">
            <span className="text-cyber-accent font-semibold">01.</span> Education
          </a>
          <a href="#experience" className="text-cyber-text hover:text-cyber-accent transition-colors">
            <span className="text-cyber-accent font-semibold">02.</span> Experience
          </a>
          <a href="#projects" className="text-cyber-text hover:text-cyber-accent transition-colors">
            <span className="text-cyber-accent font-semibold">03.</span> Projects
          </a>
          <a href="#skills" className="text-cyber-text hover:text-cyber-accent transition-colors">
            <span className="text-cyber-accent font-semibold">04.</span> Skills
          </a>
          <a href="#contact" className="text-cyber-text hover:text-cyber-accent transition-colors">
            <span className="text-cyber-accent font-semibold">05.</span> Contact
          </a>
        </nav>

        {/* Action Controls: Resume Button + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 transition-colors font-mono text-sm font-semibold"
          >
            resume.pdf
          </a>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden rounded-lg bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyber-accent transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-cyber-card/95 backdrop-blur-lg border-b border-cyber-border px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-3.5 font-mono text-sm">
            <a
              href="#education"
              onClick={() => setIsOpen(false)}
              className="text-cyber-text hover:text-cyber-accent transition-colors py-1.5 border-b border-cyber-border/40"
            >
              <span className="text-cyber-accent font-semibold">01.</span> Education
            </a>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="text-cyber-text hover:text-cyber-accent transition-colors py-1.5 border-b border-cyber-border/40"
            >
              <span className="text-cyber-accent font-semibold">02.</span> Experience
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-cyber-text hover:text-cyber-accent transition-colors py-1.5 border-b border-cyber-border/40"
            >
              <span className="text-cyber-accent font-semibold">03.</span> Projects
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-cyber-text hover:text-cyber-accent transition-colors py-1.5 border-b border-cyber-border/40"
            >
              <span className="text-cyber-accent font-semibold">04.</span> Skills
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-cyber-text hover:text-cyber-accent transition-colors py-1.5"
            >
              <span className="text-cyber-accent font-semibold">05.</span> Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}