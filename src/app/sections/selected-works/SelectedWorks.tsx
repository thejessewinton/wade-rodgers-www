import { ProjectCard } from "../../../components/project-card/ProjectCard";
import { ScrollObserver } from "../../../components/scroll-observer/ScrollObserver";
import { getSelectedWork } from "../../../utils/prismic";

export const SelectedWorks = async () => {
  const { data } = await getSelectedWork();

  return (
    <div id="selected-works" className="scroll-mt-16 space-y-2 md:space-y-4">
      {data.work.map((project) => {
        if (!project) return null;
        return (
          <ScrollObserver title={project.client as string} key={project.client}>
            <ProjectCard project={project} />
          </ScrollObserver>
        );
      })}
    </div>
  );
};
