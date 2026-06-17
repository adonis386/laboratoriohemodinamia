import Image from "next/image";
import Link from "next/link";

export default function AlliesSection() {
  return (
    <section className="border-b border-ice-blue-deep bg-white py-12">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
          Nuestros Aliados
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-12">
          <Link
            href="/blog/imaye"
            className="inline-block transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label="IMAYE - Ver artículo en el blog"
          >
            <Image
              src="/imaye.png"
              alt="IMAYE - Inversiones Médica AYE"
              width={480}
              height={270}
              className="h-28 w-auto object-contain sm:h-36 md:h-48 lg:h-56 xl:h-64"
              priority
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
