"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import Navbar from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import EducationSection from "@/components/sections/EducationSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import CertificationsSection from "@/components/sections/CertificationsSection"
import Footer from "@/components/sections/Footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />


      <EducationSection />


      <ExperienceSection />

      <ProjectsSection />

      <CertificationsSection />


      <Footer />

    </div>
  )
}
