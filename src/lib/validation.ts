import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string({ required_error: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório')
    .min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string({ required_error: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório')
    .email('Email inválido'),
  whatsapp: z.string({ required_error: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório')
    .min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  message: z.string({ required_error: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório')
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

export type ContactFormData = z.infer<typeof contactSchema>
