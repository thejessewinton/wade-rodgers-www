import Link from "next/link";
import { Logo } from "../icons/Icons";
import { Navigation } from "../navigation/Navigation";
import { Socials } from "../socials/Socials";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-white">
      <div className="container flex h-full items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Navigation />
        <Socials />
      </div>
    </header>
  );
};
