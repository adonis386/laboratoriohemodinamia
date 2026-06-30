export type ProcedureItem = {
  id: string;
  number: number;
  title: string;
  description: string;
  /** Imagen de respaldo cuando no hay video (ej. válvulas) */
  image?: string;
  /** Portada del video (mismas imágenes de la presentación) */
  coverImage?: string;
  /** Ruta en public/, ej. /ENDOPROTESIS_AORTICA.mp4 */
  video?: string;
  /** Segundo del video usado como carátula (fragmento del mismo archivo) */
  videoPreviewTime?: number;
  /** Encuadre de la carátula (object-position) */
  videoCoverPosition?: string;
  bullets?: string[];
  quote?: string;
  reverse?: boolean;
  altBg?: boolean;
};

/** Texto introductorio — PROCEDIMIENTOS_WEB_LHHCC.odt */
export const proceduresIntro =
  "En el Laboratorio de Hemodinamia HCC, estamos comprometidos con la salud cardiovascular de nuestros pacientes, ofreciéndoles los últimos avances tecnológicos y nuestra experiencia acumulada en más de treinta (30) años de labor ininterrumpida, en el diagnóstico y tratamiento de las afecciones cardiovasculares, a través de cateterismo.";

export const proceduresList: ProcedureItem[] = [
  {
    id: "cateterismo-diagnostico",
    number: 1,
    title: "Cateterismo Cardíaco Diagnóstico",
    description:
      "El cateterismo cardíaco diagnóstico nos permite medir las presiones en el corazón y en los vasos sanguíneos, precisar si hay obstrucciones en las arterias o en las venas. Es un procedimiento mínimamente invasivo, lo que garantiza menos molestias y complicaciones, junto con una recuperación más rápida. Se obtiene un diagnóstico preciso en tiempo real, permitiendo diseñar el plan de tratamiento más adecuado para cada caso clínico.",
    coverImage: "/procedimientos/portada-cateterismo.png",
    video: "/CATETERISMO_CARDIACO_DIAGNOSTICO.mp4",
  },
  {
    id: "angioplastia-coronaria",
    number: 2,
    title: "Angioplastia Coronaria",
    description:
      "Cuando obstrucciones en las arterias coronarias, las mismas se pueden tratar mediante la dilatación de las mismas y la colocación, en la mayoría de los casos, de unas mallas metálicas, denominadas Stent, lo cual permite el restablecimiento del flujo sanguíneo normal en las arterias. Dicho procedimiento es el tratamiento de elección, hoy en día, para el tratamiento del infarto agudo del miocardio, traduciéndose en mejoría de la sobrevida y un egreso precoz de los pacientes.",
    reverse: true,
    altBg: true,
    coverImage: "/procedimientos/portada-angioplastia-coronaria.png",
    video: "/ANGIOPLASTIA_CORONARIA.mp4",
  },
  {
    id: "angioplastia-periferica",
    number: 3,
    title: "Angioplastia Vascular Periférica",
    description:
      "La obstrucción de las arterias de las piernas puede provocar dolor al caminar (claudicación) y puede llegar a ser tan importante que termina por colocar a los pacientes, que padecen tal condición, en riesgo de amputación (isquemia crítica). El avance en las técnicas y en el desarrollo de materiales, ha permitido que muchos de estos pacientes puedan ser tratados exitosamente, logrando salvar el miembro inferior amenazado, incluso en casos no candidatos para cirugía.",
    quote: "Nuestro lema, evitar a toda costa una amputación.",
    coverImage: "/procedimientos/portada-angioplastia-periferica.png",
    video: "/HEMODINAMIA_Y_CATETERISMO.mp4",
  },
  {
    id: "litotricia",
    number: 4,
    title: "Litotricia Intravascular",
    description:
      "La calcificación severa de las arterias dificulta su tratamiento mediante angioplastia. En este caso, contamos con un innovador procedimiento llamado litotricia intravascular. En el mismo se fracturan las placas de calcio mediante ondas de choque sónicas. Esta tecnología de punta facilita el tratamiento de lesiones coronarias y periféricas complejas de forma exitosa, garantizando mejores resultados.",
    reverse: true,
    altBg: true,
    coverImage: "/procedimientos/portada-litotricia.png",
    video: "/LITOTRIPSIA.mp4",
  },
  {
    id: "endoprotesis",
    number: 5,
    title: "Endoprótesis Aórtica (EVAR/TEVAR)",
    description:
      "La enfermedad de la arteria aorta, como aneurismas y disecciones, pueden ser tratados mediante la colocación de prótesis vasculares, colocadas a través de cateterismo, sin necesidad de una cirugía mayor abierta. Este procedimiento consiste en implantar un dispositivo tubular (conocido como stent-graft). Con este procedimiento, la recuperación es significativamente más rápida y menos dolorosa, comparada con la cirugía convencional.",
    coverImage: "/procedimientos/portada-endoprotesis.png",
    video: "/ENDOPROTESIS_AORTICA.mp4",
  },
  {
    id: "valvulas",
    number: 6,
    title: "Colocación de Válvulas Cardíacas Transcatéter (TAVI/TMVr/TPVr)",
    description:
      "Hoy en día, las afecciones de las válvulas cardíacas (estenosis o insuficiencia), se pueden tratar a través de la colocación de prótesis valvulares, biológicas, por medio de cateterismo cardiaco con válvulas cardíacas transcatéter. Se puede tratar la válvula aórtica, la mitral o la pulmonar, sin necesidad de cirugía a corazón abierto. Es un procedimiento claramente indicado en los pacientes con contraindicaciones para operación abierta y en aquellos con alto riesgo quirúrgico. No obstante, se puede utilizar en pacientes con riesgo quirúrgico intermedio si las condiciones del paciente lo ameritan. Es el caso de pacientes con alta fragilidad clínica. Tiene alto impacto en la disminución de las complicaciones y en la recuperación de los pacientes.",
    coverImage: "/procedimientos/portada-valvulas.png",
    reverse: true,
    altBg: true,
  },
];

export const sidebarLinks = proceduresList.map((p) => ({
  id: p.id,
  label: p.title
    .replace(" (EVAR/TEVAR)", "")
    .replace(" (TAVI/TMVr/TPVr)", ""),
}));
