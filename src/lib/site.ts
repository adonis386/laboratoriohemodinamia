export const site = {
  name: "Laboratorio Hemodinamia HCC",
  tagline: "hemodinamia y cateterismo",
  slogan: "Al Lado de tu Corazón",
  description:
    "Centro especializado en hemodinamia, cateterismo cardíaco y cardiología intervencionista en Caracas, Venezuela.",
  phone: "+58 424-1787760",
  phoneHref: "tel:+584241787760",
  whatsapp: "584241787760",
  email: "infolhhcc@gmail.com",
  address:
    "Avenida Panteón con Avenida Alameda, Urb. San Bernardino Av. Panteón, Caracas 1011, Distrito Federal",
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    saturday: "Sábados: 9:00 AM - 1:00 PM",
  },
  social: {
    instagram:
      "https://www.instagram.com/laboratoriohemodinamiahcc?igsh=MWwzYWY0YnJ6cmZjcA==",
    linkedin: "https://www.linkedin.com/company/laboratorio-hemodinamia-hcc/",
    whatsapp: "https://wa.me/584241787760",
    youtube: "https://www.youtube.com",
  },
  contact: {
    addressDetail:
      "Av. Panteón, Hospital de Clínicas Caracas, Piso 2, San Bernardino, Caracas 1010.",
    email: "infolhhcc@gmail.com",
    schedule: {
      weekdays: "Lunes a Viernes: 7:00 AM - 7:00 PM",
    },
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBErMGDwf69vEgCYHnp8M465qFU5QixusPqJ59c8rbimpKpUDzdrBtSK05srkeUaUS8tox5PgAdBjh_aDZfXAYU_eiFCRt9tS98X2NvO-Sa3ihRbOmEjonFp6fL5hx5zKc34Jy0HVLNQaFWVBuSjbvgIZI7nIVOnKQ0Dygzi3Ok54r-0l6skNuACHZgDzs_mkipCrxOiax6XjDyioPFuN7bD4pHXkYL12Akiy-fy027nHbBVQ1vVqz9aMBivnfEj-PTM8oI8xsCBr4",
    locationPin: {
      title: "Laboratorio HCC",
      subtitle: "Piso 2, Consultorio 204",
    },
  },
  copyright:
    "Copyright 2026/@AVC MEDIANET / tu compañía / Laboratorio Hemodinamia HCC. Todos los derechos reservados.",
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/directorio", label: "Directorio" },
  { href: "/procedimientos", label: "Procedimientos" },
  { href: "/blog", label: "Blog LHHCC" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contáctanos" },
] as const;

export type Doctor = {
  lastName: string;
  firstName: string;
  phone: string;
  whatsapp: string;
};

export const doctors: Doctor[] = [
  { lastName: "Abreu H.", firstName: "Yolanda Y.", phone: "0412-6179854", whatsapp: "584126179854" },
  { lastName: "Azpúrua I.", firstName: "Beatriz A.", phone: "0414-2596909", whatsapp: "584142596909" },
  { lastName: "Benchetric K.", firstName: "Chamia.", phone: "0414-3109200", whatsapp: "584143109200" },
  { lastName: "Borges R.", firstName: "Federico.", phone: "0414-9324699", whatsapp: "584149324699" },
  { lastName: "Brito C.", firstName: "José A.", phone: "0416-3835071", whatsapp: "584163835071" },
  { lastName: "Casal H.", firstName: "Humberto.", phone: "+1(754)8020949", whatsapp: "17548020949" },
  { lastName: "Carrasquero A.", firstName: "Lewis J.", phone: "0424-6604752", whatsapp: "584246604752" },
  { lastName: "Escudero E.", firstName: "Jaime E.", phone: "0412-2327071", whatsapp: "584122327071" },
  { lastName: "Espinosa M.", firstName: "Raúl A.", phone: "0416-6056384", whatsapp: "584166056384" },
  { lastName: "Fermin M.", firstName: "Enrique J.", phone: "0412-3271970", whatsapp: "584123271970" },
  { lastName: "Kertznus Y.", firstName: "Yuli.", phone: "0414-3201341", whatsapp: "584143201341" },
  { lastName: "Matheus B.", firstName: "Alvaro J.", phone: "0414-9007220", whatsapp: "584149007220" },
  { lastName: "Muñoz R.", firstName: "Juan S.", phone: "0414-1404540", whatsapp: "584141404540" },
  { lastName: "Ochoa M.", firstName: "César A.", phone: "0412-7361658", whatsapp: "584127361658" },
  { lastName: "Requena D.", firstName: "Ramón A.", phone: "0412-1823157", whatsapp: "584121823157" },
  { lastName: "Romero M.", firstName: "Ery A.", phone: "0414-8619632", whatsapp: "584148619632" },
  { lastName: "Varnagy R.", firstName: "Gabriel.", phone: "0424-6227346", whatsapp: "584246227346" },
  { lastName: "Vásquez M.", firstName: "José R.", phone: "0412-3273819", whatsapp: "584123273819" },
];

export const procedures = [
  { id: "cateterismo-diagnostico", title: "Cateterismo Cardíaco Diagnóstico", number: 1 },
  { id: "angioplastia-coronaria", title: "Angioplastia Coronaria", number: 2 },
  { id: "angioplastia-periferica", title: "Angioplastia Vascular Periférica", number: 3 },
  { id: "litotricia", title: "Litotricia Intravascular", number: 4 },
  { id: "endoprotesis", title: "Endoprótesis Aórtica (EVAR/TEVAR)", number: 5 },
  { id: "valvulas", title: "Válvulas Cardíacas Transcatéter", number: 6 },
] as const;
