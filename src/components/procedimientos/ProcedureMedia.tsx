"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";

const DEFAULT_PREVIEW_TIME = 3;

type ProcedureMediaProps = {
  alt: string;
  image?: string;
  video?: string;
  /** Segundo del video para la carátula (fragmento del mismo archivo) */
  videoPreviewTime?: number;
};

function ProcedureVideoCover({
  src,
  previewTime,
}: {
  src: string;
  previewTime: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const seekToPreview = () => {
      const duration = el.duration;
      const target =
        Number.isFinite(duration) && duration > 0
          ? Math.min(previewTime, Math.max(0, duration - 0.25))
          : previewTime;
      if (el.currentTime !== target) {
        el.currentTime = target;
      } else {
        el.pause();
      }
    };

    const onLoadedMetadata = () => seekToPreview();
    const onSeeked = () => el.pause();

    el.addEventListener("loadedmetadata", onLoadedMetadata);
    el.addEventListener("seeked", onSeeked);
    if (el.readyState >= 1) seekToPreview();

    return () => {
      el.removeEventListener("loadedmetadata", onLoadedMetadata);
      el.removeEventListener("seeked", onSeeked);
    };
  }, [src, previewTime]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

export default function ProcedureMedia({
  image,
  alt,
  video,
  videoPreviewTime = DEFAULT_PREVIEW_TIME,
}: ProcedureMediaProps) {
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

  const showPlay = Boolean(video);

  return (
    <>
      <div className="relative min-h-[300px] bg-surface-container-low lg:w-1/2">
        {video ? (
          <ProcedureVideoCover src={video} previewTime={videoPreviewTime} />
        ) : image ? (
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : null}
        {showPlay ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="video-overlay-gradient group absolute inset-0 flex cursor-pointer items-center justify-center"
            aria-label={`Reproducir video: ${alt}`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-md transition group-hover:scale-110">
              <MaterialIcon name="play_arrow" className="text-4xl text-white" filled />
            </div>
          </button>
        ) : (
          <div className="video-overlay-gradient pointer-events-none absolute inset-0 flex items-center justify-center opacity-50">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-md">
              <MaterialIcon name="play_arrow" className="text-4xl text-white" filled />
            </div>
          </div>
        )}
      </div>

      {open && video && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Video: ${alt}`}
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
              src={video}
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
    </>
  );
}
