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
    <div className="group relative mb-2 flex aspect-widescreen h-full w-full flex-col bg-neutral-900 dark:bg-white">
      {/* <div className="mt-auto mb-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="font-brand text-3xl text-white dark:text-neutral-900">
          {project.title}
        </h2>
        <span className="font-sans text-brand">{project.client}</span>
      </div> */}
      <iframe
        src="https://player.vimeo.com/video/778231216?title=0&byline=0&portrait=0&background=1&autoplay=1"
        allowFullScreen
        loading="lazy"
        className="pointer-events-none min-h-full w-auto min-w-full max-w-none transition-opacity duration-700"
      />
    </div>
  );
};
