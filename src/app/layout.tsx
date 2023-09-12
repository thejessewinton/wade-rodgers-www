import type { PropsWithChildren } from "react";
import { Bona_Nova } from "next/font/google";
import type { Metadata } from "next";

import "../styles/globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Copyright } from "../components/copyright/Copyright";

const serif = Bona_Nova({
  variable: "--font-serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Director — Wade Rodgers",
    template: "%s — Wade Rodgers",
  },
  description:
    "Wade Rodgers is a director with a background in dance and cinematography. This makes him a visually forward director with a keen sense of rhythm. Moved by compelling narrative, he’s mindful of developing a deep connection with the audience. We are the stories we tell ourselves.",
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="en"
      className={`${serif.variable} h-full scroll-smooth leading-loose`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <main className="relative">
          <Header />
          <div className="relative">{children}</div>
        </main>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
};

export default RootLayout;
