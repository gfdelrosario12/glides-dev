"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Award } from "lucide-react";

type Certification = {
  title: string;
  organization: string;
  year: string;
  description: string;
  color: string;
  url: string;
};

export default function CertificationsSection() {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch("/data/certifications.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch certifications CSV");
        return res.text();
      })
      .then((text) => {
        console.log("Certifications CSV loaded, length:", text.length);
        Papa.parse<Certification>(text, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim(),
          complete: (result) => {
            console.log("Parsed certifications:", result.data);
            const filtered = result.data
              .map((item) => ({
                title: item.title?.trim() || "",
                organization: item.organization?.trim() || "",
                year: item.year?.trim() || "",
                description: item.description?.trim() || "",
                color: item.color?.trim() || "blue",
                url: item.url?.trim() || "#",
              }))
              .filter(
                (item) =>
                  item.title &&
                  item.organization &&
                  item.year &&
                  item.description &&
                  item.color &&
                  item.url
              );
            console.log("Filtered certifications:", filtered);
            setCertifications(filtered);
          },
        });
      })
      .catch((err) => console.error("Error loading certifications:", err));
  }, []);

  return (
    <section id="certifications" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 dark:bg-blue-900/30 dark:text-blue-300">
            <Award className="w-3 h-3 sm:w-4 sm:h-4" />
            Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto dark:text-slate-300 px-4">
            Industry-recognized certifications that validate my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className={`hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-${cert.color}-500 dark:bg-slate-800 dark:border-slate-700`}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-base sm:text-lg mb-2 dark:text-slate-200">
                      {cert.title}
                    </CardTitle>
                    <CardDescription
                      className={`text-sm sm:text-base font-medium text-${cert.color}-600 dark:text-${cert.color}-400`}
                    >
                      {cert.organization}
                    </CardDescription>
                  </div>
                  <Badge
                    className={`bg-${cert.color}-100 text-${cert.color}-700 dark:bg-${cert.color}-900/30 dark:text-${cert.color}-300 w-fit`}
                  >
                    {cert.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-xs sm:text-sm dark:text-slate-300 mb-2">
                  {cert.description}
                </p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs sm:text-sm font-medium text-${cert.color}-600 hover:underline dark:text-${cert.color}-400`}
                >
                  View Credential →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
