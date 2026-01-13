import { useState, useEffect, useRef } from 'react'
import { startChat, sendMessage } from '@/services/geminiService'
import { Sparkles, Send, MessageSquare, Smartphone, Loader2 } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { WHATSAPP_NUMBER } from '@/lib/constants'

interface Message {
  id: number
  text: string
  sender: 'ai' | 'user'
}

export function EstimatorSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initChat = async () => {
      setLoading(true)
      const initialResponse = await startChat()
      setMessages([{ id: 1, text: initialResponse, sender: 'ai' }])
      setLoading(false)
    }
    initChat()
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    const aiResponseText = await sendMessage(userMsg.text)
    const aiMsg: Message = { id: Date.now() + 1, text: aiResponseText, sender: 'ai' }

    setMessages((prev) => [...prev, aiMsg])
    setLoading(false)
  }

  const handleWhatsApp = () => {
    // Compile history into a summary text
    const conversation = messages
      .map((m) => `${m.sender === 'ai' ? 'Quali IA' : 'Cliente'}: ${m.text}`)
      .join('\n\n')

    const text = `*Olá! Gostaria de um orçamento para meu projeto.*\n\nConversei com a IA no site e aqui está o resumo da minha ideia:\n\n${conversation}`
    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
  }

  return (
    <section id="estimator" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-900/50 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
              <Sparkles size={16} className="mr-2" />
              Consultoria Gratuita via IA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Tire sua ideia do papel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                conversando com a gente.
              </span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Nossa IA especializada vai entender o escopo do seu projeto, funcionalidades e
              objetivos. Ao final, você envia o resumo pronto para nosso WhatsApp e recebe um
              atendimento prioritário.
            </p>

            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                IA Online
              </div>
              <div className="hidden md:block w-px h-4 bg-neutral-700" />
              <span className="hidden md:block">Atendimento Humano em seguida</span>
            </div>
          </AnimatedSection>

          {/* Chat Interface */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden border border-neutral-700 flex flex-col h-[500px]">
              {/* Chat Header */}
              <div className="p-4 border-b border-neutral-700 flex justify-between items-center bg-neutral-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Consultor Quali</h4>
                    <p className="text-xs text-cyan-400">Assistente Virtual Inteligente</p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-500 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center transition-colors"
                >
                  <Smartphone size={14} className="mr-1" />
                  Enviar p/ WhatsApp
                </button>
              </div>

              {/* Messages Area */}
              <div
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-900/50"
                ref={scrollRef}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-cyan-600 text-white rounded-br-none'
                          : 'bg-neutral-700 text-neutral-200 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-neutral-700 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                        style={{ animationDelay: '75ms' }}
                      />
                      <div
                        className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                        style={{ animationDelay: '150ms' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-neutral-800 border-t border-neutral-700">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                  }}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua resposta..."
                    className="flex-1 bg-neutral-900 border border-neutral-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors"
                  >
                    {loading ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <Send size={20} />
                    )}
                  </button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
