export type ProcedureItem = {
  id: string;
  number: number;
  title: string;
  description: string;
  /** Imagen de respaldo cuando no hay video (ej. válvulas) */
  image?: string;
  /** Ruta en public/, ej. /ENDOPROTESIS_AORTICA.mp4 */
  video?: string;
  /** Segundo del video usado como carátula (fragmento del mismo archivo) */
  videoPreviewTime?: number;
  bullets?: string[];
  quote?: string;
  reverse?: boolean;
  altBg?: boolean;
};

export const proceduresList: ProcedureItem[] = [
  {
    id: "cateterismo-diagnostico",
    number: 1,
    title: "Cateterismo Cardíaco Diagnóstico",
    description:
      "Procedimiento mínimamente invasivo que permite medir las presiones en el corazón y en los vasos sanguíneos, precisar si hay obstrucciones en las arterias o en las venas. Garantiza menos molestias, recuperación más rápida y diagnóstico preciso en tiempo real.",
    bullets: ["Precisión diagnóstica superior", "Recuperación rápida (2-4 horas)"],
    video: "/CATETERISMO_CARDIACO_DIAGNOSTICO.mp4",
    videoPreviewTime: 4,
  },
  {
    id: "angioplastia-coronaria",
    number: 2,
    title: "Angioplastia Coronaria",
    description:
      "Tratamiento de obstrucciones en arterias coronarias mediante dilatación y colocación de stents, restableciendo el flujo sanguíneo. Es el tratamiento de elección para el infarto agudo del miocardio.",
    reverse: true,
    altBg: true,
    video: "/ANGIOPLASTIA_CORONARIA.mp4",
    videoPreviewTime: 12,
  },
  {
    id: "angioplastia-periferica",
    number: 3,
    title: "Angioplastia Vascular Periférica",
    description:
      "Tratamiento de obstrucciones en arterias de las piernas para evitar amputaciones. Técnicas y materiales avanzados permiten salvar el miembro inferior amenazado, incluso en casos no candidatos para cirugía.",
    video: "/HEMODINAMIA_Y_CATETERISMO.mp4",
    videoPreviewTime: 18,
  },
  {
    id: "litotricia",
    number: 4,
    title: "Litotricia Intravascular",
    description:
      "Ondas de choque sónicas para fracturar placas de calcio en arterias severamente calcificadas, facilitando el tratamiento de lesiones coronarias y periféricas complejas.",
    reverse: true,
    altBg: true,
    video: "/LITOTRIPSIA.mp4",
    videoPreviewTime: 6,
  },
  {
    id: "endoprotesis",
    number: 5,
    title: "Endoprótesis Aórtica (EVAR/TEVAR)",
    description:
      "Tratamiento de aneurismas y disecciones de la aorta mediante prótesis vasculares implantadas por cateterismo, sin cirugía mayor abierta. Recuperación más rápida y menos dolorosa.",
    video: "/ENDOPROTESIS_AORTICA.mp4",
    videoPreviewTime: 10,
  },
  {
    id: "valvulas",
    number: 6,
    title: "Válvulas Cardíacas Transcatéter",
    description:
      "Colocación de prótesis valvulares biológicas por cateterismo (TAVI/TMVr/TPVr) sin cirugía a corazón abierto. Indicado en pacientes de alto riesgo quirúrgico y alta fragilidad clínica.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMp_pw2amTRJXb8wVXl2a5lj6y9Qsq5t_EwIbeWeX-NuQdWR5XLuPneusBRqa-0kw4p_QWI1yHccqzl56qQlroNP9gPOHXY3VE90rkBYw59P241S8MkgaMBThDRzp7cul8KGceBD8gBAu8ePSCCCIM9XmZSl9YFbu9DHQlrMMG7A6y_SLCDzwqN4cyZih5m4YbpuiFzaOiUzY4C73j-cBIE89fui1HmkU0jxrfQCxX_uQXk2eJl3ZnjV3Yq0-7sRYDaiNkG2iV8AA",
    reverse: true,
    altBg: true,
  },
];

export const sidebarLinks = proceduresList.map((p) => ({
  id: p.id,
  label: p.title.replace(" (EVAR/TEVAR)", "").replace(" Transcatéter", ""),
}));
