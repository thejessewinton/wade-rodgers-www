"use client";

import { clsx } from "clsx";
import { useWiggle } from "../../../hooks/use-wiggle";
import { Airplane } from "../../icons/Icons";

export const Wiggle = ({ className }: { className: string }) => {
  const wiggling = useWiggle();

  return (
    <Airplane className={clsx(className, wiggling ? "animate-wiggle" : "")} />
  );
};
