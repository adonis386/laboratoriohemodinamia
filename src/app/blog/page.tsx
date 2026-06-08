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
      <FadeIn as="section" className="teal-gradient-bg px-4 py-16 text-center md:py-20">
        <div className="mx-auto max-w-container md:px-6">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Blog LHHCC</h1>
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
