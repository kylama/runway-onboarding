"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

interface Project {
  _id: string;
  projectName: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  deploymentLink?: string;
  githubLink?: string;
}

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/project");
      const data = await res.json();
      setProjects(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
