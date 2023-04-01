import Image from "next/image";
import { Email } from "../../../components/socials/email/Email";
import { asHTML, asText } from "@prismicio/helpers";
import { getAbout, getSettings } from "../../../utils/prismic";
import { ActiveIdWrapper } from "../../../components/active-id-wrapper/ActiveIdWrapper";

export const About = async () => {
  const { data: about } = await getAbout();
  const { data: settings } = await getSettings();

  const email = settings.email_address as string;

  return (
    <ActiveIdWrapper id="about" className="scroll-mt-16">
      <div className="flex min-h-screen flex-col">
        <div className="ml-2 px-2">
          <h2 className="py-1 text-xl uppercase text-neutral-500">
            {asText(about.section_title)}
          </h2>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <div className="mx-auto grid max-w-4xl gap-24 px-8 md:grid-cols-2">
            <div>
              <Image
                src={about.image.url || ""}
                alt={about.image.alt || "Wade Rodgers"}
                width={about.image.dimensions?.width}
                height={about.image.dimensions?.height}
                placeholder="blur"
                blurDataURL={`${about.image.url}&blur=100`}
              />
              <Email email={email} className="hidden md:flex" />
            </div>

            <div className="pb-40 md:pb-0">
              <div
                className="space-y-12 text-base font-medium"
                dangerouslySetInnerHTML={{ __html: asHTML(about.bio) }}
              />
              <Email email={email} className="mt-10 flex md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </ActiveIdWrapper>
  );
};
