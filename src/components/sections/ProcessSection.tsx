import { CheckCircle2, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

export function ProcessSection() {
  const { isDark } = useTheme()
  const { t } = useTranslation('process')
  const steps = t('steps', { returnObjects: true }) as string[]

  return (
    <section
      id="process"
      className={cn(
        'py-24 transition-colors duration-300',
        isDark ? 'bg-secondary-light' : 'bg-neutral-50'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              {t('sectionLabel')}
            </span>
            <h2
              className={cn(
                'mt-2 text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300',
                isDark ? 'text-white' : 'text-neutral-900'
              )}
            >
              {t('sectionTitle')}
            </h2>
            <p
              className={cn(
                'text-lg mb-8 leading-relaxed transition-colors duration-300',
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              )}
            >
              {t('sectionDescription')}
            </p>

            <div className="space-y-4">
              {steps.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle2 className="text-teal-500 mr-3 h-6 w-6 shrink-0" />
                  <span
                    className={cn(
                      'font-medium transition-colors duration-300',
                      isDark ? 'text-neutral-200' : 'text-neutral-800'
                    )}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              className={cn(
                'mt-8 flex items-center font-bold transition-colors',
                isDark
                  ? 'text-primary hover:text-primary-light'
                  : 'text-primary hover:text-primary-dark'
              )}
            >
              {t('learnMore')} <ChevronRight size={20} />
            </button>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div
                className={cn(
                  'absolute -inset-4 rounded-xl transform rotate-3 opacity-70',
                  isDark
                    ? 'bg-gradient-to-r from-cyan-900/50 to-teal-900/50'
                    : 'bg-gradient-to-r from-cyan-100 to-teal-100'
                )}
              />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipe de desenvolvedores colaborando em projeto de software"
                loading="lazy"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
