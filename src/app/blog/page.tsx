import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import FadeIn from "@/components/motion/FadeIn";
import FadeInStagger, { FadeInItem } from "@/components/motion/FadeInStagger";
import { blogPosts } from "@/lib/blog-content";

export const metadata: Metadata = {
  title: "Blog LHHCC",
  description: "Artículos sobre salud cardiovascular y hemodinamia.",
};

export default function BlogPage() {
  return (
    <>
      <FadeIn as="section" className="teal-gradient-bg flex flex-col items-center justify-center px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-container">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-on-primary-container">
            Recursos Médicos Especializados
          </span>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Blog LHHCC</h1>
          <p className="mx-auto max-w-2xl text-lg text-on-primary-container opacity-90">
            Explora los últimos avances en cardiología intervencionista, noticias del
            laboratorio y consejos para la salud cardiovascular.
          </p>
        </div>
      </FadeIn>

      <main className="mx-auto max-w-container px-4 py-16 md:px-6 md:py-24">
        <FadeInStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <FadeInItem key={post.slug}>
              <BlogCard {...post} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </main>
    </>
  );
}
