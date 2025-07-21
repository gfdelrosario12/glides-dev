"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function MotionWrapper({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef(null)
  // Use margin instead of rootMargin to avoid TS error
  const isInView = useInView(ref, { margin: "-100px 0px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className="will-change-transform"
    >
      {children}
    </motion.section>
  )
}
