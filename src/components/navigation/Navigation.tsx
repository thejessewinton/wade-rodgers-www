"use client";

import { clsx } from "clsx";
import { useHash } from "../../hooks/use-hash";

const items = [
  {
    label: "Selected Works",
    id: "selected-works",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Stills",
    id: "stills",
  },
];

export const Navigation = () => {
  const hash = useHash();

  return (
    <nav className="flex gap-10 font-brand font-medium">
      {items.map((item) => {
        const isActive = hash === `#${item.id}`;

        return (
          <div
            key={item.id}
            className="group flex items-center justify-center gap-1"
          >
            <div
              className={clsx(
                "block h-1 w-1 shrink-0 scale-0 rounded-full bg-brand transition-all duration-500 group-hover:scale-100",
                isActive && "scale-100"
              )}
            />
            <a
              href={`#${item.id}`}
              key={item.id}
              className="block w-full text-sm"
            >
              {item.label}
            </a>
          </div>
        );
      })}
    </nav>
  );
};
