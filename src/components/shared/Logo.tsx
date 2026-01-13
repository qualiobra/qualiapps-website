import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  }

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <img
        src="/favicon.png"
        alt="QualiApps Logo"
        className={cn(sizeClasses[size], 'object-contain')}
      />

      {showText && (
        <span className={cn(textSizeClasses[size], 'font-bold tracking-tight')}>
          <span className="text-white">quali</span>
          <span className="text-primary">apps</span>
        </span>
      )}
    </div>
  )
}
