"use client";

import type { KeenSliderPlugin } from "keen-slider/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { LeftArrow, RightArrow } from "../icons/Icons";
import type { StillsDocumentDataImagesItem } from "../../../.slicemachine/prismicio";
import Image from "next/image";
import { getImageUrl } from "../../utils/get-url";

export const Slider = ({
  stills,
}: {
  stills: StillsDocumentDataImagesItem[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const WheelControls: KeenSliderPlugin = (slider) => {
    let touchTimeout: ReturnType<typeof setTimeout>;
    let position: {
      x: number;
      y: number;
    };
    let wheelActive: boolean;

    function dispatch(e: WheelEvent, name: string) {
      position.x -= e.deltaX;
      position.y -= e.deltaY;
      slider.container.dispatchEvent(
        new CustomEvent(name, {
          detail: {
            x: position.x,
            y: position.y,
          },
        })
      );
    }

    function wheelStart(e: WheelEvent) {
      position = {
        x: e.pageX,
        y: e.pageY,
      };
      dispatch(e, "ksDragStart");
    }

    function wheel(e: WheelEvent) {
      dispatch(e, "ksDrag");
    }

    function wheelEnd(e: WheelEvent) {
      dispatch(e, "ksDragEnd");
    }

    function eventWheel(e: WheelEvent) {
      if (!wheelActive) {
        wheelStart(e);
        wheelActive = true;
      }
      wheel(e);
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        wheelActive = false;
        wheelEnd(e);
      }, 50);
    }

    slider.on("created", () => {
      slider.container.addEventListener("wheel", eventWheel, {
        passive: true,
      });
    });
  };

  const [ref, instance] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged: (slider) => {
        setCurrentSlide(slider.track.details.rel);
      },
      loop: true,
      slides: { perView: "auto", origin: "auto" },
      created: () => {
        setLoaded(true);
      },
    },
    [WheelControls]
  );

  return (
    <>
      <div ref={ref} className="keen-slider">
        {stills.map((still) => (
          <div
            key={still.image.url}
            className="keen-slider__slide flex items-center justify-center"
            style={{
              minWidth: still.image.dimensions?.width
                ? still.image.dimensions.width / 2
                : 0,
              maxWidth: still.image.dimensions?.width
                ? still.image.dimensions.width / 2
                : 0,
            }}
          >
            <Image
              src={getImageUrl(still.image.url as string)}
              alt={(still.image.alt as string) || ""}
              width={still.image.dimensions?.width}
              height={still.image.dimensions?.height}
              className="h-full w-full"
            />
          </div>
        ))}
      </div>

      {loaded && instance.current && (
        <div className="mx-auto flex w-full items-center justify-center gap-16 py-10">
          <button
            onClick={() => instance.current?.prev()}
            disabled={currentSlide === 0}
            className="transition-transform duration-500 hover:-translate-x-4 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <LeftArrow className="h-24 w-24" />
          </button>
          <span className="uppercase italic text-neutral-500">Swipe</span>
          <button
            onClick={() => instance.current?.next()}
            disabled={
              currentSlide === instance.current.track.details.slides.length - 1
            }
            className="transition-transform duration-500 hover:translate-x-4 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RightArrow className="h-24 w-24" />
          </button>
        </div>
      )}
    </>
  );
};
