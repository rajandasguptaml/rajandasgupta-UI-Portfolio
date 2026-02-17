"use client"

import { motion } from "framer-motion"

export function SectionDivider() {
  return (
    <div className="flex justify-center py-4">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px bg-primary/30"
      />
    </div>
  )
}
