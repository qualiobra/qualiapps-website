import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { services } from '@/data/services'

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Soluções completas para sua transformação digital"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} className="h-full" />
            </AnimatedSection>
          ))}
        </div>

        {/* Additional info */}
        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Cada projeto é único. Trabalhamos lado a lado com nossos clientes para
            entender suas necessidades e entregar soluções personalizadas que
            realmente fazem a diferença.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
