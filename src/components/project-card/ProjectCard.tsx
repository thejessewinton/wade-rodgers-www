import Link from "next/link";

export const ProjectCard = ({
  project,
}: {
  project: {
    url: string;
    title: string;
    client: string;
  };
}) => {
  return (
    <Link href={project.url}>
      <div className="group mb-2 flex aspect-widescreen h-full w-full flex-col bg-neutral-900 p-10 dark:bg-white">
        <div className="mt-auto mb-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h2 className="font-brand text-white dark:text-neutral-900">
            {project.title}
          </h2>
          <span className="font-mono text-brand">{project.client}</span>
        </div>
      </div>
    </Link>
  );
};
