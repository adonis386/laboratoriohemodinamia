"use client";

import { motion, useReducedMotion } from "motion/react";
import { contactHero } from "@/lib/contacto-content";
import { easeOut, pageEnterTransition } from "@/lib/motion";

export default function ContactHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden teal-gradient-bg py-16 md:py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-ice-blue-light blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-secondary-container blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-container px-4 text-center md:px-6">
        <motion.h1
          className="mb-4 text-4xl font-bold uppercase tracking-wide text-white md:text-5xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageEnterTransition}
        >
          {contactHero.title}
        </motion.h1>
        <motion.p
          className="mx-auto max-w-3xl text-sm font-medium uppercase leading-relaxed tracking-wide text-on-primary-container opacity-95 md:text-base"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...pageEnterTransition, delay: 0.12, ease: easeOut }}
        >
          {contactHero.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
