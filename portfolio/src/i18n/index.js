// src/i18n/index.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    name: 'João Sales',
    menu: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact'
    }
  },
  pt: {
    name: 'João Sales',
    menu: {
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      certifications: 'Certificações',
      contact: 'Contato'
    }
  },
  es: {
    name: 'João Sales',
    menu: {
      about: 'Acerca de',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      contact: 'Contacto'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages
})

export default i18n
