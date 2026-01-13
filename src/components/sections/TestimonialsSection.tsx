import { Quote } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { testimonials } from '@/data/testimonials'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const { isDark } = useTheme()

  return (
    <section
      id="testimonials"
      className={cn(
        'py-24 transition-colors duration-300',
        isDark ? 'bg-secondary' : 'bg-neutral-50'
      )}
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2
            className={cn(
              'text-3xl font-bold transition-colors duration-300',
              isDark ? 'text-white' : 'text-neutral-900'
            )}
          >
            O que dizem nossos parceiros
          </h2>
          <p
            className={cn(
              'mt-4 transition-colors duration-300',
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            )}
          >
            Resultados reais para empresas reais.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={cn(
                  'p-8 rounded-2xl transition-all duration-300 border relative h-full',
                  isDark
                    ? 'bg-secondary-light border-neutral-700 hover:shadow-md hover:shadow-black/20'
                    : 'bg-white border-neutral-100 shadow-sm hover:shadow-md'
                )}
              >
                <Quote
                  className={cn(
                    'absolute top-8 right-8 w-10 h-10',
                    isDark ? 'text-primary/20' : 'text-cyan-100'
                  )}
                />
                <p
                  className={cn(
                    'italic mb-6 relative z-10 transition-colors duration-300',
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  )}
                >
                  "{t.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4
                      className={cn(
                        'font-bold transition-colors duration-300',
                        isDark ? 'text-white' : 'text-neutral-900'
                      )}
                    >
                      {t.name}
                    </h4>
                    <p
                      className={cn(
                        'text-xs uppercase tracking-wide transition-colors duration-300',
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      )}
                    >
                      {t.role}
                    </p>
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
