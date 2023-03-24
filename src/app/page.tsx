import { About } from "./sections/About";
import { SelectedWorks } from "./sections/SelectedWorks";
import { Stills } from "./sections/Stills";

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
