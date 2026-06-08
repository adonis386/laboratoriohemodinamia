import type { Metadata } from "next";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { legalSections } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Política de privacidad y aviso legal",
  description:
    "Políticas de privacidad, aviso legal y políticas de cookies del Laboratorio Hemodinamia HCC.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main>
      <section className="teal-gradient-bg px-4 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-container md:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">
            Políticas, Privacidad y Aviso Legal
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="space-y-10 rounded-2xl border border-ice-blue-deep bg-white p-8 shadow-sm md:p-12">
          {legalSections.map((section, index) => (
            <article key={index} className="space-y-4">
              {"intro" in section && (
                <p className="leading-relaxed text-on-surface-variant">{section.intro}</p>
              )}
              {"title" in section && (
                <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
              )}
              {"paragraphs" in section &&
                section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="leading-relaxed text-on-surface-variant">
                    {p}
                  </p>
                ))}
              {"subsections" in section &&
                section.subsections?.map((sub) => (
                  <div key={sub.title} className="space-y-3">
                    <h3 className="text-lg font-semibold text-on-surface">{sub.title}</h3>
                    {"items" in sub &&
                      sub.items?.map((item) => (
                        <p key={item} className="leading-relaxed text-on-surface-variant">
                          • {item}
                        </p>
                      ))}
                    {"paragraphs" in sub &&
                      sub.paragraphs?.map((p) => (
                        <p key={p.slice(0, 40)} className="leading-relaxed text-on-surface-variant">
                          {p}
                        </p>
                      ))}
                  </div>
                ))}
              {"closing" in section && section.closing && (
                <p className="leading-relaxed text-on-surface-variant">{section.closing}</p>
              )}
            </article>
          ))}

          <p className="border-t border-ice-blue-deep pt-6 text-on-surface-variant">
            <strong>Atención:</strong> Si tienes alguna pregunta sobre nuestras políticas o el
            manejo de tu información, no dudes en contactarnos a través de los canales indicados en
            nuestro sitio web
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            <MaterialIcon name="arrow_back" className="text-base" />
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
