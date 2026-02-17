"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Bagisto Case Study",
    description:
      "Open-source eCommerce store built on Laravel and Vue.js for modern, scalable online stores.",
    tags: ["UI/UX Design", "eCommerce"],
    image: "/images/project-bagisto.jpg",
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Behance", href: "#" },
    ],
  },
  {
    title: "Food Ordering App",
    description:
      "A web app to browse restaurants, order food, and manage your account easily.",
    tags: ["UI Design", "Figma"],
    image: "/images/project-food-app.jpg",
    links: [
      { label: "Read more", href: "#" },
      { label: "Behance", href: "#" },
    ],
  },
  {
    title: "Forkify - Recipes",
    description:
      "A Web App to search recipes using the Forkify-API - Search over 1,000,000 recipes.",
    tags: ["Recipes", "JavaScript"],
    image: "/images/project-forkify.jpg",
    links: [
      { label: "Read more", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Weather Web App",
    description:
      "A weather application that utilizes the OpenWeatherMap API to display weather.",
    tags: ["Live Weather", "JavaScript"],
    image: "/images/project-weather.jpg",
    links: [{ label: "Live Demo", href: "#" }],
  },
  {
    title: "Coffee Roaster",
    description:
      "User-centric landing page for a coffee roaster brand with seamless navigation.",
    tags: ["UI/UX Design", "Landing Page"],
    image: "/images/project-coffee.jpg",
    links: [{ label: "Behance", href: "#" }],
  },
  {
    title: "POV Bank",
    description:
      "Demo online banking platform with preset login to explore core banking features.",
    tags: ["Banking", "JavaScript"],
    image: "/images/project-bank.jpg",
    links: [
      { label: "Read more", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ProjectsSection() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Recent Projects
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {"Discover inspiring UI/UX and web design projects that showcase practical, modern solutions."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                    >
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
