"use client"

import { motion } from "framer-motion"
import {
  HtmlIcon, CssIcon, JsIcon, TailwindIcon, BootstrapIcon,
  FigmaIcon, AdobeXdIcon, CanvaIcon, PhotoshopIcon,
  ChatGptIcon, GeminiIcon, LightroomIcon, ClaudeIcon,
  PerplexityIcon, NotionIcon, AntigravityIcon,
  type SkillItem,
} from "@/components/skill-icons"

const skills: SkillItem[] = [
  { name: "HTML", icon: <HtmlIcon /> },
  { name: "ChatGPT", icon: <ChatGptIcon /> },
  { name: "Gemini", icon: <GeminiIcon /> },
  { name: "CSS", icon: <CssIcon /> },
  { name: "JavaScript", icon: <JsIcon /> },
  { name: "Lightroom", icon: <LightroomIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "Bootstrap", icon: <BootstrapIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Adobe XD", icon: <AdobeXdIcon /> },
  { name: "Canva", icon: <CanvaIcon /> },
  { name: "Photoshop", icon: <PhotoshopIcon /> },
  { name: "Antigravity", icon: <AntigravityIcon /> },
  { name: "Claude", icon: <ClaudeIcon /> },
  { name: "Perplexity", icon: <PerplexityIcon /> },
  { name: "Notion", icon: <NotionIcon /> },
]

export function MarqueeSection() {
  const doubled = [...skills, ...skills]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 border-y border-border overflow-hidden"
    >
      <div className="relative">
        <div className="animate-marquee flex gap-8 whitespace-nowrap w-max">
          {doubled.map((skill, i) => (
            <span
              key={`${skill.name}-${i}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-secondary text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              <span className="text-primary">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
