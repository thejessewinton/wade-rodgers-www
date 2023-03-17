"use client";

import Link from "next/link";
import { Logo } from "../icons/Icons";
import { usePathname } from "next/navigation";
import { classnames } from "../../utils/classnames";

const items = [
  {
    label: "Selected Works",
    url: "/",
  },
  {
    label: "Photography",
    url: "/photography",
  },
  {
    label: "About",
    url: "/about",
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-12 h-full max-h-full w-56">
      <Logo />

      <div className="mt-20 flex flex-col space-y-8 font-mono tracking-tighter">
        {items.map((item) => (
          <div key={item.url} className="group flex items-center gap-4">
            <span
              className={classnames(
                "block h-1 w-1 scale-0 rounded-full bg-brand transition-all group-hover:scale-100",
                pathname === item.url && "scale-100"
              )}
            />
            <Link href={item.url} key={item.url} className="block w-full">
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
