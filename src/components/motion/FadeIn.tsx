"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUpTransition, scrollReveal, viewportOnce } from "@/lib/motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial={scrollReveal.hidden}
      whileInView={scrollReveal.visible}
      viewport={viewportOnce}
      transition={{ ...fadeUpTransition, delay }}
    >
      {children}
    </Component>
  );
}
