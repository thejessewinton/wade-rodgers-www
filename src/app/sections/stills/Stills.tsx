"use client";

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
  const [ref, instance] = useKeenSlider<HTMLDivElement>({
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
    created: () => {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div id="stills" className="scroll-mt-20">
      <div className="container">
        <h2 className="py-10 font-brand text-xl">Stills</h2>
      </div>
      <div ref={ref} className="keen-slider">
        {sampleSlides.map((project) => (
          <div
            key={project.id}
            className="keen-slider__slide h-64 w-52 odd:bg-black even:bg-neutral-300"
          />
        ))}
      </div>

      {loaded && instance.current && (
        <div className="mx-auto flex w-full justify-center gap-16 py-10">
          <button
            onClick={() => instance.current?.prev()}
            disabled={currentSlide === 0}
          >
            <LeftArrow className="h-10 w-10" />
          </button>
          <button
            onClick={() => instance.current?.next()}
            disabled={
              currentSlide === instance.current.track.details.slides.length - 1
            }
          >
            <RightArrow className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
};
