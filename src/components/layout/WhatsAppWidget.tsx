import { site } from "@/lib/site";

export default function WhatsAppWidget() {
  const message = encodeURIComponent(
    "Hola! Estamos atentos a tu solicitud para una mayor información…"
  );

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="whatsapp-pulse fixed bottom-8 right-8 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp-green text-white shadow-lg transition hover:scale-110"
    >
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    </a>
  );
}
