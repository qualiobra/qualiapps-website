import { isValidBrazilianPhone, formatBrazilianPhone } from './phoneValidation'

export interface LeadData {
  nome: string
  celular: string
  tipoProjeto: string
  funcionalidades: string[]
  publicoAlvo: string
  prazo: string
  conversaCompleta: string
  resumoIA: string
}

interface Message {
  text: string
  sender: 'ai' | 'user'
}

/**
 * Extrai dados estruturados do resumo formatado da IA
 * O resumo da IA segue um formato markdown com campos como:
 * - **Funcionalidades:** texto...
 * - **Público-alvo:** texto...
 * - **Prazo:** texto...
 */
function extractFromSummary(resumoIA: string): {
  funcionalidades?: string
  publicoAlvo?: string
  prazo?: string
  tipoProjeto?: string
} {
  const result: Record<string, string> = {}

  const patterns: Record<string, RegExp> = {
    funcionalidades: /\*\*Funcionalidades:?\*\*\s*([^\n]+)/i,
    publicoAlvo: /\*\*Público-?alvo:?\*\*\s*([^\n]+)/i,
    prazo: /\*\*Prazo:?\*\*\s*([^\n]+)/i,
    tipoProjeto: /\*\*Tipo:?\*\*\s*([^\n]+)/i,
  }

  for (const [key, pattern] of Object.entries(patterns)) {
    const match = resumoIA.match(pattern)
    if (match && match[1]) {
      result[key] = match[1].trim()
    }
  }

  return result
}

/**
 * Extrai dados estruturados do lead a partir do historico da conversa
 */
export function extractLeadData(messages: Message[]): LeadData {
  const conversaCompleta = messages
    .map((m) => `${m.sender === 'ai' ? 'Consultor Quali' : 'Cliente'}: ${m.text}`)
    .join('\n\n')

  // Encontra o resumo da IA (ultima mensagem da IA que contem resumo)
  const resumoIA =
    messages
      .filter((m) => m.sender === 'ai')
      .reverse()
      .find((m) => m.text.toLowerCase().includes('resumo'))?.text || ''

  // Extrai nome - geralmente a segunda mensagem do usuario (apos saudacao)
  const userMessages = messages.filter((m) => m.sender === 'user')
  const nome = extractNome(userMessages, messages)

  // Extrai celular - mensagem que parece numero de telefone
  const celular = extractCelular(userMessages)

  // Primeiro tenta extrair do resumo estruturado da IA
  const summaryData = extractFromSummary(resumoIA)

  // Extrai tipo de projeto (prioriza resumo da IA)
  const tipoProjeto = summaryData.tipoProjeto || extractTipoProjeto(userMessages)

  // Extrai funcionalidades (prioriza resumo da IA)
  const funcionalidades = summaryData.funcionalidades
    ? [summaryData.funcionalidades]
    : extractFuncionalidades(conversaCompleta)

  // Extrai publico-alvo (prioriza resumo da IA)
  const publicoAlvo = summaryData.publicoAlvo || extractPublicoAlvo(conversaCompleta)

  // Extrai prazo (prioriza resumo da IA)
  const prazo = summaryData.prazo || extractPrazo(conversaCompleta)

  return {
    nome,
    celular: celular !== 'Não informado' ? formatBrazilianPhone(celular) : celular,
    tipoProjeto,
    funcionalidades,
    publicoAlvo,
    prazo,
    conversaCompleta,
    resumoIA,
  }
}

function extractNome(userMessages: Message[], allMessages: Message[]): string {
  // O nome geralmente e informado logo apos a IA perguntar
  // Procura a mensagem apos uma pergunta sobre nome
  for (let i = 0; i < allMessages.length; i++) {
    const msg = allMessages[i]
    if (
      msg.sender === 'ai' &&
      (msg.text.toLowerCase().includes('seu nome') ||
        msg.text.toLowerCase().includes('qual o seu nome') ||
        msg.text.toLowerCase().includes('como posso te chamar') ||
        msg.text.toLowerCase().includes('qual é o seu nome'))
    ) {
      // Proxima mensagem do usuario e o nome
      const nextUserMsg = allMessages.slice(i + 1).find((m) => m.sender === 'user')
      if (nextUserMsg) {
        // Limpa o nome (remove "Meu nome e", "Sou o", etc.)
        return cleanNome(nextUserMsg.text)
      }
    }
  }

  // Fallback: primeira mensagem do usuario que parece ser um nome
  if (userMessages.length > 0) {
    return cleanNome(userMessages[0].text)
  }

  return 'Não informado'
}

function cleanNome(text: string): string {
  return text
    .replace(/^(meu nome é|me chamo|sou o|sou a|eu sou|oi,? |olá,? )/i, '')
    .replace(/[.!?]$/, '')
    .trim()
}

function extractCelular(userMessages: Message[]): string {
  for (const msg of userMessages) {
    if (isValidBrazilianPhone(msg.text)) {
      return msg.text.replace(/\D/g, '')
    }
  }
  return 'Não informado'
}

function extractTipoProjeto(userMessages: Message[]): string {
  const tipos = [
    'app',
    'aplicativo',
    'site',
    'website',
    'sistema',
    'plataforma',
    'mobile',
    'web',
  ]

  for (const msg of userMessages) {
    const lowerText = msg.text.toLowerCase()
    for (const tipo of tipos) {
      if (lowerText.includes(tipo)) {
        if (
          lowerText.includes('app') ||
          lowerText.includes('mobile') ||
          lowerText.includes('aplicativo')
        ) {
          return 'Aplicativo Mobile'
        }
        if (lowerText.includes('site') || lowerText.includes('web')) {
          return 'Website/Aplicação Web'
        }
        if (lowerText.includes('sistema') || lowerText.includes('plataforma')) {
          return 'Sistema/Plataforma'
        }
      }
    }
  }

  return 'Não especificado'
}

function extractFuncionalidades(conversa: string): string[] {
  const funcionalidades: string[] = []
  const keywords = [
    'login',
    'cadastro',
    'pagamento',
    'carrinho',
    'chat',
    'notificação',
    'push',
    'dashboard',
    'relatório',
    'integração',
    'api',
    'mapa',
    'geolocalização',
    'foto',
    'câmera',
    'upload',
    'download',
    'perfil',
    'busca',
    'filtro',
    'favoritos',
    'comentário',
    'avaliação',
    'rating',
  ]

  const lowerConversa = conversa.toLowerCase()
  for (const keyword of keywords) {
    if (lowerConversa.includes(keyword)) {
      funcionalidades.push(keyword.charAt(0).toUpperCase() + keyword.slice(1))
    }
  }

  return funcionalidades.length > 0 ? funcionalidades : ['A definir na consultoria']
}

function extractPublicoAlvo(conversa: string): string {
  const patterns = [
    /público[- ]?alvo[:\s]+([^.]+)/i,
    /voltado para[:\s]+([^.]+)/i,
    /usuários[:\s]+([^.]+)/i,
    /clientes[:\s]+([^.]+)/i,
  ]

  for (const pattern of patterns) {
    const match = conversa.match(pattern)
    if (match) {
      return match[1].trim()
    }
  }

  return 'A definir'
}

function extractPrazo(conversa: string): string {
  const patterns = [
    /prazo[:\s]+([^.]+)/i,
    /(\d+)\s*(dias?|semanas?|meses?|mês)/i,
    /urgente/i,
    /sem pressa/i,
  ]

  for (const pattern of patterns) {
    const match = conversa.match(pattern)
    if (match) {
      return match[0].trim()
    }
  }

  return 'A definir'
}
