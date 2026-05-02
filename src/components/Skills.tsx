import React from "react";

const skills = [
  { name: "Tailwind CSS", icon: "terminal", color: "from-cyan-400 to-blue-500" },
  { name: "JavaScript", icon: "javascript", color: "from-yellow-400 to-orange-500" },
  { name: "React", icon: "deployed_code", color: "from-blue-400 to-indigo-600" },
  { name: "Node.js", icon: "settings_ethernet", color: "from-green-400 to-emerald-600" },
  { name: "MongoDB", icon: "database", color: "from-green-500 to-lime-600" },
  { name: "HTML5", icon: "html", color: "from-orange-500 to-red-600" },
];

const Skills = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-24 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Tech Stack & Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed">
            Building high-performance applications with the industry's most robust and modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl blur-sm" 
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
              </div>
              
              <div className="relative glass-card p-10 rounded-2xl flex flex-col items-center gap-6 
                            border border-white/10 bg-surface/50 backdrop-blur-xl
                            transition-all duration-300 group-hover:-translate-y-3 group-hover:border-white/20">
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-lg`}>
                  <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-white">
                      {skill.icon}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <span className="block text-sm font-semibold uppercase tracking-widest text-white/90">
                    {skill.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;