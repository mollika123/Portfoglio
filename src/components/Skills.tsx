"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Frontend Stack",
    description: "Creating responsive, fast, and interactive user interfaces.",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]", glow: "rgba(255,255,255,0.1)", desc: "SSR, App Router, Server Actions" },
      { name: "React", icon: FaReact, color: "text-[#61dafb] hover:shadow-[0_0_20px_rgba(97,218,251,0.25)]", glow: "rgba(97,218,251,0.15)", desc: "Hooks, state management, components" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6] hover:shadow-[0_0_20px_rgba(49,120,198,0.25)]", glow: "rgba(49,120,198,0.15)", desc: "Strict typing, clean interfaces" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#f7df1e] hover:shadow-[0_0_20px_rgba(247,223,30,0.25)]", glow: "rgba(247,223,30,0.15)", desc: "ES6+, Async, DOM engineering" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]", glow: "rgba(56,189,248,0.15)", desc: "Responsive, custom visual design" },
    ]
  },
  {
    title: "Backend & Data",
    description: "Designing secure interfaces, APIs, and datastores.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#68a063] hover:shadow-[0_0_20px_rgba(104,160,99,0.25)]", glow: "rgba(104,160,99,0.15)", desc: "Server execution, REST endpoint APIs" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248] hover:shadow-[0_0_20px_rgba(71,162,72,0.25)]", glow: "rgba(71,162,72,0.15)", desc: "NoSQL DB, Schemas, caching optimization" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#ffca28] hover:shadow-[0_0_20px_rgba(255,202,40,0.25)]", glow: "rgba(255,202,40,0.15)", desc: "Authentication, Firestore integration" },
    ]
  },
  {
    title: "Tools & Environment",
    description: "Version control and IDE configurations for code quality.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-[#f05032] hover:shadow-[0_0_20px_rgba(240,80,50,0.25)]", glow: "rgba(240,80,50,0.15)", desc: "Branch models, clean commit tracking" },
      { name: "GitHub", icon: FaGithub, color: "text-foreground hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]", glow: "rgba(255,255,255,0.1)", desc: "Repositories, pipeline CI/CD workflows" },
      { name: "VS Code", icon: VscVscode, color: "text-[#007acc] hover:shadow-[0_0_20px_rgba(0,122,204,0.25)]", glow: "rgba(0,122,204,0.15)", desc: "Environment customization, fast script debugging" },
    ]
  }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SKILLS & EXPERTISE
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-space text-foreground">
              Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">Stack & Competencies</span>
            </h2>

            <p className="text-foreground/60 max-w-xl text-sm md:text-base leading-relaxed">
              Curated technologies enabling rapid layouts, type safety, modular structures, and fast client-side performance.
            </p>
          </div>
        </ScrollReveal>

        {/* Stack Groups */}
        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              
              {/* Category Header */}
              <ScrollReveal delay={0.05 * catIdx}>
                <div className="text-left border-b border-outline pb-4">
                  <h3 className="text-xl font-bold font-space text-foreground">{category.title}</h3>
                  <p className="text-xs text-foreground/50 mt-1">{category.description}</p>
                </div>
              </ScrollReveal>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <ScrollReveal key={skillIdx} delay={0.05 * skillIdx}>
                      <motion.div
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="glass-card p-6 rounded-2xl border border-outline relative overflow-hidden flex flex-col items-center text-center gap-4 cursor-default transition-all duration-300 min-h-[170px] justify-between"
                        style={{
                          boxShadow: isHovered
                            ? `0 15px 30px -10px ${skill.glow}`
                            : "none",
                        }}
                      >
                        {/* Dynamic glow in background */}
                        <div
                          className="absolute -inset-10 rounded-full opacity-0 group-hover:opacity-10 blur-xl pointer-events-none transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, ${skill.glow} 0%, transparent 60%)`,
                          }}
                        />

                        {/* Technology Icon */}
                        <div className="p-3.5 rounded-2xl bg-foreground/[0.02] border border-outline transition-transform duration-300">
                          <Icon className={`w-10 h-10 transition-colors duration-300 ${skill.color}`} />
                        </div>

                        {/* Title and tooltip details */}
                        <div className="space-y-1">
                          <h4 className="font-bold text-foreground text-sm tracking-tight">{skill.name}</h4>
                          <p className="text-[10px] text-foreground/50 leading-relaxed font-mono px-2 select-none">
                            {skill.desc}
                          </p>
                        </div>

                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}