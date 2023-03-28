"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const ScrollObserver = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
