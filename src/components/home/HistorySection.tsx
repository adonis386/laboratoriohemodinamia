import Image from "next/image";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { historySection } from "@/lib/home-content";

export default function HistorySection() {
  return (
    <section className="bg-gradient-to-br from-ice-blue-light to-white py-16 md:py-24">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 md:px-6">
        <div className="rounded-2xl border border-ice-blue-deep bg-white p-8 shadow-sm md:p-10">
          <h2 className="mb-6 text-3xl font-bold text-primary md:text-[32px]">
            Nuestra Historia
          </h2>
          <div className="text-on-surface-variant">
            <p className="mb-4 leading-relaxed">
              El Laboratorio de Hemodinamia del HCC nació con la visión de transformar el
              cuidado cardiovascular en Venezuela. A través de décadas de dedicación, hemos
              sido pioneros en técnicas intervencionistas que salvan vidas diariamente.
            </p>
            <p className="mb-8 italic leading-relaxed">
              &ldquo;Nuestra prioridad siempre ha sido y será el bienestar del paciente,
              combinando la tecnología más avanzada con un trato profundamente humano y
              profesional.&rdquo;
            </p>
            <div className="flex items-center gap-4 border-t border-page-gray pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ice-blue-deep">
                <MaterialIcon name="person" className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-on-surface">Dr. Enrique Fermín M.</p>
                <p className="text-sm opacity-70">Director Médico LHHCC</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-inverse-surface">
          <Image
            src={historySection.videoPoster}
            alt="Video institucional del Laboratorio Hemodinamia HCC"
            fill
            className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <button
            type="button"
            className="relative z-10 rounded-full border border-white/50 bg-white/20 p-6 text-white backdrop-blur-lg transition hover:bg-white/40"
            aria-label="Reproducir video institucional"
          >
            <MaterialIcon name="play_arrow" className="text-4xl" filled />
          </button>
        </div>
      </div>
    </section>
  );
}
