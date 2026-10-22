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
import servicio1 from "../assets/oficina.jpg";
import servicio2 from "../assets/limpieza-de-obras.webp";
import servicioAvion from "../assets/aeronautica.jpg";
import servicio3 from "../assets/finalObra.webp";
import servicio4 from "../assets/finalObra.webp";
import cleaning from "../assets/industrial.jpg";
import oficina from "../assets/corporativo.jpg";
import industrial from "../assets/construccion.avif";
import aeronautica from "../assets/aviones.jpg";
import paneles from "../assets/paneles-espacio.jpg";
import paneles2 from "../assets/paneles.jpg";

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
  { label: "Contacto", href: "#contacto" },
];

export type HeroSlide = {
  title: string;
  description: string;
  /** Imagen local importada desde `src/assets`. */
  image: ImageMetadata;
  imageAlt: string;
  /** CSS object-position para conservar el punto focal (ej. "center 40%"). */
  focalPoint?: string;
};

export const heroCarousel = {
  label: "Contenido destacado",
  /** Intervalo de autoplay en milisegundos. */
  interval: 4000,
  slides: [
    {
      title: "Espacios impecables. Empresas que avanzan.",
      description:
        "Soluciones integrales de limpieza y mantenimiento corporativo que garantizan entornos de trabajo cuidados y preparados para el día a día.",
      image: servicio1,
      imageAlt:
        "Equipo SEIKET gestionando el mantenimiento de un entorno corporativo.",
      focalPoint: "center",
    },
    {
      title: "Preparados para los grandes desafíos.",
      description:
        "Limpieza profesional para fábricas y galpones industriales, con personal capacitado, precisión operativa y altos estándares de seguridad.",
      image: servicio2,
      imageAlt:
        "Limpieza técnica del fuselaje de una aeronave con protocolos certificados.",
      focalPoint: "center",
    },
    {
      title: "Tu obra terminada. Todo listo para empezar.",
      description:
        "Transformamos espacios residenciales, comerciales e industriales en ambientes limpios y preparados para su próximo uso.",
      image: servicio3,
      imageAlt:
        "Limpieza profesional de paneles solares fotovoltaicos.",
      focalPoint: "center",
    },
    {
      title: "Cada avión merece una limpieza de precisión.",
      description:
        "Limpieza técnica de aviones con procedimientos específicos y productos adecuados para el cuidado de sus superficies. Precisión y atención al detalle en cada intervención.",
      image: servicioAvion,
      imageAlt:
        "Limpieza técnica de una aeronave con procedimientos específicos y productos adecuados.",
      focalPoint: "center",
    },
  ] as HeroSlide[],
};

export type Service = {
  icon: string;
  title: string;
  description: string;
  /** Foto de la tarjeta. */
  image: ImageMetadata;
  imageAlt: string;
};

// Servicios de la sección Servicios (3 arriba + 2 abajo). El orden define esa
// sección y el listado del footer.
export const services: Service[] = [
  {
    icon: "building",
    title: "Facility Management Corporativo",
    description:
      "Gestión integral y mantenimiento de oficinas, empresas e instituciones, con supervisión permanente y control de calidad.",
    image: servicio1,
    imageAlt:
      "Equipo SEIKET gestionando el mantenimiento de un entorno corporativo.",
  },
  {
    icon: "hard-hat",
    title: "Limpieza Industrial",
    description:
      "Saneamiento profundo en fábricas, galpones y plantas productivas, con personal capacitado y altos estándares de seguridad.",
    image: cleaning,
    imageAlt: "Limpieza industrial en fábricas y galpones.",
  },
  {
    icon: "wrench",
    title: "Limpieza Final de Obra",
    description:
      "Convertimos su obra terminada en un espacio listo para habitar o producir: casas, fábricas, galpones y locales comerciales.",
    image: servicio4,
    imageAlt:
      "Limpieza final de obra en un espacio listo para habitar o producir.",
  },
  {
    icon: "plane",
    title: "Limpieza Técnica Aeronáutica",
    description:
      "Protocolos estrictos y productos certificados, no abrasivos, para el cuidado del fuselaje de aviones y aeronaves.\n\nMás info",
    image: servicioAvion,
    imageAlt:
      "Limpieza técnica del fuselaje de una aeronave con protocolos certificados.",
  },
  {
    icon: "sun",
    title: "Limpieza de Paneles Solares",
    description:
      "Un panel sucio pierde eficiencia. Limpieza profesional para maximizar el rendimiento de su energía limpia.",
    image: paneles2,
    imageAlt: "Limpieza profesional de paneles solares fotovoltaicos.",
  },
];

export type Sector = {
  icon?: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  focalPoint?: string;
};

export const sectors: Sector[] = [
  {
    title: "Corporativo",
    description:
      "Limpieza y mantenimiento para oficinas, empresas e instituciones que exigen espacios cuidados y una operación eficiente.",
    image: oficina,
    imageAlt: "Oficina corporativa moderna, luminosa y profesional, con espacios de trabajo impecables.",
    focalPoint: "center",
  },
  {
    title: "Industrial",
    description:
      "Soluciones profesionales para fábricas, galpones y proyectos de construcción, desde el mantenimiento hasta la limpieza final de obra.",
    image: industrial,
    imageAlt: "Interior de una nave industrial, fábrica o galpón de grandes dimensiones con actividades operativas.",
    focalPoint: "center 40%",
  },
  {
    title: "Aeronáutico",
    description:
      "Limpieza especializada de aeronaves con protocolos específicos y productos adecuados para el cuidado de sus superficies.",
    image: aeronautica,
    imageAlt: "Aeronave en un hangar o personal realizando tareas de limpieza técnica en un avión.",
    focalPoint: "center",
  },
  {
    title: "Energía y renovables",
    description:
      "Limpieza profesional de paneles solares para contribuir a conservar su rendimiento y eficiencia energética.",
    image: paneles,
    imageAlt: "Instalación fotovoltaica de gran escala con paneles solares, iluminación natural y composición visual atractiva.",
    focalPoint: "center",
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

export const about = {
  eyebrow: "Nosotros",
  title: "Precisión técnica en cada superficie",
  paragraphs: [
    "SEIKET Facility Services es una empresa de servicios integrales para empresas, especializada en Facility Management, mantenimiento y limpiezas técnicas de alta complejidad.",
    "Nos posicionamos un escalón más arriba de la limpieza tradicional: intervenimos desde un final de obra pesado en una fábrica hasta la delicadeza que requiere el fuselaje de un avión o la superficie de un panel solar, con protocolos estrictos y personal calificado.",
  ],
  values: [
  
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
    {
      value: "Limpieza Técnica Aeronáutica",
      title: "Limpieza Técnica Aeronáutica",
      description: "Protocolos estrictos y productos certificados, no abrasivos, para el cuidado del fuselaje de aviones y aeronaves.",
    },
  ],
  successMessage:
    "Recibimos tu solicitud. Un especialista de SEIKET te contactará a la brevedad.",
  errorMessage: "Revisá los campos marcados para continuar.",
  servicesIntro: "Seleccione todos los servicios en los que su empresa esté interesada.",
};
