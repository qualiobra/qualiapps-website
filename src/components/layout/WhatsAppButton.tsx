import { MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/constants'

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg hover:bg-whatsapp-hover transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      {/* Ping animation */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-accent-success" />
      </span>
    </motion.a>
  )
}
