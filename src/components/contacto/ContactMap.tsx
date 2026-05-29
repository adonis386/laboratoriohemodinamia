import Image from "next/image";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { contactMap } from "@/lib/contacto-content";
import { site } from "@/lib/site";

export default function ContactMap() {
  const { mapImage, locationPin } = site.contact;

  return (
    <section className="w-full border-t border-ice-blue-deep bg-ice-blue-mid py-16 md:py-24">
      <div className="mx-auto mb-8 max-w-container px-4 text-center md:px-6">
        <h2 className="mb-2 text-3xl font-bold text-primary">{contactMap.title}</h2>
        <p className="text-on-surface-variant">{contactMap.description}</p>
      </div>

      <div className="relative h-[500px] w-full overflow-hidden bg-page-gray shadow-inner">
        <Image
          src={mapImage}
          alt="Ubicación del Laboratorio Hemodinamia HCC en San Bernardino, Caracas"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex animate-bounce items-center gap-3 rounded-xl border border-primary bg-white p-4 shadow-xl">
            <MaterialIcon name="location_on" className="text-2xl text-primary" />
            <div className="text-left">
              <p className="text-sm font-semibold leading-tight text-primary-dark">
                {locationPin.title}
              </p>
              <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant">
                {locationPin.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
