"use client";

import { Airplane } from "../../icons/Icons";
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
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <button onClick={handleClick} className="relative flex items-center gap-2">
      {isCopied ? (
        <span className="absolute -left-20 text-xs">Email copied!</span>
      ) : null}
      <span className="sr-only">{email}</span>
      <Airplane className="transition-colors hover:text-neutral-300" />
    </button>
  );
};
