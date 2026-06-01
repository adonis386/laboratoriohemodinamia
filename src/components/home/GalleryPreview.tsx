import Link from "next/link";
import GalleryGrid from "@/components/galeria/GalleryGrid";
import { galleryPreview } from "@/lib/gallery-content";

export default function GalleryPreview() {
  return (
    <section id="galeria" className="bg-page-gray py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-container px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-[32px]">Galería de fotos</h2>
        <p className="text-on-surface-variant">
          Imágenes de nuestro laboratorio y equipamiento.
        </p>
      </div>

      <div className="mx-auto max-w-container px-4 md:px-6">
        <GalleryGrid
          images={galleryPreview}
          aspectClass="aspect-square"
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        />
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
