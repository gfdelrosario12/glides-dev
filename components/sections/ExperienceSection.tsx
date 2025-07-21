"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Briefcase, Filter } from "lucide-react";

type Entry = {
  type: string;
  title: string;
  organization: string;
  badgeLabel: string;
  badgeColor: string;
  duration: string;
  location: string;
  description: string;
  skills: string;
};

export default function ExperienceSection() {
  const [data, setData] = useState<Entry[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch(
          "https://glides-dev.s3.ap-southeast-1.amazonaws.com/data/experiences+-+Sheet1.csv"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();

        Papa.parse<Entry>(text, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const cleaned = result.data.map((entry) => ({
              type: entry.type?.trim().toLowerCase(),
              title: entry.title?.trim(),
              organization: entry.organization?.trim(),
              badgeLabel: entry.badgeLabel?.trim(),
              badgeColor: entry.badgeColor?.trim(),
              duration: entry.duration?.trim(),
              location: entry.location?.trim(),
              description: entry.description?.trim(),
              skills: entry.skills?.trim(),
            }));
            setData(
              cleaned.sort((a, b) => {
                const aDate = extractDate(a.duration);
                const bDate = extractDate(b.duration);
                return bDate.getTime() - aDate.getTime();
              })
            );
          },
        });
      } catch (error) {
        console.error("Error loading experience CSV:", error);
      }
    };

    loadCSV();
  }, []);

  const allSkills = Array.from(
    new Set(
      data
        .filter((d) => d.type === "organizational")
        .flatMap((d) => d.skills?.split("|").map((s) => s.trim()) || [])
        .filter(Boolean)
    )
  ).sort();

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const filteredByTab = (tabType: string) => {
    const filtered = data.filter((entry) => entry.type === tabType.toLowerCase());
    if (tabType === "organizational" && selectedSkills.length > 0) {
      return filtered.filter((entry) => {
        const entrySkills = entry.skills?.split("|").map((s) => s.trim()) || [];
        return selectedSkills.some((skill) => entrySkills.includes(skill));
      });
    }
    return filtered;
  };

  const renderCards = (entries: Entry[]) => {
    if (entries.length === 0) {
      return (
        <p className="text-center text-muted-foreground mt-8">
          No matching entries.
        </p>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((item, idx) => (
          <Card
            key={idx}
            className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] group dark:bg-slate-800 dark:border-slate-700"
          >
            <CardHeader>
              <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </CardTitle>
              {item.organization && (
                <CardDescription className="text-muted-foreground">
                  {item.organization}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2 flex-wrap text-xs text-muted-foreground">
                {item.badgeLabel && (
                  <Badge
                    style={{
                      backgroundColor: item.badgeColor || "#ccc",
                      color: "#fff",
                    }}
                  >
                    {item.badgeLabel}
                  </Badge>
                )}
                {item.duration && <span>{item.duration}</span>}
              </div>
              {item.location && (
                <div className="text-xs text-muted-foreground mb-2">{item.location}</div>
              )}
              <p className="text-sm mb-3 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              {item.skills && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.split("|").map((skill, i) => (
                    <Badge key={i} className={getTechColor(skill.trim())}>
                      {skill.trim()}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section
      id="experience"
      className="py-16 px-4 bg-white/50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 dark:bg-blue-900/30 dark:text-blue-300">
            <Briefcase className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional experience across organizations, industry, and
            competitive development.
          </p>
        </div>

        <Tabs defaultValue="professional" className="w-full">
          <TabsList className="mx-auto flex gap-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg p-1 mb-6 w-fit">
            {"Professional,Organizational,Competetive".split(",").map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-500 dark:data-[state=active]:text-white px-4 py-2 rounded-md transition-all"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="professional">
            {renderCards(filteredByTab("professional"))}
          </TabsContent>

          <TabsContent value="organizational">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Button
                size="sm"
                variant={selectedSkills.length === 0 ? "default" : "outline"}
                onClick={() => setSelectedSkills([])}
              >
                <Filter className="w-3 h-3 mr-1" />
                Show All
              </Button>

              {allSkills.map((skill) => (
                <Button
                  key={skill}
                  size="sm"
                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                  onClick={() => toggleSkill(skill)}
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {skill}
                </Button>
              ))}
            </div>
            {renderCards(filteredByTab("organizational"))}
          </TabsContent>


          <TabsContent value="competetive">
            {renderCards(filteredByTab("competetive"))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

const extractDate = (duration: string): Date => {
  const match = duration?.match(/(\d{4})/g);
  if (match && match.length > 0) {
    return new Date(parseInt(match[match.length - 1]), 0);
  }
  return new Date(0);
};

const getTechColor = (tech: string) => {
  const colorMap: Record<string, string> = {
    React: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    TypeScript:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    JavaScript:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
    Python: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    Tailwind:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    NextJS: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white",
    Firebase:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    AWS: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    NodeJS: "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
    PostgreSQL:
      "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  };

  return (
    colorMap[tech] ??
    "bg-muted text-muted-foreground dark:bg-slate-700 dark:text-slate-200"
  );
};