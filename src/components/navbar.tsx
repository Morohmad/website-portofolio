"use client";

import React from "react";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-border/60">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Dibuat lebih tebal & besar */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-white font-mono text-lg md:text-xl font-bold hover:text-cyber-accent transition-colors"
        >
          <Terminal className="w-6 h-6 text-cyber-accent" />
          <span>morohmad.</span>
        </a>

        {/* Navigation Links - Naik dari text-xs ke text-sm/text-base */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm md:text-base font-medium">
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
        </nav>

        {/* Resume Button - Ukuran tombol & font diperbesar proporsional */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg border border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 transition-colors font-mono text-sm font-semibold"
        >
          Resume.pdf
        </a>

      </div>
    </header>
  );
}