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
import { useEffect, useState } from "react";
import { MotionLink } from "@/components/motion/Pressable";
import { interactiveSpring, interactiveTapLight } from "@/lib/motion";
import { navLinks, site } from "@/lib/site";

const navMotion = {
  whileHover: { scale: 1.06, y: -1 },
  whileTap: interactiveTapLight,
  transition: interactiveSpring,
};

const socialIconClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base text-primary transition hover:bg-ice-blue-light";

const socialLinks = [
  {
    href: site.social.instagram,
    label: "Instagram",
    icon: faInstagram,
    hoverClass: "hover:text-[#E4405F]",
  },
  {
    href: site.social.linkedin,
    label: "LinkedIn",
    icon: faLinkedin,
    hoverClass: "hover:text-[#0A66C2]",
  },
  {
    href: site.social.youtube,
    label: "YouTube",
    icon: faYoutube,
    hoverClass: "hover:text-[#FF0000]",
  },
  {
    href: site.social.whatsapp,
    label: "WhatsApp",
    icon: faWhatsapp,
    hoverClass: "hover:text-whatsapp-green",
  },
] as const;

const SCROLL_THRESHOLD = 32;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.getBoundingClientRect().height}px`
      );
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const isTransparent = scrolled;

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        isTransparent
          ? "border-b border-white/25 bg-white/45 shadow-none backdrop-blur-sm"
          : "border-b border-ice-blue-deep bg-white/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto max-w-container px-4 md:px-6">
        <div className="flex flex-col items-center py-3 md:py-4">
          <MotionLink
            href="/"
            className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4"
            aria-label={site.name}
            whileHover={{ scale: 1.02 }}
            whileTap={interactiveTapLight}
            transition={interactiveSpring}
          >
            <Image
              src="/logo2.png"
              alt={site.name}
              width={120}
              height={120}
              className="h-14 w-auto shrink-0 object-contain sm:h-16 md:h-20"
              priority
            />
            <div className="text-center">
              <p className="text-sm font-bold uppercase leading-tight tracking-wide text-primary sm:text-base md:text-lg">
                Laboratorio Hemodinamia HCC
              </p>
              <p className="mt-0.5 text-xs font-medium lowercase leading-tight text-on-surface-variant sm:text-sm">
                {site.tagline}
              </p>
            </div>
          </MotionLink>
        </div>

        <div
          className={`border-t pb-3 pt-2 transition-colors duration-300 md:pb-4 md:pt-3 ${
            isTransparent ? "border-white/30" : "border-ice-blue-deep/60"
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4 md:gap-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <MotionLink
                    href={link.href}
                    className={`inline-block whitespace-nowrap text-[11px] uppercase tracking-wide sm:text-xs md:text-sm ${
                      isActive(link.href)
                        ? "border-b-2 border-primary pb-0.5 font-bold text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                    {...navMotion}
                  >
                    {link.label}
                  </MotionLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center gap-1 sm:gap-2">
              {socialLinks.map((social) => (
                <MotionLink
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialIconClass} ${social.hoverClass}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={interactiveTapLight}
                  transition={interactiveSpring}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </MotionLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

