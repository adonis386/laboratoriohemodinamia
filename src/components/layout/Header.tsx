"use client";

import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-[100] h-20 border-b border-ice-blue-deep bg-white shadow-sm">
      <nav className="mx-auto flex h-full max-w-container items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label={site.name}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={80}
            height={80}
            className="h-16 w-16 object-contain md:h-[72px] md:w-[72px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base transition-colors ${
                isActive(link.href)
                  ? "border-b-2 border-primary pb-1 font-bold text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-xl text-primary transition hover:bg-ice-blue-light hover:text-[#E4405F] sm:block"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href={site.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-xl text-primary transition hover:bg-ice-blue-light hover:text-whatsapp-green sm:block"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <Link
            href="/contacto"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark md:flex"
          >
            <MaterialIcon name="local_hospital" className="text-base" />
            Agendar
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-primary lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <MaterialIcon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ice-blue-deep bg-white px-4 py-4 lg:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:bg-ice-blue-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
            >
              <MaterialIcon name="local_hospital" />
              Agendar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
