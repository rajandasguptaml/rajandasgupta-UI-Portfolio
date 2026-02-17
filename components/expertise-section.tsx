"use client"

import { motion } from "framer-motion"
import { Palette, Code2, Zap } from "lucide-react"

const expertise = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing user-centered experiences by understanding user needs, problems, and validating solutions.",
    skills: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Mobile & Web App Design",
    ],
  },
  {
    icon: Code2,
    title: "Frontend Dev",
    description:
      "Transforming designs into pixel-perfect, responsive code using modern technologies and best practices.",
    skills: [
      "HTML, CSS, JavaScript",
      "Tailwind CSS & Bootstrap",
      "Interactive Animations",
    ],
  },
  {
    icon: Zap,
    title: "Vibe Coding",
    description:
      "Coding with a rhythm. Building immersive web experiences that feel alive, responsive, and just right.",
    skills: [
      "AI-Assisted Workflow",
      "Rapid Prototyping",
      "Flow State Development",
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            My Expertise
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between design and development. I bring a unique
            perspective to every project, ensuring that the final product is not
            only visually stunning but also technically sound and user-friendly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {expertise.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
