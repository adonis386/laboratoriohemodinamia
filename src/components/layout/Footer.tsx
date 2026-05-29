import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-surface-container pt-16 pb-8">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-primary">{site.name}</h2>
          <p className="mb-8 text-on-surface-variant">
            Especialistas comprometidos con la salud de su corazón a través de la
            innovación y la empatía.
          </p>
          <div className="flex gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition hover:text-secondary"
              aria-label="Instagram"
            >
              <MaterialIcon name="public" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-primary transition hover:text-secondary"
              aria-label="Email"
            >
              <MaterialIcon name="mail" />
            </a>
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition hover:text-secondary"
              aria-label="WhatsApp"
            >
              <MaterialIcon name="map" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <h3 className="mb-2 text-sm font-bold text-primary">Secciones</h3>
            <Link href="/procedimientos" className="text-sm text-on-surface-variant hover:text-secondary">
              Procedimientos
            </Link>
            <Link href="/blog" className="text-sm text-on-surface-variant hover:text-secondary">
              Blog
            </Link>
            <Link href="/directorio" className="text-sm text-on-surface-variant hover:text-secondary">
              Directorio
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="mb-2 text-sm font-bold text-primary">Soporte</h3>
            <Link href="/galeria" className="text-sm text-on-surface-variant hover:text-secondary">
              Galería
            </Link>
            <Link href="/contacto" className="text-sm text-on-surface-variant hover:text-secondary">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-primary">Ubicación</h3>
          <p className="mb-4 text-sm text-on-surface-variant">{site.address}</p>
          <div className="flex h-32 items-center justify-center rounded-xl bg-surface-container-low">
            <MaterialIcon name="map" className="text-4xl text-primary opacity-50" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-container border-t border-ice-blue-deep px-4 pt-8 text-center md:px-6">
        <p className="text-sm text-on-surface-variant">
          Copyright © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
