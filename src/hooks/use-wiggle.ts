import { useEffect, useState } from "react";
import { useHash } from "./use-hash";

export const useWiggle = () => {
  const hash = useHash();

  const [wiggling, setWiggling] = useState(false);

  useEffect(() => {
    if (hash === "#about") {
      const interval = setInterval(() => {
        setWiggling(true);
        setTimeout(() => setWiggling(false), 2000);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [hash]);

  return wiggling;
};
