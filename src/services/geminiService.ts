import { GoogleGenAI, Chat } from '@google/genai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ''
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null

// Helper para simular delay e resposta caso sem chave
const mockResponse = () => {
  return 'Olá! Como estou em modo de demonstração (sem chave API), não posso processar sua resposta dinamicamente. Mas imagine que eu te fiz uma pergunta inteligente sobre seu projeto! Quando configurar a chave, conversaremos de verdade.'
}

let chatSession: Chat | null = null

export const startChat = async (): Promise<string> => {
  if (!apiKey || !ai) {
    return 'Olá! Sou a IA da QualiApps. Como posso ajudar a estruturar seu projeto hoje? (Modo Demo - Configure VITE_GEMINI_API_KEY para chat real)'
  }

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.0-flash',
      config: {
        systemInstruction: `Você é um consultor comercial sênior e arquiteto de software da QualiApps.
        Seu objetivo é entrevistar o potencial cliente para entender o escopo do projeto de software (App ou Web).

        Regras:
        1. Faça UMA pergunta por vez. Seja breve e cordial.
        2. Comece perguntando o nome e o tipo de projeto (App, Site, Sistema).
        3. Pergunte sobre funcionalidades principais, público-alvo e prazo desejado.
        4. Após reunir informações suficientes (cerca de 3 a 4 trocas), sugira gerar um resumo.
        5. Mantenha um tom profissional, mas acessível (inovador, ágil).

        Não forneça orçamentos em dinheiro (R$). O foco é escopo técnico.`,
      },
    })

    const response = await chatSession.sendMessage({
      message: 'Inicie a conversa se apresentando.',
    })
    return response.text || 'Olá! Vamos falar sobre seu projeto?'
  } catch (error) {
    console.error(error)
    return 'Erro ao iniciar consultoria IA. Tente novamente mais tarde.'
  }
}

export const sendMessage = async (userMessage: string): Promise<string> => {
  if (!apiKey || !chatSession) return mockResponse()

  try {
    const response = await chatSession.sendMessage({ message: userMessage })
    return response.text || 'Não entendi, pode repetir?'
  } catch (error) {
    console.error(error)
    return 'Desculpe, tive um erro de conexão. Podemos tentar novamente?'
  }
}
