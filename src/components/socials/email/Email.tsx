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
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        className={clsx(
          "relative mx-auto mt-4 min-w-[250px] items-center justify-center gap-2 bg-black p-1 text-white",
          className
        )}
      >
        <span className="font-medium">{isCopied ? "Email Copied" : email}</span>
      </button>
    </div>
  );
};
