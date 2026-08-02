"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub, FiGlobe, FiCheck } from "react-icons/fi";
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaStar, FaPlane, FaUtensils, FaCamera } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

// ==========================================
// 1. 3D TILT EFFECT CARD WRAPPER
// ==========================================
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`transition-all duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 2. KICKHUB INTERACTIVE MOCKUP (Matched with Image)
// ==========================================
const KickHubMockup = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(9);
  const [isAdded, setIsAdded] = useState(false);
  const [like, setLike] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setCartCount((prev) => prev + 1);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="w-full bg-[#111217] p-4 rounded-xl flex flex-col justify-between font-sans text-xs text-white select-none border border-white/5 shadow-2xl">
      {/* Mock Header Navigation */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
        <span className="font-extrabold tracking-wider text-[#a78bfa] text-sm">KICKHUB</span>
        <div className="flex items-center gap-4 text-gray-400 text-[11px]">
          <span className="hover:text-white cursor-pointer transition-colors">Shop</span>
          <span className="hover:text-white cursor-pointer transition-colors">Catalog</span>
          <div className="bg-white/5 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 text-white">
            <span className="text-xs">🛒</span>
            <span className="font-bold text-[11px]">{cartCount}</span>
          </div>
        </div>
      </div>

      {/* Main Product Card Container */}
      <div className="
      relative
      w-full
      h-[420px]
      rounded-xl
      overflow-hidden
      border border-white/10
      bg-black
      ">

        <Image

          src="/projects/Beige New Product Mockup Now Available Facebook Post (1).png"

          alt="KICKHUB website mockup"

          fill

          className="
          object-contain
          transition-transform
          duration-700
          hover:scale-105
          "

        />


      </div>
    </div>
  );
};

// ==========================================
// 3. SMARTTRAVEL INTERACTIVE MOCKUP
// ==========================================
const SmartTravelMockup = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedNode, setSelectedNode] = useState<string | null>("Louvre Museum");

  const travelPlan = [
    {
      day: 1,
      nodes: [
        { name: "Louvre Museum", time: "09:00 AM", icon: <FaCamera />, cost: "$17", desc: "Explore world-class art collections" },
        { name: "Le Comptoir Bistro", time: "01:00 PM", icon: <FaUtensils />, cost: "$25", desc: "Authentic French cuisine lunch" }
      ]
    },
    {
      day: 2,
      nodes: [
        { name: "Eiffel Tower Tour", time: "10:30 AM", icon: <FaCamera />, cost: "$28", desc: "Panoramic views of Paris skyline" },
        { name: "Seine River Cruise", time: "04:30 PM", icon: <FaPlane />, cost: "$15", desc: "Scenic river view at sunset" }
      ]
    }
  ];

  return (
    <div className="w-full bg-[#111217] p-4 rounded-xl flex flex-col justify-between font-sans text-xs text-white select-none border border-white/5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-cyan-400">✦</span>
          <span className="font-bold tracking-tight text-white">SmartTravel AI</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full font-medium">
          Paris Planner
        </span>
      </div>

    <div className="
      relative
      w-full
      h-[420px]
      rounded-xl
      overflow-hidden
      border border-white/10
      bg-black
      ">


        <Image

          src="/projects/Beige New Product Mockup Now Available Facebook Post.png"

          alt="SmartTravel AI Website Mockup"

          fill

          className="
          object-contain
          transition-all
          duration-700
          hover:scale-105
          "

        />


      </div>

    </div>
  );
};

// ==========================================
// 4. RENTNEST INTERACTIVE MOCKUP
// ==========================================
const RentNestMockup = () => {
  const [favorite, setFavorite] = useState(false);
  const [days, setDays] = useState(3);
  const pricePerNight = 240;

  return (
    <div className="w-full bg-[#111217] p-4 rounded-xl flex flex-col justify-between font-sans text-xs text-white select-none border border-white/5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
        <span className="font-bold tracking-tight text-purple-300">RentNest</span>
        <div className="flex items-center gap-1.5 text-gray-400">
          <FaMapMarkerAlt className="text-purple-400" />
          <span className="text-[10px]">Rome, Italy</span>
        </div>
      </div>

     
    <div className="
      relative
      w-full
      h-[420px]
      rounded-xl
      overflow-hidden
      border border-white/10
      bg-black
      ">


        <Image

          src="/projects/Beige New Product Mockup Now Available Facebook Post (2).png"

          alt="Rentnest"

          fill

          className="
          object-contain
          transition-all
          duration-700
          hover:scale-105
          "

        />


      </div>
    </div>
  );
};

// ==========================================
// 5. MAIN PROJECTS SECTION COMPONENT
// ==========================================
const Projects = () => {
  const projectList = [
    {
      id: "01",
      title: "KICKHUB",
      tagline: "Modern footwear e-commerce platform",
      category: "Frontend Development",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      problem:
        "Traditional sneaker stores suffer from sluggish loading speeds during high-demand release drops, leading to high cart abandonment rates and poor checkout optimization.",
      solution:
        "Engineered a high-performance shopping engine utilizing Next.js Server Components, server-side caching, global client-side state hooks, and optimistic checkout updates to achieve lightning-fast sub-second loading states.",
      contribution:
        "Conceptualized and coded the entire user interface and user flows. Optimized key Web Vitals, reducing Cumulative Layout Shift (CLS) to 0.01 and increasing Lighthouse performance rating to 98/100.",
      mockup: <KickHubMockup />,
      link: "https://kickhub.dev",
      github: "https://github.com/mollika123/kickhub",
      glowColor: "rgba(168, 85, 247, 0.25)",
      textColor: "text-[#a78bfa]"
    },
    {
      id: "02",
      title: "SmartTravel",
      tagline: "AI-Powered Travel Itinerary Planner",
      category: "Full Stack / AI Integration",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "AI APIs"],
      problem:
        "Vacation planning is fragmented, requiring users to jump between weather channels, map directions, dining review platforms, and notepad apps to organize a single trip.",
      solution:
        "Created a unified dashboard that links maps, calendar schedules, weather checks, and travel nodes into a single reactive workspace powered by AI models.",
      contribution:
        "Designed and built the responsive React node scheduler. Integrated travel estimation APIs and coded the custom dashboard mapping grid utilizing interactive vector tracking.",
      mockup: <SmartTravelMockup />,
      link: "https://smarttravel.dev",
      github: "https://github.com/mollika123/smarttravel",
      glowColor: "rgba(6, 182, 212, 0.25)",
      textColor: "text-cyan-400"
    },
    {
      id: "03",
      title: "RentNest",
      tagline: "High-end luxury property rental engine",
      category: "UI/UX & Web Apps",
      tags: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
      problem:
        "Vacation rental pages are often cluttered with advertisements and complex checkout flows that distract clients, causing them to bounce before completing booking actions.",
      solution:
        "Developed a premium, high-conversion minimal listing engine featuring glassmorphic cards, simple calendar calculators, and clear visual rating indices.",
      contribution:
        "Drafted the pixel-perfect styling guidelines in Tailwind CSS. Configured real-time property sync databases using Firebase and animated layout transitions using Framer Motion.",
      mockup: <RentNestMockup />,
      link: "https://rentnest.dev",
      github: "https://github.com/mollika123/rentnest",
      glowColor: "rgba(216, 180, 254, 0.25)",
      textColor: "text-purple-300"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0f] text-white" id="projects">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-20 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              CASE STUDIES
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Projects & Works</span>
            </h2>

            <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
              Explore alternating case studies demonstrating clean system design, visual precision, and user-centric flows.
            </p>
          </div>
        </ScrollReveal>

        {/* Project List */}
        <div className="space-y-32">
          {projectList.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* 1. Project Info Details */}
                <div className="flex-1 space-y-5 text-left">
                  <ScrollReveal delay={0.1}>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-gray-500">{project.id} </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${project.textColor}`}>
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-400 italic mt-0.5">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono font-medium px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3 mt-6">
                      <div className="border-l-2 border-purple-500/30 pl-4 py-0.5">
                        <h4 className="text-[11px] font-bold uppercase tracking-wide text-gray-400">The Challenge</h4>
                        <p className="text-xs md:text-sm text-gray-300 mt-0.5 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="border-l-2 border-cyan-500/30 pl-4 py-0.5">
                        <h4 className="text-[11px] font-bold uppercase tracking-wide text-gray-400">The Solution</h4>
                        <p className="text-xs md:text-sm text-gray-300 mt-0.5 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div className="border-l-2 border-purple-400/30 pl-4 py-0.5">
                        <h4 className="text-[11px] font-bold uppercase tracking-wide text-gray-400">My Contribution</h4>
                        <p className="text-xs md:text-sm text-gray-300 mt-0.5 leading-relaxed">
                          {project.contribution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-purple-500/20"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-1.5"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    </div>
                  </ScrollReveal>
                </div>

                {/* 2. Interactive Browser Mockup Wrapper */}
                <div className="flex-1 w-full max-w-[520px]">
                  <ScrollReveal delay={0.2}>
                    <TiltCard className="w-full">
                      {/* Outer Browser Mockup Window Frame (Matched with Image) */}
                      <div
                        className="w-full rounded-2xl border border-white/20 overflow-hidden shadow-2xl bg-[#0d0e14] relative group"
                        style={{
                          boxShadow: `0 25px 60px -15px ${project.glowColor}`,
                        }}
                      >
                        {/* Browser Window Header Bar */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#13141f] border-b border-white/10">
                          {/* Traffic light dots */}
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                          </div>

                          {/* Address Bar Pill */}
                          <div className="bg-black/60 border border-white/10 text-[10px] px-8 py-1 rounded-full text-gray-400 font-mono tracking-tight flex items-center gap-1.5">
                            <FiGlobe className="text-gray-500 text-[11px]" />
                            {project.title.toLowerCase()}.dev
                          </div>

                          {/* Index Badge */}
                          <span className="text-[10px] font-mono font-bold text-gray-600">
                            {project.id}
                          </span>
                        </div>

                        {/* Interactive Content Area */}
                        <div className="p-3 bg-black/50 min-h-[380px] flex items-center justify-center relative">
                          {project.mockup}
                        </div>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;