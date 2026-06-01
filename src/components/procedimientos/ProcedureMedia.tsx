"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import VideoCover from "@/components/ui/VideoCover";

const DEFAULT_PREVIEW_TIME = 3;

/** Encuadre por defecto: prioriza rostro (evita recorte en la parte superior) */
const DEFAULT_COVER_POSITION = "center 28%";

type ProcedureMediaProps = {
  alt: string;
  image?: string;
  video?: string;
  /** Segundo del video para la carátula (fragmento del mismo archivo) */
  videoPreviewTime?: number;
  videoCoverPosition?: string;
};

export default function ProcedureMedia({
  image,
  alt,
  video,
  videoPreviewTime = DEFAULT_PREVIEW_TIME,
  videoCoverPosition = DEFAULT_COVER_POSITION,
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
          <VideoCover
            src={video}
            previewTime={videoPreviewTime}
            objectPosition={videoCoverPosition}
          />
        ) : image ? (
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover object-[center_28%]"
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
