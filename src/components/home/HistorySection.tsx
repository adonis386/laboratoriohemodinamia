"use client";

import { useCallback, useEffect, useState } from "react";
import { MotionButton } from "@/components/motion/Pressable";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { interactiveSpring } from "@/lib/motion";
import VideoCover from "@/components/ui/VideoCover";
import { historySection } from "@/lib/home-content";

export default function HistorySection() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <section className="bg-gradient-to-br from-ice-blue-light to-white py-16 md:py-24">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 md:px-6">
        <div className="rounded-2xl border border-ice-blue-deep bg-white p-8 shadow-sm md:p-10">
          <h2 className="mb-6 text-3xl font-bold text-primary md:text-[32px]">
            {historySection.title}
          </h2>
          <div className="space-y-4 text-on-surface-variant">
            {historySection.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 border-t border-page-gray pt-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ice-blue-deep">
              <MaterialIcon name="person" className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-on-surface">{historySection.author}</p>
              <p className="text-sm uppercase tracking-wide opacity-70">
                {historySection.authorRole}
              </p>
            </div>
          </div>
        </div>

        <div className="group relative mx-auto flex aspect-[9/16] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-2xl bg-inverse-surface sm:max-w-xs md:max-w-sm">
          <VideoCover
            src={historySection.video}
            previewTime={historySection.videoPreviewTime}
            objectPosition={historySection.videoCoverPosition}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary-deep/30" aria-hidden />
          <MotionButton
            type="button"
            onClick={() => setOpen(true)}
            className="relative z-10 rounded-full border border-white/50 bg-white/20 p-6 text-white backdrop-blur-lg hover:bg-white/40"
            aria-label="Reproducir video: Reseña Histórica"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            transition={interactiveSpring}
          >
            <MaterialIcon name="play_arrow" className="text-4xl" filled />
          </MotionButton>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video: Reseña Histórica"
          onClick={close}
        >
          <MotionButton
            type="button"
            lightTap
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Cerrar video"
          >
            <MaterialIcon name="close" className="text-3xl" />
          </MotionButton>
          <div
            className="relative w-full max-w-sm overflow-hidden rounded-xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={historySection.video}
              controls
              autoPlay
              playsInline
              className="aspect-[9/16] max-h-[85vh] w-full object-contain"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
