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
import { PlayIcon } from "../icons/Icons";

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

  return (
    <div className="group relative flex aspect-video items-center justify-center overflow-hidden md:aspect-widescreen">
      <button
        onClick={handlePlayerOpen}
        className="absolute z-10 flex w-full flex-col items-center justify-center opacity-100 transition-opacity duration-700 group-hover:opacity-100 md:opacity-0"
      >
        <h2 className="flex flex-col items-center justify-center gap-2 font-sans text-xl font-bold tracking-widest text-white text-shadow md:gap-4 md:text-5xl">
          {asText(project.title)}
          <span className="font-sans text-sm font-normal uppercase tracking-widest md:text-xl">
            {project.client}
          </span>

          <PlayIcon className="block md:hidden" />
        </h2>
      </button>

      {!project.cover_image.widescreen.url ? null : (
        <Image
          src={getImageUrl(project.cover_image.widescreen.url)}
          width={project.cover_image.widescreen.dimensions?.width}
          height={project.cover_image.widescreen.dimensions?.height}
          alt={asText(project.title)}
          className="h-full w-auto object-cover md:w-full md:object-fill"
          placeholder="blur"
          blurDataURL={getBlurUrl(project.cover_image.widescreen.url)}
          quality={100}
        />
      )}

      {size.width >= 1024 ? (
        <iframe
          src={getPreviewUrl(project.preview.html as string)}
          allowFullScreen
          loading="lazy"
          onLoad={handleLoad}
          className="absolute z-0 hidden h-[169%] min-h-full w-auto min-w-full max-w-none transition-opacity duration-700 md:block"
        />
      ) : null}

      <Player
        video={getVideoUrl(project.video.embed_url as string)}
        open={playerOpen}
        onClose={handlePlayerOpen}
      />
    </div>
  );
};
