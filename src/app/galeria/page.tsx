import type { Metadata } from "next";
import Image from "next/image";
import { galleryPreview } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Galería",
  description: "Instalaciones y equipamiento del Laboratorio Hemodinamia HCC.",
};

export default function GaleriaPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ice-blue-light to-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 text-center md:px-6">
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Galería</h1>
          <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
            Conoce nuestras instalaciones y equipamiento de última generación.
          </p>
        </div>
      </section>

      <section className="bg-page-gray py-16 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
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
      </section>
    </>
  );
}
