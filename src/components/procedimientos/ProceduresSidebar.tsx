"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { sidebarLinks } from "@/lib/procedimientos-content";

export default function ProceduresSidebar() {
  const [activeId, setActiveId] = useState(sidebarLinks[0]?.id ?? "");

  useEffect(() => {
    const sections = document.querySelectorAll("article[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveId(id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-28 hidden h-fit w-72 space-y-4 md:block">
      <div className="rounded-xl border border-ice-blue-deep bg-white p-6 shadow-sm">
        <h3 className="mb-4 px-2 text-sm font-semibold uppercase tracking-wider text-primary-dark">
          Contenido
        </h3>
        <ul className="space-y-1">
          {sidebarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className={`block rounded-lg border-l-2 px-4 py-2 text-sm transition-all ${
                  activeId === link.id
                    ? "border-primary bg-ice-blue-light text-primary"
                    : "border-transparent text-on-surface-variant hover:border-primary hover:bg-ice-blue-light hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="teal-gradient-bg rounded-xl p-6 text-white shadow-md">
        <MaterialIcon name="calendar_month" className="mb-2 text-3xl" />
        <p className="mb-2 text-xl font-semibold">¿Necesita una cita?</p>
        <p className="mb-4 text-sm opacity-90">
          Agende su procedimiento con nuestros especialistas.
        </p>
        <Link
          href="/contacto"
          className="block w-full rounded-lg bg-white py-2 text-center font-bold text-primary transition active:scale-95"
        >
          Contactar Ahora
        </Link>
      </div>
    </aside>
  );
}
