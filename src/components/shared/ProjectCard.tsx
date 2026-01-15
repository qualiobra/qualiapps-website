import { ExternalLink, Smartphone, Globe, Building2, CreditCard } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'
import { useTranslation } from 'react-i18next'
import type { Project } from '@/types'

const typeIcons = {
  website: Globe,
  mobile: Smartphone,
  system: Building2,
  fintech: CreditCard,
}

const statusColors = {
  completed: 'bg-accent-success/20 text-accent-success border-accent-success/30',
  active: 'bg-primary/20 text-primary border-primary/30',
  development: 'bg-accent-warning/20 text-accent-warning border-accent-warning/30',
  beta: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
}

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const Icon = typeIcons[project.type]
  const { isDark } = useTheme()
  const { t } = useTranslation('projects')

  return (
    <Card
      className={cn(
        'transition-all duration-300 group overflow-hidden',
        isDark
          ? 'bg-secondary-light border-neutral-800 hover:border-primary/50'
          : 'bg-white border-neutral-200 hover:border-primary/50 shadow-sm',
        project.featured && 'md:col-span-2 lg:col-span-1',
        className
      )}
    >
      {/* Header com ícone e status */}
      <div className="p-6 pb-0 flex items-start justify-between">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <Badge
          variant="outline"
          className={cn('text-xs', statusColors[project.status])}
        >
          {t(`status.${project.status}`)}
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3
          className={cn(
            'text-xl font-semibold mb-2 group-hover:text-primary transition-colors',
            isDark ? 'text-white' : 'text-neutral-900'
          )}
        >
          {project.name}
        </h3>
        <p
          className={cn(
            'leading-relaxed mb-4 line-clamp-3 transition-colors duration-300',
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          )}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className={cn(
                'transition-colors duration-300',
                isDark
                  ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              )}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Link externo se houver */}
        {project.url && (
          project.id === 'qualibroker' ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30 transition-all text-sm font-semibold"
            >
              SEJA UM BETA TESTER <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors text-sm"
            >
              {t('viewProject')} <ExternalLink className="h-4 w-4" />
            </a>
          )
        )}
      </CardContent>
    </Card>
  )
}
