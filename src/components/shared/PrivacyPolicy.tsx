import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { COMPANY } from '@/lib/constants'

export function PrivacyPolicy() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="text-neutral-400 hover:text-primary transition-colors text-sm">
          Política de Privacidade
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[85vh] bg-secondary border-neutral-800">
        <SheetHeader className="border-b border-neutral-800 pb-4">
          <SheetTitle className="text-white text-xl">Política de Privacidade</SheetTitle>
        </SheetHeader>
        <div className="h-full overflow-y-auto py-6 pr-4">
          <div className="prose prose-invert max-w-3xl mx-auto text-neutral-300">
            <p className="text-sm text-neutral-500 mb-6">
              Última atualização: 13 de Janeiro de 2026
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">1. Informações que Coletamos</h2>
              <p className="mb-4">
                A {COMPANY.name} coleta informações que você nos fornece diretamente quando:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Preenche nosso formulário de contato (nome, email, telefone, mensagem)</li>
                <li>Entra em contato conosco via WhatsApp ou email</li>
                <li>Solicita orçamentos para nossos serviços</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">2. Como Usamos suas Informações</h2>
              <p className="mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Responder suas solicitações e dúvidas</li>
                <li>Enviar orçamentos e propostas comerciais</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">3. Compartilhamento de Dados</h2>
              <p className="mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros
                para fins de marketing. Podemos compartilhar dados apenas:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Com prestadores de serviço essenciais (hospedagem, email)</li>
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteger nossos direitos legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">4. Cookies e Tecnologias</h2>
              <p className="mb-4">
                Nosso site pode utilizar cookies e tecnologias similares para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Manter suas preferências de navegação</li>
                <li>Analisar o tráfego do site (analytics)</li>
                <li>Melhorar a performance e segurança</li>
              </ul>
              <p>
                Você pode configurar seu navegador para recusar cookies, mas isso pode
                afetar algumas funcionalidades do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">5. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger
                suas informações contra acesso não autorizado, alteração, divulgação ou
                destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">6. Seus Direitos (LGPD)</h2>
              <p className="mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">7. Contato</h2>
              <p className="mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política,
                entre em contato:
              </p>
              <ul className="list-none space-y-2">
                <li><strong className="text-white">Email:</strong> {COMPANY.email}</li>
                <li><strong className="text-white">WhatsApp:</strong> {COMPANY.phone}</li>
                <li><strong className="text-white">Localização:</strong> {COMPANY.location}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">8. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta política periodicamente. Recomendamos que você
                revise esta página regularmente para estar ciente de quaisquer alterações.
                Alterações significativas serão comunicadas de forma destacada em nosso site.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-neutral-700">
              <p className="text-sm text-neutral-500">
                {COMPANY.name} - CNPJ: 36.170.103/0001-47<br />
                {COMPANY.location}
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
