import type { Metadata } from "next";
import ContactForm from "@/components/contacto/ContactForm";
import ContactHero from "@/components/contacto/ContactHero";
import ContactInfoSidebar from "@/components/contacto/ContactInfoSidebar";
import ContactMap from "@/components/contacto/ContactMap";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos en el Laboratorio Hemodinamia HCC. Agende su cita o consulte sobre procedimientos hemodinámicos en Caracas.",
};

export default function ContactoPage() {
  return (
    <main>
      <ContactHero />

      <section className="mx-auto max-w-container px-4 py-16 md:px-6 md:py-24">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <ContactInfoSidebar />
          </div>
          <ContactForm />
        </div>
      </section>

      <ContactMap />
    </main>
  );
}
