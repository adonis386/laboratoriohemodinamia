import cuidadoPostCateterismo from "@/content/blog/cuidado-post-cateterismo.json";
import enfermedadArterial from "@/content/blog/enfermedad-arterial-miembros-inferiores.json";
import eticaMedicaMarketing from "@/content/blog/etica-medica-y-marketing-digital.json";
import hemodinamiaCateterismo from "@/content/blog/hemodinamia-y-cateterismo.json";
import imaye from "@/content/blog/imaye.json";
import litotricia from "@/content/blog/litotricia-intracoronaria.json";
import prevencion from "@/content/blog/prevencion.json";
import resenaHistorica from "@/content/blog/resena-historica.json";

export const blogBodies: Record<string, string[]> = {
  "etica-medica-y-marketing-digital": eticaMedicaMarketing,
  imaye,
  "cuidado-post-cateterismo": cuidadoPostCateterismo,
  "hemodinamia-y-cateterismo": hemodinamiaCateterismo,
  "enfermedad-arterial-miembros-inferiores": enfermedadArterial,
  "litotricia-intracoronaria": litotricia,
  "resena-historica": resenaHistorica,
  prevencion,
};
