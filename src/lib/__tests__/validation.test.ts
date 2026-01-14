import { describe, it, expect } from 'vitest'
import { contactSchema } from '../validation'

describe('contactSchema', () => {
  describe('campos válidos', () => {
    it('deve aceitar dados válidos', () => {
      const validData = {
        name: 'Lucas',
        email: 'lucas@example.com',
        whatsapp: '69996021005',
        message: 'Olá, gostaria de mais informações.',
      }
      const result = contactSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })
  })

  describe('campo name', () => {
    it('deve rejeitar nome vazio com mensagem em português', () => {
      const data = { name: '', email: 'a@b.com', whatsapp: '1234567890', message: '1234567890' }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        const nameError = result.error.issues.find(e => e.path[0] === 'name')
        expect(nameError?.message).toBe('Campo obrigatório')
      }
    })

    it('deve rejeitar nome com menos de 2 caracteres', () => {
      const data = { name: 'A', email: 'a@b.com', whatsapp: '1234567890', message: '1234567890' }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        const nameError = result.error.issues.find(e => e.path[0] === 'name')
        expect(nameError?.message).toBe('Nome deve ter pelo menos 2 caracteres')
      }
    })
  })

  describe('campo email', () => {
    it('deve rejeitar email vazio com mensagem em português', () => {
      const data = { name: 'Lucas', email: '', whatsapp: '1234567890', message: '1234567890' }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        const emailError = result.error.issues.find(e => e.path[0] === 'email')
        expect(emailError?.message).toBe('Campo obrigatório')
      }
    })

    it('deve rejeitar email inválido', () => {
      const data = { name: 'Lucas', email: 'invalido', whatsapp: '1234567890', message: '1234567890' }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        const emailError = result.error.issues.find(e => e.path[0] === 'email')
        expect(emailError?.message).toBe('Email inválido')
      }
    })
  })

  describe('campo whatsapp', () => {
    it('deve rejeitar whatsapp vazio', () => {
      const data = { name: 'Lucas', email: 'a@b.com', whatsapp: '', message: '1234567890' }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        const error = result.error.issues.find(e => e.path[0] === 'whatsapp')
        expect(error?.message).toBe('Campo obrigatório')
      }
    })

    it('deve rejeitar whatsapp com menos de 10 dígitos', () => {
      const data = { name: 'Lucas', email: 'a@b.com', whatsapp: '123456789', message: '1234567890' }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        const error = result.error.issues.find(e => e.path[0] === 'whatsapp')
        expect(error?.message).toBe('WhatsApp deve ter pelo menos 10 dígitos')
      }
    })
  })

  describe('campo message', () => {
    it('deve rejeitar mensagem vazia', () => {
      const data = { name: 'Lucas', email: 'a@b.com', whatsapp: '1234567890', message: '' }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        const error = result.error.issues.find(e => e.path[0] === 'message')
        expect(error?.message).toBe('Campo obrigatório')
      }
    })

    it('deve rejeitar mensagem com menos de 10 caracteres', () => {
      const data = { name: 'Lucas', email: 'a@b.com', whatsapp: '1234567890', message: '123456789' }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        const error = result.error.issues.find(e => e.path[0] === 'message')
        expect(error?.message).toBe('Mensagem deve ter pelo menos 10 caracteres')
      }
    })
  })

  describe('dados undefined (caso do bug)', () => {
    it('NÃO deve mostrar "Invalid input" para campos undefined', () => {
      const data = { name: undefined, email: undefined, whatsapp: undefined, message: undefined }
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        result.error.issues.forEach(err => {
          expect(err.message).not.toContain('Invalid input')
          expect(err.message).toBe('Campo obrigatório')
        })
      }
    })

    it('NÃO deve mostrar "Invalid input" para objeto vazio', () => {
      const data = {}
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(false)
      if (!result.success) {
        result.error.issues.forEach(err => {
          expect(err.message).not.toContain('Invalid input')
          expect(err.message).toBe('Campo obrigatório')
        })
      }
    })
  })
})
