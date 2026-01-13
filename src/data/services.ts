import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, landing pages e plataformas web modernas e responsivas que convertem visitantes em clientes.',
    icon: 'Globe',
  },
  {
    id: 'mobile',
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos para iOS e Android com foco em experiência do usuário e performance.',
    icon: 'Smartphone',
  },
  {
    id: 'ai',
    title: 'Sistemas com IA',
    description: 'Integração de inteligência artificial para automação de processos, análise de dados e insights inteligentes.',
    icon: 'Brain',
  },
  {
    id: 'construction',
    title: 'Tecnologia para Construção',
    description: 'Soluções especializadas para o setor de construção civil: gestão de qualidade, EPIs e produtividade.',
    icon: 'HardHat',
  },
]
