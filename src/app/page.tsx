import { getSelectedWork } from "../utils/prismic";
import { About } from "./sections/about/About";
import { SelectedWorks } from "./sections/selected-works/SelectedWorks";
import { Stills } from "./sections/stills/Stills";

export const revalidate = 60;

const Index = async () => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <SelectedWorks />
      {/* @ts-expect-error Async Server Component */}
      <Stills />
      {/* @ts-expect-error Async Server Component */}
      <About />
    </>
  );
};

export default Index;
