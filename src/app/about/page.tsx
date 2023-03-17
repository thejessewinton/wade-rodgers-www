import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About",
};

const About = async () => {
  return <div className="space-y-2">About</div>;
};

export default About;
