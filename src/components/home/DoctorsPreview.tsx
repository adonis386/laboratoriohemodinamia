import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { featuredDoctors } from "@/lib/home-content";

export default function DoctorsPreview() {
  return (
    <section id="directorio" className="bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-container px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-[32px]">
          Nuestros Especialistas
        </h2>
        <p className="mx-auto max-w-2xl text-on-surface-variant">
          Un equipo de cardiólogos intervencionistas altamente capacitados y reconocidos
          internacionalmente.
        </p>
      </div>

      <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
        {featuredDoctors.map((doctor) => (
          <div
            key={doctor.name}
            className="group overflow-hidden rounded-2xl border border-ice-blue-deep bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden bg-page-gray">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
            <div className="p-6">
              <h4 className="mb-1 text-xl font-semibold text-on-surface">{doctor.name}</h4>
              <p className="mb-4 text-sm font-semibold text-secondary">{doctor.role}</p>
              <a
                href={`https://wa.me/${doctor.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp-green py-3 text-sm font-semibold text-white transition hover:bg-whatsapp-green/90"
              >
                <MaterialIcon name="call" className="text-sm" />
                WhatsApp
              </a>
            </div>
          </div>
        ))}

        <div className="group overflow-hidden rounded-2xl border border-ice-blue-deep bg-white shadow-sm transition hover:shadow-lg">
          <div className="flex aspect-square items-center justify-center bg-ice-blue-mid">
            <MaterialIcon name="groups" className="text-6xl text-primary" />
          </div>
          <div className="p-6">
            <h4 className="mb-1 text-xl font-semibold text-on-surface">Directorio Completo</h4>
            <p className="mb-4 text-sm text-on-surface-variant">
              Vea todos nuestros especialistas disponibles.
            </p>
            <Link
              href="/directorio"
              className="block w-full rounded-xl border-2 border-primary py-3 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Ver Lista
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
