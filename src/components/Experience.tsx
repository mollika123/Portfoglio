"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiZap, FiGrid } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  desc: string;
  icon: React.ReactNode;
  bullets: string[];
}

const TimelineItem = ({ year, title, company, desc, icon, bullets }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 border-l border-outline last:border-l-0">
      {/* Node Dot Icon */}
      <div className="absolute -left-[17px] top-7 w-8 h-8 rounded-full bg-surface border border-outline shadow-lg flex items-center justify-center text-primary z-10">
        {icon}
      </div>

      {/* Year Label left-positioned on desktop */}
      <div className="absolute left-0 sm:left-6 top-8 text-[11px] font-mono font-bold tracking-widest text-foreground/45 uppercase select-none w-20 text-left sm:text-right hidden sm:block">
        {year}
      </div>

      {/* Card Detail Content */}
      <ScrollReveal delay={0.1}>
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-outline relative group hover:bg-foreground/[0.01]">
          {/* Mobile Year Badge */}
          <span className="inline-block sm:hidden text-[10px] font-mono font-bold tracking-widest text-primary uppercase mb-2">
            {year}
          </span>
          <h4 className="text-lg md:text-xl font-extrabold font-space text-foreground tracking-tight">
            {title}
          </h4>
          <p className="text-xs font-semibold text-primary/80 font-mono tracking-wider uppercase mt-1">
            {company}
          </p>
          <p className="text-xs md:text-sm text-foreground/60 leading-relaxed mt-3">
            {desc}
          </p>

          <ul className="mt-4 space-y-2">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/75 leading-relaxed">
                <span className="text-primary mt-0.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default function Experience() {
  const experiences = [
    {
      year: "2023 - Pres",
      title: "Senior Frontend Engineer & Freelancing",
      company: "Production SaaS Applications",
      desc: "Architecting high-performance Next.js apps for international startup clients, focusing on strict TypeScript rules, caching systems, custom dashboard widgets, and user conversion metrics.",
      icon: <FiZap className="w-4 h-4 text-primary" />,
      bullets: [
        "Optimized Web Vitals score across 3 web properties to a perfect 100/100, saving 30%+ load latency.",
        "Created a reusable component library styled with Tailwind CSS, reducing development time on future builds by 40%.",
        "Integrated dynamic REST & GraphQL servers with type-safe state mutations and custom optimistic states."
      ]
    },
    {
      year: "2021 - 2023",
      title: "React Framework Developer",
      company: "Modern Web Systems & APIs",
      desc: "Specialized in structuring high-fidelity React architectures, component-driven design systems, global state management, and real-time database interfaces.",
      icon: <FiGrid className="w-4 h-4 text-secondary" />,
      bullets: [
        "Authored type-safe states utilizing TypeScript structures, reducing runtime exceptions down to 0%.",
        "Configured robust client-side storage caches and Firebase socket synchronizers to handle high concurrency datasets.",
        "Refactored legacy vanilla layouts into modular React component layers, increasing overall code test coverage."
      ]
    },
    {
      year: "2020 - 2021",
      title: "Frontend Engineering Foundations",
      company: "Algorithms & Layout Architecture",
      desc: "Devoted to mastering core Web APIs, semantic accessibility patterns, clean stylesheet systems, responsive grids, and DOM rendering loops.",
      icon: <FiBookOpen className="w-4 h-4 text-accent" />,
      bullets: [
        "Developed 50+ custom layout designs matching high-fidelity UI specifications on Dribbble.",
        "Refined knowledge of JavaScript algorithms, closure mechanics, and client performance loops.",
        "Built responsive assets that target absolute compatibility across all modern web browser viewports."
      ]
    }
  ];

  return (
    <section className="py-32 relative" id="experience">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              TIMELINE
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-space text-foreground">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Growth & Journey</span>
            </h2>

            <p className="text-foreground/60 max-w-xl text-sm md:text-base leading-relaxed">
              A history of frontend engineering achievements, skill validation, performance engineering, and user-centric results.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Line Container */}
        <div className="relative mt-12 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <TimelineItem
              key={idx}
              year={exp.year}
              title={exp.title}
              company={exp.company}
              desc={exp.desc}
              icon={exp.icon}
              bullets={exp.bullets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
