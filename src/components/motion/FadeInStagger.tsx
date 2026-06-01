"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUpTransition, staggerItemReveal, viewportOnce } from "@/lib/motion";

type FadeInStaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

export default function FadeInStagger({
  children,
  className,
  stagger = 0.14,
}: FadeInStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.08 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type FadeInItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function FadeInItem({ children, className }: FadeInItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: staggerItemReveal.hidden,
        visible: { ...staggerItemReveal.visible, transition: fadeUpTransition },
      }}
    >
      {children}
    </motion.div>
  );
}
