"use client";

import Image from "next/image";
import { MotionCardLink } from "@/components/motion/Pressable";
import MaterialIcon from "@/components/ui/MaterialIcon";

type BlogPreviewCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  video?: string;
};

export default function BlogPreviewCard({
  slug,
  title,
  excerpt,
  image,
  video,
}: BlogPreviewCardProps) {
  return (
    <MotionCardLink href={`/blog/${slug}`} className="group block">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl bg-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {video && (
          <span
            className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-semibold text-white"
            aria-hidden
          >
            <MaterialIcon name="play_circle" className="text-base" filled />
            Video
          </span>
        )}
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-tight text-primary transition-colors group-hover:text-primary-dark">
        {title}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-on-surface-variant">{excerpt}</p>
      <span className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-primary">
        Leer más
        <MaterialIcon name="arrow_forward" className="text-sm" />
      </span>
    </MotionCardLink>
  );
}
