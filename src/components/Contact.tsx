import React from "react";

const Contact = () => {
  return (
    <section className="py-40" id="contact">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-10">
          <h2 className="text-headline-lg">
            Let's build something <span className="text-primary">extraordinary</span>.
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Ready to start your next project? Get in touch today for a free
            consultation and let's discuss how I can help bring your vision to
            life.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 glow-box">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm">Email Me</p>
                <p className="text-headline-md text-lg">sajid@portfolio.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 glow-box">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm">Call Me</p>
                <p className="text-headline-md text-lg">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 glow-box">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm">Location</p>
                <p className="text-headline-md text-lg">Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-10 rounded-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-label-md text-on-surface-variant px-1">
                  NAME
                </label>
                <input
                  className="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-all text-on-surface"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-label-md text-on-surface-variant px-1">
                  EMAIL
                </label>
                <input
                  className="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-all text-on-surface"
                  placeholder="john@company.com"
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-label-md text-on-surface-variant px-1">
                  PHONE
                </label>
                <input
                  className="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-all text-on-surface"
                  placeholder="+1..."
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-label-md text-on-surface-variant px-1">
                  COMPANY
                </label>
                <input
                  className="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-all text-on-surface"
                  placeholder="Acme Inc."
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-label-md text-on-surface-variant px-1">
                MESSAGE
              </label>
              <textarea
                className="w-full bg-surface-container-high/50 border border-outline-variant rounded-xl px-4 py-3 focus:border-primary focus:ring-0 transition-all text-on-surface"
                placeholder="Tell me about your project..."
                rows={4}
              ></textarea>
            </div>
            <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl text-headline-md text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
