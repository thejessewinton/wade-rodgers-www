import Link from "next/link";
import { Logo } from "../icons/Icons";

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
  return (
    <div className="min-h-full w-56">
      <Logo />

      <div className="flex flex-col space-y-10 font-mono tracking-tighter">
        {items.map((item) => (
          <div key={item.url} className="flex items-center gap-2">
            <span className="-mt-2 block h-1 w-1 rounded-full bg-brand" />
            <Link href={item.url} key={item.url}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
