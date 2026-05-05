"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // GSAP Floating Animation for the image
    const floatAnim = gsap.to(imageRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // GSAP Parallax Effect on Scroll
    const parallaxAnim = gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
      rotation: 5,
      ease: "none",
    });

    return () => {
      floatAnim.kill();
      parallaxAnim.kill();
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 pt-32 pb-20 overflow-hidden"
      id="home"
    >
      <div className="flex-1 space-y-8">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-fixed-dim text-label-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
          </span>
          AVAILABLE FOR PROJECTS
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-3xl text-on-surface">
         Mollika Akter //{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-tertiary-container">
            Full-Stack Engineer
          </span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-2xl text-on-surface-variant max-w-xl">
          I am a passionate Frontend Developer focused on building fast, responsive, and visually engaging web experiences. I specialize in modern technologies like React, Next.js, and Tailwind CSS, crafting interfaces that are not only functional but also intuitive and user-friendly.

  
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-headline-md text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            View Projects{" "}
            <span className="material-symbols-outlined">arrow_outward</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-outline-variant bg-surface-container/50 backdrop-blur px-8 py-4 rounded-xl font-headline-md text-sm transition-all"
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="flex-1 relative"
      >
        <div
          ref={imageRef}
          className="w-80 h-80 md:w-[450px] md:h-[450px] glass-card rounded-3xl overflow-hidden relative z-10 p-4"
        >
          <img
            alt="Sajid Yaqub"
            className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            src='/pic.png'
          />
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-tertiary-container/20 blur-[80px] rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/20 blur-[100px] rounded-full"></div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
