import { About } from "./sections/About";
import { SelectedWorks } from "./sections/SelectedWorks";

export const revalidate = 60;

const Index = async () => {
  return (
    <div className="space-y-1">
      <SelectedWorks />
      <About />
    </div>
  );
};

export default Index;
