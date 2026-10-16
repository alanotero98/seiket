/* ==========================================================================
   Contenido centralizado del sitio — basado en el Brief Estratégico de SEIKET.
   --------------------------------------------------------------------------
   Todo el texto de la landing vive acá para poder editarlo sin tocar los
   componentes.

   NOTA (datos comerciales): el brief NO define testimonios, estadísticas,
   certificaciones, clientes ni años de experiencia. Esas secciones sólo se
   renderizan si cargás contenido real en los arrays correspondientes.
   Los campos con `[ ]` son placeholders neutrales, listos para reemplazar.
   ========================================================================== */

import type { ImageMetadata } from "astro";
import servicio1 from "../assets/servicio-1.jpg";
import servicio2 from "../assets/servicio-2.jpg";
import servicio3 from "../assets/servicio-3.jpg";
import servicio4 from "../assets/servicio-4.jpg";
import servicio5 from "../assets/servicio-5.jpg";

export const siteUrl = import.meta.env.SITE ?? "https://seiket.example";

export const site = {
  name: "SEIKET",
  fullName: "SEIKET Facility Services",
  tagline: "Facility Services",
  // Título por defecto de la home (SEO / pestaña del navegador).
  defaultTitle: "SEIKET Facility Services | Facility Management y limpiezas técnicas",
  // Descripción usada en <title>, meta description y Open Graph.
  description:
    "SEIKET Facility Services: Facility Management, mantenimiento y limpiezas técnicas de alta complejidad para empresas. Especialistas en limpieza de aeronaves, paneles solares y finales de obra.",
  locale: "es_AR",
  themeColor: "#1b4a73",
  // Imagen social por defecto (reemplazar por un JPG/PNG de 1200x630).
  defaultOgImage: "/og-image.svg",
};

export const contact = {
  // Reemplazar por los datos reales de SEIKET (campos con `[ ]`).
  email: "comercialseiket@gmail.com",
  phone: "+00 000 000 000",
  phoneHref: "tel:+000000000000",
  whatsapp: "",
  address: "[Domicilio legal, Ciudad]",
  hours: "[Lunes a viernes de 0 a 0 hs]",
  // Endpoint del formulario (Formspree, Netlify, backend propio, etc.).
  // Si queda vacío, el formulario abre el cliente de correo como fallback.
  formAction: "",
  social: [
    { label: "LinkedIn", href: "", icon: "linkedin" },
    { label: "Instagram", href: "", icon: "instagram" },
    { label: "Facebook", href: "", icon: "facebook" },
  ],
};

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  eyebrow: "Facility Management y limpieza técnica especializada",
  title: "De la oficina a la industria aeroespacial: precisión técnica en cada superficie",
  description:
    "SEIKET no solo limpia: protege los activos de tu empresa. Contamos con la capacidad técnica y el personal calificado para intervenir desde un final de obra pesado en una fábrica hasta la delicadeza del fuselaje de un avión o la superficie de un panel solar.",
  primaryCta: { label: "Solicitar propuesta", href: "#contacto" },
  secondaryCta: { label: "Ver servicios", href: "#servicios" },
  highlights: [
    { icon: "users", label: "Personal calificado" },
    { icon: "clipboard", label: "Protocolos estrictos" },
    { icon: "badge", label: "Productos certificados" },
  ],
  panel: {
    title: "Plan de servicio",
    subtitle: "Gestión integral de instalaciones",
    foot: "Equipo SEIKET asignado",
    items: [
      { icon: "building", label: "Facility Management" },
      { icon: "plane", label: "Limpieza técnica aeronáutica" },
      { icon: "sun", label: "Mantenimiento de paneles solares" },
    ],
  },
  badges: {
    top: { icon: "shield", label: "Protocolos estrictos" },
    bottom: { icon: "badge", label: "Productos certificados" },
  },
};

export type Service = {
  icon: string;
  title: string;
  description: string;
  /** Tamaño/posición dentro de la grilla Bento Box. */
  size: "hero" | "wide" | "sm";
  /** Foto de fondo. Si falta, la tarjeta se pinta según `tone`. */
  image?: ImageMetadata;
  imageAlt?: string;
  /** Estilo de la tarjeta cuando no tiene imagen. */
  tone?: "dark" | "light";
};

