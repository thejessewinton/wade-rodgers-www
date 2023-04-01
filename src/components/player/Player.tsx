import { Dialog, Transition } from "@headlessui/react";
import { CloseIcon } from "../icons/Icons";
import VimeoPlayer from "@vimeo/player";
import type { SyntheticEvent } from "react";
import { Fragment } from "react";

interface PlayerProps {
  open: boolean;
  onClose: () => void;
  video: string;
}

export const Player = ({ open, onClose, video }: PlayerProps) => {
  const handleLoad = (event: SyntheticEvent<HTMLIFrameElement, Event>) => {
    const player = new VimeoPlayer(event.target as HTMLIFrameElement);
    player.on("ended", () => onClose());
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 transition-transform duration-700 hover:rotate-180"
            >
              <CloseIcon />
            </button>
            {open ? (
              <iframe
                onLoad={handleLoad}
                src={video}
                allowFullScreen
                className="min-h-full w-auto min-w-full max-w-none transition-opacity duration-700"
              />
            ) : null}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
