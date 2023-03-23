import Polaroid from "../../../public/wade.jpg";
import Image from "next/image";

export const About = () => {
  return (
    <div
      id="about"
      className="flex min-h-screen scroll-mt-20 items-center justify-center bg-slate-50"
    >
      <div className="mx-auto grid max-w-4xl gap-8 px-8 md:grid-cols-2">
        <Image src={Polaroid} alt="Wade" placeholder="blur" />

        <div className="space-y-12 text-base">
          <p>
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
          </p>
        </div>
      </div>
    </div>
  );
};
