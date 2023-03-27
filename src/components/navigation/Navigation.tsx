"use client";

import { clsx } from "clsx";
import { useHash } from "../../hooks/use-hash";

const items = [
  {
    label: "Selected Works",
    id: "selected-works",
  },
  {
    label: "Stills",
    id: "stills",
  },
  {
    label: "About",
    id: "about",
  },
];

export const Navigation = ({ className }: { className?: string }) => {
  const hash = useHash();

  return (
    <nav className={clsx("gap-10 font-serif font-medium", className)}>
      {items.map((item) => {
        const isActive = hash === `#${item.id}`;

        return (
          <div
            key={item.id}
            className="group flex items-center justify-center gap-2"
          >
            <div
              className={clsx(
                "block h-1 w-1 shrink-0 scale-0 rounded-full bg-black transition-all duration-500 group-hover:scale-100",
                isActive && "scale-100"
              )}
            />
            <a
              href={`#${item.id}`}
              key={item.id}
              className="block w-full text-sm uppercase"
            >
              {item.label}
            </a>
          </div>
        );
      })}
    </nav>
  );
};
