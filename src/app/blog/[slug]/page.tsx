import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { blogPosts } from "@/lib/blog-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <div className="relative h-64 w-full md:h-80">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover"
        >
          <MaterialIcon name="arrow_back" className="text-base" />
          Volver al Blog
        </Link>

        <div className="mb-4 flex items-center gap-4 text-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <MaterialIcon name="person" className="text-base" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <MaterialIcon name="calendar_today" className="text-base" />
            {post.date}
          </span>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-primary md:text-4xl">{post.title}</h1>
        <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">{post.excerpt}</p>

        <div className="prose prose-lg max-w-none text-on-surface">
          <p>
            Contenido completo del artículo disponible próximamente. Este artículo forma parte del
            blog del Laboratorio Hemodinamia HCC y será ampliado en la siguiente fase del proyecto
            con contenido editorial completo.
          </p>
        </div>
      </div>
    </article>
  );
}
