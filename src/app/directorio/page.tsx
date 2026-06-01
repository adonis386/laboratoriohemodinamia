import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Directorio médico",
  description: "Directorio médico del Laboratorio Hemodinamia HCC.",
};

const directorioImage = "/DIRECTORIO_MEDICO.png";

export default function DirectorioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-ice-blue-mid">
      <div className="mx-auto max-w-container px-4 py-16 md:px-6 md:py-24">
        <section className="mb-10 text-center md:text-left">
          <h1 className="mb-2 text-4xl font-bold text-primary md:text-5xl">Directorio médico</h1>
          <p className="text-lg text-on-surface-variant">
            Información de contacto del cuerpo médico de alta especialidad.
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full teal-gradient-bg md:mx-0" />
        </section>

        <section className="overflow-hidden rounded-2xl border border-ice-blue-deep bg-white shadow-lg">
          <Image
            src={directorioImage}
            alt="Directorio médico del Laboratorio Hemodinamia HCC con nombres y teléfonos del cuerpo médico"
            width={1280}
            height={1800}
            quality={90}
            priority
            className="h-auto w-full"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </section>
      </div>
    </main>
  );
}
