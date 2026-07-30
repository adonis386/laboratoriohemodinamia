"use client";

import { useState } from "react";
import { MotionButton } from "@/components/motion/Pressable";
import ContactField, { contactInputClass } from "@/components/contacto/ContactField";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { interactiveSpring } from "@/lib/motion";
import { formspreeEndpoint, subjectOptions } from "@/lib/contacto-content";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitState === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitState("sending");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Formspree rejected the submission");
      }

      setSubmitState("success");
      form.reset();
      setTimeout(() => setSubmitState("idle"), 4000);
    } catch {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 5000);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-ice-blue-deep bg-white shadow-sm lg:col-span-8">
      <div className="border-b border-ice-blue-deep bg-ice-blue-light/40 px-6 py-5 md:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <MaterialIcon name="edit_note" className="text-3xl text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-on-surface">Envíanos un mensaje</h3>
            <p className="mt-1 text-sm text-on-surface-variant">
              Complete el formulario y le responderemos a la brevedad
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-8">
        <ContactField id="name" label="Nombre completo" icon="person">
          <input
            id="name"
            name="name"
            type="text"
            required
            className={contactInputClass}
            placeholder="Ej. Juan Pérez"
          />
        </ContactField>

        <ContactField id="email" label="Correo electrónico" icon="mail">
          <input
            id="email"
            name="email"
            type="email"
            required
            className={contactInputClass}
            placeholder="ejemplo@correo.com"
          />
        </ContactField>

        <ContactField id="phone" label="Teléfono" icon="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            className={contactInputClass}
            placeholder="+58 4XX XXXXXXX"
          />
        </ContactField>

        <ContactField id="subject" label="Asunto" icon="topic">
          <select
            id="subject"
            name="subject"
            required
            className={`${contactInputClass} appearance-none`}
            defaultValue=""
          >
            {subjectOptions.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
          <MaterialIcon
            name="expand_more"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
            aria-hidden
          />
        </ContactField>

        <ContactField
          id="message"
          label="Mensaje"
          icon="chat"
          className="md:col-span-2"
          iconTop
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`${contactInputClass} resize-none pt-3`}
            placeholder="¿En qué podemos ayudarle?"
          />
        </ContactField>

        <div className="md:col-span-2 space-y-3">
          {submitState === "error" && (
            <p className="text-sm text-red-600" role="alert">
              No se pudo enviar el mensaje. Intente de nuevo o escríbanos a infolhhcc@gmail.com.
            </p>
          )}
          <MotionButton
            type="submit"
            disabled={submitState === "sending"}
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-md md:w-auto ${
              submitState === "success"
                ? "bg-green-600"
                : submitState === "error"
                  ? "bg-red-600"
                  : "teal-gradient-bg hover:opacity-90"
            } ${submitState === "sending" ? "opacity-80" : ""}`}
            whileHover={submitState === "idle" ? { scale: 1.06, y: -3 } : undefined}
            whileTap={submitState === "idle" ? { scale: 0.9 } : undefined}
            transition={interactiveSpring}
          >
            {submitState === "sending" && (
              <>
                <MaterialIcon name="sync" className="animate-spin" />
                <span>Enviando...</span>
              </>
            )}
            {submitState === "success" && (
              <>
                <MaterialIcon name="check_circle" filled />
                <span>¡Mensaje enviado!</span>
              </>
            )}
            {submitState === "error" && (
              <>
                <MaterialIcon name="error" filled />
                <span>Error al enviar</span>
              </>
            )}
            {submitState === "idle" && (
              <>
                <MaterialIcon name="send" />
                <span>Enviar mensaje</span>
              </>
            )}
          </MotionButton>
        </div>
      </form>
    </div>
  );
}
