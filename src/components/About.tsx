"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <section className="py-40" id="about">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Stats Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-10 rounded-[2rem] border border-white/5 flex flex-col justify-center min-h-[180px] group hover:bg-white/[0.05] transition-all duration-500">
              <span className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left block">5+</span>
              <p className="text-on-surface-variant text-sm font-label-md uppercase tracking-[0.2em] leading-tight">
                Years of<br />Experience
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-10 rounded-[2rem] border border-white/5 flex flex-col justify-center min-h-[180px] group hover:bg-white/[0.05] transition-all duration-500">
              <span className="text-5xl font-bold text-tertiary mb-2 group-hover:scale-110 transition-transform origin-left block">150+</span>
              <p className="text-on-surface-variant text-sm font-label-md uppercase tracking-[0.2em] leading-tight">
                Projects<br />Completed
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="glass-card p-10 rounded-[2rem] border border-white/5 flex flex-col justify-center min-h-[180px] group hover:bg-white/[0.05] transition-all duration-500">
              <span className="text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform origin-left block">40+</span>
              <p className="text-on-surface-variant text-sm font-label-md uppercase tracking-[0.2em] leading-tight">
                Happy<br />Clients
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="glass-card p-10 rounded-[2rem] border border-white/5 flex flex-col justify-center min-h-[180px] group hover:bg-white/[0.05] transition-all duration-500">
              <span className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left block">24/7</span>
              <p className="text-on-surface-variant text-sm font-label-md uppercase tracking-[0.2em] leading-tight">
                Customer<br />Support
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-10">
          <ScrollReveal>
            <h2 className="text-headline-lg text-on-surface leading-tight">
              Modern Tech Meets <br />
              <span className="italic text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary">Creative Precision</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
              I am a full-stack engineer specialized in building scalable web
              applications. My approach combines technical rigor with a keen eye
              for aesthetics, ensuring that every line of code translates into a
              seamless user journey.
            </p>
            <div className="pt-4">
             <motion.a
  href="/MOLLIKA AKTER.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-3 bg-surface-container-high border border-outline-variant px-10 py-5 rounded-2xl text-label-md hover:bg-surface-variant transition-all shadow-xl shadow-black/20"
>
  <span className="material-symbols-outlined">download</span>
  Download Resume
</motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};


export default About;

