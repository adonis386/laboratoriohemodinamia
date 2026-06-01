import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  video?: string;
};

export default function BlogCard({
  slug,
  title,
  excerpt,
  author,
  date,
  image,
  video,
}: BlogCardProps) {
  return (
    <article className="card-shadow flex h-full flex-col overflow-hidden rounded-xl border border-ice-blue-deep bg-white transition duration-300 hover:-translate-y-2">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={192}
          className="h-full w-full object-cover"
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
        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-4"
          >
            Leer más
            <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
      </div>
    </article>
  );
}
