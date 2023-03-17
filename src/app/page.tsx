import { ProjectCard } from "../components/project-card/ProjectCard";

export const revalidate = 60;

const sampleProjects = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: "Project Title",
  client: "Test Client",
  url: "/",
}));

const Index = async () => {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {sampleProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Index;
