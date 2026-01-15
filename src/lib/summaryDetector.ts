/**
 * Detector de resumo da IA
 * Identifica quando a resposta da IA contem um resumo/finalizacao
 */

/**
 * Palavras-chave que indicam que a IA gerou um resumo/finalizou
 */
const SUMMARY_KEYWORDS = [
  'entendi sua ideia',
  'vou resumir',
  'resumo do projeto',
  'deixa eu consolidar',
  'aqui está o resumo',
  'resumindo o projeto',
  'consolidando as informações',
  'nossa equipe entrará em contato',
  'obrigado pela confiança',
  '**resumo do projeto**',
  'resumo:',
  'perfeito! entendi',
  'ótimo! deixa eu',
  'excelente! aqui está',
]

/**
 * Detecta se a resposta da IA contem um resumo/finalizacao
 */
export function isSummaryResponse(aiResponse: string): boolean {
  const lowerResponse = aiResponse.toLowerCase()

  return SUMMARY_KEYWORDS.some((keyword) => lowerResponse.includes(keyword.toLowerCase()))
}

/**
 * Verifica se a conversa ja teve resumo enviado
 * (para evitar envio duplicado)
 */
export function hasSummaryBeenGenerated(
  messages: { text: string; sender: 'ai' | 'user' }[]
): boolean {
  return messages.some((msg) => msg.sender === 'ai' && isSummaryResponse(msg.text))
}
