"use client";

import { useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { subjectOptions } from "@/lib/contacto-content";

type SubmitState = "idle" | "sending" | "success";

const inputClass =
  "w-full rounded-lg border border-page-gray bg-ice-blue-light/30 p-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitState !== "idle") return;

    const form = e.currentTarget;
    setSubmitState("sending");
    setTimeout(() => {
      setSubmitState("success");
      setTimeout(() => {
        setSubmitState("idle");
        form.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="rounded-xl border border-ice-blue-deep bg-white p-6 shadow-sm md:p-8 lg:col-span-8">
      <h3 className="mb-2 text-2xl font-semibold text-on-surface">Envíanos un mensaje</h3>
      <p className="mb-8 text-on-surface-variant">
        Complete el siguiente formulario y un miembro de nuestro equipo administrativo se pondrá
        en contacto con usted a la brevedad.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-on-surface">
            Nombre Completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Ej. Juan Pérez"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-on-surface">
            Correo Electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-on-surface">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="+58 4XX XXXXXXX"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-semibold text-on-surface">
            Asunto
          </label>
          <select id="subject" name="subject" required className={inputClass} defaultValue="">
            {subjectOptions.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-on-surface">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`${inputClass} resize-none`}
            placeholder="¿En qué podemos ayudarle?"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={submitState === "sending"}
            className={`flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold text-white transition md:w-auto ${
              submitState === "success"
                ? "bg-green-600"
                : "teal-gradient-bg hover:scale-[1.02] hover:opacity-90"
            } ${submitState === "sending" ? "opacity-80" : ""}`}
          >
            {submitState === "sending" && (
              <>
                <span>Enviando...</span>
                <MaterialIcon name="sync" className="animate-spin" />
              </>
            )}
            {submitState === "success" && (
              <>
                <span>¡Mensaje Enviado!</span>
                <MaterialIcon name="check_circle" />
              </>
            )}
            {submitState === "idle" && (
              <>
                <span>Enviar Mensaje</span>
                <MaterialIcon name="send" />
              </>
            )}
          </button>
          <p className="mt-3 text-xs text-on-surface-variant">
            El envío real se conectará a un servicio de email en la siguiente fase del proyecto.
          </p>
        </div>
      </form>
    </div>
  );
}
