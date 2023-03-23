import Link from "next/link";
import { InstagramIcon, VimeoIcon } from "../icons/Icons";
import { Email } from "./email/Email";

const items = [
  {
    label: "Email",
    url: "email@email.com",
  },
  {
    label: "Vimeo",
    url: "https://vimeo.com",
  },
  {
    label: "Instagram",
    url: "https://instagram.com",
  },
];

export const Socials = () => {
  return (
    <div className="flex gap-4 font-brand font-medium">
      {items.map((item) => {
        return (
          <div
            key={item.url}
            className="group flex flex-col items-center justify-center"
          >
            {item.label === "Instagram" ? (
              <Link href={item.url} target="_blank" key={item.label}>
                <span className="sr-only">{item.label}</span>
                <InstagramIcon className="transition-colors hover:text-neutral-300" />
              </Link>
            ) : item.label === "Vimeo" ? (
              <Link href={item.url} target="_blank" key={item.label}>
                <span className="sr-only">{item.label}</span>
                <VimeoIcon className="transition-colors hover:text-neutral-300" />
              </Link>
            ) : item.label === "Email" ? (
              <Email email={item.url} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
