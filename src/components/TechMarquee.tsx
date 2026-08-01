"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaPalette,
  FaServer,
  FaMobileAlt,
  FaRocket,
  FaLayerGroup,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiJavascript,
  SiVercel,
} from "react-icons/si";

const row1 = [
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js 16", icon: SiNextdotjs, color: "text-neutral-900 dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  { name: "Framer Motion", icon: SiFramer, color: "text-fuchsia-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-amber-400" },
];

const row2 = [
  { name: "Full-Stack Dev", icon: FaCode, color: "text-purple-500" },
  { name: "UI/UX Systems", icon: FaPalette, color: "text-pink-500" },
  { name: "Responsive UI", icon: FaMobileAlt, color: "text-indigo-400" },
  { name: "Clean Architecture", icon: FaLayerGroup, color: "text-cyan-500" },
  { name: "Cloud Deployment", icon: SiVercel, color: "text-neutral-900 dark:text-white" },
  { name: "REST & GraphQL", icon: FaServer, color: "text-rose-500" },
  { name: "Git & GitHub", icon: FaGithub, color: "text-neutral-700 dark:text-neutral-300" },
  { name: "90+ Web Vitals", icon: FaRocket, color: "text-amber-500" },
];

export default function TechMarquee() {
  // Duplicate arrays to guarantee smooth infinite looping without gaps
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-16 overflow-hidden relative select-none">
      {/* Edge Gradient Mask for smooth fade out */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="space-y-6">
        {/* Row 1: Leftward Infinite Marquee */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {marqueeRow1.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`row1-${index}`}
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card border border-neutral-200/80 dark:border-white/10 shadow-sm hover:border-purple-500/50 hover:scale-105 transition-all duration-300 group shrink-0"
                >
                  <Icon className={`w-6 h-6 ${item.color} group-hover:rotate-12 transition-transform duration-300`} />
                  <span className="text-sm font-semibold text-on-surface tracking-tight whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Row 2: Rightward Infinite Marquee */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
          >
            {marqueeRow2.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`row2-${index}`}
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card border border-neutral-200/80 dark:border-white/10 shadow-sm hover:border-purple-500/50 hover:scale-105 transition-all duration-300 group shrink-0"
                >
                  <Icon className={`w-6 h-6 ${item.color} group-hover:rotate-12 transition-transform duration-300`} />
                  <span className="text-sm font-semibold text-on-surface tracking-tight whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
