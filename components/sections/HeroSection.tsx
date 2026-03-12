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
    <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 py-8 sm:py-16">
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              Available for new opportunities
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Gladwin Ferdz Del Rosario
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 font-light dark:text-slate-300">
              Full-Stack Developer & Cloud Infrastructure Engineer
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl leading-relaxed dark:text-slate-300 mx-auto lg:mx-0">
              Technology professional focused on building scalable, reliable systems across full-stack development and cloud infrastructure. Experienced in developing modern web applications using React and Spring Boot, with hands-on exposure to AWS, Azure, and Google Cloud. Strong foundation in backend engineering, distributed systems, and cloud-native architecture, with practical experience in deploying applications, managing infrastructure, and designing end-to-end solutions. Driven by curiosity and impact to contribute to teams that value scalability, performance, and continuous improvement.
            </p>

            <TooltipProvider>
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => window.open("https://github.com/gfdelrosario12", "_blank")}
                      variant="outline"
                      size="default"
                      className="hover:bg-blue-50 hover:border-blue-300 bg-transparent dark:hover:bg-blue-900 dark:border-blue-700 dark:text-slate-300 text-sm sm:text-base"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
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
                      size="default"
                      className="hover:bg-blue-50 hover:border-blue-300 bg-transparent dark:hover:bg-blue-900 dark:border-blue-700 dark:text-slate-300 text-sm sm:text-base"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
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
                      size="default"
                      className="hover:bg-blue-50 hover:border-blue-300 bg-transparent dark:hover:bg-blue-900 dark:border-blue-700 dark:text-slate-300 text-sm sm:text-base"
                    >
                      <Link2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
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
                      size="default"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-sm sm:text-base"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      Get In Touch
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Contact Me</DialogTitle>
                      <DialogDescription className="mt-2 text-sm sm:text-base lg:text-lg font-medium break-all">
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
              <Avatar className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-2 sm:border-4 border-white shadow-2xl relative">
                <AvatarImage
                  src="/images/Main.JPG"
                  alt="Gladwin Ferdz Del Rosario"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  G
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("education")}
            className="animate-bounce hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
