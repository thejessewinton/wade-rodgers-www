import type { PropsWithChildren } from "react";
import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";
import type { Metadata } from "next";

import "../styles/globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

const mono = Space_Mono({
  weight: ["400"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const brand = localFont({
  src: "../../public/fonts/victor-serif.woff2",
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
      className={`${mono.variable} ${sans.variable} ${brand.variable} h-full scroll-smooth leading-loose`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <main className="relative">
          <Header />
          <div className="relative">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
