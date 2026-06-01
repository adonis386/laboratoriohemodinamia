"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MotionAnchor } from "@/components/motion/Pressable";
import { interactiveSpring } from "@/lib/motion";
import { site } from "@/lib/site";

export default function WhatsAppWidget() {
  const message = encodeURIComponent(
    "Hola! Estamos atentos a tu solicitud para una mayor información…"
  );

  return (
    <MotionAnchor
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="whatsapp-pulse fixed bottom-8 right-8 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp-green text-white shadow-lg"
      whileHover={{ scale: 1.12, y: -4 }}
      whileTap={{ scale: 0.88 }}
      transition={interactiveSpring}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
    </MotionAnchor>
  );
}
