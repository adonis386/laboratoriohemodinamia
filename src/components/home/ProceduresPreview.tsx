"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import VideoCover from "@/components/ui/VideoCover";
import { proceduresPreview } from "@/lib/home-content";

export default function ProceduresPreview() {
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
    <section
      id="procedimientos"
      className="relative flex min-h-[600px] items-center py-16 md:py-24"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={proceduresPreview.background}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-deep/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-container flex-col gap-12 px-4 md:px-6 lg:flex-row">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border-4 border-white/10 bg-black lg:w-1/3"
          aria-label="Reproducir video: Hemodinamia y cateterismo"
        >
          <VideoCover
            src={proceduresPreview.video}
            previewTime={proceduresPreview.videoPreviewTime}
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-md transition group-hover:scale-110">
              <MaterialIcon name="play_arrow" className="text-4xl text-white" filled />
            </div>
          </div>
        </button>

        <div className="w-full lg:w-2/3">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-[32px]">Procedimientos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proceduresPreview.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-card rounded-xl p-6 transition hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container text-white">
                  <MaterialIcon name={item.icon} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-on-surface-variant">{item.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 lg:hidden">
            <Link
              href="/procedimientos"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Ver todos los procedimientos
              <MaterialIcon name="arrow_forward" className="text-sm" />
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video: Hemodinamia y cateterismo"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Cerrar video"
          >
            <MaterialIcon name="close" className="text-3xl" />
          </button>
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={proceduresPreview.video}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-full"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
