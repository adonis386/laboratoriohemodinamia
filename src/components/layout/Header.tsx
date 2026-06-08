"use client";

import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MotionButton, MotionLink } from "@/components/motion/Pressable";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { interactiveSpring, interactiveTapLight } from "@/lib/motion";
import { navLinks, site } from "@/lib/site";

const navMotion = {
  whileHover: { scale: 1.06, y: -1 },
  whileTap: interactiveTapLight,
  transition: interactiveSpring,
};

const socialIconClass =
  "flex h-10 w-10 items-center justify-center rounded-full text-lg text-primary transition hover:bg-ice-blue-light";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-[100] border-b border-ice-blue-deep bg-white shadow-sm">
      <nav className="mx-auto max-w-container px-4 md:px-6">
        <div className="flex h-auto min-h-20 flex-wrap items-center justify-between gap-3 py-3 lg:flex-nowrap lg:gap-6">
          <MotionLink
            href="/"
            className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4 lg:flex-none"
            aria-label={site.name}
            whileHover={{ scale: 1.02 }}
            whileTap={interactiveTapLight}
            transition={interactiveSpring}
          >
            <Image
              src="/logo.png"
              alt={site.name}
              width={120}
              height={120}
              className="h-16 w-auto shrink-0 object-contain sm:h-20 md:h-24"
              priority
            />
            <div className="hidden min-w-0 text-left sm:block">
              <p className="text-sm font-bold uppercase leading-tight tracking-wide text-primary md:text-base lg:text-lg">
                Laboratorio Hemodinamia HCC
              </p>
              <p className="mt-0.5 text-xs font-medium lowercase text-on-surface-variant md:text-sm">
                {site.tagline}
              </p>
            </div>
          </MotionLink>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <MotionLink
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wide ${
                  isActive(link.href)
                    ? "border-b-2 border-primary pb-1 font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                {...navMotion}
              >
                {link.label}
              </MotionLink>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <MotionLink
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialIconClass} hover:text-[#E4405F]`}
              aria-label="Instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={interactiveTapLight}
              transition={interactiveSpring}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </MotionLink>
            <MotionLink
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialIconClass} hover:text-[#0A66C2]`}
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={interactiveTapLight}
              transition={interactiveSpring}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </MotionLink>
            <MotionLink
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialIconClass} hover:text-[#FF0000]`}
              aria-label="YouTube"
              whileHover={{ scale: 1.1 }}
              whileTap={interactiveTapLight}
              transition={interactiveSpring}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </MotionLink>
            <MotionLink
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialIconClass} hover:text-whatsapp-green`}
              aria-label="WhatsApp"
              whileHover={{ scale: 1.1 }}
              whileTap={interactiveTapLight}
              transition={interactiveSpring}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </MotionLink>
            <MotionButton
              type="button"
              lightTap
              className="rounded-full p-2 text-primary lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <MaterialIcon name={mobileOpen ? "close" : "menu"} />
            </MotionButton>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ice-blue-deep bg-white px-4 py-4 lg:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <MotionLink
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:bg-ice-blue-light"
                }`}
                whileTap={{ scale: 0.97, x: 4 }}
                transition={interactiveSpring}
              >
                {link.label}
              </MotionLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
