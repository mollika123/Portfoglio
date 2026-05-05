"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Tiles-Gallery",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxjeoNEz8hYf9mEolUS34VLMmoyje_5_1BiYRli0Q8zKzk3lcjeW3iKzcosD3htJsMvoNhulFazNqS-qUmryUHbx--k5ELFuQxY7nXF9tnsB_hYqME_muSAgSGguX9Gizcp3SoN93eSXLelzX_mn9NFN1VEXZ_a1aiDm--Y8xnhXrv5MdqHP3P6ySNESaiH3DznVf8lB8_P7NsoB7bAZjMZ_iWr86jTifIBMnw17WnYAYAocpkx0P81Or626ybXyH7mdB_6sdxxFk",
    tags: ["MongoDB", "Express", "React"],
    desc: "A productivity powerhouse featuring real-time synchronization, drag-and-drop task management, and advanced categorization using the MERN stack.",
    link:"https://tiles-gallery-murex.vercel.app/"
  },
  {
    title: "Dragon-News",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYIVMAmS7e3yvTxG7AaBv-Dw0Ww-s60CqO8IWLZK0ztsgXhmPpgUEFPF6sooIARUCYj4Cz4ENHxpsPjlYnKCcBFPZkRMjk2HHZr0sixeujkBLpFCaU6LaEz7F-eLegvy5Jwk7kTZZuT-Mzb_3b0VvqhM3CMlKXFN20Zd-nvp3hsfAQ2wmxcKhC5-4ri2bTd6-0N7R776da8lOBQ91L_BrIhJMIzsz8MMSCa3AvI-XE0LAniM8H-c9kbpH-2asLgmZeTvmcccFfhIE",
    tags: ["Next.js", "Stripe", "Tailwind"],
    desc: "A high-conversion retail platform with dynamic product filtering, seamless Stripe checkout, and optimized mobile user experience.",
    link:"https://dragon-news-self.vercel.app/"
  },
  {
    title: "Keen-keeper",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYIVMAmS7e3yvTxG7AaBv-Dw0Ww-s60CqO8IWLZK0ztsgXhmPpgUEFPF6sooIARUCYj4Cz4ENHxpsPjlYnKCcBFPZkRMjk2HHZr0sixeujkBLpFCaU6LaEz7F-eLegvy5Jwk7kTZZuT-Mzb_3b0VvqhM3CMlKXFN20Zd-nvp3hsfAQ2wmxcKhC5-4ri2bTd6-0N7R776da8lOBQ91L_BrIhJMIzsz8MMSCa3AvI-XE0LAniM8H-c9kbpH-2asLgmZeTvmcccFfhIE",
    tags: ["Next.js", "Stripe", "Tailwind"],
    desc: "A high-conversion retail platform with dynamic product filtering, seamless Stripe checkout, and optimized mobile user experience.",
    link:"keen-keeper-app.surge.sh"
  }
];

const Projects = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // GSAP Staggered Reveal for project cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects-grid",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-40" id="projects">
      <ScrollReveal>
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-headline-lg">Featured Works</h2>
          <p className="text-on-surface-variant">
            A curated selection of my most impactful projects.
          </p>
        </div>
      </ScrollReveal>
      <div id="projects-grid" className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="glass-card rounded-[2rem] overflow-hidden group"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="aspect-video relative overflow-hidden"
            >
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700"
                src={project.image}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="bg-white text-black p-4 rounded-full hover:scale-110 transition-all">
                  <span className="material-symbols-outlined">link</span>
                </button>
                <button className="bg-white text-black p-4 rounded-full hover:scale-110 transition-all">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    code
                  </span>
                </button>
              </div>
            </motion.div>
            <div className="p-10 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-headline-md text-2xl mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-fixed-dim text-xs text-label-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant">{project.desc}</p>
              <div className="flex gap-4">
                <a
                  className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all"
                  href={project.link}
                >
                  Live Demo{" "}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a
                  className="text-on-surface-variant font-bold inline-flex items-center gap-2"
                  href={project.link}
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
