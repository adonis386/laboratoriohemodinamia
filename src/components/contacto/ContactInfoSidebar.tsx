"use client";

import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MotionAnchor } from "@/components/motion/Pressable";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { interactiveSpring } from "@/lib/motion";
import { site } from "@/lib/site";

type ContactRowProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

function ContactRow({ icon, title, children }: ContactRowProps) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <MaterialIcon name={icon} className="text-2xl text-primary" />
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="mb-1 text-sm font-semibold text-on-surface">{title}</p>
        <div className="space-y-1 text-sm leading-relaxed text-on-surface-variant">{children}</div>
      </div>
    </li>
  );
}

export default function ContactInfoSidebar() {
  const { contact, social, phoneHref, phone } = site;

  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-2xl border border-ice-blue-deep bg-white shadow-sm">
        <div className="teal-gradient-bg px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
              <MaterialIcon name="support_agent" className="text-2xl text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white">Información de Contacto</h2>
          </div>
        </div>

        <ul className="space-y-6 p-6">
          <ContactRow icon="location_on" title="Dirección">
            <p>{contact.addressDetail}</p>
          </ContactRow>
          <ContactRow icon="call" title="Teléfonos">
            {contact.phones.map((p) => (
              <p key={p.href}>
                <a href={p.href} className="inline-flex items-center gap-1.5 hover:text-primary">
                  <MaterialIcon name="phone_in_talk" className="text-base opacity-70" />
                  {p.display}
                </a>
              </p>
            ))}
            <p>
              <a href={phoneHref} className="inline-flex items-center gap-1.5 hover:text-primary">
                <MaterialIcon name="smartphone" className="text-base opacity-70" />
                {phone}
              </a>
            </p>
          </ContactRow>
          <ContactRow icon="mail" title="Correo electrónico">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 break-all hover:text-primary"
            >
              <MaterialIcon name="alternate_email" className="text-base opacity-70" />
              {contact.email}
            </a>
          </ContactRow>
          <ContactRow icon="schedule" title="Horario de atención">
            <p className="flex items-start gap-1.5">
              <MaterialIcon name="event" className="mt-0.5 shrink-0 text-base opacity-70" />
              <span>{contact.schedule.weekdays}</span>
            </p>
            <p className="flex items-start gap-1.5 font-medium text-primary">
              <MaterialIcon name="emergency" className="mt-0.5 shrink-0 text-base" />
              <span>{contact.schedule.emergency}</span>
            </p>
          </ContactRow>
        </ul>

        <div className="border-t border-ice-blue-deep px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
            Acceso rápido
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <MotionAnchor
              href={phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-ice-blue-deep bg-ice-blue-light/50 px-3 py-2.5 text-sm font-semibold text-primary hover:bg-ice-blue-light"
              whileTap={{ scale: 0.96 }}
              transition={interactiveSpring}
            >
              <MaterialIcon name="call" className="text-lg" />
              Llamar
            </MotionAnchor>
            <MotionAnchor
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp-green px-3 py-2.5 text-sm font-semibold text-white shadow-sm"
              whileTap={{ scale: 0.96 }}
              transition={interactiveSpring}
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
              WhatsApp
            </MotionAnchor>
            <MotionAnchor
              href={`mailto:${contact.email}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-3 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10"
              whileTap={{ scale: 0.96 }}
              transition={interactiveSpring}
            >
              <MaterialIcon name="mail" className="text-lg" />
              Email
            </MotionAnchor>
          </div>
        </div>

        <div className="border-t border-ice-blue-deep px-6 py-5">
          <p className="mb-3 text-sm font-semibold text-on-surface-variant">Síguenos</p>
          <div className="flex gap-3">
            <MotionAnchor
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp-green text-lg text-white shadow-sm"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={interactiveSpring}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </MotionAnchor>
            <MotionAnchor
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-lg text-white shadow-sm"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={interactiveSpring}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </MotionAnchor>
            <MotionAnchor
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2] text-lg text-white shadow-sm"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={interactiveSpring}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </MotionAnchor>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-ice-blue-deep bg-ice-blue-light/60 p-5">
        <div className="flex gap-3">
          <MaterialIcon name="info" className="shrink-0 text-2xl text-secondary" />
          <p className="text-sm leading-relaxed text-on-surface-variant">
            Para urgencias cardiovasculares, comuníquese de inmediato con nuestro equipo o acuda al
            Hospital de Clínicas Caracas.
          </p>
        </div>
      </div>
    </aside>
  );
}
