import { useEffect, useState } from "react";
import { useVisibleElement } from "./use-visible-element";

export const useWiggle = () => {
  const { visibleElementId } = useVisibleElement();

  const [wiggling, setWiggling] = useState(false);

  useEffect(() => {
    if (visibleElementId === "about") {
      const interval = setInterval(() => {
        setWiggling(true);
        setTimeout(() => setWiggling(false), 6000);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [visibleElementId]);

  return wiggling;
};
