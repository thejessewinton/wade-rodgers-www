import type { PropsWithChildren } from "react";
import localFont from "next/font/local";
import type { Metadata } from "next";

import "../styles/globals.css";
import { Navigation } from "../components/navigation/Navigation";

const labMono = localFont({
  src: "../../public/fonts/lab-mono.woff2",
  variable: "--font-mono",
});

const uncutSans = localFont({
  src: "../../public/fonts/uncut-sans.woff2",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Director — Wade Rodgers",
    template: "%s — Wade Rodgers",
  },
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="en"
      className={`${labMono.variable} ${uncutSans.variable} h-full leading-loose tracking-wide`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex flex-col bg-white text-neutral-900">
        <main className="container flex flex-col pt-12 md:flex-row">
          <Navigation />
          <div className="flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
