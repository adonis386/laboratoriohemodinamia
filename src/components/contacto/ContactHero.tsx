import { contactHero } from "@/lib/contacto-content";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden teal-gradient-bg py-16 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-ice-blue-light blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-secondary-container blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-container px-4 text-center md:px-6 md:text-left">
        <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">{contactHero.title}</h1>
        <p className="mx-auto max-w-2xl text-lg text-on-primary-container opacity-90 md:mx-0">
          {contactHero.subtitle}
        </p>
      </div>
    </section>
  );
}
