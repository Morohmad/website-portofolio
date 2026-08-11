"use client";

import React from "react";
import { profileData } from "../data/profile";
import { Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-8 bg-cyber-card/60 border-t border-cyber-border/80 relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Title Ringkas */}
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
          Let's Connect & Collaborate
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-300 text-xs md:text-sm max-w-lg leading-relaxed mb-5">
          Terbuka untuk peluang riset, kolaborasi proyek Machine Learning, maupun posisi Data Science.
        </p>

        {/* Action Button: Mail Me (Ukuran Pas) */}
        <a
          href={profileData.contacts.email}
          className="
            inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-lg 
            bg-cyber-accent text-slate-950 font-semibold text-xs md:text-sm
            hover:bg-sky-300 transition-all duration-300 
            shadow-md shadow-sky-500/10 hover:shadow-sky-500/20
          "
        >
          <Mail className="w-4 h-4" />
          <span>Kirim Email</span>
          <Send className="w-3.5 h-3.5 ml-0.5" />
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