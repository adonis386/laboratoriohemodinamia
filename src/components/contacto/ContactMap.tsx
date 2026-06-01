"use client";

import Image from "next/image";
import { MotionAnchor } from "@/components/motion/Pressable";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { contactMap } from "@/lib/contacto-content";
import { site } from "@/lib/site";

const mapsDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Hospital+de+Clínicas+Caracas+San+Bernardino+Caracas";

export default function ContactMap() {
  const { mapImage, locationPin } = site.contact;

  return (
    <section className="w-full border-t border-ice-blue-deep bg-ice-blue-mid py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-container px-4 text-center md:px-6">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <MaterialIcon name="map" className="text-3xl text-primary" />
        </div>
        <h2 className="mb-2 text-3xl font-bold text-primary">{contactMap.title}</h2>
        <p className="mx-auto max-w-xl text-on-surface-variant">{contactMap.description}</p>
        <MotionAnchor
          href={mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
        >
          <MaterialIcon name="directions" className="text-lg" />
          Cómo llegar
        </MotionAnchor>
      </div>

      <div className="relative h-[420px] w-full overflow-hidden bg-page-gray shadow-inner md:h-[500px]">
        <Image
          src={mapImage}
          alt="Ubicación del Laboratorio Hemodinamia HCC en San Bernardino, Caracas"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex animate-bounce items-center gap-3 rounded-2xl border border-primary bg-white p-4 shadow-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <MaterialIcon name="location_on" className="text-2xl text-primary" filled />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold leading-tight text-primary">{locationPin.title}</p>
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