// 5 servicios clave. La tarjeta "hero" domina la composición (foto grande 2x2).
export const services: Service[] = [
  {
    icon: "building",
    title: "Facility Management Corporativo",
    description:
      "Gestión integral y mantenimiento de oficinas, empresas e instituciones, con supervisión permanente y control de calidad.",
    size: "hero",
    image: servicio1,
    imageAlt:
      "Equipo SEIKET gestionando el mantenimiento de un entorno corporativo.",
  },
  {
    icon: "plane",
    title: "Limpieza Técnica Aeronáutica",
    description:
      "Protocolos estrictos y productos certificados, no abrasivos, para el cuidado del fuselaje de aviones y aeronaves.",
    size: "sm",
    image: servicio2,
    imageAlt:
      "Limpieza técnica del fuselaje de una aeronave con protocolos certificados.",
  },
  {
    icon: "sun",
    title: "Limpieza de Paneles Solares",
    description:
      "Un panel sucio pierde eficiencia. Limpieza profesional para maximizar el rendimiento de su energía limpia.",
    size: "sm",
    image: servicio3,
    imageAlt: "Limpieza profesional de paneles solares fotovoltaicos.",
  },
  {
    icon: "wrench",
    title: "Mantenimiento General e Infraestructura",
    description:
      "Tareas preventivas y correctivas para conservar sus instalaciones seguras, operativas y en condiciones óptimas.",
     image: servicio3,
      size: "wide",
    tone: "dark",
  },
  {
    icon: "hard-hat",
    title: "Limpieza Final de Obra",
    description:
      "Convertimos su obra terminada en un espacio listo para habitar o producir: casas, fábricas, galpones y locales comerciales.",
    size: "sm",
    image: servicio4,
    imageAlt:
      "Limpieza final de obra en un espacio listo para habitar o producir.",
  },
];

export type Sector = {
  icon: string;
  title: string;
  description: string;
};

export const sectors: Sector[] = [
  {
    icon: "building",
    title: "Corporativo",
    description:
      "Gerentes de RRHH, Operaciones y dueños de Pymes que necesitan delegar el mantenimiento de sus instalaciones.",
  },
  {
    icon: "hard-hat",
    title: "Construcción e industrial",
    description:
      "Arquitectos, constructoras, ingenieros y desarrolladores que requieren finales de obra en casas, galpones y fábricas.",
  },
  {
    icon: "plane",
    title: "Aeronáutico",
    description:
      "Hangares, aeroclubes, empresas de vuelos privados y aerolíneas que exigen protocolos y productos certificados.",
  },
  {
    icon: "sun",
    title: "Energético y renovables",
    description:
      "Parques solares e industrias con instalaciones fotovoltaicas que no pueden perder eficiencia energética.",
  },
];

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "badge",
    title: "Precisión técnica",
    description:
      "Capacidad para intervenir superficies y entornos de alta complejidad con protocolos estrictos.",
  },
  {
    icon: "users",
    title: "Personal calificado",
    description:
      "Equipos capacitados y supervisados, con protocolos de trabajo avanzados y criterios comunes.",
  },
  {
    icon: "shield",
    title: "Productos certificados",
    description:
      "Insumos certificados y no abrasivos que cuidan cada superficie de tus activos.",
  },
  {
    icon: "check-circle",
    title: "Protegemos tus activos",
    description:
      "No solo limpiamos: extendemos la vida útil y el rendimiento de lo que cuidamos.",
  },
  {
    icon: "settings",
    title: "Versatilidad de escala",
    description:
      "Desde una oficina hasta una fábrica o una aeronave, con la misma exigencia técnica.",
  },
  {
    icon: "sun",
    title: "Eficiencia energética",
    description:
      "Mantenimiento que evita pérdidas de rendimiento en tus instalaciones fotovoltaicas.",
  },
];

export type ProcessStep = {
  icon: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    icon: "search",
    title: "Relevamiento técnico",
    description:
      "Analizamos superficies, riesgos y requisitos específicos de tus instalaciones.",
  },
  {
    icon: "document",
    title: "Propuesta y protocolo",
    description:
      "Definimos el plan de servicio, los protocolos y los productos a utilizar en cada tarea.",
  },
  {
    icon: "hard-hat",
    title: "Ejecución",
    description:
      "Desplegamos el equipo y ejecutamos con los estándares técnicos acordados.",
  },
  {
    icon: "chart",
    title: "Seguimiento y control",
    description:
      "Supervisamos resultados, verificamos la calidad y ajustamos el servicio de forma continua.",
  },
];

