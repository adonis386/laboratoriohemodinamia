import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProceduresSection from "@/components/procedimientos/ProceduresSection";
import FadeIn from "@/components/motion/FadeIn";

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

      <FadeIn>
        <ProceduresSection title="Procedimientos" headingLevel="h1" />
      </FadeIn>
    </>
  );
}
