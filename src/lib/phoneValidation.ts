/**
 * Validacao de celular brasileiro
 */

/**
 * Valida se uma string parece ser um numero de celular brasileiro valido
 * Aceita formatos: (69) 99602-1005, 69996021005, +55 69 99602-1005, etc.
 */
export function isValidBrazilianPhone(input: string): boolean {
  // Remove todos os caracteres nao numericos
  const digits = input.replace(/\D/g, '')

  // Celular brasileiro: 10-11 digitos (com DDD)
  // Se tiver 12-13, pode incluir codigo do pais (55)
  if (digits.length >= 10 && digits.length <= 13) {
    // Se comecar com 55 (codigo BR), remove
    const phoneWithoutCountry =
      digits.startsWith('55') && digits.length > 11 ? digits.substring(2) : digits

    // Deve ter 10 ou 11 digitos (DDD + numero)
    return phoneWithoutCountry.length >= 10 && phoneWithoutCountry.length <= 11
  }

  return false
}

/**
 * Formata numero de celular para padrao brasileiro
 */
export function formatBrazilianPhone(input: string): string {
  const digits = input.replace(/\D/g, '')

  // Remove codigo do pais se presente
  const phone =
    digits.startsWith('55') && digits.length > 11 ? digits.substring(2) : digits

  if (phone.length === 11) {
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`
  } else if (phone.length === 10) {
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`
  }

  return input
}
