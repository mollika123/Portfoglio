"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Tiles-Gallery",
    image: "https://i.ibb.co/M5QMWxK2/Screenshot-2026-05-12-143627.png",
    tags: ["MongoDB", "Express", "React"],
    desc: "A productivity powerhouse featuring real-time synchronization, drag-and-drop task management, and advanced categorization using the MERN stack.",
    link:"https://tiles-gallery-murex.vercel.app/"
  },
  {
    title: "Dragon-News",
    image: "https://i.ibb.co/PvtPkc50/Screenshot-2026-05-12-144850.png",
    tags: ["Next.js", "Stripe", "Tailwind"],
    desc: "A high-conversion retail platform with dynamic product filtering, seamless Stripe checkout, and optimized mobile user experience.",
    link:"https://dragon-news-self.vercel.app/"
  },
  {
    title: "Keen-keeper",
    image: "https://i.ibb.co/pr0jndxM/Screenshot-2026-05-12-143938.png",
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
      <div id="projects-grid" className="grid md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="card  shadow-xl rounded-[2rem] overflow-hidden group"
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
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-5 gap-4">
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
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-3 gap-3">
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
