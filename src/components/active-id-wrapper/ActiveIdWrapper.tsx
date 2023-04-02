"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/use-intersection-observer";
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
  const entry = useIntersectionObserver(ref, {
    root: null,
  });
  const isVisible = !!entry?.isIntersecting;
  const { setVisibleElementId } = useVisibleElement();

  useEffect(() => {
    if (isVisible) {
      setVisibleElementId(id);
    }
  }, [id, isVisible, setVisibleElementId, entry?.target]);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
};
