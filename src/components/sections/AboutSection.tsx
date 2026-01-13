import { Heart, ShieldCheck, Palette, HardHat, Building2, Hammer } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

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
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-neutral-50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-teal-400 rounded-2xl opacity-20 blur-lg transform -rotate-2" />
              <img
                src="https://images.unsplash.com/photo-1504384308090-c54be3855092?q=80&w=2574&auto=format&fit=crop"
                alt="Construção e Tecnologia"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-neutral-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full">
                    <HardHat className="text-cyan-600 w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-semibold uppercase">Inovação</p>
                    <p className="text-base font-bold text-neutral-900">IA + Construção Civil</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <span className="text-cyan-600 font-semibold uppercase tracking-wide text-sm">
                Nossa História
              </span>
              <h2 className="mt-2 text-4xl font-bold text-neutral-900 mb-6">
                Nascidos da obra,<br />criados para o{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                  futuro digital
                </span>.
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Fundada em 2025 por Lucas Araújo, a QualiApps surgiu de uma necessidade real no canteiro de obras. O sonho começou com o <strong>QualiObra</strong>, um sistema gamificado onde a Inteligência Artificial "Quali" avalia a segurança e qualidade através de fotos enviadas pelos trabalhadores.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Utilizando ferramentas avançadas de IA para acelerar o aprendizado e o desenvolvimento, percebemos que poderíamos fazer mais. Nossa missão hoje é clara: oferecer sistemas e websites de alto nível para pequenas e médias empresas a um preço justo, gerando engajamento real através da tecnologia.
              </p>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-3">
                {projects.map((proj, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {proj.name.includes('Quali') ? (
                      <Hammer size={14} className="mr-2 text-cyan-600" />
                    ) : (
                      <Building2 size={14} className="mr-2 text-neutral-500" />
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
            <h3 className="text-2xl font-bold text-neutral-900">Nossos Valores</h3>
            <p className="text-neutral-500 mt-2">A cultura que nos move todos os dias.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-neutral-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border border-neutral-100 group relative overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 w-2 h-full ${val.color}`} />
                  <div className={`${val.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <val.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-3">{val.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">{val.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
