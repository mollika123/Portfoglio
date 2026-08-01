"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDaisyui,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiJavascript,
} from "react-icons/si";


const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "DaisyUI", icon: SiDaisyui },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },

  {
    category: "Backend & Auth",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Better Auth", icon: SiFirebase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];


export default function Skills() {

  return (

    <section id="skills" className="py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="
        text-4xl
        font-bold
        text-center
        ">
          My
          <span className="text-cyan-400">
            {" "}Technology
          </span>
        </h2>



        <div className="mt-12 space-y-10">


          {technologies.map((group, index) => (

            <motion.div

              key={group.category}

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}

              transition={{
                delay: index * 0.2
              }}

            >

              <h3 className="
              text-xl
              font-semibold
              mb-5
              text-cyan-400
              ">
                {group.category}
              </h3>



              <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-5
              ">


                {group.items.map((tech) => {

                  const Icon = tech.icon;


                  return (

                    <div

                      key={tech.name}

                      className="
                    p-5
                    rounded-2xl
                    glass-card
                    flex
                    flex-col
                    items-center
                    gap-3

                    hover:border-cyan-400/40
                    hover:-translate-y-2

                    transition
                    "

                    >

                      <Icon
                        size={35}
                        className="text-cyan-500 dark:text-cyan-400"
                      />


                      <span className="
                      text-sm
                      text-on-surface-variant
                      ">
                        {tech.name}
                      </span>


                    </div>

                  );

                })}


              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>

  );

}