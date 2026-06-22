"use client"

import { motion } from "framer-motion"

interface RevealProps {
  children: React.ReactNode,
  duration: number
}

export function Reveal(props: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: props.duration,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  )
}