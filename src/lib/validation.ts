import { z } from 'zod'

// Error map customizado para traduzir mensagens do Zod v4 para português
// Zod v4 mudanças:
// - too_small usa 'origin' em vez de 'type'
// - email usa 'invalid_format' com format: 'email' em vez de 'invalid_string'
// - invalid_type não tem 'received' - verificamos pela mensagem original

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ptBrErrorMap = (issue: any): { message: string } => {
  switch (issue.code) {
    case 'invalid_type':
      // No Zod v4, undefined/null aparecem na mensagem original
      if (issue.message?.includes('undefined') || issue.message?.includes('null')) {
        return { message: 'Campo obrigatório' }
      }
      return { message: 'Campo obrigatório' }

    case 'too_small': {
      // Zod v4: usa 'origin' em vez de 'type'
      const origin = (issue as { origin?: string }).origin
      if (origin === 'string') {
        if (issue.minimum === 1) {
          return { message: 'Campo obrigatório' }
        }
        return { message: `Deve ter pelo menos ${issue.minimum} caracteres` }
      }
      if (origin === 'number' || issue.type === 'number') {
        return { message: `Deve ser no mínimo ${issue.minimum}` }
      }
      return { message: 'Valor muito pequeno' }
    }

    case 'too_big': {
      const origin = (issue as { origin?: string }).origin
      if (origin === 'string' || issue.type === 'string') {
        return { message: `Deve ter no máximo ${issue.maximum} caracteres` }
      }
      return { message: 'Valor muito grande' }
    }

    // Zod v4: email validation usa invalid_format
    case 'invalid_format': {
      const format = (issue as { format?: string }).format
      if (format === 'email') {
        return { message: 'Email inválido' }
      }
      if (format === 'url') {
        return { message: 'URL inválida' }
      }
      if (format === 'uuid') {
        return { message: 'UUID inválido' }
      }
      return { message: 'Formato inválido' }
    }

    // Zod v3 compat
    case 'invalid_string':
      if (issue.validation === 'email') {
        return { message: 'Email inválido' }
      }
      if (issue.validation === 'url') {
        return { message: 'URL inválida' }
      }
      return { message: 'Formato inválido' }

    case 'invalid_enum_value':
      return { message: 'Valor não permitido' }

    case 'custom':
      return { message: issue.message || 'Campo inválido' }

    default:
      return { message: 'Campo inválido' }
  }
}

// Aplicar error map globalmente
z.setErrorMap(ptBrErrorMap)

export const contactSchema = z.object({
  name: z.string().min(1).min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().min(1).email(),
  whatsapp: z.string().min(1).min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  message: z.string().min(1).min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

// Usar z.input para compatibilidade com Zod v4 + react-hook-form
export type ContactFormData = z.input<typeof contactSchema>
