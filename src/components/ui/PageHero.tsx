"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut, pageEnterTransition } from "@/lib/motion";

type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="gradient-hero py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl font-bold md:text-5xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageEnterTransition}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg opacity-90 md:text-xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageEnterTransition, delay: 0.2, ease: easeOut }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
