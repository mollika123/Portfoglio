"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navHeight = useTransform(scrollY, [0, 100], ["100px", "70px"]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <motion.nav
      style={{
        height: navHeight,
      }}
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${isScrolled
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-neutral-200/80 dark:border-white/10 shadow-sm"
          : "bg-transparent border-transparent"
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 h-full max-w-7xl mx-auto w-full">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500 font-headline-lg"
        >
          <div className="font-mono text-4xl font-bold">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">M</span>
            <span className="text-purple-400">/&gt;</span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links & Theme Switcher */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-neutral-600 dark:text-neutral-400 font-medium hover:text-purple-600 dark:hover:text-white transition-colors font-headline-md tracking-tight text-sm"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/10"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-200 dark:border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-700 dark:text-neutral-300 font-medium hover:text-purple-600 dark:hover:text-white transition-colors text-lg py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
