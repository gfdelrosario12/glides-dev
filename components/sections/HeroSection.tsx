'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import {
  Github,
  Linkedin,
  Link2,
  Mail,
  Zap,
  ChevronDown,
} from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 dark:bg-blue-900/30 dark:text-blue-300">
              <Zap className="w-4 h-4" />
              Available for new opportunities
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Gladwin Ferdz Del Rosario
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-600 mb-6 font-light dark:text-slate-300">
              Fullstack Software Developer and Certified Associate Cloud Engineer
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed dark:text-slate-300">
              A passionate third-year Computer Engineering Technology student specializing in Computer Networks Engineering at the Polytechnic University of the Philippines and a Google Cloud Certified Associate Cloud Engineer. Actively building expertise in cloud computing while also developing full-stack applications using React and Spring Boot.
            </p>

            <TooltipProvider>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => window.open("https://github.com/gfdelrosario12", "_blank")}
                      variant="outline"
                      size="lg"
                      className="hover:bg-blue-50 hover:border-blue-300 bg-transparent dark:hover:bg-blue-900 dark:border-blue-700 dark:text-slate-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Check out my code repositories</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => window.open("https://www.linkedin.com/in/gladwindr/", "_blank")}
                      variant="outline"
                      size="lg"
                      className="hover:bg-blue-50 hover:border-blue-300 bg-transparent dark:hover:bg-blue-900 dark:border-blue-700 dark:text-slate-300"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with me professionally</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => window.open("https://bio.link/gladwin_dr", "_blank")}
                      variant="outline"
                      size="lg"
                      className="hover:bg-blue-50 hover:border-blue-300 bg-transparent dark:hover:bg-blue-900 dark:border-blue-700 dark:text-slate-300"
                    >
                      <Link2 className="w-5 h-5 mr-2" />
                      More Socials
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow my tech journey</p>
                  </TooltipContent>
                </Tooltip>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Get In Touch
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Contact Me</DialogTitle>
                      <DialogDescription className="mt-2 text-lg font-medium">
                        📧 delrosario.gladwinferdz.infante@gmail.com
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </TooltipProvider>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-2xl opacity-20 scale-110"></div>
              <Avatar className="w-80 h-80 border-4 border-white shadow-2xl relative">
                <AvatarImage
                  src="https://glides-dev.s3.ap-southeast-1.amazonaws.com/pfps/_DSF8338.JPG"
                  alt="Gladwin Ferdz Del Rosario"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="text-6xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  G
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("education")}
            className="animate-bounce hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
