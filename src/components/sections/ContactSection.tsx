import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { COMPANY, WHATSAPP_URL } from '@/lib/constants'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Mensagem é obrigatória').min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const { isDark } = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    const subject = encodeURIComponent(`Contato via site - ${data.name}`)
    const body = encodeURIComponent(
      `Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone || 'Não informado'}\n\nMensagem:\n${data.message}`
    )
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
    reset()
  }

  return (
    <section
      id="contact"
      className={cn(
        'py-20 transition-colors duration-300',
        isDark ? 'bg-secondary' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Vamos transformar sua ideia em realidade"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <Card
              className={cn(
                'transition-colors duration-300',
                isDark
                  ? 'bg-secondary-light border-neutral-800'
                  : 'bg-neutral-50 border-neutral-200'
              )}
            >
              <CardContent className="p-6">
                <h3
                  className={cn(
                    'text-xl font-semibold mb-6 transition-colors duration-300',
                    isDark ? 'text-white' : 'text-neutral-900'
                  )}
                >
                  Envie sua mensagem
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      {...register('name')}
                      className={cn(
                        'transition-colors duration-300',
                        isDark
                          ? 'bg-secondary border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary'
                          : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-primary'
                      )}
                    />
                    {errors.name && (
                      <p className="text-accent-error text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Seu email"
                      {...register('email')}
                      className={cn(
                        'transition-colors duration-300',
                        isDark
                          ? 'bg-secondary border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary'
                          : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-primary'
                      )}
                    />
                    {errors.email && (
                      <p className="text-accent-error text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder="Seu telefone (opcional)"
                      {...register('phone')}
                      className={cn(
                        'transition-colors duration-300',
                        isDark
                          ? 'bg-secondary border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary'
                          : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-primary'
                      )}
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Sua mensagem"
                      rows={4}
                      {...register('message')}
                      className={cn(
                        'resize-none transition-colors duration-300',
                        isDark
                          ? 'bg-secondary border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary'
                          : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-primary'
                      )}
                    />
                    {errors.message && (
                      <p className="text-accent-error text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-light text-secondary font-semibold"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3
                  className={cn(
                    'text-xl font-semibold mb-6 transition-colors duration-300',
                    isDark ? 'text-white' : 'text-neutral-900'
                  )}
                >
                  Outras formas de contato
                </h3>

                <div className="space-y-4">
                  {/* WhatsApp - Highlighted */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="bg-whatsapp/10 border-whatsapp/30 hover:border-whatsapp transition-colors cursor-pointer">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-whatsapp text-white">
                          <MessageCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <h4
                            className={cn(
                              'font-semibold transition-colors duration-300',
                              isDark ? 'text-white' : 'text-neutral-900'
                            )}
                          >
                            WhatsApp
                          </h4>
                          <p
                            className={cn(
                              'transition-colors duration-300',
                              isDark ? 'text-neutral-300' : 'text-neutral-600'
                            )}
                          >
                            {COMPANY.phone}
                          </p>
                          <p className="text-sm text-whatsapp">
                            Resposta rápida
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  {/* Email */}
                  <a href={`mailto:${COMPANY.email}`} className="block">
                    <Card
                      className={cn(
                        'transition-colors cursor-pointer',
                        isDark
                          ? 'bg-secondary-light border-neutral-800 hover:border-primary/50'
                          : 'bg-neutral-50 border-neutral-200 hover:border-primary/50'
                      )}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <h4
                            className={cn(
                              'font-semibold transition-colors duration-300',
                              isDark ? 'text-white' : 'text-neutral-900'
                            )}
                          >
                            Email
                          </h4>
                          <p
                            className={cn(
                              'transition-colors duration-300',
                              isDark ? 'text-neutral-300' : 'text-neutral-600'
                            )}
                          >
                            {COMPANY.email}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  {/* Phone */}
                  <Card
                    className={cn(
                      'transition-colors duration-300',
                      isDark
                        ? 'bg-secondary-light border-neutral-800'
                        : 'bg-neutral-50 border-neutral-200'
                    )}
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4
                          className={cn(
                            'font-semibold transition-colors duration-300',
                            isDark ? 'text-white' : 'text-neutral-900'
                          )}
                        >
                          Telefone
                        </h4>
                        <p
                          className={cn(
                            'transition-colors duration-300',
                            isDark ? 'text-neutral-300' : 'text-neutral-600'
                          )}
                        >
                          {COMPANY.phone}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Location */}
                  <Card
                    className={cn(
                      'transition-colors duration-300',
                      isDark
                        ? 'bg-secondary-light border-neutral-800'
                        : 'bg-neutral-50 border-neutral-200'
                    )}
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4
                          className={cn(
                            'font-semibold transition-colors duration-300',
                            isDark ? 'text-white' : 'text-neutral-900'
                          )}
                        >
                          Localização
                        </h4>
                        <p
                          className={cn(
                            'transition-colors duration-300',
                            isDark ? 'text-neutral-300' : 'text-neutral-600'
                          )}
                        >
                          {COMPANY.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Response time notice */}
              <div
                className={cn(
                  'p-4 rounded-lg border transition-colors duration-300',
                  isDark
                    ? 'bg-primary/5 border-primary/20'
                    : 'bg-primary/5 border-primary/20'
                )}
              >
                <p
                  className={cn(
                    'text-sm transition-colors duration-300',
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  )}
                >
                  <span className="text-primary font-medium">Dica:</span> Para uma
                  resposta mais rápida, entre em contato pelo WhatsApp. Normalmente
                  respondemos em até 24 horas.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
