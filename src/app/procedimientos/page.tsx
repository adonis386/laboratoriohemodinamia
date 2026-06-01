import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProcedureBlock from "@/components/procedimientos/ProcedureBlock";
import ProceduresSidebar from "@/components/procedimientos/ProceduresSidebar";
import FadeIn from "@/components/motion/FadeIn";
import FadeInStagger, { FadeInItem } from "@/components/motion/FadeInStagger";
import { proceduresList } from "@/lib/procedimientos-content";

export const metadata: Metadata = {
  title: "Procedimientos",
  description:
    "Procedimientos de hemodinamia y cardiología intervencionista en el Laboratorio Hemodinamia HCC.",
};

export default function ProcedimientosPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Procedimientos" },
        ]}
      />

      <FadeIn as="section" className="bg-gradient-to-b from-ice-blue-light to-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 text-center md:px-6">
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Procedimientos</h1>
          <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
            Tecnología de vanguardia y especialistas altamente calificados para el
            diagnóstico y tratamiento de enfermedades cardiovasculares con la máxima
            precisión.
          </p>
        </div>
      </FadeIn>

      <div className="relative mx-auto flex max-w-container flex-col gap-6 px-4 pb-16 md:flex-row md:gap-6 md:px-6 md:pb-24">
        <ProceduresSidebar />
        <FadeInStagger className="flex flex-1 flex-col space-y-6" stagger={0.16}>
          {proceduresList.map((procedure) => (
            <FadeInItem key={procedure.id}>
              <ProcedureBlock procedure={procedure} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </>
  );
}
