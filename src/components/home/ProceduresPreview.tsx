import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { proceduresPreview } from "@/lib/home-content";

export default function ProceduresPreview() {
  return (
    <section
      id="procedimientos"
      className="relative flex min-h-[600px] items-center py-16 md:py-24"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={proceduresPreview.background}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-deep/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-container flex-col gap-12 px-4 md:px-6 lg:flex-row">
        <div className="relative hidden aspect-[9/16] w-full overflow-hidden rounded-2xl border-4 border-white/10 bg-black lg:block lg:w-1/3">
          <Image
            src={proceduresPreview.videoPoster}
            alt="Video de procedimientos de hemodinamia"
            fill
            className="object-cover opacity-60"
            sizes="33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <MaterialIcon name="videocam" className="text-6xl text-white opacity-80" />
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-[32px]">Procedimientos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proceduresPreview.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-card rounded-xl p-6 transition hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container text-white">
                  <MaterialIcon name={item.icon} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-on-surface-variant">{item.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 lg:hidden">
            <Link
              href="/procedimientos"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Ver todos los procedimientos
              <MaterialIcon name="arrow_forward" className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
