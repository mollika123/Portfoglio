"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaRocket,
} from "react-icons/fa";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    category: "Engineering",
    icon: FaCode,
    gradient: "from-purple-500 via-fuchsia-500 to-indigo-600",
    glowColor: "rgba(168, 85, 247, 0.25)",
    desc: "Building high-performance, SEO-optimized, and scalable web applications using React, Next.js, TypeScript, and modern backend architecture.",
    features: [
      "Responsive & Pixel-Perfect UI",
      "Server-Side Rendering (SSR) & SSG",
      "State Management & Custom Hooks",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "ui-ux",
    title: "UI/UX & Design Systems",
    category: "Design",
    icon: FaPalette,
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    glowColor: "rgba(244, 63, 94, 0.25)",
    desc: "Crafting intuitive, user-centric interfaces with smooth micro-animations, glassmorphism, accessibility standards, and reusable component libraries.",
    features: [
      "Custom Design Systems & Tokens",
      "Framer Motion Micro-Interactions",
      "WCAG Accessibility Compliance",
    ],
    tags: ["Framer Motion", "Figma", "Design Systems", "Glassmorphism"],
    featured: true,
  },
  {
    id: "backend-api",
    title: "Backend & API Architecture",
    category: "Architecture",
    icon: FaServer,
    gradient: "from-cyan-500 via-teal-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.25)",
    desc: "Designing secure RESTful & GraphQL APIs, authentication mechanisms, database modeling, and scalable serverless backend functions.",
    features: [
      "Secure JWT & OAuth Authentication",
      "MongoDB & SQL Database Optimization",
      "REST & GraphQL Endpoint Design",
    ],
    tags: ["Node.js", "Express", "MongoDB", "Better Auth"],
    featured: false,
  },
  {
    id: "mobile-dev",
    title: "Cross-Platform Mobile Apps",
    category: "Mobile",
    icon: FaMobileAlt,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
    desc: "Developing fast, responsive cross-platform web apps and PWAs optimized for desktop, tablet, and mobile devices.",
    features: [
      "Progressive Web App (PWA) Offline Support",
      "Touch-Optimized Interactive Controls",
      "Seamless Cross-Device Synchronization",
    ],
    tags: ["PWA", "Mobile-First", "React", "Tailwind"],
    featured: false,
  },
  {
    id: "cloud-devops",
    title: "Cloud Deployment & DevOps",
    category: "Infrastructure",
    icon: FaCloud,
    gradient: "from-amber-400 via-orange-500 to-red-600",
    glowColor: "rgba(245, 158, 11, 0.25)",
    desc: "Automating cloud deployments, environment configs, edge delivery, and continuous integration pipelines on Vercel, Netlify, and AWS.",
    features: [
      "Automated CI/CD Workflows",
      "Edge Network & CDN Optimization",
      "Environment & Secrets Management",
    ],
    tags: ["Vercel", "AWS", "Git", "CI/CD"],
    featured: false,
  },
  {
    id: "performance-seo",
    title: "Performance & SEO Optimization",
    category: "Optimization",
    icon: FaRocket,
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    glowColor: "rgba(139, 92, 246, 0.25)",
    desc: "Boosting site speed, Web Vitals metrics, search engine ranking, asset compression, and bundle size reduction for maximum conversion.",
    features: [
      "Core Web Vitals 90+ Lighthouse Score",
      "Dynamic Meta Tag & Structured Data",
      "Image Optimization & Code Splitting",
    ],
    tags: ["Lighthouse", "SEO", "Core Web Vitals", "Analytics"],
    featured: false,
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-32 relative" id="services">
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header Section */}
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Services & Expertise
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface">
            Crafting High-Performance{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400">
              Digital Solutions
            </span>
          </h2>

          <p className="text-on-surface-variant max-w-2xl text-base md:text-lg leading-relaxed">
            Combining engineering precision with modern aesthetics to deliver scalable,
            fast, and visually captivating web products.
          </p>
        </div>
      </ScrollReveal>

      {/* Services Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredCard === service.id;

          return (
            <ScrollReveal key={service.id} delay={0.1 * (index % 3)}>
              <motion.div
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative group h-full rounded-3xl p-8 glass-card border border-neutral-200/80 dark:border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  service.featured ? "md:col-span-1 lg:col-span-1" : ""
                }`}
                style={{
                  boxShadow: isHovered
                    ? `0 20px 40px -15px ${service.glowColor}`
                    : "none",
                }}
              >
                {/* Background Hover Accent Glow */}
                <div
                  className={`absolute -right-16 -top-16 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  {/* Top Row: Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-white dark:bg-neutral-950 rounded-[14px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/10">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Highlight Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-on-surface font-medium"
                      >
                        <FiCheckCircle className="text-purple-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tags & Hover Arrow */}
                <div className="pt-4 border-t border-neutral-200/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    animate={{ x: isHovered ? 3 : 0, y: isHovered ? -3 : 0 }}
                    className="w-8 h-8 rounded-full bg-purple-500/10 dark:bg-white/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors"
                  >
                    <FiArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
