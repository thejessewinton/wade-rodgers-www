import { asLink } from "@prismicio/helpers";
import { clsx } from "clsx";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import { getSettings } from "../../utils/prismic";
import { InstagramIcon, VimeoIcon } from "../icons/Icons";
import { Wiggle } from "./wiggle/Wiggle";

interface SocialsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Socials = async ({ className, ...props }: SocialsProps) => {
  const { data } = await getSettings();
  const iconClassName = "transition-colors hover:text-neutral-600";

  return (
    <div className={clsx("flex font-serif font-medium", className)} {...props}>
      {data.links.map((item) => {
        return (
          <div
            key={asLink(item.link)}
            className="group flex flex-col items-center justify-center"
          >
            <Link
              href={asLink(item.link) as string}
              target="_blank"
              key={item.label}
            >
              <span className="sr-only">{item.label}</span>
              {item.label === "Instagram" ? (
                <InstagramIcon className={iconClassName} />
              ) : item.label === "Vimeo" ? (
                <VimeoIcon className={iconClassName} />
              ) : item.label === "Email" ? (
                <Wiggle className={iconClassName} />
              ) : null}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
