import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  // Separate featured projects
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Projetos"
          subtitle="Conheça alguns dos nossos trabalhos"
        />

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-8">
            <AnimatedSection>
              <h3 className="text-lg font-semibold text-primary mb-4">
                Projetos em Destaque
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h3 className="text-lg font-semibold text-neutral-400 mb-4">
                Websites Entregues
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
