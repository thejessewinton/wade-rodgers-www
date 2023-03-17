import type { PropsWithChildren } from "react";
import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";
import type { Metadata } from "next";

import "../styles/globals.css";
import { Navigation } from "../components/navigation/Navigation";

const mono = Space_Mono({
  weight: ["400"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const brand = localFont({
  src: "../../public/fonts/panamera-sans.woff2",
  variable: "--font-brand",
});

const sans = localFont({
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
      className={`${mono.variable} ${sans.variable} ${brand.variable} h-full leading-loose`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <main className="container flex flex-col pt-12 md:flex-row">
          <Navigation />
          <div className="flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
