import Link from "next/link";
import DoctorCard from "@/components/directorio/DoctorCard";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { doctors } from "@/lib/site";

const previewCount = 3;

export default function DoctorsPreview() {
  const previewDoctors = doctors.slice(0, previewCount);

  return (
    <section id="directorio" className="bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-container px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-[32px]">Directorio médico</h2>
        <p className="mx-auto max-w-2xl text-on-surface-variant">
          Información de contacto del cuerpo médico de alta especialidad.
        </p>
      </div>

      <div className="mx-auto grid max-w-container grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
        {previewDoctors.map((doctor) => (
          <DoctorCard key={`${doctor.lastName}-${doctor.firstName}`} doctor={doctor} />
        ))}

        <div className="card-shadow flex h-full flex-col justify-between rounded-xl border border-ice-blue-deep bg-white p-6">
          <div>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ice-blue-mid text-primary">
              <MaterialIcon name="groups" className="text-4xl" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-on-surface">Ver directorio completo</h3>
            <p className="text-sm text-on-surface-variant">
              {doctors.length} cardiólogos hemodinamistas con contacto directo.
            </p>
          </div>
          <Link
            href="/directorio"
            className="mt-6 block w-full rounded-lg border-2 border-primary py-3 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            Ver lista
          </Link>
        </div>
      </div>
    </section>
  );
}
