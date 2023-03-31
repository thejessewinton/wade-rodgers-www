import { Slider } from "../../../components/slider/Slider";

export const Stills = async () => {
  return (
    <div id="stills" className="min-h-screen scroll-mt-16">
      <div className="ml-2 px-2">
        <h2 className="py-1 text-xl uppercase text-neutral-500">Stills</h2>
      </div>

      <Slider />
    </div>
  );
};
