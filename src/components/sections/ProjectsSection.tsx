import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import type { Project } from '@/types'

const projectsConfig: Array<Omit<Project, 'description'> & { descriptionKey: string }> = [
  {
    id: 'qualiobra',
    name: 'QualiObra',
    descriptionKey: 'qualiobra',
    type: 'mobile',
    tags: ['React Native', 'IA', 'Gamificação', 'TypeScript'],
    featured: true,
    status: 'development',
  },
  {
    id: 'qualiclub',
    name: 'QualiClub',
    descriptionKey: 'qualiclub',
    type: 'fintech',
    tags: ['Fintech', 'Mobile', 'Construção'],
    featured: true,
    status: 'development',
  },
  {
    id: 'qualibroker',
    name: 'QualiBroker',
    descriptionKey: 'qualibroker',
    type: 'mobile',
    tags: ['React Native', 'Vendas', 'Imobiliário', 'TypeScript'],
    featured: true,
    status: 'beta',
    url: 'https://www.qualibroker.app',
  },
  {
    id: 'engeral',
    name: 'Engeral Construtora',
    descriptionKey: 'engeral',
    type: 'website',
    tags: ['React', 'Tailwind', 'Website'],
    featured: false,
    status: 'development',
    url: 'https://www.engeralro.com.br',
  },
  {
    id: 'casa-facil',
    name: 'Casa Fácil',
    descriptionKey: 'casa-facil',
    type: 'website',
    tags: ['React', 'Tailwind', 'Website'],
    featured: false,
    status: 'development',
    url: 'https://www.casafacilblocos.com.br',
  },
  {
    id: 'araujo-empreendimentos',
    name: 'Araújo Empreendimentos',
    descriptionKey: 'araujo-empreendimentos',
    type: 'website',
    tags: ['React', 'Tailwind', 'Website'],
    featured: false,
    status: 'completed',
    url: 'https://www.araujoempreendimentos.com',
  },
]

export function ProjectsSection() {
  const { isDark } = useTheme()
  const { t } = useTranslation('projects')

  const projects = projectsConfig.map(p => ({
    ...p,
    description: t(`items.${p.descriptionKey}.description`),
  }))

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      className={cn(
        'py-20 transition-colors duration-300',
        isDark ? 'bg-secondary' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('sectionLabel')}
          subtitle={t('sectionTitle')}
        />

        {/* Featured Projects - WebApps */}
        {featuredProjects.length > 0 && (
          <div className="mb-8">
            <AnimatedSection>
              <h3 className="text-lg font-semibold text-primary mb-4">
                {t('categories.webapps')}
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <ProjectCard project={project} className="h-full" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <AnimatedSection delay={0.2}>
              <h3
                className={cn(
                  'text-lg font-semibold mb-4 transition-colors duration-300',
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                )}
              >
                {t('categories.websites')}
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={0.3 + index * 0.1}>
                  <ProjectCard project={project} className="h-full" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
