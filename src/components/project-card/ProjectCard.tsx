"use client";

import { useState } from "react";
import { PlayIcon } from "../icons/Icons";
import { Player } from "../player/Player";

export const ProjectCard = ({
  project,
}: {
  project: {
    url: string;
    title: string;
    client: string;
  };
}) => {
  const [playerOpen, setPlayerOpen] = useState(false);

  const handlePlayerOpen = () => {
    setPlayerOpen(!playerOpen);
  };

  return (
    <div className="group relative mb-1 flex aspect-widescreen h-full w-full flex-col items-center justify-center bg-neutral-900 dark:bg-white">
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
      <button onClick={handlePlayerOpen} className="absolute text-white">
        <PlayIcon className="h-24 w-24" />
      </button>
      <Player open={playerOpen} onClose={handlePlayerOpen} />
    </div>
  );
};
