import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { TeamCard } from '@/components/shared/TeamCard'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

const teamConfig = [
  { id: 'lucas', name: 'Lucas Araújo', image: '/lucas.png' },
  { id: 'felipe', name: 'Felipe Trindade', image: '/felipe.jpeg' },
  { id: 'alana', name: 'Alana Caled', image: '/alana.jpeg' },
]

export function TeamSection() {
  const { isDark } = useTheme()
  const { t } = useTranslation('team')

  return (
    <section
      id="team"
      className={cn(
        'py-20 transition-colors duration-300',
        isDark ? 'bg-secondary-light' : 'bg-neutral-50'
      )}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('sectionLabel')}
          subtitle={t('sectionTitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamConfig.map((member, index) => (
            <AnimatedSection key={member.id} delay={index * 0.1}>
              <TeamCard
                member={{
                  ...member,
                  role: t(`members.${member.id}.role`),
                  description: t(`members.${member.id}.description`),
                }}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Hiring banner */}
        <AnimatedSection delay={0.4} className="mt-12">
          <div
            className={cn(
              'max-w-2xl mx-auto text-center p-8 rounded-2xl border transition-colors duration-300',
              isDark
                ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20'
                : 'bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20'
            )}
          >
            <h3
              className={cn(
                'text-xl font-semibold mb-2 transition-colors duration-300',
                isDark ? 'text-white' : 'text-neutral-900'
              )}
            >
              {t('hiring.title')}
            </h3>
            <p
              className={cn(
                'mb-4 transition-colors duration-300',
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              )}
            >
              {t('hiring.description')}
            </p>
            <a
              href="mailto:contato@qualiapps.com.br?subject=Quero fazer parte do time"
              className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
            >
              {t('hiring.cta')}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
