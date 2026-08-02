"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  const navHeight = useTransform(scrollY, [0, 100], ["100px", "72px"]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Section Observer for active indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
  <motion.nav
  style={{
    height: navHeight,
  }}
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-500 ${
    isScrolled
      ? `
        mt-4 
        mx-4 
        md:mx-auto 
        max-w-5xl
        rounded-2xl
        bg-black/40
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      `
      : `
        w-full
        bg-transparent
        border-b border-white/10
      `
  }`}
>
      <div className="flex justify-between items-center px-6 md:px-8 w-full">
        {/* Signature Monogram Style Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-space text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 group"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:opacity-80 transition-opacity">
            Mollika
          </span>
          <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md bg-foreground/5 border border-outline text-foreground/70 font-mono font-medium">
            Dev
          </span>
        </motion.a>

        {/* Desktop Navigation Links with sliding glass pill */}
        <div className="hidden md:flex gap-1 items-center bg-foreground/[0.02] border border-outline/5 p-1 rounded-xl">
          {navLinks.map((item, i) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`relative px-4 py-2 font-medium tracking-tight text-sm transition-colors duration-300 rounded-lg ${
                  isActive ? "text-primary dark:text-white" : "text-foreground/60 hover:text-foreground"
                }`}
                href={`#${sectionId}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item}
              </motion.a>
            );
          })}
        </div>

        {/* Theme Toggle & Custom Mobile Menu button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 md:hidden rounded-xl text-foreground/80 bg-foreground/5 border border-outline hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[100%] left-0 right-0 md:hidden bg-surface/95 backdrop-blur-xl border border-outline rounded-2xl mx-4 mt-2 p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((item, i) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary border-l-4 border-primary"
                        : "text-foreground/70 hover:bg-foreground/5"
                    }`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
