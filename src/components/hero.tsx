"use client";

import React from "react";
import { profileData } from "../data/profile";
import { Terminal, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-8 relative">
      
      {/* Container Grid 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
        
        {/* KOLOM KIRI: Teks Perkenalan & Kontak (Span 7/12) */}
        <div className="md:col-span-7 flex flex-col items-start">
          
          {/* Badge Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-cyber-accent font-mono text-xs mb-5">
            <Terminal className="w-3.5 h-3.5" />
            <span>System.initialize("Portfolio")</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            {profileData.name}
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl font-semibold text-cyber-purple mb-5">
            {profileData.role}
          </h2>

          {/* Bio / Summary */}
          <p className="text-cyber-text text-sm md:text-base max-w-2xl leading-relaxed mb-8">
            {profileData.about}
          </p>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#education"
              className="px-6 py-3 rounded-lg bg-cyber-accent text-slate-950 font-semibold hover:bg-sky-300 transition-all duration-300 text-sm flex items-center gap-2"
            >
              Explore Profile
              <ArrowDown className="w-4 h-4" />
            </a>

            {/* Social Buttons dengan Logo Berwarna & Diperbesar */}
            <div className="flex items-center gap-3">
              {/* GitHub Button */}
              <a
                href={profileData.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-3.5 rounded-xl bg-cyber-card border border-cyber-border text-cyber-text hover:text-white hover:border-cyber-accent transition-colors flex items-center justify-center group"
              >
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                  alt="GitHub" 
                  className="w-6 h-6 invert object-contain transform group-hover:scale-110 transition-transform" 
                />
              </a>

              {/* LinkedIn Button */}
              <a
                href={profileData.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-3.5 rounded-xl bg-cyber-card border border-cyber-border text-cyber-text hover:text-white hover:border-cyber-accent transition-colors flex items-center justify-center group"
              >
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                  alt="LinkedIn" 
                  className="w-6 h-6 object-contain transform group-hover:scale-110 transition-transform" 
                />
              </a>

              {/* Email Button */}
              <a
                href={profileData.contacts.email}
                title="Email"
                className="p-3.5 rounded-xl bg-cyber-card border border-cyber-border text-cyber-text hover:text-white hover:border-cyber-accent transition-colors flex items-center justify-center"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* KOLOM KANAN: Foto Diri Bergaya Cyber Frame (Span 5/12) */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative group">
            
            {/* Ambient Glowing Background Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-accent to-cyber-purple rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500" />

            {/* Container Foto */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-cyber-border group-hover:border-cyber-accent transition-all duration-300 bg-cyber-card">
              <img
                src="/profile.jpeg"
                alt={profileData.name}
                className="w-full h-full object-cover object-center transition-all duration-500 transform group-hover:scale-105"
              />
            </div>

            {/* Accent Corner Badge */}
            <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-slate-900 border border-cyber-accent text-cyber-accent font-mono text-[11px] rounded-md shadow-lg">
              Data Enthusiast
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}