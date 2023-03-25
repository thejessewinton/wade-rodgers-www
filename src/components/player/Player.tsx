import { Dialog } from "@headlessui/react";
import { CloseIcon } from "../icons/Icons";
import VimeoPlayer from "@vimeo/player";
import { useEffect, useRef } from "react";

interface PlayerProps {
  open: boolean;
  onClose: () => void;
}

export const Player = ({ open, onClose }: PlayerProps) => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (ref.current) {
      const player = new VimeoPlayer(ref.current);
      player.on("ended", () => onClose());
    }
  }, [open, onClose]);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 transition-transform duration-700 hover:rotate-180"
        >
          <CloseIcon />
        </button>
        <iframe
          ref={ref}
          src="https://player.vimeo.com/video/778231216?title=0&byline=0&portrait=0&autoplay=1&branding=0&portait=0&byline=0&title=0"
          allowFullScreen
          className="min-h-full w-auto min-w-full max-w-none transition-opacity duration-700"
        />
      </div>
    </Dialog>
  );
};
