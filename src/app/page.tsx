import { About } from "./sections/about/About";
import { SelectedWorks } from "./sections/selected-works/SelectedWorks";
import { Stills } from "./sections/stills/Stills";

export const revalidate = 60;

const Index = async () => {
  return (
    <>
      <SelectedWorks />
      <Stills />
      <About />
    </>
  );
};

export default Index;
