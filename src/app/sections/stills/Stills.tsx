"use client";

import type { KeenSliderPlugin } from "keen-slider/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { LeftArrow, RightArrow } from "../../../components/icons/Icons";

const sampleSlides = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: "Project Title",
  client: "Test Client",
  url: "/",
}));

export const Stills = () => {
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
      e.preventDefault();
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
        passive: false,
      });
    });
  };

  const [ref, instance] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged: (slider) => {
        setCurrentSlide(slider.track.details.rel);
      },
      created: () => {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 1 },
        },
        "(min-width: 768px)": {
          slides: { perView: 2 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3 },
        },
      },
      slides: { perView: 1 },
    },
    [WheelControls]
  );

  return (
    <div id="stills" className="min-h-screen scroll-mt-20">
      <div className="px-5">
        <h2 className="py-10 font-serif text-2xl uppercase">Stills</h2>
      </div>
      <div ref={ref} className="keen-slider">
        {sampleSlides.map((project) => (
          <div
            key={project.id}
            className="keen-slider__slide h-[600px] w-[400px] odd:bg-black even:bg-neutral-300"
          />
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
          <span className="font-serif uppercase italic">Swipe</span>
          <button
            onClick={() => instance.current?.next()}
            disabled={
              currentSlide === instance.current.track.details.slides.length - 1
            }
            className="transition-transform duration-500 hover:translate-x-4 disabled:cursor-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RightArrow className="h-24 w-24" />
          </button>
        </div>
      )}
    </div>
  );
};
