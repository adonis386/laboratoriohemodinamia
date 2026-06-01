export const heroSlides = [
  { src: "/hero.png", alt: "Angioplastia coronaria - Laboratorio Hemodinamia HCC" },
  { src: "/hero-2.png", alt: "Procedimiento de hemodinamia en sala especializada" },
  { src: "/hero-3.png", alt: "Equipo médico en cardiología intervencionista" },
  { src: "/hero-4.png", alt: "Cateterismo cardíaco con tecnología avanzada" },
  { src: "/hero-5.png", alt: "Laboratorio de hemodinamia HCC" },
  { src: "/hero-6.png", alt: "Atención cardiovascular de alta especialidad" },
] as const;

export const strategicPlan = {
  image: "/FOTO_DE_PLAN_ESTRATEGICO.png",
  bullets: [
    "Protocolos de seguridad internacional en hemodinamia.",
    "Equipamiento de última generación para cateterismo complejo.",
    "Atención multidisciplinaria con especialistas de primer nivel.",
  ],
} as const;

export const historySection = {
  video: encodeURI("/38 AÑOS~1.mp4"),
  videoPreviewTime: 6,
  videoCoverPosition: "center 22%",
} as const;

export const proceduresPreview = {
  background:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCAzqP4L8Z7F94Fy1V9GRN3nD_OTcz1kSHSJJPCDQlG0xqcuIxtcQSYRdYZTT54Gq8EsKkSx7EiCYqptAEeExndcAXIZ_jGcal9L2SXX-VqNt9sfzV7-tnn8OeECpp3KzLolcnK1GHX3sEL_URysMIJ5RiwqcvEtwTd0jCtSb34-ztFeEmtxEaCzn7mQoxqgAJVSd2_eR4jVNqRH5Kdq7A2bpIYbo131JC4vHlUKYiktmzYwAIpVDDsl5ZF0iPA5pT0yBemkL2m6R0",
  video: "/HEMODINAMIA_Y_CATETERISMO.mp4",
  videoPreviewTime: 10,
  items: [
    { icon: "monitor_heart", title: "Cateterismo", description: "Diagnóstico preciso de la anatomía coronaria.", href: "/procedimientos#cateterismo-diagnostico" },
    { icon: "health_and_safety", title: "Angioplastia Coronaria", description: "Restauración del flujo sanguíneo arterial.", href: "/procedimientos#angioplastia-coronaria" },
    { icon: "footprint", title: "Angioplastia Periférica", description: "Tratamiento de arterias en extremidades.", href: "/procedimientos#angioplastia-periferica" },
    { icon: "bolt", title: "Litotricia", description: "Tecnología de ondas para calcificaciones.", href: "/procedimientos#litotricia" },
    { icon: "settings_input_component", title: "EVAR/TEVAR", description: "Reparación endovascular de aneurismas.", href: "/procedimientos#endoprotesis" },
    { icon: "favorite", title: "Válvulas Cardíacas", description: "Sustitución valvular percutánea avanzada.", href: "/procedimientos#valvulas" },
  ],
} as const;

import { blogPosts } from "@/lib/blog-content";

const blogPreviewTimes: Record<string, number> = {
  imaye: 4,
  "cuidado-post-cateterismo": 5,
  "hemodinamia-y-cateterismo": 12,
};

export const blogPreview = blogPosts.slice(0, 3).map(({ slug, title, excerpt, image, video }) => ({
  slug,
  title,
  excerpt,
  image,
  video,
  videoPreviewTime: blogPreviewTimes[slug] ?? 3,
}));
