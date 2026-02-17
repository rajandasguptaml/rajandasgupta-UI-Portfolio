"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
]

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Process", href: "#process" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "/skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border py-12 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-border group-hover:border-primary transition-colors bg-muted">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-foreground text-lg">
                Rajan Das Gupta
              </span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              UI/UX Designer & Product Designer
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {"Designed & Built by Rajan Das Gupta"}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
