"use client";

import Image from "next/image";
import { MotionCardLink } from "@/components/motion/Pressable";
import MaterialIcon from "@/components/ui/MaterialIcon";

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  imagePosition?: string;
  video?: string;
};

export default function BlogCard({
  slug,
  title,
  excerpt,
  author,
  date,
  image,
  imagePosition,
  video,
}: BlogCardProps) {
  return (
    <MotionCardLink
      href={`/blog/${slug}`}
      className="card-shadow flex h-full flex-col overflow-hidden rounded-xl border border-ice-blue-deep bg-white"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
      <div className="flex flex-grow flex-col p-6">
        <div className="mb-3 flex items-center gap-4 text-xs text-on-surface-variant">
          <span className="flex items-center gap-1">
            <MaterialIcon name="person" className="text-base" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <MaterialIcon name="calendar_today" className="text-base" />
            {date}
          </span>
        </div>
        <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-tight text-primary">
          {title}
        </h3>
        <p className="mb-6 line-clamp-2 text-sm text-on-surface-variant">{excerpt}</p>
        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
          Leer más
          <MaterialIcon name="arrow_forward" className="text-sm" />
        </div>
      </div>
    </MotionCardLink>
  );
}
