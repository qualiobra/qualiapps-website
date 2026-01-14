import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle, Navigation } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { COMPANY, WHATSAPP_URL } from '@/lib/constants'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { contactSchema, ContactFormData } from '@/lib/validation'

const contactMethods = [
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: COMPANY.phone,
    description: 'Resposta em minutos',
    href: WHATSAPP_URL,
    highlighted: true,
    color: 'whatsapp',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: COMPANY.email,
    description: 'Para propostas formais',
    href: `mailto:${COMPANY.email}`,
    highlighted: false,
    color: 'primary',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Telefone',
    value: COMPANY.phone,
    description: 'Horário comercial',
    href: `tel:+55${COMPANY.phone.replace(/\D/g, '')}`,
    highlighted: false,
    color: 'primary',
  },
]

export function ContactSection() {
  const { isDark } = useTheme()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      message: '',
    },
  })

  const watchedFields = watch()

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle')
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          whatsapp: data.whatsapp,
          message: data.message,
          to_email: 'contato@qualiapps.com.br',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setSubmitStatus('error')
    }
  }

  const isFieldActive = (fieldName: string) => {
    return focusedField === fieldName || (watchedFields[fieldName as keyof ContactFormData] || '').length > 0
  }

  const inputBaseClasses = cn(
    'w-full h-14 px-4 pt-5 pb-2 rounded-xl border-2 transition-all duration-300 outline-none',
    'text-base font-medium',
    isDark
      ? 'bg-neutral-900/50 border-neutral-700/50 text-white placeholder:text-transparent'
      : 'bg-white border-neutral-200 text-neutral-900 placeholder:text-transparent',
    'focus:border-primary focus:ring-2 focus:ring-primary/20'
  )

  const labelBaseClasses = cn(
    'absolute left-4 transition-all duration-300 pointer-events-none font-medium',
    isDark ? 'text-neutral-400' : 'text-neutral-500'
  )

  return (
    <section
      id="contact"
      className={cn(
        'relative py-24 overflow-hidden transition-colors duration-300',
        isDark ? 'bg-secondary' : 'bg-gradient-to-b from-neutral-50 to-white'
      )}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            'absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20',
            isDark ? 'bg-primary' : 'bg-primary/30'
          )}
        />
        <div
          className={cn(
            'absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10',
            isDark ? 'bg-whatsapp' : 'bg-whatsapp/20'
          )}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Vamos transformar sua ideia em realidade"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Takes 7 columns */}
          <AnimatedSection direction="left" className="lg:col-span-7">
            <div
              className={cn(
                'relative p-8 rounded-3xl border-2 transition-all duration-300',
                isDark
                  ? 'bg-neutral-900/30 border-neutral-800 backdrop-blur-sm'
                  : 'bg-white border-neutral-100 shadow-xl shadow-neutral-200/50'
              )}
            >
              {/* Form header with icon */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={cn(
                    'p-3 rounded-2xl',
                    isDark ? 'bg-primary/10' : 'bg-primary/5'
                  )}
                >
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3
                    className={cn(
                      'text-xl font-bold tracking-tight',
                      isDark ? 'text-white' : 'text-neutral-900'
                    )}
                  >
                    Envie sua mensagem
                  </h3>
                  <p
                    className={cn(
                      'text-sm',
                      isDark ? 'text-neutral-400' : 'text-neutral-500'
                    )}
                  >
                    Respondemos em ate 24 horas
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name field with floating label */}
                <div className="relative">
                  <Input
                    {...register('name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={(e) => {
                      setFocusedField(null)
                      register('name').onBlur(e)
                    }}
                    className={cn(inputBaseClasses, errors.name && 'border-red-500')}
                    placeholder="Nome"
                  />
                  <label
                    className={cn(
                      labelBaseClasses,
                      isFieldActive('name')
                        ? 'top-2 text-xs text-primary'
                        : 'top-1/2 -translate-y-1/2 text-base'
                    )}
                  >
                    Seu nome
                  </label>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                {/* Email and WhatsApp in a row on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div className="relative">
                    <Input
                      type="email"
                      {...register('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={(e) => {
                        setFocusedField(null)
                        register('email').onBlur(e)
                      }}
                      className={cn(inputBaseClasses, errors.email && 'border-red-500')}
                      placeholder="Email"
                    />
                    <label
                      className={cn(
                        labelBaseClasses,
                        isFieldActive('email')
                          ? 'top-2 text-xs text-primary'
                          : 'top-1/2 -translate-y-1/2 text-base'
                      )}
                    >
                      Seu email
                    </label>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  {/* WhatsApp field */}
                  <div className="relative">
                    <Input
                      type="tel"
                      {...register('whatsapp')}
                      onFocus={() => setFocusedField('whatsapp')}
                      onBlur={(e) => {
                        setFocusedField(null)
                        register('whatsapp').onBlur(e)
                      }}
                      className={cn(inputBaseClasses, errors.whatsapp && 'border-red-500')}
                      placeholder="WhatsApp"
                    />
                    <label
                      className={cn(
                        labelBaseClasses,
                        isFieldActive('whatsapp')
                          ? 'top-2 text-xs text-primary'
                          : 'top-1/2 -translate-y-1/2 text-base'
                      )}
                    >
                      Seu WhatsApp
                    </label>
                    {errors.whatsapp && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.whatsapp.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <Textarea
                    {...register('message')}
                    onFocus={() => setFocusedField('message')}
                    onBlur={(e) => {
                      setFocusedField(null)
                      register('message').onBlur(e)
                    }}
                    rows={5}
                    className={cn(
                      'w-full px-4 pt-7 pb-3 rounded-xl border-2 transition-all duration-300 outline-none resize-none',
                      'text-base font-medium',
                      isDark
                        ? 'bg-neutral-900/50 border-neutral-700/50 text-white placeholder:text-transparent'
                        : 'bg-white border-neutral-200 text-neutral-900 placeholder:text-transparent',
                      'focus:border-primary focus:ring-2 focus:ring-primary/20',
                      errors.message && 'border-red-500'
                    )}
                    placeholder="Mensagem"
                  />
                  <label
                    className={cn(
                      labelBaseClasses,
                      isFieldActive('message')
                        ? 'top-3 text-xs text-primary'
                        : 'top-5 text-base'
                    )}
                  >
                    Sua mensagem
                  </label>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full h-14 rounded-xl text-base font-bold transition-all duration-300',
                    'bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary',
                    'text-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30',
                    'hover:scale-[1.02] active:scale-[0.98]',
                    isSubmitting && 'opacity-70 cursor-not-allowed'
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full"
                      />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Mensagem
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border-2 border-green-500/30"
                  >
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-500">Mensagem enviada!</p>
                      <p className={cn('text-sm', isDark ? 'text-neutral-400' : 'text-neutral-500')}>
                        Entraremos em contato em breve.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border-2 border-red-500/30"
                  >
                    <div className="p-2 rounded-lg bg-red-500/20">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-red-500">Erro ao enviar</p>
                      <p className={cn('text-sm', isDark ? 'text-neutral-400' : 'text-neutral-500')}>
                        Tente novamente ou use outro canal.
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>

              {/* Quick tip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={cn(
                  'mt-6 p-4 rounded-2xl border-2 transition-all duration-300',
                  isDark
                    ? 'bg-primary/5 border-primary/20'
                    : 'bg-primary/5 border-primary/10'
                )}
              >
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  )}
                >
                  <span className="font-bold text-primary">Dica:</span>{' '}
                  Para projetos urgentes, o WhatsApp e o canal mais rapido.
                  Respondemos em ate 24h por email.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Info - Takes 5 columns */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-5">
            <div className="space-y-4 h-full flex flex-col">
              {/* Contact methods */}
              {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  const isHighlighted = method.highlighted

                  return (
                    <motion.a
                      key={method.id}
                      href={method.href}
                      target={method.id === 'whatsapp' ? '_blank' : undefined}
                      rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        'group flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300',
                        isHighlighted
                          ? 'bg-whatsapp/10 border-whatsapp/30 hover:border-whatsapp hover:bg-whatsapp/15'
                          : isDark
                          ? 'bg-neutral-900/30 border-neutral-800 hover:border-primary/50 hover:bg-neutral-900/50'
                          : 'bg-white border-neutral-100 hover:border-primary/50 hover:shadow-lg'
                      )}
                    >
                      <div
                        className={cn(
                          'p-3 rounded-xl transition-all duration-300',
                          isHighlighted
                            ? 'bg-whatsapp text-white group-hover:scale-110'
                            : cn(
                                isDark ? 'bg-primary/10' : 'bg-primary/5',
                                'text-primary group-hover:bg-primary group-hover:text-secondary group-hover:scale-110'
                              )
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4
                            className={cn(
                              'font-bold',
                              isDark ? 'text-white' : 'text-neutral-900'
                            )}
                          >
                            {method.label}
                          </h4>
                          {isHighlighted && (
                            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-whatsapp/20 text-whatsapp">
                              Rapido
                            </span>
                          )}
                        </div>
                        <p
                          className={cn(
                            'text-sm font-medium truncate',
                            isDark ? 'text-neutral-300' : 'text-neutral-600'
                          )}
                        >
                          {method.value}
                        </p>
                        <p
                          className={cn(
                            'text-xs',
                            isHighlighted ? 'text-whatsapp' : isDark ? 'text-neutral-500' : 'text-neutral-400'
                          )}
                        >
                          {method.description}
                        </p>
                      </div>
                      <div
                        className={cn(
                          'opacity-0 group-hover:opacity-100 transition-opacity',
                          isHighlighted ? 'text-whatsapp' : 'text-primary'
                        )}
                      >
                        <Navigation className="w-4 h-4" />
                      </div>
                    </motion.a>
                  )
                })}

              {/* Address card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={cn(
                  'flex-1 p-6 rounded-2xl border-2 transition-all duration-300',
                  isDark
                    ? 'bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border-neutral-800'
                    : 'bg-gradient-to-br from-neutral-50 to-white border-neutral-100'
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      'p-3 rounded-xl',
                      isDark ? 'bg-primary/10' : 'bg-primary/5'
                    )}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={cn(
                        'font-bold mb-2',
                        isDark ? 'text-white' : 'text-neutral-900'
                      )}
                    >
                      Nossa Localizacao
                    </h4>
                    <address
                      className={cn(
                        'not-italic text-sm leading-relaxed',
                        isDark ? 'text-neutral-300' : 'text-neutral-600'
                      )}
                    >
                      <span className="font-medium">{COMPANY.address.street}</span>
                      <br />
                      {COMPANY.address.neighborhood}
                      <br />
                      <span className="font-medium">
                        {COMPANY.address.city}/{COMPANY.address.state}
                      </span>
                    </address>
                  </div>
                </div>

                {/* Google Maps link */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'mt-4 flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-semibold transition-all duration-300',
                    isDark
                      ? 'bg-neutral-800/50 text-primary hover:bg-neutral-800'
                      : 'bg-primary/5 text-primary hover:bg-primary/10'
                  )}
                >
                  <MapPin className="w-4 h-4" />
                  Ver no Google Maps
                </a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
