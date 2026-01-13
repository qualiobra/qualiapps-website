import { Quote } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900">O que dizem nossos parceiros</h2>
          <p className="text-neutral-500 mt-4">Resultados reais para empresas reais.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 relative h-full">
                <Quote className="absolute top-8 right-8 text-cyan-100 w-10 h-10" />
                <p className="text-neutral-600 italic mb-6 relative z-10">"{t.content}"</p>
                <div className="flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-neutral-900">{t.name}</h4>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
