import Link from "next/link";
import { site } from "@/lib/site";

const menuLinks = [
  { href: "/procedimientos", label: "Procedimientos" },
  { href: "/blog", label: "Blog LHHCC" },
  { href: "/directorio", label: "Directorio Médico" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contáctanos" },
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-primary text-white">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-3">
        <div>
          <h2 className="mb-4 text-xl font-bold uppercase tracking-wide">{site.name}</h2>
          <p className="text-sm leading-relaxed text-white/80">{site.address}</p>
          <p className="mt-3 text-sm text-white/80">
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-white/80">
            <a href={`mailto:${site.contact.email}`} className="hover:text-white">
              {site.contact.email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Menú</h3>
          <nav className="flex flex-col gap-2">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/85 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/politica-privacidad"
              className="text-sm text-white/85 transition hover:text-white"
            >
              Política de privacidad y aviso legal
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Horario</h3>
          <p className="text-sm text-white/85">{site.schedule.weekdays}</p>
          <p className="mt-1 text-sm text-white/85">{site.schedule.saturday}</p>
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="px-4 py-6 text-center text-xs text-white/75 md:text-sm">
          {site.copyright}
        </p>
      </div>
    </footer>
  );
}
