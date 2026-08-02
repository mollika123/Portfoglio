"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCheckCircle, FiShield, FiCpu, FiUsers } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

// ==========================================
// CLIENT-SIDE RUNNING COUNTER
// ==========================================
const AnimatedCounter = ({ value, duration = 1.5 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const About = () => {
  const [activeTab, setActiveTab] = useState("philosophy");

  const stats = [
    { label: "Years of Experience", value: 5, suffix: "+", icon: <FiCpu className="text-primary w-5 h-5" /> },
    { label: "Projects Completed", value: 80, suffix: "+", icon: <FiCheckCircle className="text-secondary w-5 h-5" /> },
    { label: "Happy Clients", value: 30, suffix: "+", icon: <FiUsers className="text-accent w-5 h-5" /> },
    { label: "Design Fidelity", value: 100, suffix: "%", icon: <FiShield className="text-primary w-5 h-5" /> }
  ];

  const tabsContent = [
    {
      id: "philosophy",
      title: "My Philosophy",
      subtitle: "Code is Poetry, Architecture is Key",
      desc: "I believe that frontend code should not only look stunning on screen but also be beautifully structured behind the scenes. Writing semantic HTML, modular CSS, and clean TypeScript isn't just a requirement—it is a commitment to performance, maintainability, and scalability."
    },
    {
      id: "why-me",
      title: "Why Work With Me",
      subtitle: "Bridging the Gap Between Pixel and Performance",
      desc: "Recruiters and clients choose me because I bring design systems to life with zero compromise on visual fidelity. I build fluidly responsive structures that guarantee fast loading speeds, clean animations, and structured states, giving users a premium SaaS-grade product feel."
    },
    {
      id: "approach",
      title: "Engineering Approach",
      subtitle: "Rigorous Standards, Flawless Delivery",
      desc: "My development stack prioritizes search engine optimization, mobile-first compatibility, strict typing safeguards, and optimized bundle sizes. By reducing runtime overhead and loading scripts asynchronously, I target sub-second response times for maximum client conversion."
    }
  ];

  return (
    <section className="py-32 relative" id="about">
      {/* Decorative Orbs */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Stats Grid Left */}
          <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6 w-full">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx}>
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-outline relative group overflow-hidden flex flex-col justify-between min-h-[160px] hover:bg-foreground/[0.02]">
                  {/* Sweep Light Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent pointer-events-none" />
                  
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-foreground/[0.02] border border-outline">
                      {stat.icon}
                    </div>
                    <span className="text-[10px] font-mono text-foreground/30">METRIC_0{idx + 1}</span>
                  </div>

                  <div className="mt-6">
                    <span className="text-3xl md:text-5xl font-extrabold tracking-tight font-space text-foreground block">
                      <AnimatedCounter value={stat.value} />
                      <span className="text-primary">{stat.suffix}</span>
                    </span>
                    <p className="text-[11px] font-medium text-foreground/60 tracking-wider uppercase mt-2 font-mono">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Biography Content Right */}
          <div className="flex-1 space-y-8 text-left w-full">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                ABOUT ME
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold font-space text-foreground tracking-tight mt-4">
                Modern Tech Meets <br />
                <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Creative Engineering
                </span>
              </h3>

              <p className="text-sm md:text-base text-foreground/75 leading-relaxed mt-4">
                I am a senior frontend engineer specialized in building scalable, accessible, and fast web applications. My development journey centers on turning complex mockups into elegant, fluid, and production-ready digital products.
              </p>
            </ScrollReveal>

            {/* Credibility Tabs */}
            <ScrollReveal delay={0.1}>
              <div className="border border-outline bg-foreground/[0.01] rounded-2xl overflow-hidden mt-6">
                {/* Tabs Selector Bar */}
                <div className="flex border-b border-outline bg-foreground/[0.02]">
                  {tabsContent.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 text-xs font-bold font-space uppercase tracking-wider border-b-2 transition-all ${
                        activeTab === tab.id
                          ? "border-primary text-primary bg-primary/5"
                          : "border-transparent text-foreground/40 hover:text-foreground/70"
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content Display */}
                <div className="p-6 min-h-[160px] flex flex-col justify-center">
                  {tabsContent.map((tab) => {
                    if (tab.id !== activeTab) return null;
                    return (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        <h4 className="text-sm font-extrabold text-foreground">{tab.subtitle}</h4>
                        <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
                          {tab.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Download Resume Button */}
            <ScrollReveal delay={0.2}>
              <div className="pt-2">
                <motion.a
                  href="/MOLLIKA AKTER.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-foreground/[0.02] border border-outline hover:border-primary/50 text-foreground font-semibold text-xs transition-all shadow-xl"
                >
                  <FiDownload className="text-primary w-4 h-4" />
                  <span>Download Professional Resume</span>
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
