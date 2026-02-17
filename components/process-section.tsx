"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Align on problem statement, business goals, constraints, and success metrics with stakeholders.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Understand users, pain points, and context through interviews, surveys, and data analysis.",
  },
  {
    number: "03",
    title: "Define",
    description:
      "Clearly define user needs, core problems, and project goals based on research insights.",
  },
  {
    number: "04",
    title: "Ideate",
    description:
      "Brainstorm creative solutions, user flows, and information architecture.",
  },
  {
    number: "05",
    title: "Wireframe",
    description:
      "Create low-fidelity layouts to structure content and interactions.",
  },
  {
    number: "06",
    title: "Prototype",
    description:
      "Build high-fidelity interactive designs to simulate the final product.",
  },
  {
    number: "07",
    title: "Test & Iterate",
    description:
      "Validate with real users, gather feedback, and refine the design.",
  },
  {
    number: "08",
    title: "Handoff",
    description:
      "Prepare design specs, assets, and documentation for seamless developer implementation.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Process
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Design Process
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            My process is a blend of creative exploration and structured
            problem-solving, ensuring every pixel serves a purpose.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => {
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary/40 text-3xl font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
