import { User, Linkedin, Github, Instagram } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
  className?: string
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <Card className={cn(
      'bg-secondary-light border-neutral-800 hover:border-primary/50 transition-all duration-300 group text-center',
      className
    )}>
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

        <h3 className="text-xl font-semibold text-white mb-1">
          {member.name}
        </h3>
        <p className="text-primary font-medium mb-3">
          {member.role}
        </p>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
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
                className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-secondary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-secondary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-secondary transition-colors"
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
