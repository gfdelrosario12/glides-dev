"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import EducationSection from "@/components/sections/EducationSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import CertificationsSection from "@/components/sections/CertificationsSection"
import Footer from "@/components/sections/Footer"
import { motion } from "framer-motion"
import MotionWrapper from "@/components/sections/MotionWrapper"

export default function AnimatedSection() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-blue-600 p-8 shadow-lg border border-blue-700 text-center max-w-md"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl font-semibold text-white mb-6"
          >
            Compiling the story...
          </motion.h2>

          {/* Pac-Man Loader */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 100] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-8 h-8 bg-yellow-400 clip-pacman"></div>
            </motion.div>

            {[0, 1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          <p className="mt-6 text-sm text-white">
            Building the code...
          </p>
        </motion.div>

        <style jsx>{`
        .clip-pacman {
          clip-path: polygon(
            100% 50%,
            85% 25%,
            60% 10%,
            35% 5%,
            15% 15%,
            0% 50%,
            15% 85%,
            35% 95%,
            60% 90%,
            85% 75%
          );
        }
      `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar scrollToSection={scrollToSection} />

      <MotionWrapper delay={0.05}>
        <HeroSection scrollToSection={scrollToSection} />
      </MotionWrapper>

      <MotionWrapper delay={0.1}>
        <EducationSection />
      </MotionWrapper>

      <MotionWrapper delay={0.15}>
        <ExperienceSection />
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <ProjectsSection />
      </MotionWrapper>

      <MotionWrapper delay={0.25}>
        <CertificationsSection />
      </MotionWrapper>

      <MotionWrapper delay={0.3}>
        <Footer />
      </MotionWrapper>
    </div>
  )
}
