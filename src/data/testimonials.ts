export interface Testimonial {
  name: string
  role: string
  content: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Thiago Muzuco',
    role: 'Diretor, Engeral Construtora',
    content:
      'A QualiApps entendeu nossa necessidade de digitalizar processos no canteiro de obras. A solução entregue não só organizou nossa gestão como aumentou o engajamento da equipe de campo.',
    image: 'https://ui-avatars.com/api/?name=Thiago+Muzuco&background=random',
  },
  {
    name: 'Felipe Araújo',
    role: 'CEO, Casa Fácil Blocos',
    content:
      'Precisávamos de um site que refletisse a solidez da nossa indústria. O time da QualiApps entregou um design impecável e uma estrutura de SEO que já está nos trazendo novos clientes.',
    image: 'https://ui-avatars.com/api/?name=Felipe+Araujo&background=random',
  },
]
