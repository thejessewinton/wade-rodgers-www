"use client";

import { clsx } from "clsx";
import { useVisibleElement } from "../../hooks/use-visible-element";

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
  const { visibleElementId, setVisibleElementId } = useVisibleElement();

  return (
    <nav className={clsx("gap-10 font-sans font-medium", className)}>
      {items.map((item) => {
        const isActive = visibleElementId === item.id;

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
              className={clsx("block w-full text-lg", isActive && "font-bold")}
              onClick={() => setVisibleElementId(item.id)}
            >
              {item.label}
            </a>
          </div>
        );
      })}
    </nav>
  );
};
