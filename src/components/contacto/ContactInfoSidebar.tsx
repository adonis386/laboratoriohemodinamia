"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
    <aside className="lg:sticky lg:top-28">
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
          <ContactRow icon="call" title="Teléfono">
            <a href={phoneHref} className="inline-flex items-center gap-1.5 hover:text-primary">
              <MaterialIcon name="smartphone" className="text-base opacity-70" />
              {phone}
            </a>
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
          </ContactRow>
        </ul>

        <div className="flex justify-center border-t border-ice-blue-deep px-6 py-6">
          <MotionAnchor
            href={social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp-green text-2xl text-white shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={interactiveSpring}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </MotionAnchor>
        </div>
      </div>
    </aside>
  );
}
