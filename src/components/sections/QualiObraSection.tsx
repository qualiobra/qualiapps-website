import { Play } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { useTranslation, Trans } from 'react-i18next'

export function QualiObraSection() {
  const { isDark } = useTheme()
  const { t } = useTranslation('qualiobra')

  return (
    <section
      id="qualiobra"
      className={cn(
        'py-24 relative transition-colors duration-300',
        isDark ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <AnimatedSection direction="left" className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 text-sm font-bold mb-6 uppercase tracking-wider">
              {t('badge')}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('headline.part1')} <br />
              <span className="text-yellow-500">{t('headline.highlight')}</span>
            </h2>
            <p
              className={cn(
                'text-lg mb-6 leading-relaxed',
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              )}
            >
              {t('description1')}
            </p>
            <p
              className={cn(
                'text-lg mb-8 leading-relaxed',
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              )}
            >
              <Trans
                i18nKey="description2"
                ns="qualiobra"
                components={{
                  strong: <strong className={isDark ? 'text-white' : 'text-neutral-900'} />
                }}
              />
            </p>

            <a
              href="https://youtu.be/SLiYfDUsmSE?si=cgb_ahcxFvw5JG5Z"
              target="_blank"
              rel="noreferrer"
              className={cn(
                'inline-flex items-center font-bold border-b-2 border-yellow-500 pb-1 transition-colors',
                isDark ? 'text-white hover:text-yellow-400' : 'text-neutral-900 hover:text-yellow-600'
              )}
            >
              <Play size={20} className="mr-2 fill-current" />
              {t('watchVideo')}
            </a>
          </AnimatedSection>

          {/* Video */}
          <AnimatedSection direction="right" delay={0.2} className="lg:w-1/2 w-full">
            <div
              className={cn(
                'relative rounded-2xl overflow-hidden shadow-2xl border aspect-video',
                isDark ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-200 bg-white'
              )}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SLiYfDUsmSE?si=cgb_ahcxFvw5JG5Z"
                title="QualiObra Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
