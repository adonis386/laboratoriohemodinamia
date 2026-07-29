"use client";

import { MotionAnchor } from "@/components/motion/Pressable";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { contactMap } from "@/lib/contacto-content";
import { site } from "@/lib/site";

const mapsQuery = "Hospital+de+Cl%C3%ADnicas+Caracas+San+Bernardino+Caracas";
const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`;

export default function ContactMap() {
  const { locationPin } = site.contact;

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
        <iframe
          title="Ubicación del Laboratorio Hemodinamia HCC en San Bernardino, Caracas"
          src={mapsEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-primary bg-white p-4 shadow-xl">
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
