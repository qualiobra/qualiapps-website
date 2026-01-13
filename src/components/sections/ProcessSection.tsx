import { CheckCircle2, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const processSteps = [
  'Discovery & Planejamento Inicial',
  'Sprints de Design e Desenvolvimento',
  'Testes Automatizados (QA)',
  'Deploy Contínuo e Monitoramento',
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <span className="text-cyan-600 font-semibold uppercase tracking-wide text-sm">
              Metodologia
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Desenvolvimento Ágil e Transparente
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Utilizamos Scrum e Kanban para garantir que você tenha visibilidade total do projeto. Entregas quinzenais, feedback constante e adaptação rápida.
            </p>

            <div className="space-y-4">
              {processSteps.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle2 className="text-teal-500 mr-3 h-6 w-6 shrink-0" />
                  <span className="text-neutral-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
              Saiba mais sobre nosso processo <ChevronRight size={20} />
            </button>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-xl transform rotate-3 opacity-70" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipe trabalhando com metodologia ágil"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
