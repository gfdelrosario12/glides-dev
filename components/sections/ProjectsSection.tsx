"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ExternalLink, Github, Filter } from "lucide-react";

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
  "IoT",
  "Raspberry Pi",
  "Python",
  "Next.js",
  "Java",
  "Spring",
  "Spring Boot",
  "PostgreSQL",
  "OpenAI - Whisper",
  "AWS",
  "MySQL",
  "React.js",
  "Redux",
  "Version Control Systems",
  "Arduino",
  "C++",
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Show All");
  const [selectedTechFilters, setSelectedTechFilters] = useState<string[]>(["Show All"]);

  useEffect(() => {
    const csvUrl =
      "https://glides-dev.s3.ap-southeast-1.amazonaws.com/data/projects+-+Sheet1.csv";

    fetch(csvUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load CSV from S3");
        return response.text();
      })
      .then((text) => {
        Papa.parse<Project>(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const validProjects = results.data.filter(
              (project) =>
                project.title &&
                project.description &&
                project.category &&
                typeof project.techStack === "string"
            );
            setProjects(validProjects);
          },
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
      "OpenAI - Whisper": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
      "Arduino": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
      "C++": "bg-blue-200 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      "Version Control Systems": "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
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
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {CATEGORY_FILTERS.map((filter) => (
              <Button
                key={filter}
                size="sm"
                variant="outline"
                className={
                  selectedCategory === filter
                    ? "bg-blue-600 text-white hover:bg-blue-700 border-transparent dark:bg-blue-500 dark:hover:bg-blue-600"
                    : "hover:bg-blue-100 dark:hover:bg-blue-900/30"
                }
                onClick={() => setSelectedCategory(filter)}
              >
                <Filter className="w-3 h-3 mr-1" />
                {filter}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Show All", ...TECH_FILTERS].map((filter) => (
              <Button
                key={filter}
                size="sm"
                variant="outline"
                className={
                  selectedTechFilters.includes(filter)
                    ? "bg-blue-600 text-white hover:bg-blue-700 border-transparent dark:bg-blue-500 dark:hover:bg-blue-600"
                    : "hover:bg-blue-100 dark:hover:bg-blue-900/30"
                }
                onClick={() => toggleTechFilter(filter)}
              >
                <Filter className="w-3 h-3 mr-1" />
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
