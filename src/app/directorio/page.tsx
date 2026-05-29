import type { Metadata } from "next";
import DoctorCard from "@/components/directorio/DoctorCard";
import { doctors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Directorio",
  description: "Directorio médico del Laboratorio Hemodinamia HCC.",
};

export default function DirectorioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-ice-blue-mid">
      <div className="mx-auto max-w-container px-4 py-16 md:px-6 md:py-24">
        <section className="mb-12 text-center md:text-left">
          <h1 className="mb-2 text-4xl font-bold text-primary md:text-5xl">Directorio</h1>
          <p className="text-lg text-on-surface-variant">
            Información de contacto del cuerpo médico de alta especialidad.
          </p>
          <div className="mt-4 h-1 w-24 rounded-full teal-gradient-bg" />
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={`${doctor.lastName}-${doctor.firstName}`} doctor={doctor} />
          ))}
        </section>
      </div>
    </main>
  );
}
