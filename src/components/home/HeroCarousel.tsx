"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { MotionButton } from "@/components/motion/Pressable";
import { pageEnterTransition } from "@/lib/motion";
import { heroSlides } from "@/lib/home-content";

export default function HeroCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const move = useCallback(
    (direction: number) => {
      goTo(current + direction);
    },
    [current, goTo]
  );

  useEffect(() => {
    const timer = setInterval(() => move(1), 5000);
    return () => clearInterval(timer);
  }, [move]);

  return (
    <motion.section
      className="relative h-[480px] w-full overflow-hidden bg-black md:h-[600px] lg:h-[870px]"
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={pageEnterTransition}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
          <div key={slide.src} className="relative h-full min-w-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-6">
        <MotionButton
          type="button"
          lightTap
          onClick={() => move(-1)}
          className="pointer-events-auto rounded-full bg-white/20 p-3 text-white backdrop-blur-md hover:bg-white/40"
          aria-label="Slide anterior"
        >
          <MaterialIcon name="chevron_left" />
        </MotionButton>
        <MotionButton
          type="button"
          lightTap
          onClick={() => move(1)}
          className="pointer-events-auto rounded-full bg-white/20 p-3 text-white backdrop-blur-md hover:bg-white/40"
          aria-label="Slide siguiente"
        >
          <MaterialIcon name="chevron_right" />
        </MotionButton>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 md:bottom-10">
        {heroSlides.map((slide, idx) => (
          <MotionButton
            key={slide.src}
            type="button"
            lightTap
            onClick={() => goTo(idx)}
            className={`h-3 w-3 rounded-full bg-white ${
              idx === current ? "opacity-100" : "opacity-40"
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
