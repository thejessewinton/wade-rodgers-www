import Link from "next/link";

const items = [
  {
    label: "Email",
    url: "mailto:email@email.com",
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
      {items.map((item) => (
        <div
          key={item.url}
          className="group flex flex-col items-center justify-center tracking-wide"
        >
          <Link
            href={item.url}
            target="_blank"
            key={item.url}
            className="block w-full text-sm"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};
