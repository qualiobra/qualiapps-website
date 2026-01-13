import { Link } from 'react-scroll'
import { motion } from 'motion/react'
import { ArrowRight, ChevronDown, Smartphone, Code, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Desenvolvimento Ágil com IA
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos ideias em{' '}
            <span className="text-primary">soluções digitais</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Desenvolvimento de sistemas e websites para pequenas e médias empresas
            com preços justos e foco em inteligência artificial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="estimator" smooth={true} offset={-80} duration={500}>
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-neutral-800 font-semibold px-8 group"
              >
                Estimar meu Projeto com IA
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="services" smooth={true} offset={-80} duration={500}>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-600 text-white hover:bg-white/10 hover:border-primary font-semibold px-8"
              >
                Conhecer Serviços
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:bg-white/10">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mobile First</h3>
              <p className="text-neutral-400 text-sm">Apps nativos e híbridos otimizados para qualquer dispositivo.</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all hover:bg-white/10">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Web Moderna</h3>
              <p className="text-neutral-400 text-sm">Plataformas escaláveis usando React, Node e Nuvem.</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Metodologia Ágil</h3>
              <p className="text-neutral-400 text-sm">Entregas contínuas e feedback rápido para seu sucesso.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - posicionado na seção, não no container */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          to="about"
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-neutral-500 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Saiba mais</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
