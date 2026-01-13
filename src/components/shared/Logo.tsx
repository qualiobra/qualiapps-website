import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Logo SVG baseado no logo da QualiApps */}
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Quadrado pequeno superior esquerdo */}
        <rect
          x="4"
          y="4"
          width="14"
          height="14"
          rx="3"
          fill="#00D4FF"
        />
        {/* Quadrado grande inferior direito */}
        <rect
          x="14"
          y="18"
          width="26"
          height="26"
          rx="6"
          fill="#00D4FF"
        />
      </svg>

      {showText && (
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-white">quali</span>
          <span className="text-primary">apps</span>
        </span>
      )}
    </div>
  )
}
