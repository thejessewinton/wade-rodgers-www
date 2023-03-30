"use client";

import { clsx } from "clsx";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import { useWiggle } from "../../hooks/use-wiggle";
import { Airplane, InstagramIcon, VimeoIcon } from "../icons/Icons";

const items = [
  {
    label: "Email",
    url: "mailto:email@email.com",
  },
  {
    label: "Instagram",
    url: "https://instagram.com",
  },
  {
    label: "Vimeo",
    url: "https://vimeo.com",
  },
];

interface SocialsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Socials = ({ className, ...props }: SocialsProps) => {
  const iconClassName = "transition-colors hover:text-neutral-600";
  const wiggling = useWiggle();

  return (
    <div className={clsx("flex font-serif font-medium", className)} {...props}>
      {items.map((item) => {
        return (
          <div
            key={item.url}
            className="group flex flex-col items-center justify-center"
          >
            <Link href={item.url} target="_blank" key={item.label}>
              <span className="sr-only">{item.label}</span>
              {item.label === "Instagram" ? (
                <InstagramIcon className={iconClassName} />
              ) : item.label === "Vimeo" ? (
                <VimeoIcon className={iconClassName} />
              ) : item.label === "Email" ? (
                <Airplane
                  className={clsx(
                    iconClassName,
                    wiggling ? "animate-wiggle" : ""
                  )}
                />
              ) : null}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
