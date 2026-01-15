import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translations
import ptCommon from './locales/pt/common.json'
import ptNavigation from './locales/pt/navigation.json'
import ptHero from './locales/pt/hero.json'
import ptServices from './locales/pt/services.json'
import ptAbout from './locales/pt/about.json'
import ptContact from './locales/pt/contact.json'
import ptEstimator from './locales/pt/estimator.json'
import ptTeam from './locales/pt/team.json'
import ptProjects from './locales/pt/projects.json'
import ptProcess from './locales/pt/process.json'
import ptQualiobra from './locales/pt/qualiobra.json'
import ptTestimonials from './locales/pt/testimonials.json'
import ptFooter from './locales/pt/footer.json'

import enCommon from './locales/en/common.json'
import enNavigation from './locales/en/navigation.json'
import enHero from './locales/en/hero.json'
import enServices from './locales/en/services.json'
import enAbout from './locales/en/about.json'
import enContact from './locales/en/contact.json'
import enEstimator from './locales/en/estimator.json'
import enTeam from './locales/en/team.json'
import enProjects from './locales/en/projects.json'
import enProcess from './locales/en/process.json'
import enQualiobra from './locales/en/qualiobra.json'
import enTestimonials from './locales/en/testimonials.json'
import enFooter from './locales/en/footer.json'

export const resources = {
  pt: {
    common: ptCommon,
    navigation: ptNavigation,
    hero: ptHero,
    services: ptServices,
    about: ptAbout,
    contact: ptContact,
    estimator: ptEstimator,
    team: ptTeam,
    projects: ptProjects,
    process: ptProcess,
    qualiobra: ptQualiobra,
    testimonials: ptTestimonials,
    footer: ptFooter,
  },
  en: {
    common: enCommon,
    navigation: enNavigation,
    hero: enHero,
    services: enServices,
    about: enAbout,
    contact: enContact,
    estimator: enEstimator,
    team: enTeam,
    projects: enProjects,
    process: enProcess,
    qualiobra: enQualiobra,
    testimonials: enTestimonials,
    footer: enFooter,
  },
}

// Get saved language or default to Portuguese
const savedLanguage = localStorage.getItem('qualiapps-language') as 'pt' | 'en' | null

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || 'pt',
  fallbackLng: 'pt',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
