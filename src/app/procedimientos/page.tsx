import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProceduresSection from "@/components/procedimientos/ProceduresSection";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Nuestros Procedimientos",
  description:
    "Nuestros procedimientos de hemodinamia y cardiología intervencionista en el Laboratorio Hemodinamia HCC.",
};

export default function ProcedimientosPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Nuestros Procedimientos" },
        ]}
      />

      <FadeIn>
        <ProceduresSection title="Nuestros Procedimientos" headingLevel="h1" />
      </FadeIn>
    </>
  );
}
