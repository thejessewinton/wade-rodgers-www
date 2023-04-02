import { asText } from "@prismicio/helpers";
import { ActiveIdWrapper } from "../../../components/active-id-wrapper/ActiveIdWrapper";
import { Slider } from "../../../components/slider/Slider";
import { getStills } from "../../../utils/prismic";

export const Stills = async () => {
  const { data } = await getStills();

  return (
    <ActiveIdWrapper id="stills" className="scroll-mt-16">
      <div className="min-h-screen">
        <div className="ml-2 px-2">
          <h2 className="py-1 text-xl uppercase text-neutral-500">{asText(data.section_title)}</h2>
        </div>

        <Slider stills={data.images} />
      </div>
    </ActiveIdWrapper>
  );
};
