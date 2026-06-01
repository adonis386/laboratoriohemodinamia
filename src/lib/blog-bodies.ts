import cuidadoPostCateterismo from "@/content/blog/cuidado-post-cateterismo.json";
import enfermedadArterial from "@/content/blog/enfermedad-arterial-miembros-inferiores.json";
import hemodinamiaCateterismo from "@/content/blog/hemodinamia-y-cateterismo.json";
import imaye from "@/content/blog/imaye.json";
import litotricia from "@/content/blog/litotricia-intracoronaria.json";
import resenaHistorica from "@/content/blog/resena-historica.json";

export const blogBodies: Record<string, string[]> = {
  imaye,
  "cuidado-post-cateterismo": cuidadoPostCateterismo,
  "hemodinamia-y-cateterismo": hemodinamiaCateterismo,
  "enfermedad-arterial-miembros-inferiores": enfermedadArterial,
  "litotricia-intracoronaria": litotricia,
  "resena-historica": resenaHistorica,
};
