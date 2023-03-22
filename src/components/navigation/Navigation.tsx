"use client";

import { classnames } from "../../utils/classnames";
import { sections } from "../../utils/sections";

const items = Object.entries(sections).map(([, value]) => ({
  label: value.title,
  url: `/#${value.id}`,
}));

export const Navigation = () => {
  return (
    <nav className="flex gap-10 font-brand font-medium">
      {items.map((item) => (
        <div
          key={item.url}
          className="group flex flex-col items-center justify-center tracking-wide"
        >
          <a href={item.url} key={item.url} className="block w-full text-sm">
            {item.label}
          </a>
          <div
            className={classnames(
              "block h-1 w-1 shrink-0 scale-0 rounded-full bg-brand transition-all duration-500 group-hover:scale-100",
              item.url === null && "scale-100"
            )}
          />
        </div>
      ))}
    </nav>
  );
};
