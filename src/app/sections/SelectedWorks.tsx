import { ProjectCard } from "../../components/project-card/ProjectCard";
import { sections } from "../../utils/sections";

const sampleProjects = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: "Project Title",
  client: "Test Client",
  url: "/",
}));

export const SelectedWorks = () => {
  return (
    <div id={sections.selectedWorks.id} className="pt-20">
      {sampleProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
