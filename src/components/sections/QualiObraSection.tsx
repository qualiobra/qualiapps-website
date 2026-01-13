import { Play } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function QualiObraSection() {
  return (
    <section id="qualiobra" className="py-24 bg-neutral-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <AnimatedSection direction="left" className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-sm font-bold mb-6 uppercase tracking-wider">
              Produto Exclusivo
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              QualiObra: O Futuro da <br />
              <span className="text-yellow-400">Construção Civil</span>
            </h2>
            <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
              Nosso sistema de gestão da qualidade gamificado revolucionou canteiros de obras. O funcionário ganha pontos por cumprir requisitos de segurança e qualidade.
            </p>
            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
              A <strong className="text-white">Quali (nossa IA)</strong> analisa fotos e vídeos enviados pelos colaboradores em tempo real, avaliando o uso de EPIs e EPCs. Tecnologia que salva vidas e aumenta a produtividade.
            </p>

            <a
              href="https://youtu.be/SLiYfDUsmSE?si=cgb_ahcxFvw5JG5Z"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-white font-bold border-b-2 border-yellow-400 pb-1 hover:text-yellow-400 transition-colors"
            >
              <Play size={20} className="mr-2 fill-current" />
              Assistir vídeo completo no YouTube
            </a>
          </AnimatedSection>

          {/* Video */}
          <AnimatedSection direction="right" delay={0.2} className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 bg-neutral-800 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SLiYfDUsmSE?si=cgb_ahcxFvw5JG5Z"
                title="QualiObra Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
