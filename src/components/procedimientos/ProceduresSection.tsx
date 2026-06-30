import ProcedureBlock from "@/components/procedimientos/ProcedureBlock";
import ProceduresSidebar from "@/components/procedimientos/ProceduresSidebar";
import FadeInStagger, { FadeInItem } from "@/components/motion/FadeInStagger";
import { proceduresIntro, proceduresList } from "@/lib/procedimientos-content";

type ProceduresSectionProps = {
  id?: string;
  title?: string;
  headingLevel?: "h1" | "h2";
};

export default function ProceduresSection({
  id,
  title = "Procedimientos",
  headingLevel = "h2",
}: ProceduresSectionProps) {
  const Heading = headingLevel;

  return (
    <section id={id} className="bg-gradient-to-b from-ice-blue-light to-white">
      <div className="mx-auto max-w-container px-4 py-16 text-center md:px-6 md:py-24">
        <Heading className="mb-4 text-3xl font-bold text-primary md:text-5xl">{title}</Heading>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-on-surface-variant">
          {proceduresIntro}
        </p>
      </div>

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
    </section>
  );
}
