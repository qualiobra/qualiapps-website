import {
  Globe,
  Smartphone,
  Brain,
  HardHat,
  Monitor,
  Paintbrush,
  Database,
  ShieldCheck,
  Search,
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
  Monitor,
  Paintbrush,
  Database,
  ShieldCheck,
  Search,
}

const colorMap: Record<string, { bg: string; hover: string }> = {
  cyan: { bg: 'bg-cyan-500', hover: 'group-hover:border-cyan-500/50' },
  teal: { bg: 'bg-teal-500', hover: 'group-hover:border-teal-500/50' },
  purple: { bg: 'bg-purple-500', hover: 'group-hover:border-purple-500/50' },
  blue: { bg: 'bg-blue-600', hover: 'group-hover:border-blue-500/50' },
  green: { bg: 'bg-green-500', hover: 'group-hover:border-green-500/50' },
  orange: { bg: 'bg-orange-500', hover: 'group-hover:border-orange-500/50' },
}

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Globe
  const color = colorMap[service.color || 'cyan'] || colorMap.cyan

  return (
    <Card className={cn(
      'bg-white border-neutral-100 hover:shadow-lg transition-all duration-300 group',
      color.hover,
      className
    )}>
      <CardContent className="p-8">
        <div className={cn(
          'mb-6 w-14 h-14 rounded-xl flex items-center justify-center shadow-md transform group-hover:-translate-y-1 transition-transform',
          color.bg
        )}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-cyan-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-neutral-500 leading-relaxed">
          {service.description}
        </p>
      </CardContent>
    </Card>
  )
}
