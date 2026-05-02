"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Core Engineering",
    icon: "web",
    desc: "Robust, scalable, and responsive web applications built with the latest frameworks.",
  },
  {
    title: "Interface Systems",
    icon: "palette",
    desc: "Immersive user interfaces focused on conversion and user satisfaction.",
  },
  {
    title: "Mobile Architecture",
    icon: "smartphone",
    desc: "Cross-platform mobile applications for iOS and Android environments.",
  },
  {
    title: "Search Optimization",
    icon: "monitoring",
    desc: "Optimizing your digital footprint for maximum search engine visibility.",
  },
  {
    title: "Backend Infrastructure",
    icon: "storage",
    desc: "High-performance server-side logic and database management systems.",
  },
  {
    title: "Protocol Integration",
    icon: "api",
    desc: "Connecting your platform with third-party services seamlessly.",
  },
  {
    title: "Technical Audit",
    icon: "speed",
    desc: "Deep-dive technical analysis to boost your site's speed and core web vitals.",
  },
  {
    title: "Cloud Deployment",
    icon: "cloud",
    desc: "Deploying and managing secure infrastructure on AWS or Vercel.",
  },
];

const Services = () => {
  return (
    <section className="py-40" id="services">
      <ScrollReveal>
        <div className="flex justify-between items-end mb-20">
          <div className="space-y-4">
            <h2 className="text-headline-lg">Premium Services</h2>
            <p className="text-on-surface-variant">
              Tailored solutions for your digital growth.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 mx-12 bg-gradient-to-r from-outline-variant to-transparent"></div>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={0.1 * index}>
            <div className="glass-card p-8 rounded-3xl group hover:bg-primary-container/10 transition-all h-full">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                {service.icon}
              </span>
              <h3 className="text-headline-md text-lg mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
