import Image from "next/image";
import Link from "next/link";

const directorioImage = "/DIRECTORIO_MEDICO.png";

export default function DoctorsPreview() {
  return (
    <section id="directorio" className="bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-container px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-[32px]">Directorio médico</h2>
        <p className="mx-auto max-w-2xl text-on-surface-variant">
          Información de contacto del cuerpo médico de alta especialidad.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Link
          href="/directorio"
          className="block overflow-hidden rounded-2xl border border-ice-blue-deep bg-white shadow-md transition hover:shadow-xl"
        >
          <Image
            src={directorioImage}
            alt="Directorio médico - ver listado completo"
            width={900}
            height={1200}
            quality={90}
            className="h-auto w-full"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </Link>
        <div className="mt-8 text-center">
          <Link
            href="/directorio"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Ver directorio completo
          </Link>
        </div>
      </div>
    </section>
  );
}
