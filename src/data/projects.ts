import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'qualiobra',
    name: 'QualiObra',
    description: 'Sistema gamificado de gestão da qualidade para construção civil. Trabalhadores ganham pontos por conformidade de qualidade e uso de EPI/EPC. Chat com IA (Quali) para validação de serviços através de imagens e vídeos.',
    type: 'mobile',
    tags: ['React Native', 'IA', 'Gamificação', 'TypeScript'],
    featured: true,
    status: 'active',
  },
  {
    id: 'qualiclub',
    name: 'QualiClub',
    description: 'Projeto fintech para o setor de construção civil. Soluções financeiras inovadoras para construtoras e trabalhadores.',
    type: 'fintech',
    tags: ['Fintech', 'Mobile', 'Construção'],
    featured: true,
    status: 'development',
  },
  {
    id: 'engeral',
    name: 'Engeral Construtora',
    description: 'Site institucional moderno para construtora, destacando projetos e expertise em construção civil.',
    type: 'website',
    tags: ['React', 'Tailwind', 'Website'],
    featured: false,
    status: 'completed',
  },
  {
    id: 'casa-facil',
    name: 'Casa Fácil',
    description: 'Site para indústria de fabricação de blocos de concreto estrutural, com catálogo de produtos e contato.',
    type: 'website',
    tags: ['React', 'Tailwind', 'Website'],
    featured: false,
    status: 'completed',
  },
  {
    id: 'araujo-empreendimentos',
    name: 'Araújo Empreendimentos',
    description: 'Site institucional para incorporadora, apresentando empreendimentos e oportunidades de investimento.',
    type: 'website',
    tags: ['React', 'Tailwind', 'Website'],
    featured: false,
    status: 'completed',
  },
]
