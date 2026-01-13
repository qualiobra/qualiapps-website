import { Link } from 'react-scroll'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { Separator } from '@/components/ui/separator'
import { NAV_LINKS, COMPANY, WHATSAPP_URL } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-light border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-neutral-400 max-w-md mb-4">
              Transformamos ideias em soluções digitais. Desenvolvimento de sistemas e
              websites para pequenas e médias empresas com preços justos e foco em IA.
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>no Brasil</span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-neutral-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <MapPin className="h-4 w-4" />
                {COMPANY.location}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-neutral-800" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
          <p>
            &copy; {currentYear} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Valores: <span className="text-primary">Fé em Deus</span> •{' '}
            <span className="text-primary">Verdade</span> •{' '}
            <span className="text-primary">Design</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
