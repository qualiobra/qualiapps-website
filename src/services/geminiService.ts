import { GoogleGenAI, Chat } from '@google/genai'
import { AI_SYSTEM_PROMPT_PT, AI_START_MESSAGE_PT } from '@/i18n/locales/pt/aiPrompt'
import { AI_SYSTEM_PROMPT_EN, AI_START_MESSAGE_EN } from '@/i18n/locales/en/aiPrompt'
import type { Language } from '@/contexts/LanguageContext'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ''
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null

// Store current language for session
let currentLanguage: Language = 'pt'

// Helper para simular delay e resposta caso sem chave
const mockResponse = (language: Language) => {
  if (language === 'en') {
    return "Hello! Since I'm in demo mode (no API key), I can't process your response dynamically. But imagine I asked you a smart question about your project! When you configure the key, we'll talk for real."
  }
  return 'Olá! Como estou em modo de demonstração (sem chave API), não posso processar sua resposta dinamicamente. Mas imagine que eu te fiz uma pergunta inteligente sobre seu projeto! Quando configurar a chave, conversaremos de verdade.'
}

let chatSession: Chat | null = null

export const startChat = async (language: Language = 'pt'): Promise<string> => {
  currentLanguage = language

  const systemPrompt = language === 'en' ? AI_SYSTEM_PROMPT_EN : AI_SYSTEM_PROMPT_PT
  const startMessage = language === 'en' ? AI_START_MESSAGE_EN : AI_START_MESSAGE_PT
  const defaultResponse = language === 'en'
    ? "Hello! Let's talk about your project?"
    : 'Olá! Vamos falar sobre seu projeto?'
  const errorResponse = language === 'en'
    ? 'Error starting AI consultation. Please try again later.'
    : 'Erro ao iniciar consultoria IA. Tente novamente mais tarde.'

  if (!apiKey || !ai) {
    const demoMessage = language === 'en'
      ? "Hello! I'm QualiApps' AI. How can I help structure your project today? (Demo Mode - Configure VITE_GEMINI_API_KEY for real chat)"
      : 'Olá! Sou a IA da QualiApps. Como posso ajudar a estruturar seu projeto hoje? (Modo Demo - Configure VITE_GEMINI_API_KEY para chat real)'
    return demoMessage
  }

  try {
    chatSession = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: systemPrompt,
      },
    })

    const response = await chatSession.sendMessage({
      message: startMessage,
    })
    return response.text || defaultResponse
  } catch (error) {
    console.error(error)
    return errorResponse
  }
}

export const sendMessage = async (userMessage: string): Promise<string> => {
  if (!apiKey || !chatSession) return mockResponse(currentLanguage)

  try {
    const response = await chatSession.sendMessage({ message: userMessage })
    const defaultResponse = currentLanguage === 'en'
      ? "I didn't understand, can you repeat?"
      : 'Não entendi, pode repetir?'
    return response.text || defaultResponse
  } catch (error) {
    console.error(error)
    const errorResponse = currentLanguage === 'en'
      ? "Sorry, I had a connection error. Can we try again?"
      : 'Desculpe, tive um erro de conexão. Podemos tentar novamente?'
    return errorResponse
  }
}

export const resetChat = () => {
  chatSession = null
}

export const getCurrentLanguage = () => currentLanguage
