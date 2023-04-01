"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useVisibleElement } from "../../hooks/use-visible-element";

export const ActiveIdWrapper = ({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setVisibleElementId } = useVisibleElement();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries.find((e) => e.isIntersecting);

      if (entry) {
        setVisibleElementId(entry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, [setVisibleElementId, ref]);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
};
