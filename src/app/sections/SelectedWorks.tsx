"use client";

import { ProjectCard } from "../../components/project-card/ProjectCard";

const sampleProjects = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  title: "Project Title",
  client: "Test Client",
  url: "/",
}));

export const SelectedWorks = () => {
  return (
    <div id="selected-works" className="scroll-mt-20">
      {sampleProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
