import MaterialIcon from "@/components/ui/MaterialIcon";
import { site } from "@/lib/site";

export default function ContactInfoSidebar() {
  const { contact, social } = site;

  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <div className="rounded-xl border border-ice-blue-deep bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-primary">Información de Contacto</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <div className="flex items-center justify-center rounded-lg bg-ice-blue-light p-2">
              <MaterialIcon name="location_on" className="text-secondary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">Dirección</p>
              <p className="text-on-surface-variant">{contact.addressDetail}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex items-center justify-center rounded-lg bg-ice-blue-light p-2">
              <MaterialIcon name="call" className="text-secondary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">Teléfonos</p>
              {contact.phones.map((phone) => (
                <p key={phone.href} className="text-on-surface-variant">
                  <a href={phone.href} className="hover:text-primary">
                    {phone.display}
                  </a>
                </p>
              ))}
              <p className="mt-1 text-on-surface-variant">
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phone}
                </a>
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex items-center justify-center rounded-lg bg-ice-blue-light p-2">
              <MaterialIcon name="mail" className="text-secondary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">Correo Electrónico</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-on-surface-variant hover:text-primary"
              >
                {contact.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex items-center justify-center rounded-lg bg-ice-blue-light p-2">
              <MaterialIcon name="schedule" className="text-secondary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">Horario de Atención</p>
              <p className="text-on-surface-variant">{contact.schedule.weekdays}</p>
              <p className="text-on-surface-variant">{contact.schedule.emergency}</p>
            </div>
          </li>
        </ul>

        <div className="mt-8 border-t border-ice-blue-deep pt-6">
          <p className="mb-3 text-sm font-semibold text-on-surface-variant">Síguenos</p>
          <div className="flex gap-3">
            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp-green text-white shadow-sm transition hover:scale-110"
            >
              <MaterialIcon name="chat" filled />
            </a>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm transition hover:scale-110"
            >
              <MaterialIcon name="photo_camera" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white shadow-sm transition hover:scale-110"
            >
              <MaterialIcon name="work" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
