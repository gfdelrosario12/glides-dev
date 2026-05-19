"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  category: string;
  techStack?: string;
  liveUrl?: string;
  githubUrl?: string;
};

const CATEGORY_FILTERS = ["Show All", "Academic", "Freelance", "Personal"];
const TECH_FILTERS = [
  "Python",
  "Java",
  "TypeScript",
  "Next.js",
  "React.js",
  "Spring Boot",
  "PostgreSQL",
  "AWS",
  "AWS RDS",
  "AWS S3",
  "AWS EC2",
  "IoT",
  "LangChain",
  "Amazon Bedrock",
  "Three.js",
  "Docker",
  "REST API",
  "WebSocket",
  "JWT",
  "JWT Authentication",
  "MQTT",
  "Raspberry Pi",
  "Arduino",
  "C++",
  "MySQL",
  "DigitalOcean",
  "Tailwind CSS",
  "Framer Motion",
  "Redux",
  "Nginx",
  "CI/CD",
  "Vite.js",
  "OpenAI Whisper",
  "CLI Tools",
  "LLM Agents",
  "Git",
  "GitHub",
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Show All");
  const [selectedTechFilters, setSelectedTechFilters] = useState<string[]>(["Show All"]);

  useEffect(() => {
    fetch("/data/projects.csv")
      .then((response) => {
        if (!response.ok) {
          console.error("Failed to load projects CSV:", response.status);
          throw new Error("Failed to load projects CSV");
        }
        return response.text();
      })
      .then((text) => {
        console.log("Projects CSV loaded, length:", text.length);
        Papa.parse<Project>(text, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim(),
          complete: (results) => {
            console.log("Parsed projects count:", results.data.length);
            console.log("First project:", results.data[0]);
            
            const validProjects = results.data.filter(
              (project) =>
                project.title &&
                project.description &&
                project.category
            );
            
            console.log("Valid projects count:", validProjects.length);
            setProjects(validProjects);
          },
          error: (error: Error) => {
            console.error("Papa parse error:", error);
          }
        });
      })
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  const toggleTechFilter = (filter: string) => {
    if (filter === "Show All") {
      setSelectedTechFilters(["Show All"]);
    } else {
      let updated = selectedTechFilters.includes(filter)
        ? selectedTechFilters.filter((f) => f !== filter)
        : [...selectedTechFilters.filter((f) => f !== "Show All"), filter];

      if (updated.length === 0) {
        updated = ["Show All"];
      }

      setSelectedTechFilters(updated);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "Show All" || project.category === selectedCategory;

    const techs = (project.techStack ?? "")
      .split("|")
      .map((t) => t.trim());

    const matchesTech =
      selectedTechFilters.includes("Show All") ||
      selectedTechFilters.some((f) => techs.includes(f));

    return matchesCategory && matchesTech;
  });

  const getBadgeClass = (category: string) => {
    switch (category) {
      case "Personal":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "Academic":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "Freelance":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Enterprise":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
    }
  };

  const getTechColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      "IoT": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
      "Raspberry Pi": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
      "Python": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
      "Next.js": "bg-black text-white dark:bg-white dark:text-black",
      "React": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
      "React.js": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
      "Redux": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      "Java": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      "Spring": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      "Spring Boot": "bg-green-200 text-green-800 dark:bg-green-900/40 dark:text-green-200",
      "PostgreSQL": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
      "MySQL": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      "AWS": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      "AWS S3": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      "AWS EC2": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      "AWS RDS": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      "OpenAI Whisper": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
      "Arduino": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
      "C++": "bg-blue-200 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      "Version Control Systems": "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
      "Docker": "bg-blue-600 text-white dark:bg-blue-700 dark:text-white",
      "REST API": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
      "JWT": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      "JWT Authentication": "bg-purple-200 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",
      "WebSocket": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      "DigitalOcean": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      "Vite.js": "bg-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
      "TypeScript": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
      "Three.js": "bg-black text-white dark:bg-gray-800 dark:text-white",
      "Tailwind CSS": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
      "Framer Motion": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
      "Nginx": "bg-green-200 text-green-800 dark:bg-green-900/40 dark:text-green-200",
      "CI/CD": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      "LangChain": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      "Amazon Bedrock": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      "LLM Agents": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      "CLI Tools": "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
      "MQTT": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
      "Git": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      "GitHub": "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    };

    return colorMap[tech.trim()] || "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300";
  };

  return (
    <section id="projects" className="py-16 px-4 bg-white/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my technical projects across different domains and technologies.
          </p>
        </div>

        {/* Filter controls */}
        <div className="mb-8 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORY_FILTERS.map((filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant="outline"
                  className={`transition-all ${
                    selectedCategory === filter
                      ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 dark:border-blue-500"
                      : "hover:bg-blue-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
                  }`}
                  onClick={() => setSelectedCategory(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Show All", ...TECH_FILTERS].map((filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant="outline"
                  className={`transition-all ${
                    selectedTechFilters.includes(filter)
                      ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 dark:border-blue-500"
                      : "hover:bg-blue-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
                  }`}
                  onClick={() => toggleTechFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-600 dark:text-slate-300">
                No projects match your selected filters. Try adjusting your selections.
              </p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] group dark:bg-slate-800 dark:border-slate-700"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getBadgeClass(project.category)}>
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="p-2"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="p-2"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.techStack ?? "")
                      .split("|")
                      .map((tech, i) => (
                        <Badge key={i} className={getTechColor(tech)}>
                          {tech.trim()}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
