"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !cursorRef.current) return;

    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      cursorRef.current.style.display = "none";
      return;
    }

    const cursor = cursorRef.current;
    
    // Performance optimized tracking using quickTo
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 4, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Target buttons and links for hover effects
    const interactiveElements = document.querySelectorAll("button, a, .interactive");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-0 md:opacity-100 flex items-center justify-center transition-opacity duration-300"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
    </div>
  );
};

export default CustomCursor;
