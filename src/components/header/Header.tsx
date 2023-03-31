import Link from "next/link";
import { Logo } from "../icons/Icons";
import { Navigation } from "../navigation/Navigation";
import { Socials } from "../socials/Socials";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-16 w-full bg-white">
      <div className="flex h-full items-center justify-between px-2">
        <Link href="#selected-works">
          <Logo className="h-auto w-16 md:w-20" />
        </Link>
        <Navigation className="hidden md:flex" />
        {/* @ts-expect-error Async Server Component */}
        <Socials className="hidden gap-4 md:flex" />
      </div>
    </header>
  );
};
