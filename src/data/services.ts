import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'mobile',
    title: 'Desenvolvimento Mobile',
    description: 'Aplicativos iOS e Android nativos ou híbridos (React Native/Flutter) com performance impecável.',
    icon: 'Smartphone',
    color: 'cyan',
  },
  {
    id: 'web',
    title: 'Aplicações Web',
    description: 'Sistemas web complexos, Dashboards e SPAs utilizando React, Next.js e tecnologias modernas.',
    icon: 'Monitor',
    color: 'teal',
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Interfaces intuitivas e centradas no usuário. Prototipação de alta fidelidade e design systems.',
    icon: 'Paintbrush',
    color: 'purple',
  },
  {
    id: 'backend',
    title: 'Backend & API',
    description: 'Arquiteturas robustas, microserviços e APIs escaláveis com Node.js, Python ou Go.',
    icon: 'Database',
    color: 'blue',
  },
  {
    id: 'qa',
    title: 'QA & Testes',
    description: 'Garantia de qualidade com testes automatizados e manuais para entregar software livre de bugs.',
    icon: 'ShieldCheck',
    color: 'green',
  },
  {
    id: 'consulting',
    title: 'Consultoria Tech',
    description: 'Análise de viabilidade técnica, arquitetura de software e transformação digital.',
    icon: 'Search',
    color: 'orange',
  },
]
