"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";

export type GalleryItem = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: readonly GalleryItem[];
  aspectClass?: string;
  className?: string;
};

export default function GalleryGrid({
  images,
  aspectClass = "aspect-[4/3]",
  className = "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
}: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, goPrev, goNext]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className={className}>
        {images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative ${aspectClass} w-full cursor-zoom-in overflow-hidden rounded-2xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
              <MaterialIcon
                name="zoom_in"
                className="text-4xl text-white opacity-0 transition-opacity group-hover:opacity-100"
              />
            </span>
          </button>
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/92 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Cerrar"
          >
            <MaterialIcon name="close" className="text-3xl" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-6"
                aria-label="Imagen anterior"
              >
                <MaterialIcon name="chevron_left" className="text-3xl" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-6"
                aria-label="Imagen siguiente"
              >
                <MaterialIcon name="chevron_right" className="text-3xl" />
              </button>
            </>
          )}

          <div
            className="relative h-[75vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              quality={95}
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
