"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { set } from "zod";
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleElementId(entry.target.id);
          }, 1000); // Wait for 1 second before updating active ID
        }
      });
    }, {});

    // Get all the elements with the class "scroll-ref"
    const targets = document.querySelectorAll(".scroll-ref");

    // Observe each element
    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, [setVisibleElementId]);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
};
