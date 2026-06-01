import MaterialIcon from "@/components/ui/MaterialIcon";
import ProcedureMedia from "@/components/procedimientos/ProcedureMedia";
import type { ProcedureItem } from "@/lib/procedimientos-content";

type ProcedureBlockProps = {
  procedure: ProcedureItem;
};

export default function ProcedureBlock({ procedure }: ProcedureBlockProps) {
  const { id, number, title, description, image, video, bullets, quote, reverse, altBg } =
    procedure;

  return (
    <article
      id={id}
      className={`flex flex-col overflow-hidden rounded-xl border-l-4 border-primary shadow-sm transition hover:shadow-md lg:flex-row ${
        altBg ? "bg-ice-blue-mid" : "bg-white"
      } ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="flex flex-col justify-center p-6 md:p-8 lg:w-1/2">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white teal-gradient-bg">
            {number}
          </span>
          <h2 className="text-2xl font-semibold text-on-surface">{title}</h2>
        </div>
        <p className="mb-6 leading-relaxed text-on-surface-variant">{description}</p>
        {bullets && (
          <ul className="mb-6 space-y-2">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-2 text-on-surface-variant">
                <MaterialIcon name="check_circle" className="text-xl text-primary" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {quote && (
          <div className="rounded-lg border border-outline-variant/30 bg-page-gray p-4 italic text-on-surface-variant">
            {quote}
          </div>
        )}
      </div>

      <ProcedureMedia image={image} alt={title} video={video} />
    </article>
  );
}
