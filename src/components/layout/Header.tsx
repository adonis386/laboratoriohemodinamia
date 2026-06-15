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
import { useCallback, useEffect, useState } from "react";
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
  "flex shrink-0 items-center justify-center rounded-full text-primary transition hover:bg-ice-blue-light";

const socialIconSizes = {
  compact: "h-8 w-8 text-sm",
  default: "h-9 w-9 text-base",
} as const;

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
const HEADER_HIDE_DELAY_MS = 5000;
const HEADER_REVEAL_ZONE_PX = 88;

function isNearTop(clientY: number) {
  return clientY <= HEADER_REVEAL_ZONE_PX;
}

function NavLinks({
  isActive,
  onNavigate,
  className,
  variant = "inline",
}: {
  isActive: (href: string) => boolean;
  onNavigate?: () => void;
  className?: string;
  variant?: "inline" | "stack";
}) {
  const linkClass =
    variant === "stack"
      ? "block w-full rounded-lg px-3 py-2.5 text-sm"
      : "inline-block whitespace-nowrap text-[11px] uppercase tracking-wide sm:text-xs lg:text-sm";

  return (
    <ul className={className}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <MotionLink
            href={link.href}
            onClick={onNavigate}
            className={`${linkClass} ${
              isActive(link.href)
                ? variant === "stack"
                  ? "bg-primary/10 font-bold text-primary"
                  : "border-b-2 border-primary pb-0.5 font-bold text-primary lg:pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
            {...navMotion}
          >
            {link.label}
          </MotionLink>
        </li>
      ))}
    </ul>
  );
}

function SocialLinks({
  className,
  size = "default",
}: {
  className?: string;
  size?: keyof typeof socialIconSizes;
}) {
  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <MotionLink
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialIconClass} ${socialIconSizes[size]} ${social.hoverClass}`}
          aria-label={social.label}
          whileHover={{ scale: 1.1 }}
          whileTap={interactiveTapLight}
          transition={interactiveSpring}
        >
          <FontAwesomeIcon icon={social.icon} />
        </MotionLink>
      ))}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const revealHeader = useCallback(() => {
    setHeaderHidden(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (headerHidden) {
      setMobileOpen(false);
    }
  }, [headerHidden]);

  useEffect(() => {
    if (!isHome) {
      setHeaderHidden(false);
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      return;
    }

    setHeaderHidden(false);
    const hideTimer = window.setTimeout(() => {
      setHeaderHidden(true);
    }, HEADER_HIDE_DELAY_MS);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > SCROLL_THRESHOLD);

      if (y > SCROLL_THRESHOLD) {
        setHeaderHidden(true);
        setMobileOpen(false);
      } else if (y <= 8) {
        setHeaderHidden(false);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (isNearTop(event.clientY)) {
        revealHeader();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch && isNearTop(touch.clientY)) {
        revealHeader();
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      window.clearTimeout(hideTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, [isHome, revealHeader]);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const syncHeaderHeight = () => {
      if (isHome && headerHidden) {
        document.documentElement.style.setProperty("--site-header-height", "0px");
        return;
      }

      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.getBoundingClientRect().height}px`
      );
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, [isHome, headerHidden, mobileOpen]);

  const isTransparent = scrolled;
  const isHiddenOnHome = isHome && headerHidden;

  return (
    <>
      {isHiddenOnHome && (
        <>
          <div
            className="fixed top-0 z-[101] h-16 w-full touch-manipulation lg:h-4"
            onMouseEnter={revealHeader}
            onTouchStart={revealHeader}
            aria-hidden
          />
          <button
            type="button"
            onClick={revealHeader}
            className="fixed top-3 right-3 z-[102] flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/90 text-primary shadow-lg backdrop-blur-sm touch-manipulation"
            aria-label="Mostrar menú"
          >
            <MaterialIcon name="menu" className="text-2xl" />
          </button>
        </>
      )}

      <header
        className={`fixed top-0 z-[100] w-full transition-[transform,background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
          isHiddenOnHome
            ? "-translate-y-full pointer-events-none"
            : "translate-y-0 pointer-events-auto"
        } ${
          isTransparent
            ? "border-b border-white/25 bg-white/45 shadow-none backdrop-blur-sm"
            : "border-b border-ice-blue-deep bg-white/95 shadow-sm backdrop-blur-md"
        }`}
        onMouseEnter={revealHeader}
      >
        <nav className="mx-auto max-w-container px-4 md:px-6">
          {/* Móvil / tablet: logo + redes + menú */}
          <div className="flex items-center gap-2 py-2 lg:hidden">
            <MotionLink
              href="/"
              className="flex min-w-0 flex-1 items-center gap-2.5"
              aria-label={site.name}
              whileTap={interactiveTapLight}
              transition={interactiveSpring}
            >
              <Image
                src="/logo2.png"
                alt={site.name}
                width={96}
                height={96}
                className="h-14 w-auto shrink-0 object-contain sm:h-16"
                priority
              />
              <div className="min-w-0 text-left">
                <p className="truncate text-[11px] font-bold uppercase leading-tight tracking-wide text-primary sm:text-xs">
                  Laboratorio Hemodinamia HCC
                </p>
                <p className="truncate text-[10px] font-medium text-on-surface-variant sm:text-[11px]">
                  {site.tagline}
                </p>
              </div>
            </MotionLink>

            <SocialLinks className="flex shrink-0 items-center gap-0.5" size="compact" />

            <MotionButton
              type="button"
              lightTap
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-primary"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              <MaterialIcon name={mobileOpen ? "close" : "menu"} className="text-2xl" />
            </MotionButton>
          </div>

          {mobileOpen && (
            <div
              className={`border-t pb-4 pt-3 lg:hidden ${
                isTransparent ? "border-white/30" : "border-ice-blue-deep/60"
              }`}
            >
              <NavLinks
                isActive={isActive}
                onNavigate={closeMobileMenu}
                variant="stack"
                className="flex flex-col gap-1"
              />
            </div>
          )}

          {/* Desktop: logo + título centrados, redes a la derecha */}
          <div className="relative hidden items-center justify-center py-3 md:py-4 lg:flex">
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
                width={160}
                height={160}
                className="h-20 w-auto shrink-0 object-contain md:h-24 lg:h-28"
                priority
              />
              <div className="text-center">
                <p className="text-base font-bold uppercase leading-tight tracking-wide text-primary md:text-lg">
                  Laboratorio Hemodinamia HCC
                </p>
                <p className="mt-0.5 text-sm font-medium leading-tight text-on-surface-variant">
                  {site.tagline}
                </p>
              </div>
            </MotionLink>

            <SocialLinks className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-1" />
          </div>

          <div
            className={`hidden border-t pb-3 pt-2 transition-colors duration-300 md:pb-4 md:pt-3 lg:block ${
              isTransparent ? "border-white/30" : "border-ice-blue-deep/60"
            }`}
          >
            <NavLinks
              isActive={isActive}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6"
            />
          </div>
        </nav>
      </header>
    </>
  );
}
