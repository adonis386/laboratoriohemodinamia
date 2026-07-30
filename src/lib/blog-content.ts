import { blogBodies } from "@/lib/blog-bodies";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  /** Portada horizontal al abrir el artículo (si no hay, usa image) */
  heroImage?: string;
  /** Encuadre CSS object-position para la portada */
  imagePosition?: string;
  /** Ruta en public/, ej. /BLOG_LITOTRICIA.mp4 */
  video?: string;
  paragraphs: string[];
};

const postsMeta = [
  {
    slug: "imaye",
    title: "IMAYE, pionera en Venezuela con procedimientos de OCT",
    excerpt:
      "IMAYE incorpora la Tomografía de Coherencia Óptica (OCT) para diagnóstico intravascular con imágenes de alta resolución.",
    author: "IMAYE",
    date: "15 Sep 2024",
    image: "/blog/portada-imaye.png",
    heroImage: "/blog/hero-imaye.jpg",
    video: "/BLOG_IMAYE_PIONERA_EN_VEN.mp4",
  },
  {
    slug: "cuidado-post-cateterismo",
    title: "Cuidado Post-Cateterismo: Un Camino hacia la Recuperación y el Bienestar",
    excerpt:
      "Guía de recuperación y cuidados después de un cateterismo cardíaco en el Laboratorio Hemodinamia HCC.",
    author: "Equipo LHHCC",
    date: "02 Nov 2024",
    image: "/blog/portada-cuidado-post-cateterismo.png",
    heroImage: "/blog/hero-cuidado-post-cateterismo.jpg",
    video: "/BLOG_CUIDADO_POST_CATETERISMO.mp4",
  },
  {
    slug: "hemodinamia-y-cateterismo",
    title: "Hemodinamia y Cateterismo: Características, Ventajas y Beneficios",
    excerpt:
      "Conozca las ventajas del cateterismo cardíaco como procedimiento mínimamente invasivo en cardiología moderna.",
    author: "Equipo LHHCC",
    date: "18 Nov 2024",
    image: "/blog/portada-hemodinamia-y-cateterismo.png",
    video: "/BLOG_HEMODINAMIA_Y_CATETERISMO.mp4",
  },
  {
    slug: "enfermedad-arterial-miembros-inferiores",
    title: "Enfermedad Arterial de los Miembros Inferiores",
    excerpt:
      "Claudicación, factores de riesgo y opciones de tratamiento para preservar la circulación y evitar la amputación.",
    author: "Dr. Enrique Fermín M.",
    date: "05 Dic 2024",
    image: "/blog/portada-enfermedad-arterial-periferica.png",
    video: "/BLOG_ENFERMEDAD_ARTERIAL_PERIFERICA.mp4",
  },
  {
    slug: "litotricia-intracoronaria",
    title: "IMAYE a la vanguardia con litotricia intracoronaria",
    excerpt:
      "Técnica de ondas de choque para tratar lesiones coronarias calcificadas severas en intervenciones percutáneas.",
    author: "IMAYE",
    date: "20 Dic 2024",
    image: "/blog/portada-litotricia.png",
    heroImage: "/blog/hero-litotricia.jpg",
    video: "/BLOG_LITOTRICIA.mp4",
  },
  {
    slug: "resena-historica",
    title: "Reseña Histórica Laboratorio Hemodinamia HCC",
    excerpt:
      "Cuatro décadas de trayectoria en hemodinamia y cardiología intervencionista en Venezuela.",
    author: "Dr. Enrique Fermín M.",
    date: "Jul 2025",
    image: "/blog/portada-resena-historica.png",
    imagePosition: "center 32%",
    video: "/HISTORIA_97.mp4",
  },
  {
    slug: "prevencion",
    title: "Prevención",
    excerpt:
      "La prevención cardiovascular primaria y secundaria como clave para evitar eventos cardíacos y cerebrovasculares.",
    author: "Dr. Enrique Fermín M.",
    date: "10 Jun 2026",
    image: "/blog/portada-prevencion.png",
    heroImage: "/blog/hero-prevencion.jpg",
    video: "/BLOG_PREVENCION.mp4",
  },
] as const;

function prepareParagraphs(_slug: string, title: string, raw: string[]): string[] {
  return raw.filter((para, index) => {
    if (index === 0 && para.trim().toLowerCase() === title.trim().toLowerCase()) {
      return false;
    }
    if (/^(por|autoría|autor)\b/i.test(para.trim())) {
      return false;
    }
    return true;
  });
}

export const blogPosts: BlogPost[] = postsMeta.map((meta) => ({
  ...meta,
  paragraphs: prepareParagraphs(meta.slug, meta.title, blogBodies[meta.slug] ?? []),
}));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
