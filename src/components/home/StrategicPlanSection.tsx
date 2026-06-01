import Image from "next/image";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { strategicPlan } from "@/lib/home-content";

export default function StrategicPlanSection() {
  return (
    <section className="bg-primary-container py-16 text-on-primary-container md:py-24">
      <div className="mx-auto flex max-w-container flex-col items-center gap-12 px-4 md:flex-row md:px-6">
        <div className="w-full overflow-hidden rounded-2xl shadow-xl md:w-1/2">
          <Image
            src={strategicPlan.image}
            alt="Especialistas del Laboratorio Hemodinamia HCC revisando imágenes coronarias en hemodinamia"
            width={800}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold md:text-[32px] md:leading-10">
            Plan Estratégico
          </h2>
          <p className="mb-8 text-lg leading-relaxed opacity-90">
            Nuestra misión se fundamenta en la excelencia técnica y la empatía humana.
            Especializados en cateterismo y cardiología intervencionista, implementamos
            tecnologías de vanguardia para garantizar diagnósticos precisos y tratamientos
            mínimamente invasivos.
          </p>
          <ul className="space-y-4">
            {strategicPlan.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <MaterialIcon name="check_circle" className="text-secondary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
