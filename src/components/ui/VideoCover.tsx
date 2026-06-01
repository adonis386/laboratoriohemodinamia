"use client";

import { useEffect, useRef } from "react";

type VideoCoverProps = {
  src: string;
  /** Segundo del video para la carátula */
  previewTime?: number;
  /** Encuadre CSS object-position (ej. "center 30%" muestra más la parte superior) */
  objectPosition?: string;
  className?: string;
};

export default function VideoCover({
  src,
  previewTime = 3,
  objectPosition = "center center",
  className = "absolute inset-0 h-full w-full object-cover",
}: VideoCoverProps) {
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
      className={className}
      style={{ objectPosition }}
    />
  );
}
