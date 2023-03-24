"use client";

import { useState } from "react";
import { useScreenSize } from "../../hooks/use-screen-size";
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

  const size = useScreenSize();

  const autoplayParam = size.width >= 1024 ? "1" : "0";

  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    autoplay: autoplayParam,
    background: "1",
    loop: "1",
  });

  return (
    <div className="group relative flex aspect-widescreen items-center justify-center overflow-hidden">
      <div className="z-10 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <button
          onClick={handlePlayerOpen}
          className="flex flex-col items-center justify-center text-white"
        >
          <h2 className="font-brand text-3xl text-white dark:text-neutral-900">
            {project.title}
          </h2>
          <span className="font-sans text-brand">{project.client}</span>
        </button>
      </div>
      <iframe
        src={`https://player.vimeo.com/video/778231216?${params.toString()}`}
        allowFullScreen
        loading="lazy"
        className="absolute z-0 h-[169%] min-h-full w-auto min-w-full max-w-none transition-opacity duration-700"
      />
      <Player open={playerOpen} onClose={handlePlayerOpen} />
    </div>
  );
};
