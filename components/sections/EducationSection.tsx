'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-4 bg-white/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 dark:bg-blue-900/30 dark:text-blue-300">
            <GraduationCap className="w-4 h-4" />
            Academic Journey
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto dark:text-slate-300">
            My academic foundation in Technology and Computer Engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education Cards */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500 dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 dark:text-slate-200">
                      Diploma in Computer Engineering Technology
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-blue-600 dark:text-blue-400">
                      Polytechnic University of the Philippines - Institute of Technology
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    2022-2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-slate-600 mb-3 dark:text-slate-300">
                  <MapPin className="w-4 h-4" />
                  <span>Sta. Mesa, Manila City</span>
                </div>
                <p className="text-slate-600 mb-4 dark:text-slate-300">
                  Specialized in Computer Networks Engineering, led a research project on IoT-controlled systems using machine learning for real-time computer vision inference.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="dark:text-slate-300 dark:border-slate-500">
                    Computer Networks
                  </Badge>
                  <Badge variant="outline" className="dark:text-slate-300 dark:border-slate-500">
                    Machine Learning with IoT
                  </Badge>
                  <Badge variant="outline" className="dark:text-slate-300 dark:border-slate-500">
                    Cloud Computing
                  </Badge>
                </div>
              </CardContent>

            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-indigo-500 dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 dark:text-slate-200">
                      Science, Technology, Engineering, and Mathematics (STEM) Strand
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-indigo-600 dark:text-indigo-400">
                      Espiritu Santo Parochial School
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                  >
                    2020-2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-slate-600 mb-3 dark:text-slate-300">
                  <MapPin className="w-4 h-4" />
                  <span>Berkeley, CA</span>
                </div>
                <p className="text-slate-600 mb-4 dark:text-slate-300">
                  Graduated with high honors, led a research study on the use of Discord as an alternative online synchronous learning platform for educational institutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="dark:text-slate-300 dark:border-slate-500">
                    Software Engineering
                  </Badge>
                  <Badge variant="outline" className="dark:text-slate-300 dark:border-slate-500">
                    Data Structures
                  </Badge>
                  <Badge variant="outline" className="dark:text-slate-300 dark:border-slate-500">
                    Web Development
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-2xl opacity-20 scale-110"></div>
              <img
                src="https://glides-dev.s3.ap-southeast-1.amazonaws.com/pfps/41_DEL_ROSARIO__GLADILE_PUP00822.JPG"
                alt="Graduation photo"
                className="rounded-2xl shadow-2xl relative w-80 h-96 object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
