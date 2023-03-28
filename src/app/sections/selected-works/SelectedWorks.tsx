"use client";

import { ProjectCard } from "../../../components/project-card/ProjectCard";
import { ScrollObserver } from "../../../components/scroll-observer/ScrollObserver";

const sampleProjects = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  title: "Project Title",
  client: "Test Client",
  url: "/",
}));

export const SelectedWorks = () => {
  return (
    <div id="selected-works" className="scroll-mt-20 space-y-1">
      {sampleProjects.map((project) => (
        <ScrollObserver title={project.title} key={project.id}>
          <ProjectCard project={project} />
        </ScrollObserver>
      ))}
    </div>
  );
};
