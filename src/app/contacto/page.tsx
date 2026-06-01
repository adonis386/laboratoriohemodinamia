import type { Metadata } from "next";
import ContactForm from "@/components/contacto/ContactForm";
import ContactHero from "@/components/contacto/ContactHero";
import ContactInfoSidebar from "@/components/contacto/ContactInfoSidebar";
import ContactMap from "@/components/contacto/ContactMap";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos en el Laboratorio Hemodinamia HCC. Agende su cita o consulte sobre procedimientos hemodinámicos en Caracas.",
};

export default function ContactoPage() {
  return (
    <main>
      <ContactHero />

      <section className="bg-gradient-to-b from-ice-blue-light/80 to-white py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeIn>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <ContactInfoSidebar />
              </div>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactMap />
    </main>
  );
}
