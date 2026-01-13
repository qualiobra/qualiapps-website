import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { TeamCard } from '@/components/shared/TeamCard'
import { team } from '@/data/team'

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossa Equipe"
          subtitle="As pessoas por trás da QualiApps"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <AnimatedSection key={member.id} delay={index * 0.1}>
              <TeamCard member={member} className="h-full" />
            </AnimatedSection>
          ))}
        </div>

        {/* Hiring banner */}
        <AnimatedSection delay={0.4} className="mt-12">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-xl font-semibold text-white mb-2">
              Quer fazer parte do time?
            </h3>
            <p className="text-neutral-400 mb-4">
              Estamos sempre em busca de talentos apaixonados por tecnologia.
            </p>
            <a
              href="mailto:contato@qualiapps.com.br?subject=Quero fazer parte do time"
              className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
            >
              Entre em contato
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
