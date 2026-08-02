"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiLayers, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    icon: <FiCode className="w-6 h-6 text-primary" />,
    gradient: "from-purple-500 to-indigo-600",
    glowColor: "rgba(168, 85, 247, 0.2)",
    desc: "Engineering highly reactive, scalable client-side logic using modern React, custom hooks, global store management, and robust TypeScript typing standards.",
    features: [
      "Modular components structure",
      "Robust state control workflows",
      "Secure API query handlers"
    ]
  },
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    icon: <FiSmartphone className="w-6 h-6 text-secondary" />,
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.2)",
    desc: "Crafting fluid layout systems that guarantee seamless, pixel-perfect rendering across standard smartphone, tablet, laptop, and ultra-wide monitor viewports.",
    features: [
      "Mobile-first breakpoint design",
      "Dynamic typography scaling",
      "Optimized asset loading states"
    ]
  },
  {
    id: "nextjs-apps",
    title: "Next.js Applications",
    icon: <SiNextdotjs className="w-6 h-6 text-foreground" />,
    gradient: "from-neutral-700 to-neutral-900",
    glowColor: "rgba(255, 255, 255, 0.1)",
    desc: "Building high-performance pages utilizing SSR (Server Side Rendering), SSG (Static Site Generation), Server Actions, and optimized static asset edge delivery.",
    features: [
      "Server-Component caching optimization",
      "SEO structural meta hierarchies",
      "Lightning-fast bundle architectures"
    ]
  },
  {
    id: "ui-ux-impl",
    title: "UI/UX Implementation",
    icon: <FiLayers className="w-6 h-6 text-accent" />,
    gradient: "from-pink-500 to-rose-600",
    glowColor: "rgba(244, 63, 94, 0.2)",
    desc: "Translating sophisticated Dribbble/Figma layouts into functional interactive layers with fluid keyframe micro-animations and intuitive screen transitions.",
    features: [
      "Smooth Framer Motion physics",
      "Polished custom cursor states",
      "Accessible WCAG standards compliance"
    ]
  }
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-32 relative" id="services">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-secondary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SERVICES & EXPERTISE
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-space text-foreground">
              What I Offer <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">For Clients</span>
            </h2>

            <p className="text-foreground/60 max-w-xl text-sm md:text-base leading-relaxed">
              Combining senior engineering practices with design system alignment to deliver premium web applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredCard === service.id;

            return (
              <ScrollReveal key={service.id} delay={0.05 * index}>
                <motion.div
                  onHoverStart={() => setHoveredCard(service.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="glass-card p-8 rounded-3xl border border-outline relative overflow-hidden flex flex-col justify-between min-h-[280px] group transition-all duration-300"
                  style={{
                    boxShadow: isHovered
                      ? `0 20px 40px -15px ${service.glowColor}`
                      : "none",
                  }}
                >
                  {/* Dynamic background light sweep */}
                  <div
                    className={`absolute -right-24 -top-24 w-48 h-48 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="space-y-6">
                    {/* Header: Icon & ID */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-foreground/[0.02] border border-outline flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-mono text-foreground/30 font-semibold uppercase tracking-wider">
                        SERVICE_0{index + 1}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2 text-left">
                      <h3 className="text-lg md:text-xl font-extrabold font-space text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    {/* Feature Bullets */}
                    <ul className="space-y-2 mt-4 text-left">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/75">
                          <FiCheckCircle className="text-primary w-3.5 h-3.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider line and indicator */}
                  <div className="pt-6 border-t border-outline flex justify-end mt-6">
                    <span className="text-[10px] font-bold text-foreground/45 group-hover:text-primary transition-colors flex items-center gap-1.5 uppercase font-space tracking-wider">
                      Details <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Dynamic client helper CTA */}
        <ScrollReveal delay={0.2}>
          <div className="glass-card mt-12 p-8 rounded-3xl border border-outline flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-foreground/[0.02] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div className="text-left space-y-1">
              <h4 className="font-space font-extrabold text-lg text-foreground">Need Custom Frontend Solutions?</h4>
              <p className="text-xs text-foreground/60 leading-relaxed">
                Let's discuss how we can build high-performance visual experiences matching your guidelines.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold text-xs shadow-lg shadow-primary/10 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              Let's Discuss Project
              <FiArrowRight />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
