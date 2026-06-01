"use client";

import Link from "next/link";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import {
  interactiveHover,
  interactiveSpring,
  interactiveTap,
  interactiveTapLight,
} from "@/lib/motion";

export const MotionLink = motion.create(Link);

export function usePressableMotion(light = false) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return {};
  }
  return {
    whileHover: interactiveHover,
    whileTap: light ? interactiveTapLight : interactiveTap,
    transition: interactiveSpring,
  };
}

type MotionButtonProps = HTMLMotionProps<"button"> & {
  lightTap?: boolean;
};

export function MotionButton({
  lightTap = false,
  transition,
  ...props
}: MotionButtonProps) {
  const press = usePressableMotion(lightTap);
  return (
    <motion.button
      {...press}
      transition={transition ?? interactiveSpring}
      {...props}
    />
  );
}

type MotionAnchorProps = HTMLMotionProps<"a"> & {
  lightTap?: boolean;
};

export function MotionAnchor({ lightTap = false, transition, ...props }: MotionAnchorProps) {
  const press = usePressableMotion(lightTap);
  return (
    <motion.a
      {...press}
      transition={transition ?? interactiveSpring}
      {...props}
    />
  );
}

type MotionCardLinkProps = {
  href: React.ComponentProps<typeof Link>["href"];
  className?: string;
  children: React.ReactNode;
  onClick?: React.ComponentProps<typeof Link>["onClick"];
};

/** Enlace-tarjeta con hover y tap visibles */
export function MotionCardLink({
  className,
  children,
  href,
  onClick,
}: MotionCardLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return (
      <Link className={className} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <MotionLink
      className={className}
      href={href}
      onClick={onClick}
      whileHover={interactiveHover}
      whileTap={interactiveTapLight}
      transition={interactiveSpring}
    >
      {children}
    </MotionLink>
  );
}
