"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiTerminal, FiGlobe, FiCode, FiLayers } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";

const Hero = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("code");
  const [compilingState, setCompilingState] = useState("idle"); // idle, typing, compiling, done
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax tilt effect
  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Calculate displacement
    const x = (clientX - width / 2) / 35;
    const y = (clientY - height / 2) / 35;
    setCoords({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Workspace simulation timeline
  useEffect(() => {
    const timer1 = setTimeout(() => setCompilingState("typing"), 1000);
    const timer2 = setTimeout(() => setCompilingState("compiling"), 3200);
    const timer3 = setTimeout(() => setCompilingState("done"), 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Code string to show in IDE
  const codeLines = [
    { text: "import { useState } from 'react';", color: "text-purple-400" },
    { text: "import { motion } from 'framer-motion';", color: "text-purple-400" },
    { text: "", color: "" },
    { text: "export default function PremiumApp() {", color: "text-blue-400" },
    { text: "  const [glow, setGlow] = useState(true);", color: "text-amber-300" },
    { text: "  return (", color: "text-blue-400" },
    { text: "    <motion.div", color: "text-cyan-400" },
    { text: "      animate={{ scale: glow ? 1.05 : 1 }}", color: "text-amber-300" },
    { text: "      className='glass-card p-6'", color: "text-green-400" },
    { text: "    >", color: "text-cyan-400" },
    { text: "      <h3>Mollika Dev</h3>", color: "text-foreground" },
    { text: "      <p>Luxury Visual System</p>", color: "text-foreground" },
    { text: "    </motion.div>", color: "text-cyan-400" },
    { text: "  );", color: "text-blue-400" },
    { text: "}", color: "text-blue-400" }
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen relative flex flex-col lg:flex-row items-center justify-center gap-12 pt-32 pb-20 overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Hero Content Left */}
      <div className="flex-1 space-y-6 z-10 text-left">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AVAILABLE FOR FREELANCE PROJECTS
        </motion.div>

        {/* Title / Name */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight font-space text-foreground"
          >
            Mollika Akter
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary"
          >
            Frontend Developer
          </motion.h2>
        </div>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl font-medium text-foreground/80 font-space leading-snug max-w-xl"
        >
          Building modern, scalable and beautiful web experiences.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-lg"
        >
          Specialized in crafting pixel-perfect, high-performance interfaces. I translate design systems into clean, responsive Next.js apps with smooth interactions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 pt-4"
        >
     <a
  href="/Mollika_Akter_Frontend_Developer_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.35)]"
>
  Resume
  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
</a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl border border-outline hover:border-primary/50 bg-foreground/[0.02] backdrop-blur text-foreground font-medium text-sm transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Hero Mockup Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative w-full max-w-[580px] z-10"
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
          rotateY: coords.x,
          rotateX: -coords.y,
        }}
      >
        {/* Workspace Card Container */}
        <div className="glass-card w-full rounded-2xl border border-outline overflow-hidden shadow-2xl bg-surface/80 backdrop-blur-xl">
          {/* Header Panel */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-foreground/[0.03] border-b border-outline">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            {/* File Info Tabs */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium font-mono transition-all ${
                  activeTab === "code" ? "bg-primary/10 text-primary border border-primary/20" : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                <FiCode size={13} />
                Mollika.tsx
              </button>
              <button
                onClick={() => setActiveTab("browser")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium font-mono transition-all ${
                  activeTab === "browser" ? "bg-secondary/10 text-secondary border border-secondary/20" : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                <FiGlobe size={13} />
                LivePreview
              </button>
            </div>
            <span className="text-[10px] font-mono text-foreground/30">Next.js 16</span>
          </div>

          {/* Editor Body */}
          <div className="p-5 font-mono text-xs overflow-x-auto min-h-[300px] max-h-[340px] flex flex-col justify-between">
            {activeTab === "code" ? (
              <div className="space-y-1">
                {codeLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      compilingState === "typing" || compilingState === "compiling" || compilingState === "done"
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0 }
                    }
                    transition={{ delay: idx * 0.08 }}
                    className="flex"
                  >
                    <span className="w-6 text-foreground/20 select-none text-right pr-2">{idx + 1}</span>
                    <span className={line.color}>{line.text}</span>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Live Browser Output */
              <div className="flex flex-col items-center justify-center flex-1 h-full min-h-[220px] p-6 text-center">
                <AnimatePresence mode="wait">
                  {compilingState !== "done" ? (
                    <motion.div
                      key="loader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3 flex flex-col items-center"
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                      <p className="text-[11px] text-foreground/50">Awaiting compilation...</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="live-card"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="glass-card p-6 rounded-2xl border border-primary/20 bg-surface w-full max-w-[280px] shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-xs font-bold font-space">
                          MA
                        </div>
                        <div className="text-left">
                          <h4 className="text-xs font-bold text-foreground">Mollika Dev</h4>
                          <p className="text-[10px] text-foreground/50">Frontend Architect</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-left">
                        <div className="h-1.5 w-full bg-foreground/5 rounded" />
                        <div className="h-1.5 w-3/4 bg-foreground/5 rounded" />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold">
                          Optimized
                        </span>
                        <span className="text-[10px] font-bold text-primary">Score: 100%</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Terminal Window Overlay at Bottom */}
            <div className="mt-4 pt-3 border-t border-outline flex items-start gap-2 text-[10px] text-foreground/50 font-mono">
              <FiTerminal className="mt-0.5 text-primary" />
              <div className="text-left space-y-1">
                <p className="text-foreground/70">
                  <span className="text-green-500">mollika-dev ~ </span> yarn dev
                </p>
                {compilingState === "compiling" && (
                  <p className="text-amber-500 animate-pulse">▲ compiling client and server...</p>
                )}
                {compilingState === "done" && (
                  <p className="text-green-400 font-semibold">✔ compiled successfully in 320ms</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Technology Badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-6 -left-6 w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#61dafb] shadow-lg shadow-black/30"
          title="React"
        >
          <SiReact size={24} className="animate-spin" style={{ animationDuration: "12s" }} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-8 w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-foreground shadow-lg shadow-black/30"
          title="Next.js"
        >
          <SiNextdotjs size={24} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-1/2 -right-8 w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#3178c6] shadow-lg shadow-black/30"
          title="TypeScript"
        >
          <SiTypescript size={22} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
          className="absolute -bottom-6 -right-4 w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#38bdf8] shadow-lg shadow-black/30"
          title="Tailwind CSS"
        >
          <SiTailwindcss size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
