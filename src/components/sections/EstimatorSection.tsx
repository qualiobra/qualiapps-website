import { useState, useEffect, useRef } from 'react'
import { startChat, sendMessage } from '@/services/geminiService'
import { Sparkles, Send, MessageSquare, Smartphone, Loader2 } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

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
  const { isDark } = useTheme()

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
    const conversation = messages
      .map((m) => `${m.sender === 'ai' ? 'Quali IA' : 'Cliente'}: ${m.text}`)
      .join('\n\n')

    const text = `*Olá! Gostaria de um orçamento para meu projeto.*\n\nConversei com a IA no site e aqui está o resumo da minha ideia:\n\n${conversation}`
    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
  }

  return (
    <section
      id="estimator"
      className={cn(
        'py-20 relative overflow-hidden transition-colors duration-300',
        isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      )}
    >
      {/* Background elements */}
      <div
        className={cn(
          'absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10',
          isDark ? 'bg-cyan-600/20' : 'bg-cyan-200/50'
        )}
      />
      <div
        className={cn(
          'absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl -z-10',
          isDark ? 'bg-purple-600/20' : 'bg-purple-200/50'
        )}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <div
              className={cn(
                'inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium mb-4',
                isDark
                  ? 'bg-cyan-900/50 border-cyan-500/30 text-cyan-400'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-600'
              )}
            >
              <Sparkles size={16} className="mr-2" />
              Consultoria Gratuita via IA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Tire sua ideia do papel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                conversando com a gente.
              </span>
            </h2>
            <p
              className={cn(
                'text-lg mb-8 leading-relaxed',
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              )}
            >
              Nossa IA especializada vai entender o escopo do seu projeto, funcionalidades e
              objetivos. Ao final, você envia o resumo pronto para nosso WhatsApp e recebe um
              atendimento prioritário.
            </p>

            <div
              className={cn(
                'flex items-center space-x-4 text-sm',
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              )}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                IA Online
              </div>
              <div
                className={cn(
                  'hidden md:block w-px h-4',
                  isDark ? 'bg-neutral-700' : 'bg-neutral-300'
                )}
              />
              <span className="hidden md:block">Atendimento Humano em seguida</span>
            </div>
          </AnimatedSection>

          {/* Chat Interface */}
          <AnimatedSection direction="right" delay={0.2}>
            <div
              className={cn(
                'rounded-2xl shadow-2xl overflow-hidden border flex flex-col h-[500px]',
                isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-200'
              )}
            >
              {/* Chat Header */}
              <div
                className={cn(
                  'p-4 border-b flex justify-between items-center',
                  isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-50 border-neutral-200'
                )}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        'font-bold text-sm',
                        isDark ? 'text-white' : 'text-neutral-900'
                      )}
                    >
                      Consultor Quali
                    </h4>
                    <p className="text-xs text-cyan-500">Assistente Virtual Inteligente</p>
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
                className={cn(
                  'flex-1 overflow-y-auto p-4 space-y-4',
                  isDark ? 'bg-neutral-900/50' : 'bg-neutral-50'
                )}
                ref={scrollRef}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={cn(
                        'max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                        msg.sender === 'user'
                          ? 'bg-cyan-600 text-white rounded-br-none'
                          : isDark
                            ? 'bg-neutral-700 text-neutral-200 rounded-bl-none'
                            : 'bg-white text-neutral-700 rounded-bl-none shadow-sm border border-neutral-200'
                      )}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div
                      className={cn(
                        'rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-2',
                        isDark ? 'bg-neutral-700' : 'bg-white border border-neutral-200'
                      )}
                    >
                      <div
                        className={cn(
                          'w-2 h-2 rounded-full animate-bounce',
                          isDark ? 'bg-neutral-400' : 'bg-neutral-500'
                        )}
                      />
                      <div
                        className={cn(
                          'w-2 h-2 rounded-full animate-bounce',
                          isDark ? 'bg-neutral-400' : 'bg-neutral-500'
                        )}
                        style={{ animationDelay: '75ms' }}
                      />
                      <div
                        className={cn(
                          'w-2 h-2 rounded-full animate-bounce',
                          isDark ? 'bg-neutral-400' : 'bg-neutral-500'
                        )}
                        style={{ animationDelay: '150ms' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div
                className={cn(
                  'p-4 border-t',
                  isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-200'
                )}
              >
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
                    className={cn(
                      'flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all',
                      isDark
                        ? 'bg-neutral-900 border-neutral-600 text-white placeholder:text-neutral-500'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder:text-neutral-400'
                    )}
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
