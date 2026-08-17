"use client";

import React from "react";
import { profileData } from "../data/profile";
import { MapPin } from "lucide-react";

export default function Footer() {
  // Menggunakan skema mailto standar agar langsung membuka aplikasi email bawaan / Gmail di mobile & desktop
  const rawEmail = profileData.contacts.email
    .replace(/^https?:\/\/mail\.google\.com\/mail\/\?view=cm&fs=1&to=/, "")
    .replace(/^mailto:/, "")
    .trim();
  const mailtoUrl = `mailto:${rawEmail}`;

  return (
    <footer id="contact" className="py-8 bg-cyber-card/60 border-t border-cyber-border/80 relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Title Ringkas */}
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
          Let's Connect & Collaborate
        </h2>

        <p className="text-slate-300 text-xs md:text-sm max-w-lg leading-relaxed mb-5">
          Interested in developing data-driven solutions and open to opportunities in the fields of Data Science and Artificial Intelligence.
        </p>

        {/* Action Button: Langsung ke Aplikasi Email */}
        <a
          href={mailtoUrl}
          className="
            inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 rounded-lg 
            bg-slate-900 border border-cyber-border/80 text-white font-medium text-xs md:text-sm
            hover:border-cyber-accent hover:bg-slate-800/80 transition-all duration-300 
            shadow-md shadow-black/30 hover:shadow-cyan-500/10
          "
        >
          {/* Logo Asli Gmail (SVG Vector 4 Warna Resmi Google) */}
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.5 12c0-.68-.06-1.33-.17-1.95H12v3.69h5.89c-.25 1.37-1.02 2.53-2.18 3.31v2.75h3.53C21.3 17.89 22.5 15.18 22.5 12z"
            />
            <path
              fill="#34A853"
              d="M12 22.5c2.84 0 5.21-.94 6.95-2.55l-3.53-2.75c-.94.63-2.14 1-3.42 1-2.63 0-4.86-1.78-5.66-4.17H2.69v2.84C4.43 20.34 7.97 22.5 12 22.5z"
            />
            <path
              fill="#FBBC05"
              d="M6.34 14.03c-.2-.6-.31-1.25-.31-1.91s.11-1.31.31-1.91V7.37H2.69C1.97 8.8 1.56 10.36 1.56 12s.41 3.2 1.13 4.63l3.65-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.54 0 2.93.53 4.02 1.57l3.01-3.01C17.21 2.22 14.84 1.5 12 1.5 7.97 1.5 4.43 3.66 2.69 7.37l3.65 2.84c.8-2.39 3.03-4.17 5.66-4.17z"
            />
          </svg>
          <span>Send Email</span>
        </a>

        {/* Location & Social Links Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 font-mono text-xs text-slate-300 mb-6 pb-5 border-b border-cyber-border/50 w-full max-w-xl">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyber-accent" />
            {profileData.contacts.location}
          </span>

          {/* GitHub */}
          <a 
            href={profileData.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
              alt="GitHub" 
              className="w-4 h-4 invert object-contain transform group-hover:scale-110 transition-transform" 
            />
            <span className="font-semibold">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a 
            href={profileData.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
              alt="LinkedIn" 
              className="w-4 h-4 object-contain transform group-hover:scale-110 transition-transform" 
            />
            <span className="font-semibold">LinkedIn</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] font-mono text-slate-400">
          Designed & Built by <span className="text-slate-200 font-semibold">{profileData.name}</span> © {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
}