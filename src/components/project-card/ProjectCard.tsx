import Link from "next/link";

export const ProjectCard = ({
  project,
}: {
  project: {
    url: string;
    title: string;
  };
}) => {
  return (
    <Link href={project.url}>
      <div className="group flex aspect-video h-full w-full flex-col bg-neutral-900 p-10">
        <h2 className="mt-auto mb-0 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {project.title}
        </h2>
      </div>
    </Link>
  );
};
