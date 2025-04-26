
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt" | "es";

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

// Define all translations here
const translations: Translations = {
  // Navbar
  portfolio: {
    en: "Portfolio",
    pt: "Portfólio",
    es: "Portafolio"
  },
  // About section
  aboutMe: {
    en: "About Me",
    pt: "Sobre Mim",
    es: "Sobre Mí"
  },
  aboutText: {
    en: "I am a Software Engineer with experience in developing web and mobile applications that leverage artificial intelligence. I have worked on projects, including initiatives for my city's municipality, showcasing practical applications of AI. Additionally, I have strong knowledge of cloud technologies, enabling scalable and efficient solutions.",
    pt: "Sou um Engenheiro de Software com experiência no desenvolvimento de aplicações web e mobile que aproveitam inteligência artificial. Trabalhei em projetos, incluindo iniciativas para a prefeitura da minha cidade, demonstrando aplicações práticas de IA. Além disso, possuo sólido conhecimento em tecnologias de nuvem, permitindo soluções escaláveis e eficientes.",
    es: "Soy un Ingeniero de Software con experiencia en el desarrollo de aplicaciones web y móviles que aprovechan la inteligencia artificial. He trabajado en proyectos, incluyendo iniciativas para el municipio de mi ciudad, mostrando aplicaciones prácticas de IA. Además, tengo un sólido conocimiento de tecnologías en la nube, permitiendo soluções escalables y eficientes."
  },
  title: {
    en: "Software Engineer",
    pt: "Engenheiro de Software",
    es: "Ingeniero de Software"
  },
  degree: {
    en: "Bachelor's Degree in Computer Science",
    pt: "Bacharel em Ciência da Computação",
    es: "Licenciatura en Ciencias de la Computación"
  },
  location: {
    en: "Mossoró, Rio Grande do Norte, Brazil",
    pt: "Mossoró, Rio Grande do Norte, Brasil",
    es: "Mossoró, Rio Grande do Norte, Brasil"
  },
  downloadResume: {
    en: "Download Resume",
    pt: "Baixar Currículo",
    es: "Descargar Currículum"
  },
  // Common sections
  skills: {
    en: "Skills",
    pt: "Habilidades",
    es: "Habilidades"
  },
  experience: {
    en: "Experience",
    pt: "Experiência",
    es: "Experiencia"
  },
  certifications: {
    en: "Certifications",
    pt: "Certificações",
    es: "Certificaciones"
  },
  contact: {
    en: "Contact",
    pt: "Contato",
    es: "Contacto"
  },
  // Skill levels
  advanced: {
    en: "Advanced",
    pt: "Avançado",
    es: "Avanzado"
  },
  intermediate: {
    en: "Intermediate",
    pt: "Intermediário",
    es: "Intermedio"
  },
  // Experience
  fullStackIntern: {
    en: "Full Stack Developer Intern",
    pt: "Estagiário Desenvolvedor Full Stack",
    es: "Practicante Desarrollador Full Stack"
  },
  prefeitura: {
    en: "Prefeitura de Mossoró",
    pt: "Prefeitura de Mossoró",
    es: "Ayuntamiento de Mossoró"
  },
  ongoing: {
    en: "Ongoing",
    pt: "Em andamento",
    es: "En curso"
  },
  prefeituraDesc: {
    en: "Interned as a full-stack developer at the City Hall of Mossoró, working on bug fixes and improvements for platforms such as Codex and the HR system. Additionally, developed a custom ETL tool to streamline the city's data migration processes.",
    pt: "Estágio como desenvolvedor full-stack na Prefeitura de Mossoró, trabalhando em correções de bugs e melhorias para plataformas como Codex e o sistema de RH. Além disso, desenvolveu uma ferramenta ETL personalizada para otimizar os processos de migração de dados da cidade.",
    es: "Prácticas como desarrollador full-stack en el Ayuntamiento de Mossoró, trabajando en corrección de errores y mejoras para plataformas como Codex y el sistema de RRHH. Además, desarrolló una herramienta ETL personalizada para optimizar los procesos de migración de datos de la ciudad."
  },
  researchScholarship: {
    en: "Research Scholarship",
    pt: "Bolsista de Pesquisa",
    es: "Becario de Investigación"
  },
  higiaWay: {
    en: "Higia Way Project",
    pt: "Projeto Higia Way",
    es: "Proyecto Higia Way"
  },
  higiaWayDesc: {
    en: "Contributed to the development of an AI assistant designed to support pregnant women in their daily routines. Also assisted in debugging and maintaining the clinic's legacy system.",
    pt: "Contribuiu para o desenvolvimento de um assistente de IA projetado para apoiar mulheres grávidas em suas rotinas diárias. Também auxiliou na depuração e manutenção do sistema legado da clínica.",
    es: "Contribuyó al desarrollo de un asistente de IA diseñado para apoyar a mujeres embarazadas en sus rutinas diarias. También ayudó en la depuración y mantenimiento del sistema heredado de la clínica."
  },
  volunteerDeveloper: {
    en: "Volunteer Developer",
    pt: "Desenvolvedor Voluntário",
    es: "Desarrollador Voluntario"
  },
  languageLearningApp: {
    en: "Language Learning AI App",
    pt: "App de IA para Aprendizado de Idiomas",
    es: "Aplicación de IA para Aprendizaje de Idiomas"
  },
  completed: {
    en: "Completed",
    pt: "Concluído",
    es: "Completado"
  },
  languageLearningAppDesc: {
    en: "Contributed to the development of an AI-powered micro-SaaS language learning app, focusing on user engagement features and advanced natural language processing. Helped build a scalable solution for immersive and personalized language acquisition.",
    pt: "Contribuiu para o desenvolvimento de um aplicativo micro-SaaS de aprendizado de idiomas com IA, com foco em recursos de engajamento do usuário e processamento avançado de linguagem natural. Ajudou a construir uma solução escalável para aquisição de idiomas imersiva e personalizada.",
    es: "Contribuyó al desarrollo de una aplicación micro-SaaS de aprendizaje de idiomas impulsada por IA, centrándose en funciones de compromiso del usuario y procesamiento avanzado del lenguaje natural. Ayudó a construir una solución escalable para la adquisición inmersiva y personalizada de idiomas."
  },
  intern: {
    en: "Intern",
    pt: "Estagiário",
    es: "Practicante"
  },
  compassUol: {
    en: "Compass UOL",
    pt: "Compass UOL",
    es: "Compass UOL"
  },
  compassUolDesc: {
    en: "Acquired hands-on experience with machine learning techniques using AWS and earned the AWS Cloud Practitioner certification. Contributed to developing an application for tracking lost animals.",
    pt: "Adquiriu experiência prática com técnicas de machine learning usando AWS e obteve a certificação AWS Cloud Practitioner. Contribuiu para o desenvolvimento de um aplicativo para rastreamento de animais perdidos.",
    es: "Adquirió experiencia práctica con técnicas de aprendizaje automático utilizando AWS y obtuvo la certificación AWS Cloud Practitioner. Contribuyó al desarrollo de una aplicación para rastrear animales perdidos."
  },
  volunteerInstructor: {
    en: "Volunteer Instructor",
    pt: "Instrutor Voluntário",
    es: "Instructor Voluntario"
  },
  universityCourses: {
    en: "University Courses",
    pt: "Cursos Universitários",
    es: "Cursos Universitarios"
  },
  volunteerInstructorDesc: {
    en: "Taught basic programming and algorithms to students from various higher education programs. Empowered over 60 students with foundational knowledge in algorithms and computational thinking.",
    pt: "Ensinou programação básica e algoritmos a estudantes de vários programas de ensino superior. Capacitou mais de 60 alunos com conhecimentos fundamentais em algoritmos e pensamento computacional.",
    es: "Enseñó programación básica y algoritmos a estudiantes de diversos programas de educación superior. Capacitó a más de 60 estudiantes con conocimientos fundamentales en algoritmos y pensamiento computacional."
  },
  // Certifications
  awsCloudPractitioner: {
    en: "AWS Cloud Practitioner – Amazon Web Services (2024)",
    pt: "AWS Cloud Practitioner – Amazon Web Services (2024)",
    es: "AWS Cloud Practitioner – Amazon Web Services (2024)"
  },
  aiAssisted: {
    en: "AI-Assisted Certified Professional – Compass UOL (2024)",
    pt: "Profissional Certificado em Assistência por IA – Compass UOL (2024)",
    es: "Profesional Certificado en Asistencia de IA – Compass UOL (2024)"
  },
  genAiCertification: {
    en: "Gen AI Technical Certification – Compass UOL (2024)",
    pt: "Certificação Técnica em IA Generativa – Compass UOL (2024)",
    es: "Certificación Técnica en IA Generativa – Compass UOL (2024)"
  },
  // Contact section
  getInTouch: {
    en: "Get in touch",
    pt: "Entre em contato",
    es: "Ponte en contacto"
  },
  name: {
    en: "Name",
    pt: "Nome",
    es: "Nombre"
  },
  email: {
    en: "Email",
    pt: "Email",
    es: "Correo electrónico"
  },
  message: {
    en: "Message",
    pt: "Mensagem",
    es: "Mensaje"
  },
  sendMessage: {
    en: "Send Message",
    pt: "Enviar Mensagem",
    es: "Enviar Mensaje"
  },
  connectWithMe: {
    en: "Connect with me",
    pt: "Conecte-se comigo",
    es: "Conéctate conmigo"
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
