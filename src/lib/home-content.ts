export const heroSlides = [
  {
    src: "/hero_(7).png",
    alt: "Litotricia intravascular - Laboratorio Hemodinamia HCC",
    objectPosition: "center 68%",
  },
  {
    src: "/hero_(8).png",
    alt: "Procedimiento de hemodinamia en sala especializada - Laboratorio Hemodinamia HCC",
  },
  {
    src: "/hero_(9).png",
    alt: "Equipo médico en cardiología intervencionista - Laboratorio Hemodinamia HCC",
  },
  {
    src: "/hero_(10).png",
    alt: "Cateterismo cardíaco con tecnología avanzada - Laboratorio Hemodinamia HCC",
  },
  {
    src: "/hero_(11).png",
    alt: "Angioplastia coronaria - Laboratorio Hemodinamia HCC",
  },
  {
    src: "/hero_(12).png",
    alt: "Laboratorio de hemodinamia HCC - Atención cardiovascular especializada",
  },
  {
    src: "/hero_(13).png",
    alt: "Hemodinamia y cateterismo de alta especialidad - Laboratorio Hemodinamia HCC",
  },
] as const;

export const strategicPlan = {
  image: "/FOTO_DE_PLAN_ESTRATEGICO.png",
  paragraphs: [
    "Nos enfocamos en agregar un alto valor optimizando la experiencia de nuestros pacientes, garantizando que cada procedimiento de hemodinamia y cateterismo se realice con una precisión inigualable, minimizando riesgos y acelerando su recuperación. Nuestro laboratorio de hemodinamia cuenta con tecnología de última generación para ofrecer los mejores resultados.",
    "Nuestra meta es consolidar aún más nuestra posición como líder en formación médica en el campo de la hemodinamia. Seguiremos impulsando el mejoramiento continuo de nuestro equipo a través de fellows, tenemos una participación y acercamiento activo a tecnologías innovadoras y a los eventos de cardiología intervencionista más relevantes. Esto nos permitirá integrar los últimos avances en hemodinamia y mantenernos a la vanguardia global.",
    "Aspiramos expandir nuestro impacto, no solo en la cardiología, sino también en otros campos vasculares como cerebro, riñones y miembros inferiores, aprovechando nuestras capacidades de cateterismo y hemodinamia. Nuestro objetivo es que el Laboratorio Hemodinamia HCC sea reconocido como un centro de autoridad y confianza más allá de nuestras fronteras, donde la innovación tecnológica, la experiencia, la gestión de conocimiento y la calidez humana se unen para proteger el corazón vida de nuestros pacientes",
    "Este es nuestro compromiso: ser aliado incondicional en la salud del corazón, con una excelencia que evoluciona continuamente, Al Lado de tu Corazón®.",
  ],
} as const;

export const historySection = {
  title: "Reseña Histórica",
  paragraphs: [
    "El Laboratorio de Hemodinamia del Hospital de Clínicas Caracas fue inaugurado en junio de 1987. Entre sus miembros fundadores se encuentran los Dres. Francisco Tortoledo, Irving Peña y José Ignacio Pulido.",
    "Desde su inauguración, nuestro servicio de hemodinamia ha funcionado ininterrumpidamente, manteniéndose en la vanguardia tecnológica, teniendo como fin último el mejor de los tratos para con nuestros pacientes.",
    "Fuimos el primer laboratorio de hemodinamia en adoptar el uso de equipos con digitalización de las imágenes obtenidas en el cateterismo cardíaco. Representamos el primer laboratorio en tener dos equipos de hemodinamia simultáneos.",
    "En el año 1989, se inició un programa de formación en hemodinamia y cardiología intervencionista, liderado por el Dr. Francisco Tortoledo, el cual cuenta en su aval con la formación de 13 médicos cardiólogos hemodinamistas, quienes han cumplido una labor encomiable en el campo de la cardiología intervencionista en Venezuela.",
    "Seguimos empeñados en mejorar en función de la mejor atención para nuestros pacientes.",
    "El logro de objetivos superiores, mediante el esfuerzo continuado, teniendo como norte la búsqueda de la calidad, es lo que nos guía cada día, al lado de tu corazón®.",
  ],
  author: "Dr. Enrique Fermín M.",
  authorRole: "Jefe Laboratorio HHCC",
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
