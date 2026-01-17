import { Link } from 'react-scroll'
import { motion } from 'motion/react'
import { ArrowRight, ChevronDown, Smartphone, Code, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

export function HeroSection() {
  const { isDark } = useTheme()
  const { t } = useTranslation('hero')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className={cn(
          'absolute inset-0 transition-colors duration-300',
          isDark
            ? 'bg-gradient-to-br from-secondary via-secondary to-primary/20'
            : 'bg-gradient-to-br from-white via-neutral-50 to-primary/10'
        )}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={cn(
            'absolute -top-1/2 -right-1/2 w-full h-full rounded-full blur-3xl',
            isDark
              ? 'bg-gradient-radial from-primary/10 to-transparent'
              : 'bg-gradient-radial from-primary/20 to-transparent'
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={cn(
            'absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full blur-3xl',
            isDark
              ? 'bg-gradient-radial from-primary/10 to-transparent'
              : 'bg-gradient-radial from-primary/15 to-transparent'
          )}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t('badge')}
          </motion.div>

          {/* Headline */}
          <h1
            className={cn(
              'text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-colors duration-300',
              isDark ? 'text-white' : 'text-neutral-900'
            )}
          >
            {t('headline.part1')}{' '}
            <span className="text-primary">{t('headline.highlight')}</span>
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              'text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed transition-colors duration-300',
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            )}
          >
            {t('subheadline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="estimator" smooth={true} offset={-80} duration={500}>
              <Button
                size="lg"
                className={cn(
                  'font-semibold px-8 group',
                  isDark
                    ? 'bg-secondary text-white hover:bg-neutral-800'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                )}
              >
                {t('cta.estimate')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="services" smooth={true} offset={-80} duration={500}>
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  'font-semibold px-8',
                  isDark
                    ? 'border-neutral-600 text-white hover:bg-white/10 hover:border-primary'
                    : 'border-neutral-300 text-neutral-900 hover:bg-neutral-100 hover:border-primary'
                )}
              >
                {t('cta.services')}
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              className={cn(
                'p-6 backdrop-blur-sm rounded-2xl border transition-all',
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-primary/50 hover:bg-white/10'
                  : 'bg-white/80 border-neutral-200 hover:border-primary/50 hover:bg-white shadow-lg'
              )}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3
                className={cn(
                  'text-lg font-bold mb-2',
                  isDark ? 'text-white' : 'text-neutral-900'
                )}
              >
                {t('features.mobile.title')}
              </h3>
              <p className={cn('text-sm', isDark ? 'text-neutral-400' : 'text-neutral-600')}>
                {t('features.mobile.description')}
              </p>
            </div>
            <div
              className={cn(
                'p-6 backdrop-blur-sm rounded-2xl border transition-all',
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-teal-500/50 hover:bg-white/10'
                  : 'bg-white/80 border-neutral-200 hover:border-teal-500/50 hover:bg-white shadow-lg'
              )}
            >
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-teal-400" />
              </div>
              <h3
                className={cn(
                  'text-lg font-bold mb-2',
                  isDark ? 'text-white' : 'text-neutral-900'
                )}
              >
                {t('features.web.title')}
              </h3>
              <p className={cn('text-sm', isDark ? 'text-neutral-400' : 'text-neutral-600')}>
                {t('features.web.description')}
              </p>
            </div>
            <div
              className={cn(
                'p-6 backdrop-blur-sm rounded-2xl border transition-all',
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-white/10'
                  : 'bg-white/80 border-neutral-200 hover:border-blue-500/50 hover:bg-white shadow-lg'
              )}
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-blue-400" />
              </div>
              <h3
                className={cn(
                  'text-lg font-bold mb-2',
                  isDark ? 'text-white' : 'text-neutral-900'
                )}
              >
                {t('features.agile.title')}
              </h3>
              <p className={cn('text-sm', isDark ? 'text-neutral-400' : 'text-neutral-600')}>
                {t('features.agile.description')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile to avoid overlap with feature cards */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          to="about"
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={cn(
              'flex flex-col items-center transition-colors',
              isDark
                ? 'text-neutral-500 hover:text-primary'
                : 'text-neutral-400 hover:text-primary'
            )}
          >
            <span className="text-sm mb-2">{t('scrollIndicator')}</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
