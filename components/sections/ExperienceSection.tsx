"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Briefcase,
  Calendar,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ExperienceEntry = {
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

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<ExperienceEntry[]>([]);

  useEffect(() => {
    // Replace this URL with your S3 public URL or presigned URL
    const csvUrl = "https://glides-dev.s3.ap-southeast-1.amazonaws.com/data/data+for+portfolio/experiences+-+Sheet1.csv";

    fetch(csvUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load CSV from AWS");
        return res.text();
      })
      .then((text) => {
        const parsed = Papa.parse<ExperienceEntry>(text, {
          header: true,
          skipEmptyLines: true,
        });
        setExperiences(parsed.data);
      })
      .catch((err) => {
        console.error("Error loading experience data:", err);
      });
  }, []);

  const renderCards = (category: string) =>
    experiences
      .filter((exp) => exp.type === category)
      .map((exp, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] dark:bg-slate-800 dark:border-slate-700"
        >
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl mb-2 dark:text-slate-200">
                  {exp.title}
                </CardTitle>
                <CardDescription
                  className={`text-base font-medium text-${exp.badgeColor}-600 dark:text-${exp.badgeColor}-400`}
                >
                  {exp.organization}
                </CardDescription>
              </div>
              <Badge
                className={`bg-${exp.badgeColor}-100 text-${exp.badgeColor}-700 dark:bg-${exp.badgeColor}-900/30 dark:text-${exp.badgeColor}-300`}
              >
                {category === "hackathons" && (
                  <Trophy className="w-3 h-3 mr-1" />
                )}
                {exp.badgeLabel}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-slate-600 mb-4 dark:text-slate-300">
              <div className="flex items-center gap-1">
                {category === "leadership" ? (
                  <Users className="w-4 h-4" />
                ) : (
                  <Calendar className="w-4 h-4" />
                )}
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
            </div>
            <p className="text-slate-600 mb-4 dark:text-slate-300">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.split("|").map((skill, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="dark:text-slate-300 dark:border-slate-500"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ));

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 dark:bg-blue-900/30 dark:text-blue-300">
            <Briefcase className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto dark:text-slate-300">
            My professional experience across leadership, industry, and competitive development.
          </p>
        </div>

        <Tabs defaultValue="professional" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
            <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
          </TabsList>

          <TabsContent value="professional" className="space-y-6">
            {renderCards("professional")}
          </TabsContent>
          <TabsContent value="leadership" className="space-y-6">
            {renderCards("leadership")}
          </TabsContent>
          <TabsContent value="hackathons" className="space-y-6">
            {renderCards("hackathons")}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
