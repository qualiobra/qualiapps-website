import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { services } from '@/data/services'

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-cyan-600 font-semibold uppercase tracking-wide text-sm">
              Nossos Serviços
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
              Expertise técnica para escalar seu negócio
            </h2>
            <p className="mt-4 text-xl text-neutral-500">
              Oferecemos um ciclo completo de desenvolvimento, do design à implementação e manutenção.
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
