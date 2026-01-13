import { Heart, Shield, Palette, Rocket } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'

const values = [
  {
    icon: Heart,
    title: 'Fé em Deus',
    description: 'Nossos valores fundamentais guiam cada decisão que tomamos.',
  },
  {
    icon: Shield,
    title: 'Verdade',
    description: 'Transparência e honestidade em todas as relações.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Excelência visual e experiência do usuário em primeiro lugar.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Sobre a QualiApps"
          subtitle="Conheça nossa história e o que nos move"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Rocket className="h-4 w-4" />
                Nossa História
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Do sonho de inovar na construção civil ao desenvolvimento de software
              </h3>

              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p>
                  Fundada em <span className="text-primary font-semibold">2025</span> por{' '}
                  <span className="text-white font-semibold">Lucas Araújo</span>, a QualiApps
                  nasceu de uma visão: criar sistemas inovadores para a construção civil.
                </p>
                <p>
                  O primeiro projeto, <span className="text-primary font-semibold">QualiObra</span>,
                  combina gamificação com gestão de qualidade, permitindo que trabalhadores
                  ganhem pontos por conformidade e interajam com uma IA para validar serviços.
                </p>
                <p>
                  Usando ferramentas de IA como Claude Code para aprender desenvolvimento,
                  Lucas transformou essa ideia em realidade e expandiu a QualiApps para
                  atender empresas de diversos setores.
                </p>
              </div>

              {/* Mission */}
              <Card className="bg-primary/10 border-primary/30">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Nossa Missão</h4>
                  <p className="text-neutral-300">
                    Oferecer sistemas e websites para pequenas e médias empresas com
                    preços justos, proporcionando maior engajamento interno e externo,
                    com foco em inteligência artificial.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-6">
                Nossos Valores
              </h4>

              {values.map((value) => (
                <Card
                  key={value.title}
                  className="bg-secondary-light border-neutral-800 hover:border-primary/50 transition-colors"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{value.title}</h5>
                      <p className="text-neutral-400 text-sm">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card className="bg-secondary-light border-neutral-800 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-1">2025</div>
                    <div className="text-sm text-neutral-400">Ano de Fundação</div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary-light border-neutral-800 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-neutral-400">Projetos</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
