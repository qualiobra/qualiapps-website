import { User, Linkedin, Github, Instagram } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'
import type { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
  className?: string
}

export function TeamCard({ member, className }: TeamCardProps) {
  const { isDark } = useTheme()

  return (
    <Card
      className={cn(
        'transition-all duration-300 group text-center',
        isDark
          ? 'bg-secondary-light border-neutral-800 hover:border-primary/50'
          : 'bg-white border-neutral-200 hover:border-primary/50 shadow-sm',
        className
      )}
    >
      <CardContent className="p-6">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="h-12 w-12 text-secondary" />
          )}
        </div>

        <h3
          className={cn(
            'text-xl font-semibold mb-1 transition-colors duration-300',
            isDark ? 'text-white' : 'text-neutral-900'
          )}
        >
          {member.name}
        </h3>
        <p className="text-primary font-medium mb-3">
          {member.role}
        </p>
        <p
          className={cn(
            'text-sm leading-relaxed mb-4 transition-colors duration-300',
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          )}
        >
          {member.description}
        </p>

        {/* Social links */}
        {member.social && (
          <div className="flex justify-center gap-3">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-full transition-colors',
                  isDark
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-secondary'
                    : 'bg-neutral-100 text-neutral-500 hover:bg-primary hover:text-secondary'
                )}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-full transition-colors',
                  isDark
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-secondary'
                    : 'bg-neutral-100 text-neutral-500 hover:bg-primary hover:text-secondary'
                )}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-full transition-colors',
                  isDark
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-secondary'
                    : 'bg-neutral-100 text-neutral-500 hover:bg-primary hover:text-secondary'
                )}
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
