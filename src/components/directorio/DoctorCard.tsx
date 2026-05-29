import MaterialIcon from "@/components/ui/MaterialIcon";
import type { Doctor } from "@/lib/site";

type DoctorCardProps = {
  doctor: Doctor;
};

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="card-shadow card-shadow-hover flex h-full flex-col justify-between rounded-xl border border-ice-blue-deep bg-white p-6 transition-all duration-300">
      <div>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ice-blue-mid text-secondary">
          <MaterialIcon name="medical_services" className="text-4xl" />
        </div>
        <h3 className="mb-1 text-xl text-on-surface">
          <span className="font-extrabold uppercase tracking-tight">{doctor.lastName}</span>{" "}
          <span className="font-normal">{doctor.firstName}</span>
        </h3>
        <p className="mb-4 text-sm font-semibold text-secondary">Cardiólogo Hemodinamista</p>
        <div className="mb-6 flex items-center gap-2 text-sm text-on-surface-variant">
          <MaterialIcon name="call" className="text-sm" />
          <span>{doctor.phone}</span>
        </div>
      </div>
      <a
        href={`https://wa.me/${doctor.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white teal-gradient-bg transition hover:opacity-90"
      >
        <MaterialIcon name="chat" className="text-base" filled />
        WhatsApp
      </a>
    </div>
  );
}
