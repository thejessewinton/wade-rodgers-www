import { ActiveIdWrapper } from "../../../components/active-id-wrapper/ActiveIdWrapper";
import { ProjectCard } from "../../../components/project-card/ProjectCard";
import { ScrollObserver } from "../../../components/scroll-observer/ScrollObserver";
import { getSelectedWork } from "../../../utils/prismic";

export const SelectedWorks = async () => {
  const { data } = await getSelectedWork();

  return (
    <ActiveIdWrapper id="selected-works" className="mb-28 scroll-mt-16">
      <div className="flex flex-col gap-2 md:gap-4">
        {data.work.map((project, index) => {
          return (
            <ScrollObserver key={index}>
              <ProjectCard project={project} />
            </ScrollObserver>
          );
        })}
      </div>
    </ActiveIdWrapper>
  );
};
