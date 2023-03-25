"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const sampleSlides = Array.from({ length: 4 }, (_, i) => ({
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
    <>
      <div ref={ref} id="stills" className="keen-slider !scroll-mt-20">
        {sampleSlides.map((project) => (
          <div
            key={project.id}
            className="keen-slider__slide h-100 w-52 odd:bg-black even:bg-neutral-300"
          />
        ))}
      </div>
      <>
        {loaded && instance.current && (
          <>
            <button
              onClick={() => instance.current?.prev()}
              disabled={currentSlide === 0}
            >
              Prev
            </button>
            <button
              onClick={() => instance.current?.next()}
              disabled={
                currentSlide ===
                instance.current.track.details.slides.length - 1
              }
            >
              Next
            </button>
          </>
        )}
      </>
    </>
  );
};
