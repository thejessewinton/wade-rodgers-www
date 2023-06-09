import { Navigation } from "../navigation/Navigation";
import { Socials } from "../socials/Socials";

export const Footer = () => {
  return (
    <footer className="fixed bottom-3 left-1/2 z-10 flex w-full max-w-[375px] -translate-x-1/2 flex-col items-center justify-center gap-2 rounded-md bg-white py-2 shadow-md md:hidden">
      <Navigation className="flex md:hidden" />
      {/* @ts-expect-error Async Server Component */}
      <Socials className="gap-10" />
    </footer>
  );
};
