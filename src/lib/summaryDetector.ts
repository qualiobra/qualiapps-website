/**
 * Detector de resumo da IA
 * Identifica quando a resposta da IA contém um resumo/finalização
 * Supports both Portuguese and English
 */

/**
 * Palavras-chave que indicam que a IA gerou um resumo/finalizou (Português)
 */
const SUMMARY_KEYWORDS_PT = [
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
 * Keywords indicating AI generated a summary/finalization (English)
 */
const SUMMARY_KEYWORDS_EN = [
  'i understood your idea',
  'let me summarize',
  'project summary',
  'let me consolidate',
  "here's the summary",
  'summarizing the project',
  'consolidating the information',
  'our team will contact',
  'our team will get in touch',
  'thank you for your trust',
  '**project summary**',
  'summary:',
  'perfect! i understood',
  'great! let me',
  'excellent! here is',
]

/**
 * All keywords combined
 */
const ALL_SUMMARY_KEYWORDS = [...SUMMARY_KEYWORDS_PT, ...SUMMARY_KEYWORDS_EN]

/**
 * Detecta se a resposta da IA contém um resumo/finalização
 * Detects if the AI response contains a summary/finalization
 */
export function isSummaryResponse(aiResponse: string): boolean {
  const lowerResponse = aiResponse.toLowerCase()

  return ALL_SUMMARY_KEYWORDS.some((keyword) => lowerResponse.includes(keyword.toLowerCase()))
}

/**
 * Verifica se a conversa já teve resumo enviado
 * (para evitar envio duplicado)
 */
export function hasSummaryBeenGenerated(
  messages: { text: string; sender: 'ai' | 'user' }[]
): boolean {
  return messages.some((msg) => msg.sender === 'ai' && isSummaryResponse(msg.text))
}
