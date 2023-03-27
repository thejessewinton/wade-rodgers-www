"use client";

import { clsx } from "clsx";
import { useEffect, useState } from "react";

export const Email = ({
  email,
  className,
}: {
  email: string;
  className?: string;
}) => {
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
      className={clsx(
        "relative mx-auto mt-4 items-center justify-center gap-2 bg-black px-4 py-2 text-white",
        className
      )}
    >
      <span className="font-serif uppercase">
        {isCopied ? "Email Copied" : "Contact Directly"}
      </span>
    </button>
  );
};
