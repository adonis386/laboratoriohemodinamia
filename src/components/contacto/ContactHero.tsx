"use client";

import { motion, useReducedMotion } from "motion/react";
import MaterialIcon from "@/components/ui/MaterialIcon";
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
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 px-4 md:flex-row md:items-center md:gap-8 md:px-6 md:text-left">
        <motion.div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={pageEnterTransition}
        >
          <MaterialIcon name="contact_mail" className="text-5xl text-white" filled />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h1
            className="mb-3 text-4xl font-bold text-white md:text-5xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={pageEnterTransition}
          >
            {contactHero.title}
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-on-primary-container opacity-90 md:mx-0"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageEnterTransition, delay: 0.12, ease: easeOut }}
          >
            {contactHero.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
