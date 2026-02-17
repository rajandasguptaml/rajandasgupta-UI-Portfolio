"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"

const roles = [
  "UI/UX Designer",
  "Product Designer",
  "Frontend Developer",
  "Vibe Coder",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1))
      }, 40)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1))
      }, 80)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="flex flex-col items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-medium tracking-widest uppercase mb-4"
            >
              Welcome To My Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance"
            >
              {"Hi, I'm a"}
              <br />
              <span className="text-primary">
                {displayText}
                <span className="animate-cursor">|</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed"
            >
              Crafting user-centered digital experiences that bridge the gap
              between design and development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
              >
                {"Let's Connect"}
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all hover:scale-105"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>


        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
