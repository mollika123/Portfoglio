import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-40 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xl font-black text-white font-headline-lg">
          Sajid Yaqub
        </span>
        <p className="text-neutral-500 font-headline-md text-sm">
          © 2024 Sajid Yaqub. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            className="text-neutral-500 hover:text-purple-400 transition-colors font-headline-md text-sm"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-neutral-500 hover:text-purple-400 transition-colors font-headline-md text-sm"
            href="#"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
