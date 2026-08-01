"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle Theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-200/80 dark:bg-white/10 border border-neutral-300 dark:border-white/15 hover:border-purple-500/50 backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-sm duration-300 group overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -16, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 16, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <FiMoon className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
          ) : (
            <FiSun className="w-5 h-5 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="absolute inset-0 rounded-xl bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.button>
  );
}
