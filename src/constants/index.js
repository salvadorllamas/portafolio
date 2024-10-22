import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import { coppel, neoredes, tdcon, itzas } from "../assets/company";

// import coppel from "../assets/company/coppel.png";
// import neoredes from "../assets/company/neoredes.jpg";
// import tdcon from "../assets/company/tdcon.png";

import {
  tienda2,
  blogW1,
  guitarras,
  menu1,
  contadordeCalorias,
  dudulkits,
  webIngles,
  web1,
  web2,
  web3,
} from "../assets/proyectos";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador web",
    icon: web,
  },
  {
    title: "Desarrollador backend",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Programador",
    company_name: "Coppel.com",
    icon: coppel,
    iconBg: "#ffe500",
    date: "Septiembre 2022 - Agosto 2023",
    points: [
      "Implementación de estándares de arquitectura.",
      "Correcciones de errores de la aplicación.",
      "Implementación de nuevas funcionalidades",
      "Migraciones de servicios soap a rest.",
      "Optimización del rendimiento.",
      "Creación de nuevos módulos.",
      "Desacople de servicios.",
      "Front-end:HTML,JavaScript,CSS.",
      "Back-end: Spring Boot.",
      "Base de datos: PostgreSQL.",
    ],
  },
  {
    title: "Desarrollador web",
    company_name: "NEO REDES ÓPTICAS DE OCCIDENTE",
    icon: neoredes,
    iconBg: "#FFFFFF",
    date: "Agosto 2021 - Julio 2022",
    points: [
      "Mejora del rendimiento de las aplicaciones.",
      "Implementación de nuevas funcionalidades.",
      "Correcciones de errores de la aplicación.",
      "Planificación de Recursos Empresariales",
      "Implementando diseño adaptable.",
      "Creación de nuevos módulos.",
      "Front-end:React,Vue.js, flutter, Dart.",
      "Back-end: node.js ,express.js.",
      "Base de datos: Mongodb,squlaif.",
    ],
  },
  {
    title: "Desarrollador de software",
    company_name: "TDCon IIII.0",
    icon: tdcon,
    iconBg: "#3d4040",
    date: "Julio 2018 - Julio 2019",
    points: [
      "Realización de proyectos de automatizaciones.",
      "Elaboración de sistemas SCADA.",
      "Desarrollo de interfaces.",
      "Front-end:HTML,JavaScript,CSS.",
      "Back-end:.NET,Node-RED",
      "Base de datos: SQL Server.",
    ],
  },
  {
    title: "Desarrollador de software",
    company_name: "Fábrica de Software del ITSZaS",
    icon: itzas,
    iconBg: "#FFFFFF",
    date: "Enero 2015 - Julio 2018",
    points: [
      "CONSTRUCTORA TEUL.",
      "SISTEMA PARA LA ADMINISTRACIÓN DE UN SPA.",
      "SISTEMA DE ADMINISTRACIÓN DE IMPRENT.",
      "SISTEMA DE ADMINISTRACIÓN HELADOS MICH.",
      "Front-end:HTML,JavaScript,CSS,php.",
      "Back-end:java",
      "Base de datos: SQL Server.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DUDUL KIDS",
    description:
      "Esta web se especializa en ofrecer servicios de terapia y facilita la comunicación directa con sus especialistas.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: dudulkits,
    source_code_link: "https://dudulkids.com/",
  },
  {
    name: "Aprender Inglés",
    description:
      "He construido mi propia plataforma para aprender inglés, diseñada específicamente para guiarme en un proceso de aprendizaje paso a paso.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: webIngles,
    source_code_link: "https://ingles-web.vercel.app/",
  },
  {
    name: "Web 1 con Diseño Real",
    description:
      "El sitio web ha sido desarrollado a partir de un diseño real y cuidadosamente implementado para ofrecer una experiencia visualmente atractiva.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: web1,
    source_code_link: "https://web1-six-lime.vercel.app/",
    source_code_link2: "https://github.com/salvadorllamas/web1",
  },
  {
    name: "Web 2 con Diseño Real",
    description:
      "El sitio web ha sido desarrollado a partir de un diseño real y cuidadosamente implementado para ofrecer una experiencia visualmente atractiva.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: web2,
    source_code_link: "https://web2-phi-ruby.vercel.app/",
    source_code_link2: "https://github.com/salvadorllamas/web2",
  },
  {
    name: "Web 3 con Diseño Real",
    description:
      "El sitio web ha sido desarrollado a partir de un diseño real y cuidadosamente implementado para ofrecer una experiencia visualmente atractiva.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: web3,
    source_code_link: "https://web3-liart-ten.vercel.app/",
    source_code_link2: "https://github.com/salvadorllamas/web3",
  },
  {
    name: "CalorieTracker Plus",
    description:
      "Aplicación de conteo de calorías permite a los usuarios registrar tanto las calorías que consumen como las calorías que queman a través del ejercicio.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: contadordeCalorias,
    source_code_link: "https://contadorcalorias.llamaswebs.com/",
    source_code_link2:
      "https://github.com/salvadorllamas/CalorieTrackerPlus.git",
  },
  {
    name: "Bytevistro",
    description:
      "Plantilla de sitio web para un restaurante, que ofrece una experiencia gastronómica interactiva y moderna, permitiendo a los usuarios explorar el menú con facilidad de uso y de manera rápida.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: menu1,
    source_code_link: "https://menut2.llamaswebs.com",
  },
  {
    name: "GuitarraViva",
    description:
      "Plantilla de sitio web para una tienda de guitarras, que ofrece una experiencia de compra interactiva y moderna, permitiendo a los usuarios explorar productos y obtener información detallada sobre guitarras de manera fácil y rápida.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: guitarras,
    source_code_link: "https://template1.llamaswebs.com",
  },
  {
    name: "FitnessFusion",
    description:
      "Plataforma web que funciona como un blog, permitiendo a los usuarios explorar contenido, leer artículos y gestionar sus preferencias de lectura de manera fácil y rápida.",
    tags: [
      {
        name: "WordPress ",
        color: "blue-text-gradient",
      },
      {
        name: "phpMyAdmin",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: blogW1,
    source_code_link: "https://esqueletoblog.llamaswebs.com",
  },
  {
    name: "Estilo y Moda",
    description:
      "Plataforma web basada en WordPress que funciona como una tienda en línea, permitiendo a los usuarios explorar productos, realizar compras y gestionar sus preferencias de manera fácil y rápida.",
    tags: [
      {
        name: "WordPress ",
        color: "blue-text-gradient",
      },
      {
        name: "phpMyAdmin",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tienda2,
    source_code_link: "https://esqueletotienda2.llamaswebs.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
