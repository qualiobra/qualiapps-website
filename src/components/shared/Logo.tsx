import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <img
        src="/logo.png"
        alt="QualiApps Logo"
        className="h-10 w-10 object-contain"
      />

      {showText && (
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-white">quali</span>
          <span className="text-primary">apps</span>
        </span>
      )}
    </div>
  )
}
