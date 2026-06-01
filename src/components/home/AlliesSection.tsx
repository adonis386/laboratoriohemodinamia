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
            className="transition-transform hover:scale-105"
            aria-label="IMAYE - Inversiones Médica AYE"
          >
            <Image
              src="/imaye.png"
              alt="IMAYE - Inversiones Médica AYE"
              width={200}
              height={120}
              className="h-14 w-auto object-contain md:h-40"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
