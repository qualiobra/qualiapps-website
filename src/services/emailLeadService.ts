import emailjs from '@emailjs/browser'
import type { LeadData } from '@/lib/leadExtractor'

export interface SendLeadResult {
  success: boolean
  error?: string
}

/**
 * Envia os dados do lead capturado pela IA para o email
 */
export async function sendLeadEmail(leadData: LeadData): Promise<SendLeadResult> {
  const templateId = import.meta.env.VITE_EMAILJS_AI_LEAD_TEMPLATE_ID

  if (!templateId) {
    console.warn('VITE_EMAILJS_AI_LEAD_TEMPLATE_ID não configurado, usando template padrão')
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        // Dados estruturados do lead
        lead_nome: leadData.nome,
        lead_celular: leadData.celular,
        lead_tipo_projeto: leadData.tipoProjeto,
        lead_funcionalidades: leadData.funcionalidades.join(', '),
        lead_publico_alvo: leadData.publicoAlvo,
        lead_prazo: leadData.prazo,

        // Conversa completa para contexto
        conversa_completa: leadData.conversaCompleta,

        // Resumo gerado pela IA
        resumo_ia: leadData.resumoIA,

        // Metadados
        to_email: 'contato@qualiapps.com.br',
        data_hora: new Date().toLocaleString('pt-BR'),
        origem: 'Chat IA - Estimador de Projetos',

        // Campos do template padrao (fallback)
        from_name: leadData.nome,
        from_email: 'lead-ia@qualiapps.com.br',
        whatsapp: leadData.celular,
        message: `[LEAD VIA IA]\n\n${leadData.resumoIA}\n\n---\nConversa completa:\n${leadData.conversaCompleta}`,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    return { success: true }
  } catch (error) {
    console.error('Erro ao enviar lead por email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    }
  }
}
