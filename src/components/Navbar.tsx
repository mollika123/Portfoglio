"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Animating the navbar padding and background based on scroll
  const navHeight = useTransform(scrollY, [0, 100], ["100px", "70px"]);
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      style={{
        height: navHeight,
        backdropFilter: navBlur,
        backgroundColor: navBackground,
      }}
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        isScrolled ? "border-white/10" : "border-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 h-full max-w-7xl mx-auto w-full">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-white bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500 font-headline-lg"
        >
          Mollika
        </motion.span>
        <div className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Services", "Projects", "Contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-neutral-400 font-medium hover:text-white transition-colors font-headline-md tracking-tight text-sm"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            )
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-primary-container to-tertiary-container text-white px-6 py-2 rounded-lg text-label-md hover:scale-105 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
