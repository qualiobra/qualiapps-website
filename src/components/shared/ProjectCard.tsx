import { ExternalLink, Smartphone, Globe, Building2, CreditCard } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

const typeIcons = {
  website: Globe,
  mobile: Smartphone,
  system: Building2,
  fintech: CreditCard,
}

const statusLabels = {
  completed: 'Concluído',
  active: 'Ativo',
  development: 'Em desenvolvimento',
}

const statusColors = {
  completed: 'bg-accent-success/20 text-accent-success border-accent-success/30',
  active: 'bg-primary/20 text-primary border-primary/30',
  development: 'bg-accent-warning/20 text-accent-warning border-accent-warning/30',
}

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const Icon = typeIcons[project.type]

  return (
    <Card className={cn(
      'bg-secondary-light border-neutral-800 hover:border-primary/50 transition-all duration-300 group overflow-hidden',
      project.featured && 'md:col-span-2 lg:col-span-1',
      className
    )}>
      {/* Header com ícone e status */}
      <div className="p-6 pb-0 flex items-start justify-between">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <Badge
          variant="outline"
          className={cn('text-xs', statusColors[project.status])}
        >
          {statusLabels[project.status]}
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-neutral-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Link externo se houver */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors text-sm"
          >
            Ver projeto <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </CardContent>
    </Card>
  )
}
