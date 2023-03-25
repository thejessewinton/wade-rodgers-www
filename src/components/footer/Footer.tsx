import { Socials } from "../socials/Socials";

export const Footer = () => {
  return (
    <footer className="fixed bottom-5 left-1/2 flex w-full max-w-[250px] -translate-x-1/2 items-center justify-center rounded-md bg-white py-2 shadow-md md:hidden">
      <Socials className="gap-10" />
    </footer>
  );
};
