import { ActiveIdWrapper } from "../../../components/active-id-wrapper/ActiveIdWrapper";
import { ProjectCard } from "../../../components/project-card/ProjectCard";
import { getSelectedWork } from "../../../utils/prismic";

export const SelectedWorks = async () => {
  const { data } = await getSelectedWork();

  return (
    <ActiveIdWrapper id="selected-works" className="scroll-mt-16">
      <div className="flex flex-col gap-2 md:gap-4">
        {data.work.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </ActiveIdWrapper>
  );
};
