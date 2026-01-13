import { Link } from 'react-scroll'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { Separator } from '@/components/ui/separator'
import { PrivacyPolicy } from '@/components/shared/PrivacyPolicy'
import { NAV_LINKS, COMPANY, WHATSAPP_URL } from '@/lib/constants'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { isDark } = useTheme()

  return (
    <footer
      className={cn(
        'border-t transition-colors duration-300',
        isDark
          ? 'bg-secondary-light border-neutral-800'
          : 'bg-neutral-100 border-neutral-200'
      )}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p
              className={cn(
                'max-w-md mb-4 transition-colors duration-300',
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              )}
            >
              Transformamos ideias em soluções digitais. Desenvolvimento de sistemas e
              websites para pequenas e médias empresas com preços justos e foco em IA.
            </p>
            <div
              className={cn(
                'flex items-center gap-2 text-sm transition-colors duration-300',
                isDark ? 'text-neutral-500' : 'text-neutral-500'
              )}
            >
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>no Brasil</span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4
              className={cn(
                'font-semibold mb-4 transition-colors duration-300',
                isDark ? 'text-white' : 'text-neutral-900'
              )}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={cn(
                      'hover:text-primary transition-colors cursor-pointer',
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4
              className={cn(
                'font-semibold mb-4 transition-colors duration-300',
                isDark ? 'text-white' : 'text-neutral-900'
              )}
            >
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center gap-2 hover:text-primary transition-colors',
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  )}
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className={cn(
                    'flex items-center gap-2 hover:text-primary transition-colors',
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  )}
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY.email}
                </a>
              </li>
              <li
                className={cn(
                  'flex items-center gap-2 transition-colors duration-300',
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                )}
              >
                <MapPin className="h-4 w-4" />
                {COMPANY.location}
              </li>
            </ul>
          </div>
        </div>

        <Separator
          className={cn(
            'my-8 transition-colors duration-300',
            isDark ? 'bg-neutral-800' : 'bg-neutral-300'
          )}
        />

        {/* Copyright */}
        <div
          className={cn(
            'flex flex-col md:flex-row items-center justify-between gap-4 text-sm transition-colors duration-300',
            isDark ? 'text-neutral-500' : 'text-neutral-500'
          )}
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>
              &copy; {currentYear} {COMPANY.name}. Todos os direitos reservados.
            </p>
            <span className="hidden md:inline">•</span>
            <PrivacyPolicy />
          </div>
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
