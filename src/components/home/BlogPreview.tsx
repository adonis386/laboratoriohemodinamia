import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { blogPreview } from "@/lib/home-content";

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-[32px]">Nuestro Blog</h2>
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
            <article key={post.slug} className="group">
              <div className="mb-6 aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-tight text-primary transition-colors group-hover:text-primary-dark">
                {post.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-on-surface-variant">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-primary transition-all group-hover:gap-2"
              >
                Leer más
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </article>
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
