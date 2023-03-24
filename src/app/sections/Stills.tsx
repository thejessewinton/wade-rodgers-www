"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const sampleSlides = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  title: "Project Title",
  client: "Test Client",
  url: "/",
}));

export const Stills = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
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
    <div ref={ref} id="stills" className="keen-slider scroll-mt-20">
      {sampleSlides.map((project) => (
        <div
          key={project.id}
          className="keen-slider__slide h-52 w-52 odd:bg-black even:bg-neutral-300"
        />
      ))}
    </div>
  );
};
