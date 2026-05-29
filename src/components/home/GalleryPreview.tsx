import Image from "next/image";
import Link from "next/link";
import { galleryPreview } from "@/lib/home-content";

export default function GalleryPreview() {
  return (
    <section id="galeria" className="bg-page-gray py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-container px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-[32px]">
          Nuestras Instalaciones
        </h2>
        <p className="text-on-surface-variant">
          Un ambiente diseñado para su seguridad y comodidad.
        </p>
      </div>

      <div className="mx-auto grid max-w-container grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-6">
        {galleryPreview.map((item) => (
          <div
            key={item.src}
            className="group aspect-square overflow-hidden rounded-2xl shadow-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/galeria"
          className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Ver galería completa
        </Link>
      </div>
    </section>
  );
}
