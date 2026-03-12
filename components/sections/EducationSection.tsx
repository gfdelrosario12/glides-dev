'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { GraduationCap, MapPin } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 bg-white/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 dark:bg-blue-900/30 dark:text-blue-300">
            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
            Academic Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto dark:text-slate-300 px-4">
            My academic foundation in Technology and Computer Engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Education Cards */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500 dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2 dark:text-slate-200">
                      Diploma in Computer Engineering Technology
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400">
                      Polytechnic University of the Philippines - Institute of Technology
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 w-fit"
                  >
                    2022-2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-3 dark:text-slate-300">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Sta. Mesa, Manila City</span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 mb-4 dark:text-slate-300">
                  Specialized in Computer Networks Engineering, led a research project on IoT-controlled systems using machine learning for real-time computer vision inference.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs sm:text-sm dark:text-slate-300 dark:border-slate-500">
                    Computer Networks
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm dark:text-slate-300 dark:border-slate-500">
                    Machine Learning with IoT
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm dark:text-slate-300 dark:border-slate-500">
                    Cloud Computing
                  </Badge>
                </div>
              </CardContent>

            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-indigo-500 dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2 dark:text-slate-200">
                      Science, Technology, Engineering, and Mathematics (STEM) Strand
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400">
                      Espiritu Santo Parochial School
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 w-fit"
                  >
                    2020-2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-3 dark:text-slate-300">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Sta. Cruz, Manila</span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 mb-4 dark:text-slate-300">
                  Graduated with high honors, led a research study on the use of Discord as an alternative online synchronous learning platform for educational institutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs sm:text-sm dark:text-slate-300 dark:border-slate-500">
                    Science and Technology
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm dark:text-slate-300 dark:border-slate-500">
                    Web Development
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-2xl opacity-20 scale-110"></div>
              <Image
                src="/images/Grad.JPG"
                alt="Graduation photo"
                className="rounded-2xl shadow-2xl relative border-2 sm:border-4 border-white"
                width={320}
                height={384}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
