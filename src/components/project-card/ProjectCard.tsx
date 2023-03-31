"use client";

import type { SyntheticEvent } from "react";
import { useState } from "react";
import { useScreenSize } from "../../hooks/use-screen-size";
import { Player } from "../player/Player";
import VimeoPlayer from "@vimeo/player";
import type { SelectedWorksDocumentDataWorkItem } from "../../../.slicemachine/prismicio";
import { asText } from "@prismicio/helpers";
import {
  getBlurUrl,
  getImageUrl,
  getPreviewUrl,
  getVideoUrl,
} from "../../utils/get-url";
import Image from "next/image";

export const ProjectCard = ({
  project,
}: {
  project: SelectedWorksDocumentDataWorkItem;
}) => {
  const [playerOpen, setPlayerOpen] = useState(false);

  const handlePlayerOpen = () => {
    setPlayerOpen(!playerOpen);
  };

  const handleLoad = async (
    event: SyntheticEvent<HTMLIFrameElement, Event>
  ) => {
    const player = new VimeoPlayer(event.target as HTMLIFrameElement);
    player.setCurrentTime(4);
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
    <div className="group relative flex aspect-video items-center justify-center overflow-hidden md:aspect-widescreen">
      <div className="z-10 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <button
          onClick={handlePlayerOpen}
          className="flex flex-col items-center justify-center text-white"
        >
          <h2 className="font-sans text-4xl font-medium tracking-widest text-white dark:text-neutral-900 md:mb-8 md:text-8xl">
            {asText(project.title)}
          </h2>
          <span className="font-sans text-lg font-normal uppercase tracking-widest">
            {project.client}
          </span>
        </button>
      </div>

      {!project.cover_image.widescreen.url ? null : (
        <Image
          src={getImageUrl(project.cover_image.widescreen.url)}
          width={project.cover_image.widescreen.dimensions?.width}
          height={project.cover_image.widescreen.dimensions?.height}
          alt={asText(project.title)}
          className="absolute w-full"
          placeholder="blur"
          blurDataURL={getBlurUrl(project.cover_image.widescreen.url)}
          quality={100}
        />
      )}

      <iframe
        src={getPreviewUrl(project.video.html as string, params)}
        allowFullScreen
        loading="lazy"
        onLoad={handleLoad}
        className="absolute z-0 h-[169%] min-h-full w-auto min-w-full max-w-none transition-opacity duration-700"
      />

      <Player
        video={getVideoUrl(project.video.embed_url as string)}
        open={playerOpen}
        onClose={handlePlayerOpen}
      />
    </div>
  );
};
