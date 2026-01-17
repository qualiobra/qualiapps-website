import { ChevronDown } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { faqItems } from '@/data/faq'

export function FAQSection() {
  const { isDark } = useTheme()
  const { t } = useTranslation('faq')

  return (
    <section
      id="faq"
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
            {t('title')}
          </h2>
          <p
            className={cn(
              'mt-4 transition-colors duration-300',
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            )}
          >
            {t('subtitle')}
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <AnimatedSection key={faq.id} delay={index * 0.1}>
              <details
                className={cn(
                  'group rounded-xl border transition-all duration-300',
                  isDark
                    ? 'bg-secondary-light border-neutral-700 hover:border-primary/50'
                    : 'bg-white border-neutral-200 hover:border-primary/50 shadow-sm'
                )}
              >
                <summary
                  className={cn(
                    'flex items-center justify-between cursor-pointer p-6 list-none',
                    'font-semibold text-left',
                    isDark ? 'text-white' : 'text-neutral-900'
                  )}
                >
                  <span className="pr-4">{t(`questions.${faq.id}`)}</span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 flex-shrink-0 transition-transform duration-300',
                      'group-open:rotate-180',
                      isDark ? 'text-primary' : 'text-primary'
                    )}
                  />
                </summary>
                <div
                  className={cn(
                    'px-6 pb-6 pt-0',
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  )}
                >
                  <p className="leading-relaxed">{t(`answers.${faq.id}`)}</p>
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
