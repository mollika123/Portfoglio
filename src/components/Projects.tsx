"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight, FiCode, FiLayers } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const categories = ["All", "Full-Stack", "Frontend", "Next.js"];

const projects = [
  {


    id: "01",
    title: "Tiles-Gallery",
    subtitle: "MERN Stack E-Commerce & Gallery Platform",
    category: "Full-Stack",
    image: "https://i.ibb.co/JWs6pd2q/Beige-New-Product-Mockup-Now-Available-Facebook-Post.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    desc: "A productivity powerhouse & interactive gallery featuring real-time data synchronization, drag-and-drop management, dynamic categorization, and optimized full-stack architecture.",
    link: "",
    github: "https://github.com",
    accent: "from-purple-500 to-indigo-600",
    featured: true,
  },
  {
    id: "02",
    title: "shopping cart",
    subtitle: "MERN Stack E-Commerce & Gallery Platform",
    category: "Full-Stack",
    image: "https://i.ibb.co/v6f2rVMq/Beige-New-Product-Mockup-Now-Available-Facebook-Post-1.png",
    tags: ["MongoDB", "Express","Typescript", "React", "Node.js", "Tailwind CSS"],
 desc: `KICKHUB is a modern and responsive footwear shopping platform built with Next.js, TypeScript, Tailwind CSS, and modern UI libraries.
Users can explore shoes, view product details, manage cart items, and experience a smooth shopping interface.`,
    link: "shopping-cart-flame-tau.vercel.app",
    github: "https://github.com",
    accent: "from-purple-500 to-indigo-600",
    featured: true,
  },
 
  {
    id: "05",
    title: "RentNest",
    subtitle: "Task & Note Management Web Application",
    category: "Frontend",
    image: "https://i.ibb.co/67JLGq5j/Beige-New-Product-Mockup-Now-Available-Facebook-Post-2.png",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    desc: "An intuitive web application for keeping track of daily tasks, notes, and productivity goals with seamless local persistence and interactive dashboard UI.",
    link: "https://rentnest-pi.vercel.app/",
    github: "https://github.com",
    accent: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    id: "06",
    title: "StudyNook",
    subtitle: "Task & Note Management Web Application",
    category: "Frontend",
    image: "https://i.ibb.co/8LF2DLXC/Beige-New-Product-Mockup-Now-Available-Facebook-Post-4.png",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    desc: "An intuitive web application for keeping track of daily tasks, notes, and productivity goals with seamless local persistence and interactive dashboard UI.",
    link: "https://rentnest-pi.vercel.app/",
    github: "https://github.com",
    accent: "from-cyan-500 to-blue-600",
    featured: true,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-36 relative" id="projects">
      {/* Background Decorative Gradient Light */}
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[350px] bg-purple-600/10 dark:bg-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Portfolio Showcase
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400">Projects & Works</span>
          </h2>

          <p className="text-on-surface-variant max-w-2xl text-base md:text-lg leading-relaxed">
            A curated showcase of applications built with modern web technologies, performance optimization, and refined UI design.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                    : "bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10 hover:border-purple-500/50 hover:text-purple-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="glass-card rounded-[2rem] border border-neutral-200/80 dark:border-white/10 overflow-hidden flex flex-col justify-between group hover:border-purple-500/50 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] transition-all duration-500"
            >
              <div>
                {/* Browser Mockup Header & Image */}
                <div className="relative overflow-hidden bg-neutral-900 aspect-[16/10]">
                  {/* Browser Bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 px-4 py-2.5 bg-neutral-950/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 truncate max-w-[150px]">
                      {project.title.toLowerCase()}.vercell.app
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-400">
                      {project.id}
                    </span>
                  </div>

                  {/* Project Image */}
                  <img
                    alt={project.title}
                    src={project.image}
                    className="w-full h-full object-cover object-top pt-8 transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay with Live Demo & Github Buttons */}
                  <div className="absolute inset-0 pt-8 bg-neutral-950/70 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-4 z-30">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white font-semibold text-xs shadow-lg shadow-purple-500/40 hover:bg-purple-500 hover:scale-105 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 font-semibold text-xs hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code Repo
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                      Project {project.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-on-surface group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-purple-600/80 dark:text-purple-400/80 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action Links */}
              <div className="px-8 pb-8 pt-4 border-t border-neutral-200/60 dark:border-white/10 flex items-center justify-between mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-purple-600 dark:text-purple-400 inline-flex items-center gap-1.5 hover:gap-3 transition-all"
                >
                  View Live Site <FiArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-on-surface-variant hover:text-on-surface inline-flex items-center gap-1 transition-colors"
                >
                  <FiCode className="w-3.5 h-3.5" /> Source
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
