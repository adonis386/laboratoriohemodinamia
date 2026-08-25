import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogArticleBody from "@/components/blog/BlogArticleBody";
import BlogArticleVideo from "@/components/blog/BlogArticleVideo";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { blogPosts, getBlogPost } from "@/lib/blog-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Artículo no encontrado" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const coverSrc = post.heroImage ?? post.image;
  const isPortraitCover = slug === "resena-historica";
  /** Misma franja panorámica que los demás heroes (1406×320) */
  const isPanoramicHero = Boolean(post.heroImage);

  return (
    <article>
      {isPortraitCover ? (
        <div className="mx-auto w-full max-w-md overflow-hidden bg-inverse-surface">
          <Image
            src={coverSrc}
            alt={post.title}
            width={1080}
            height={1920}
            className="h-auto w-full"
            style={{ width: "100%", height: "auto" }}
            priority
            quality={90}
            sizes="(max-width: 448px) 100vw, 448px"
          />
        </div>
      ) : isPanoramicHero ? (
        <div className="relative aspect-[1406/320] w-full overflow-hidden bg-inverse-surface">
          <Image
            src={coverSrc}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
      ) : (
        <div className="relative aspect-[1080/504] w-full overflow-hidden bg-inverse-surface">
          <Image
            src={coverSrc}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover"
        >
          <MaterialIcon name="arrow_back" className="text-base" />
          Volver al Blog
        </Link>

        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <MaterialIcon name="person" className="text-base" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <MaterialIcon name="calendar_today" className="text-base" />
            {post.date}
          </span>
        </div>

        <h1 className="mb-8 text-3xl font-bold text-primary md:text-4xl">{post.title}</h1>

        {post.video && (
          <BlogArticleVideo
            src={post.video}
            title={post.title}
            aspectClass={slug === "resena-historica" ? "aspect-[9/16] max-w-sm mx-auto" : undefined}
          />
        )}

        <BlogArticleBody paragraphs={post.paragraphs} />
      </div>
    </article>
  );
}
