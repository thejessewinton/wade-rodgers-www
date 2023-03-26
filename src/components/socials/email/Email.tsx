"use client";

import { useEffect, useState } from "react";

export const Email = ({ email }: { email: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <button
      onClick={handleClick}
      className="relative mt-4 flex w-full items-center justify-center gap-2 bg-black py-4 text-white"
    >
      <span className="font-serif uppercase">
        {isCopied ? "Email Copied" : "Contact Directly"}
      </span>
    </button>
  );
};
