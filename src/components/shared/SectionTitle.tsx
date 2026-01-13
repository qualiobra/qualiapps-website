import { cn } from '@/lib/utils'
import { AnimatedSection } from './AnimatedSection'
import { useTheme } from '@/contexts/ThemeContext'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = 'center'
}: SectionTitleProps) {
  const { isDark } = useTheme()

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <AnimatedSection className={cn('mb-12', className)}>
      <div className={alignmentClasses[align]}>
        <h2
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300',
            isDark ? 'text-white' : 'text-neutral-900'
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              'text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300',
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            )}
          >
            {subtitle}
          </p>
        )}
        <div className={cn(
          'mt-4 h-1 w-20 bg-primary rounded-full',
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto'
        )} />
      </div>
    </AnimatedSection>
  )
}
