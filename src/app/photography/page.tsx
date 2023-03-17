import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Photography",
};

const Photography = async () => {
  return <div className="space-y-2">Photography</div>;
};

export default Photography;
