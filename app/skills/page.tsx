"use client"

import { motion } from "framer-motion"
import {
  HtmlIcon, CssIcon, JsIcon, TailwindIcon, BootstrapIcon,
  FigmaIcon, AdobeXdIcon, CanvaIcon, PhotoshopIcon,
  LightroomIcon, PythonIcon, CIcon, GitIcon, GithubIcon,
  VsCodeIcon, LinuxIcon, AwsIcon, WordPressIcon,
} from "@/components/skill-icons"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/page-loader"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CustomCursor } from "@/components/custom-cursor"
import { type ReactNode } from "react"

interface SkillCardProps {
  name: string
  icon: ReactNode
  index: number
}

function SkillCard({ name, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50 hover:bg-secondary"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary text-primary transition-all group-hover:bg-primary/10 group-hover:scale-110">
        <span className="[&_svg]:w-8 [&_svg]:h-8">{icon}</span>
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  )
}

const categories = [
  {
    title: "Frontend Development",
    description: "Languages and frameworks for building web interfaces",
    skills: [
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "JavaScript", icon: <JsIcon /> },
      { name: "Tailwind", icon: <TailwindIcon /> },
      { name: "Bootstrap", icon: <BootstrapIcon /> },
    ],
  },
  {
    title: "Design Tools",
    description: "Tools for creating visual designs and prototypes",
    skills: [
      { name: "Figma", icon: <FigmaIcon /> },
      { name: "Adobe XD", icon: <AdobeXdIcon /> },
      { name: "Photoshop", icon: <PhotoshopIcon /> },
      { name: "Lightroom", icon: <LightroomIcon /> },
      { name: "Canva", icon: <CanvaIcon /> },
    ],
  },
  {
    title: "Programming",
    description: "General-purpose programming languages",
    skills: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "C", icon: <CIcon /> },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Development tools, version control, and cloud platforms",
    skills: [
      { name: "Git", icon: <GitIcon /> },
      { name: "GitHub", icon: <GithubIcon /> },
      { name: "VS Code", icon: <VsCodeIcon /> },
      { name: "Linux", icon: <LinuxIcon /> },
      { name: "AWS", icon: <AwsIcon /> },
      { name: "WordPress", icon: <WordPressIcon /> },
    ],
  },
]

export default function SkillsPage() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="px-6 pt-32 pb-16">
          <div className="mx-auto max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
                Skills & Tools
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance"
            >
              Skills
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            >
              A quick look at the design, development, and creative tools I use
              to build seamless digital experiences.
            </motion.p>
          </div>
        </section>

        {/* Skills Grid by Category */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-20">
              {categories.map((category, catIdx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                >
                  <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                        {category.title}
                      </h2>
                      <p className="mt-1 text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {category.skills.length}{" "}
                      {category.skills.length === 1 ? "tool" : "tools"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {category.skills.map((skill, skillIdx) => (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        index={skillIdx}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}
