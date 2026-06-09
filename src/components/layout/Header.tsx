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

  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base text-primary transition hover:bg-ice-blue-light 2xl:h-10 2xl:w-10 2xl:text-lg";



type NavLinkItem = (typeof navLinks)[number];



function NavLabel({ link }: { link: NavLinkItem }) {

  if (link.href === "/blog") {

    return (

      <>

        <span className="2xl:hidden">Blog</span>

        <span className="hidden 2xl:inline">{link.label}</span>

      </>

    );

  }



  if (link.href === "/contacto") {

    return (

      <>

        <span className="2xl:hidden">Contacto</span>

        <span className="hidden 2xl:inline">{link.label}</span>

      </>

    );

  }



  if (link.href === "/procedimientos") {

    return (

      <>

        <span className="xl:hidden">Proc.</span>

        <span className="hidden xl:inline 2xl:hidden">Procedim.</span>

        <span className="hidden 2xl:inline">{link.label}</span>

      </>

    );

  }



  return <>{link.label}</>;

}



export default function Header() {

  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);



  const isActive = (href: string) =>

    href === "/" ? pathname === "/" : pathname.startsWith(href);



  return (

    <header className="sticky top-0 z-[100] border-b border-ice-blue-deep bg-white shadow-sm">

      <nav className="mx-auto max-w-container px-4 md:px-6">

        <div className="flex min-h-[4.5rem] items-center justify-between gap-2 py-2 xl:min-h-20 xl:gap-4 xl:py-3">

          <MotionLink

            href="/"

            className="flex min-w-0 shrink items-center gap-2 sm:gap-3 xl:max-w-[min(100%,22rem)] 2xl:max-w-none 2xl:gap-4"

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

              className="h-12 w-auto shrink-0 object-contain sm:h-14 xl:h-16 2xl:h-24"

              priority

            />

            <div className="min-w-0 text-left">

              <p className="truncate text-[11px] font-bold uppercase leading-tight tracking-wide text-primary sm:text-xs xl:text-sm 2xl:text-base 2xl:tracking-wide">

                Laboratorio Hemodinamia HCC

              </p>

              <p className="mt-0.5 truncate text-center text-[10px] font-medium lowercase leading-tight text-on-surface-variant sm:text-[11px] xl:text-xs">

                {site.tagline}

              </p>

            </div>

          </MotionLink>



          <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 px-1 xl:flex 2xl:gap-4">

            {navLinks.map((link) => (

              <MotionLink

                key={link.href}

                href={link.href}

                className={`shrink-0 whitespace-nowrap text-[11px] uppercase tracking-normal xl:text-xs 2xl:text-sm 2xl:tracking-wide ${

                  isActive(link.href)

                    ? "border-b-2 border-primary pb-0.5 font-bold text-primary 2xl:pb-1"

                    : "text-on-surface-variant hover:text-primary"

                }`}

                {...navMotion}

              >

                <NavLabel link={link} />

              </MotionLink>

            ))}

          </div>



          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">

            <div className="hidden items-center gap-0.5 2xl:flex">

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

            </div>

            <MotionButton

              type="button"

              lightTap

              className="rounded-full p-2 text-primary xl:hidden"

              onClick={() => setMobileOpen(!mobileOpen)}

              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}

              aria-expanded={mobileOpen}

            >

              <MaterialIcon name={mobileOpen ? "close" : "menu"} />

            </MotionButton>

          </div>

        </div>

      </nav>



      {mobileOpen && (

        <div className="border-t border-ice-blue-deep bg-white px-4 py-4 xl:hidden">

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

          <div className="mt-4 flex items-center justify-center gap-2 border-t border-ice-blue-deep pt-4">

            <MotionLink

              href={site.social.instagram}

              target="_blank"

              rel="noopener noreferrer"

              className={`${socialIconClass} hover:text-[#E4405F]`}

              aria-label="Instagram"

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

              whileTap={interactiveTapLight}

              transition={interactiveSpring}

            >

              <FontAwesomeIcon icon={faWhatsapp} />

            </MotionLink>

          </div>

        </div>

      )}

    </header>

  );

}


