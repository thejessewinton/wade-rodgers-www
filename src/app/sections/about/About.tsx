"use client";

import Polaroid from "../../../../public/wade.jpg";
import Image from "next/image";
import { Email } from "../../../components/socials/email/Email";

const content = `<p>
Wade’s interest in art and his creative drive stems from being part
of a dance company as a child, where he first experienced the power
of storytelling through music and movement. Gifted a film camera by
a family friend, his photographic eye began to develop.
</p>

<p>
He attended Columbia College Chicago and focused in Cinematography.
For over a decade, he worked in and led camera and lighting
departments on feature films, commercials, documentaries, TV shows,
etc.
</p>

<p>
Along the way, he discovered his passion for writing and directing.
His background in dance and cinematography make him a visually
forward director with a keen sense of rhythm. He also continues to
focus on still photography. With a genuine love of travel, he works
between Los Angeles and Chicago or wherever the inspiration takes
him.
</p>`;

export const About = () => {
  return (
    <div
      id="about"
      className="flex min-h-screen scroll-mt-20 flex-col justify-center"
    >
      <div className="px-5">
        <h2 className="py-10 font-serif text-2xl uppercase">About</h2>
      </div>
      <div className="mx-auto grid max-w-4xl gap-24 px-8 md:grid-cols-2">
        <div>
          <Image src={Polaroid} alt="Wade" placeholder="blur" />
          <Email email={"email@email.com"} className="hidden md:flex" />
        </div>

        <div className="pb-40 md:pb-0">
          <div
            className="space-y-12 text-base"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Email email={"email@email.com"} className="mt-10 flex md:hidden" />
        </div>
      </div>
    </div>
  );
};
