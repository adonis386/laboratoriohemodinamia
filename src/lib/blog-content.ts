import { blogBodies } from "@/lib/blog-bodies";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCX29VIHOlmWL2cMdWOzgeG4EVKMBHJyIza1Fdc4s_bGkzZQ7z61o9vo2lifSxGqyHqqZOhAAfZPOxyGFGLOH30fdpi0yXHADaapQ8gt91LCESV6vZx11L0osWtS2-dCLlh5f63xsukkr88efcNCgx6i47PmHle6Ut2Z151FWbmvDdJWGULaMdOly53djK8uhZwt9kYsQ4EDYgiFpF7aEgXZao9vhHSy0CNIBhMn6dsBQMAd8vn_fRw076lqZxLLA9rWkUQj77R8tc",
    video: "/BLOG_IMAYE_PIONERA_EN_VEN.mp4",
  },
  {
    slug: "cuidado-post-cateterismo",
    title: "Cuidado Post-Cateterismo: Un Camino hacia la Recuperación y el Bienestar",
    excerpt:
      "Guía de recuperación y cuidados después de un cateterismo cardíaco en el Laboratorio Hemodinamia HCC.",
    author: "Equipo LHHCC",
    date: "02 Nov 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBD8GNL_Rl1kyIBZ73p5_4uolQdAccB_O3T3LheiCscxHdX2xsmMeBRMYQ0kdU-ouRwsP3J-UgvdoXc9qW2TE1oJsxKmuTCa3v8_ybOxWvewXiaOw5cUtYWS-zr4d8agoJPWfsaFfQ7PNxS__HCZgGEIJpv5lRByOwTUupPXUHxe8cePdq6t-lqYJTFR0Edw-sJM0arwCHyy8d9q0ffERP_ou_3UV9v6MOmWcxHis_hqMGi1kCM_Ytw4uu9fL3i2CNV99UrGYKXpek",
    video: "/BLOG_CUIDADO_POST_CATETERISMO.mp4",
  },
  {
    slug: "hemodinamia-y-cateterismo",
    title: "Hemodinamia y Cateterismo: Características, Ventajas y Beneficios",
    excerpt:
      "Conozca las ventajas del cateterismo cardíaco como procedimiento mínimamente invasivo en cardiología moderna.",
    author: "Equipo LHHCC",
    date: "18 Nov 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEIFdzns1hqPXlzzTiqFZJXNyuAtDLdrqQh-v1KVLzlHeGH7c-L9xHLh6ikn2EzqmrC6F_PDDq5ysw8sGR5JjuUo61RQgup15xd6jRdmFMx8t6SXWqOKgIb6scGEN7m6nI4CjnzOi4WlaI8og6KimaCXWWIsZt8Hf2d-ZYhNKtISfYtUmQU5nkPDASV2bVMwTYd0o3XY5UaKBff35R2K5l51ngM00icUdGS7eCb1NgdlTQialP09t9wumnitJsh9D3OEAf46dFlg4",
    video: "/BLOG_HEMODINAMIA_Y_CATETERISMO.mp4",
  },
  {
    slug: "enfermedad-arterial-miembros-inferiores",
    title: "Enfermedad Arterial de los Miembros Inferiores",
    excerpt:
      "Claudicación, factores de riesgo y opciones de tratamiento para preservar la circulación y evitar la amputación.",
    author: "Dr. Enrique Fermín M.",
    date: "05 Dic 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCF26Y_Yko9TVTqrEErFgJ41gPf2EPT8dXpK-owuFCX0eZlctN_OM4ZG1kRK5q6tikyXQdJ2eovY_WQSID0IYwvn66A_ieigqVpH_uwy0ftZLlIsBE4xupSbTfBWxPH731joqIzRZToRouo2LVN0XsImZHXVFzWLJwKi9vvjSm_JGN8_o4P9Kt3xXDjJKkj3YdlhUBp8UnZXoNpdWZVb1djXlcorCc1LtVQRHEsn6ZtIYSYhJBFMb2SVQ0_s-8b4rrpxQ1xxX_borU",
    video: "/BLOG_ENFERMEDAD_ARTERIAL_PERIFERICA.mp4",
  },
  {
    slug: "litotricia-intracoronaria",
    title: "IMAYE a la vanguardia con litotricia intracoronaria",
    excerpt:
      "Técnica de ondas de choque para tratar lesiones coronarias calcificadas severas en intervenciones percutáneas.",
    author: "IMAYE",
    date: "20 Dic 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaWjH91VPmcMGjNaYGVdQE7M2c0m7iWCMhZ_VgoEik2aUvi5UeUViZ49oUtaZaaxdS8_P7pZ9vMP3mSR_DzYQFrCPBPN5iDeqlP56zeyzevvMXN8K8Z6tCwArR56lUYNDwRf_q9xnu0ir6dCB6fMuYB1GtHrmjATCu58AsdFKUr2V6xZo1KYjcZ42iRhKF3b2FbXQWKIGYca1lhJovrjJ2-X5v96kfmRzeH0U9C_nWfW0txt3_bbTAT5gJqGoHDSjW_JSKCiuFDk4",
    video: "/BLOG_LITOTRICIA.mp4",
  },
  {
    slug: "resena-historica",
    title: "Reseña Histórica Laboratorio Hemodinamia HCC",
    excerpt:
      "Casi cuatro décadas de trayectoria en hemodinamia y cardiología intervencionista en el Hospital de Clínicas Caracas.",
    author: "Dr. Enrique Fermín M.",
    date: "Jul 2025",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjXNaVc4Ua7T9dRn0_04Ab_HzmH9w8NlfU1wTDovrisfxJJx6P3YCe2L2RscQOI3t8aUi_dp0Oc9-Ksg94tsKUwkmD4JgEPRhOboGaq3oIEwVCqM1iyF8n2XSsELfFtm_mNx-kSG0jv7fcDFiMGuKWaYrbBfHppWDyY3a6fjjSjzWHiqgilAsY1QSGs2l75hgYdU8RZ8cBYyFmyperZ4WeNE8XUFEShJXgqRmr1_UxI4negM4-UtV7i0ZRMOQVqfUV7r_GO4xSz34",
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
