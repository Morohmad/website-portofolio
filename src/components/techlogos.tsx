"use client";

import React from "react";

export default function TechLogos() {
  const techStack = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  // Duplikasi array agar animasi berjalan mulus tanpa jeda kosong
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section className="py-10 bg-cyber-bg/60 relative overflow-hidden">
      {/* Overlay Efek Fade Out di Sisi Kiri & Kanan */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cyber-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cyber-bg to-transparent z-10 pointer-events-none" />

      {/* Track Baris Berjalan */}
      <div className="w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-4">
          {marqueeItems.map((tech, idx) => (
            <div
              key={idx}
              className="
                flex items-center gap-3.5 px-5 py-2.5 rounded-full 
                bg-cyber-card/90 border border-cyber-border
                text-slate-200 font-mono text-sm md:text-base font-semibold
                hover:border-cyber-accent hover:shadow-lg hover:shadow-sky-500/10 
                transition-all duration-300
                shrink-0 cursor-pointer
              "
            >
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="w-7 h-7 md:w-8 md:h-8 object-contain shrink-0"
                loading="lazy"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}