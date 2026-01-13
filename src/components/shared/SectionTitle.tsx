import { cn } from '@/lib/utils'
import { AnimatedSection } from './AnimatedSection'

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
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <AnimatedSection className={cn('mb-12', className)}>
      <div className={alignmentClasses[align]}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
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
