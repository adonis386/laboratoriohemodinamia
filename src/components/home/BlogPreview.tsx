import Link from "next/link";
import BlogPreviewCard from "@/components/home/BlogPreviewCard";
import { blogPreview } from "@/lib/home-content";

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-[32px]">Blog</h2>
            <p className="text-on-surface-variant">
              Información relevante sobre salud cardiovascular.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden font-bold text-primary transition hover:underline md:block"
          >
            Ver todas las entradas →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPreview.map((post) => (
            <BlogPreviewCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-block font-bold text-primary hover:underline"
          >
            Ver todas las entradas →
          </Link>
        </div>
      </div>
    </section>
  );
}
