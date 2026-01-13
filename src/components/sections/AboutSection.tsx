import { Heart, ShieldCheck, Palette, HardHat, Building2, Hammer } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

const values = [
  {
    icon: Heart,
    title: 'Fé em Deus',
    description: 'Nosso alicerce inegociável. Acreditamos que o trabalho feito com propósito, ética e gratidão gera frutos que vão além do código.',
    color: 'bg-blue-500',
  },
  {
    icon: ShieldCheck,
    title: 'Verdade',
    description: 'Transparência radical com o cliente. Sem letras miúdas. Entregamos o que prometemos, com honestidade sobre prazos e custos.',
    color: 'bg-teal-500',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'A funcionalidade não vive sem a beleza. Criamos interfaces que encantam e proporcionam uma experiência de usuário fluida e moderna.',
    color: 'bg-purple-500',
  },
]

const projects = [
  { name: 'Engeral Construtora', type: 'Cliente Corporativo' },
  { name: 'Casa Fácil', type: 'Indústria' },
  { name: 'Araújo Empreendimentos', type: 'Construção Civil' },
  { name: 'QualiObra', type: 'Produto Próprio (IA)' },
  { name: 'QualiClub', type: 'Fintech (Em breve)' },
]

export function AboutSection() {
  const { isDark } = useTheme()

  return (
    <section
      id="about"
      className={cn(
        'py-24 relative overflow-hidden transition-colors duration-300',
        isDark ? 'bg-secondary' : 'bg-white'
      )}
    >
      {/* Decorative background */}
      <div
        className={cn(
          'absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full blur-3xl -z-10',
          isDark ? 'bg-primary/5' : 'bg-neutral-50'
        )}
      />

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-teal-400 rounded-2xl opacity-20 blur-lg transform -rotate-2" />
              <img
                src="/nossa-historia.png"
                alt="Nossa História - QualiApps"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div
                className={cn(
                  'absolute -bottom-6 -right-6 p-6 rounded-xl shadow-xl max-w-xs hidden md:block transition-colors duration-300',
                  isDark
                    ? 'bg-secondary-light border border-neutral-700'
                    : 'bg-white border border-neutral-100'
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <HardHat className="text-cyan-500 w-8 h-8" />
                  </div>
                  <div>
                    <p
                      className={cn(
                        'text-xs font-semibold uppercase',
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      )}
                    >
                      Inovação
                    </p>
                    <p
                      className={cn(
                        'text-base font-bold',
                        isDark ? 'text-white' : 'text-neutral-900'
                      )}
                    >
                      IA + Construção Civil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">
                Nossa História
              </span>
              <h2
                className={cn(
                  'mt-2 text-4xl font-bold mb-6 transition-colors duration-300',
                  isDark ? 'text-white' : 'text-neutral-900'
                )}
              >
                Nascidos da obra,<br />criados para o{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                  futuro digital
                </span>.
              </h2>
              <p
                className={cn(
                  'text-lg mb-6 leading-relaxed transition-colors duration-300',
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                )}
              >
                Fundada em 2025 por Lucas Araújo, a QualiApps surgiu de uma necessidade real no canteiro de obras. O sonho começou com o <strong className={isDark ? 'text-white' : 'text-neutral-900'}>QualiObra</strong>, um sistema gamificado onde a Inteligência Artificial "Quali" avalia a segurança e qualidade através de fotos enviadas pelos trabalhadores.
              </p>
              <p
                className={cn(
                  'text-lg mb-8 leading-relaxed transition-colors duration-300',
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                )}
              >
                Utilizando ferramentas avançadas de IA para acelerar o aprendizado e o desenvolvimento, percebemos que poderíamos fazer mais. Nossa missão hoje é clara: oferecer sistemas e websites de alto nível para pequenas e médias empresas a um preço justo, gerando engajamento real através da tecnologia.
              </p>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-3">
                {projects.map((proj, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-300',
                      isDark
                        ? 'bg-neutral-800 text-neutral-200 border-neutral-700'
                        : 'bg-neutral-100 text-neutral-800 border-neutral-200'
                    )}
                  >
                    {proj.name.includes('Quali') ? (
                      <Hammer size={14} className="mr-2 text-primary" />
                    ) : (
                      <Building2
                        size={14}
                        className={cn(
                          'mr-2',
                          isDark ? 'text-neutral-400' : 'text-neutral-500'
                        )}
                      />
                    )}
                    {proj.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <AnimatedSection className="text-center mb-12">
            <h3
              className={cn(
                'text-2xl font-bold transition-colors duration-300',
                isDark ? 'text-white' : 'text-neutral-900'
              )}
            >
              Nossos Valores
            </h3>
            <p
              className={cn(
                'mt-2 transition-colors duration-300',
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              )}
            >
              A cultura que nos move todos os dias.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div
                  className={cn(
                    'p-8 rounded-2xl transition-all duration-300 border group relative overflow-hidden h-full',
                    isDark
                      ? 'bg-secondary-light hover:bg-neutral-800 border-neutral-700 hover:shadow-xl hover:shadow-black/20'
                      : 'bg-neutral-50 hover:bg-white border-neutral-100 hover:shadow-xl'
                  )}
                >
                  <div className={`absolute top-0 left-0 w-2 h-full ${val.color}`} />
                  <div
                    className={`${val.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <val.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4
                    className={cn(
                      'text-xl font-bold mb-3 transition-colors duration-300',
                      isDark ? 'text-white' : 'text-neutral-900'
                    )}
                  >
                    {val.title}
                  </h4>
                  <p
                    className={cn(
                      'leading-relaxed transition-colors duration-300',
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    )}
                  >
                    {val.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