export const about = {
  eyebrow: "Nosotros",
  title: "Precisión técnica en cada superficie",
  paragraphs: [
    "SEIKET Facility Services es una empresa de servicios integrales para empresas, especializada en Facility Management, mantenimiento y limpiezas técnicas de alta complejidad.",
    "Nos posicionamos un escalón más arriba de la limpieza tradicional: intervenimos desde un final de obra pesado en una fábrica hasta la delicadeza que requiere el fuselaje de un avión o la superficie de un panel solar, con protocolos estrictos y personal calificado.",
  ],
  values: [
    {
      icon: "badge",
      title: "Capacidad técnica",
      description: "Servicios que exigen protocolos estrictos y capacitación avanzada.",
    },
    {
      icon: "shield",
      title: "Cuidado de activos",
      description: "Protegemos el valor y el rendimiento de cada superficie.",
    },
    {
      icon: "users",
      title: "Personal calificado",
      description: "Equipos capacitados y productos certificados en cada intervención.",
    },
  ],
};

// --------------------------------------------------------------------------
// Datos que requieren información comercial real (no provistos en el brief).
// Dejar los arrays vacíos oculta la sección correspondiente.
// --------------------------------------------------------------------------

export type Stat = { value: string; label: string };

// export const stats: Stat[] = [
//   { value: "+100", label: "Clientes" },
// ];
export const stats: Stat[] = [];

export type Testimonial = { quote: string; author: string; role: string; company: string };

export const testimonials: Testimonial[] = [];

export type Client = { name: string; logo: string };

// export const clients: Client[] = [{ name: "Cliente", logo: "/clients/cliente.svg" }];
export const clients: Client[] = [];

export const cta = {
  title: "De la oficina a la industria aeroespacial",
  description:
    "Precisión técnica en cada superficie. Contanos qué necesitás y te preparamos una propuesta a medida sin compromiso.",
  primary: { label: "Solicitar propuesta", href: "#contacto" },
  secondary: { label: "Ver servicios", href: "#servicios" },
};

export const diagnostico = {
  title: "Solicitud de Diagnóstico a Medida",
  description:
    "Contanos sobre tu operación y un especialista de SEIKET te contactará para coordinar un relevamiento y preparar una propuesta adaptada a tu instalación.",
  submit: "Solicitar Diagnóstico a Medida",
  privacy:
    "Sus datos están protegidos y serán utilizados únicamente para fines comerciales por SEIKET Facility Services.",
  installationTypes: [
    "Oficina / Espacio corporativo",
    "Galpón / Planta industrial",
    "Local comercial",
    "Hangar / Instalación aeronáutica",
    "Instalación fotovoltaica / Parque solar",
    "Otro",
  ],
  services: [
    {
      value: "Limpieza Corporativa",
      title: "Limpieza Corporativa",
      description: "Mantenimiento diario de oficinas, espacios comerciales y áreas comunes.",
    },
    {
      value: "Limpieza Industrial",
      title: "Limpieza Industrial",
      description: "Saneamiento profundo en fábricas, galpones y plantas productivas.",
    },
    {
      value: "Mantenimiento Técnico",
      title: "Mantenimiento Técnico",
      description: "Climatización, electricidad y mantenimiento preventivo de instalaciones.",
    },
    {
      value: "Limpieza Técnica / Altura",
      title: "Limpieza Técnica / Altura",
      description: "Zonas de difícil acceso, vidrios en altura y superficies técnicas.",
    },
    {
      value: "Áreas Verdes",
      title: "Áreas Verdes",
      description: "Parquización y mantenimiento de jardines y espacios exteriores.",
    },
  ],
  successMessage:
    "Recibimos tu solicitud. Un especialista de SEIKET te contactará a la brevedad.",
  errorMessage: "Revisá los campos marcados para continuar.",
  servicesIntro: "Seleccione todos los servicios en los que su empresa esté interesada.",
};
