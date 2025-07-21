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
    const csvUrl =
      "https://glides-dev.s3.ap-southeast-1.amazonaws.com/data/data+for+portfolio/certifications+-+Sheet1.csv";

    fetch(csvUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch CSV from S3");
        return res.text();
      })
      .then((text) => {
        Papa.parse<Certification>(text, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim(), // ✅ trim keys like "  year"
          complete: (result) => {
            const filtered = result.data
              .map((item) => ({
                title: item.title?.trim() || "",
                organization: item.organization?.trim() || "",
                year: item.year?.trim() || "",
                description: item.description?.trim() || "",
                color: item.color?.trim() || "blue", // default fallback
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
            setCertifications(filtered);
          },
        });
      })
      .catch((err) => console.error("Error loading certifications:", err));
  }, []);

  return (
    <section id="certifications" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 dark:bg-blue-900/30 dark:text-blue-300">
            <Award className="w-4 h-4" />
            Professional Credentials
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto dark:text-slate-300">
            Industry-recognized certifications that validate my technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className={`hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-${cert.color}-500 dark:bg-slate-800 dark:border-slate-700`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2 dark:text-slate-200">
                      {cert.title}
                    </CardTitle>
                    <CardDescription
                      className={`text-base font-medium text-${cert.color}-600 dark:text-${cert.color}-400`}
                    >
                      {cert.organization}
                    </CardDescription>
                  </div>
                  <Badge
                    className={`bg-${cert.color}-100 text-${cert.color}-700 dark:bg-${cert.color}-900/30 dark:text-${cert.color}-300`}
                  >
                    {cert.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm dark:text-slate-300 mb-2">
                  {cert.description}
                </p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium text-${cert.color}-600 hover:underline dark:text-${cert.color}-400`}
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
