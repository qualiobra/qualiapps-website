import type { NavLink } from '@/types'

export const WHATSAPP_NUMBER = '5569996021005'
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os serviços da QualiApps.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const COMPANY = {
  name: 'QualiApps',
  tagline: 'Desenvolvimento Ágil de Aplicativos',
  email: 'contato@qualiapps.com.br',
  phone: '(69) 99602-1005',
  founded: 2025,
  location: 'Porto Velho, RO',
  address: {
    street: 'Rua Litorânea, 2457',
    neighborhood: 'Flodoaldo Pontes Pinto',
    city: 'Porto Velho',
    state: 'RO',
    full: 'Rua Litorânea, 2457 - Flodoaldo Pontes Pinto, Porto Velho/RO',
  },
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Início', to: 'hero' },
  { name: 'Sobre', to: 'about' },
  { name: 'Serviços', to: 'services' },
  { name: 'Projetos', to: 'projects' },
  { name: 'Equipe', to: 'team' },
  { name: 'Contato', to: 'contact' },
]

export const COLORS = {
  primary: '#00D4FF',
  primaryLight: '#4DE8FF',
  primaryDark: '#00A8CC',
  secondary: '#0A0A0A',
  secondaryLight: '#1A1A1A',
}
