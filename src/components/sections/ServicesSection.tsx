import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { services } from '@/data/services'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function ServicesSection() {
  const { isDark } = useTheme()

  return (
    <section
      id="services"
      className={cn(
        'py-24 transition-colors duration-300',
        isDark ? 'bg-secondary-light' : 'bg-neutral-50'
      )}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              Nossos Servicos
            </span>
            <h2
              className={cn(
                'mt-2 text-3xl md:text-4xl font-bold transition-colors duration-300',
                isDark ? 'text-white' : 'text-neutral-900'
              )}
            >
              Expertise tecnica para escalar seu negocio
            </h2>
            <p
              className={cn(
                'mt-4 text-xl transition-colors duration-300',
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              )}
            >
              Oferecemos um ciclo completo de desenvolvimento, do design a implementacao e manutencao.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} className="h-full" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
