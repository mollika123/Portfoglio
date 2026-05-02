import React from "react";

const Testimonials = () => {
  return (
    <section className="py-40">
      <div className="glass-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 blur-[100px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <p className="font-display-xl text-headline-lg italic">
            "Sajid transformed our digital presence from a standard landing page
            to a high-performance conversion engine. His attention to detail in UI
            design is unparalleled."
          </p>
          <div className="flex flex-col items-center gap-4">
            <img
              alt="Client"
              className="w-20 h-20 rounded-full border-2 border-primary p-1"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM56nQdpla0MtSPU1b8cjd02PNhYRdbOFLHc3dh0jFUFXFFrImKHV6RuhblkdoTPxQxS69IQf_Nqn7HRYgFtJ44i-BqvC4kESlZICgvEDlwziSLHocwPyH7oummmwXHOffGZGxvzUmUDTGFzhbxn4kAC8vizMBsO8T3pb97xygzF4qJHx2f3DrYbHAZ2qa9pOtqnwRwHUMi58e82IQY4_DIjJGtAtvF9fX7R3mUSV1aRWxGz-ST3aEBCOEW_PapIM9T_o59GXZj6w"
            />
            <div>
              <h4 className="text-headline-md text-xl">Jonathan Miller</h4>
              <p className="text-on-surface-variant text-sm text-label-md">
                Founder, Zenith Innovations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
