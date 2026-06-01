export type ProcedureItem = {
  id: string;
  number: number;
  title: string;
  description: string;
  image: string;
  /** Ruta en public/, ej. /ENDOPROTESIS_AORTICA.mp4 */
  video?: string;
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJYXpgMAG_GOwB93OfIlJjDrIu4NHus1_z2rplMksU4URqpR-b222AlpSRwwMyBhElAeG66UowpyziV--AnnLstMtitDW8IVeX2sU4Fz5Z2Z6A4TPh5EKem8SiTAq8ZDMXRKtJfzSv_ZBXXY6oQ1lJNLuLqplDHe61G5vfRj8drb4plf-kWeMbWC--qPyw_q65oB_aI3ukCgMh0dOs9CH53q-Ukiek3P_1Hcq95G0dI2d5_MO1nTXD3m2PSnSS4ODNgmPECrXk2N0",
    bullets: ["Precisión diagnóstica superior", "Recuperación rápida (2-4 horas)"],
  },
  {
    id: "angioplastia-coronaria",
    number: 2,
    title: "Angioplastia Coronaria",
    description:
      "Tratamiento de obstrucciones en arterias coronarias mediante dilatación y colocación de stents, restableciendo el flujo sanguíneo. Es el tratamiento de elección para el infarto agudo del miocardio.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCh5tYvRZQxDcZ1hlwNhpV71AB_ONhshfNvMjom6PEYqFr12FgHHYDIkAD6nX0gD_OcSyUXbNuceY3FLSiERF4K0r7cVI3VGYCaj-brYLT9VdKFa8sbL08fCKsZ0-ZHTP8YqxdBDhUH4PTNTKI370_wdCIrE5Aj7YzfRRbNkm64D-cehOM7ZqK2O-5uNbpaTVs1FeYLPBwI6ugt6KOcqCeAkuNzegtMfV0vlng8kUGub2dQQ0hnLG-o1zw0aDaNjIIXeNAVN_E_2c",
    reverse: true,
    altBg: true,
  },
  {
    id: "angioplastia-periferica",
    number: 3,
    title: "Angioplastia Vascular Periférica",
    description:
      "Tratamiento de obstrucciones en arterias de las piernas para evitar amputaciones. Técnicas y materiales avanzados permiten salvar el miembro inferior amenazado, incluso en casos no candidatos para cirugía.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGAcG5c_1PjjxravdufwjrHgS2oV470c0qNfqTl7ch3cmZbP-ciAKrXhQzwY0i7OGGMW5YK7EHZy9_UGpir2m0n9agZTQ5F0OrO4XHUq5CF9X5rpkb2beqc9dNlZijvXBGhjjghbQXEDg9bnzZsZSOwHWqOlEqlPf7jdUFXFvCidpk0UoxWiCFs3WdCeI3p-D79KxloKRkRJS_amj2l_2AEAfteESRvcXdPlAUQmGehw5-WsIkSv647Wx4KWxGAcM90vguv8jgB64",
  },
  {
    id: "litotricia",
    number: 4,
    title: "Litotricia Intravascular",
    description:
      "Ondas de choque sónicas para fracturar placas de calcio en arterias severamente calcificadas, facilitando el tratamiento de lesiones coronarias y periféricas complejas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaWjH91VPmcMGjNaYGVdQE7M2c0m7iWCMhZ_VgoEik2aUvi5UeUViZ49oUtaZaaxdS8_P7pZ9vMP3mSR_DzYQFrCPBPN5iDeqlP56zeyzevvMXN8K8Z6tCwArR56lUYNDwRf_q9xnu0ir6dCB6fMuYB1GtHrmjATCu58AsdFKUr2V6xZo1KYjcZ42iRhKF3b2FbXQWKIGYca1lhJovrjJ2-X5v96kfmRzeH0U9C_nWfW0txt3_bbTAT5gJqGoHDSjW_JSKCiuFDk4",
    reverse: true,
    altBg: true,
  },
  {
    id: "endoprotesis",
    number: 5,
    title: "Endoprótesis Aórtica (EVAR/TEVAR)",
    description:
      "Tratamiento de aneurismas y disecciones de la aorta mediante prótesis vasculares implantadas por cateterismo, sin cirugía mayor abierta. Recuperación más rápida y menos dolorosa.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-j_or9O2i_AYpWLhelowyJuXxI42Cpbip5SeEcknSB69Mfrd-umzGLXs3NYp4t8e05y7se3iG407QdeD1lCfpuSLn6FAfdwDcBc0TlfnwdNLvzq3L9BVVJR3ScFfS4ZfFaIwhraTkTdOCSGLibGM_RPfWpurYYfcJH7ZI9p9FZVwBWc2aO9w31-2h2IUqLuf1P-igkwxjOr6rO_RiQPD5lyr7dl_oxWmj3eojOuLczKU0OzbSmNWnyYwkJkDMBqmFBHW-tnB7wpw",
    video: "/ENDOPROTESIS_AORTICA.mp4",
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
