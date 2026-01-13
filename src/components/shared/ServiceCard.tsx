import {
  Globe,
  Smartphone,
  Brain,
  HardHat,
  type LucideIcon
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Service } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Brain,
  HardHat,
}

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Globe

  return (
    <Card className={cn(
      'bg-secondary-light border-neutral-800 hover:border-primary/50 transition-all duration-300 group',
      className
    )}>
      <CardContent className="p-6">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {service.title}
        </h3>
        <p className="text-neutral-400 leading-relaxed">
          {service.description}
        </p>
      </CardContent>
    </Card>
  )
}
