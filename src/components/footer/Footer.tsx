import { Navigation } from "../navigation/Navigation";
import { Socials } from "../socials/Socials";

export const Footer = () => {
  return (
    <footer className="fixed bottom-5 left-1/2 flex w-full max-w-[375px] -translate-x-1/2 flex-col items-center justify-center gap-4 rounded-md bg-white py-4 shadow-md md:hidden">
      <Navigation className="flex md:hidden" />
      {/* @ts-expect-error Async Server Component */}
      <Socials className="gap-10" />
    </footer>
  );
};
