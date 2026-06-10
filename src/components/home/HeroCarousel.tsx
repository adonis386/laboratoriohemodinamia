"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { MotionButton } from "@/components/motion/Pressable";
import { pageEnterTransition } from "@/lib/motion";
import { heroSlides } from "@/lib/home-content";

export default function HeroCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
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
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateWidth = () => {
      setSlideWidth(viewport.clientWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => move(1), 5000);
    return () => clearInterval(timer);
  }, [move]);

  return (
    <section className="relative isolate -mt-[var(--site-header-height)] w-full overflow-hidden">
      <motion.div
        className="relative w-full overflow-hidden"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={pageEnterTransition}
      >
        <div
          ref={viewportRef}
          className="hero-viewport relative w-full overflow-hidden"
        >
          {slideWidth > 0 ? (
            <div
              className="absolute inset-y-0 left-0 flex transition-transform duration-700 ease-out"
              style={{
                width: slideWidth * total,
                transform: `translate3d(-${current * slideWidth}px, 0, 0)`,
              }}
            >
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className="relative h-full shrink-0"
                  style={{ width: slideWidth }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    style={
                      "objectPosition" in slide
                        ? { objectPosition: slide.objectPosition }
                        : undefined
                    }
                    priority={index === 0}
                    quality={90}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image
              src={heroSlides[0].src}
              alt={heroSlides[0].alt}
              fill
              className="object-cover"
              style={
                "objectPosition" in heroSlides[0]
                  ? { objectPosition: heroSlides[0].objectPosition }
                  : undefined
              }
              priority
              sizes="100vw"
            />
          )}
        </div>
      </motion.div>

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

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 md:bottom-8">
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
    </section>
  );
}

