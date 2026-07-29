import type { Metadata } from "next";
import GalleryGrid from "@/components/galeria/GalleryGrid";
import { galleryImages } from "@/lib/gallery-content";

export const metadata: Metadata = {
  title: "Galería LHHCC",
  description: "Instalaciones y equipamiento del Laboratorio Hemodinamia HCC.",
};

export default function GaleriaPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ice-blue-light to-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 text-center md:px-6">
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Galería LHHCC</h1>
        </div>
      </section>

      <section className="bg-page-gray py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
