export const subjectOptions = [
  { value: "", label: "Seleccione una opción", icon: "list_alt" },
  { value: "cita", label: "Agendar Cita", icon: "calendar_month" },
  { value: "info", label: "Información de Procedimientos", icon: "medical_information" },
  { value: "presupuesto", label: "Solicitud de Presupuesto", icon: "request_quote" },
  { value: "otro", label: "Otros", icon: "more_horiz" },
] as const;

export const contactHero = {
  title: "Contáctanos",
  subtitle:
    "Estamos aquí para atender sus consultas sobre servicios hemodinámicos y coordinar su atención médica con la excelencia que nos caracteriza.",
};

export const contactMap = {
  title: "Nuestra Ubicación",
  description:
    "Visítenos en el corazón de San Bernardino, en las instalaciones del Hospital de Clínicas Caracas.",
};
