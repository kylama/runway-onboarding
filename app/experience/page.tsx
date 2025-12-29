"use client";

import { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";

interface Experience {
  _id: string;
  company: string;
  title: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
}

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/experience");
      const data = await res.json();
      setExperiences(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Experiences</h1>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
      </div>
    </div>
  );
}
