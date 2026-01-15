import { Link } from 'react-scroll'
import { X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared/Logo'
import { NAV_LINKS } from '@/lib/constants'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { isDark } = useTheme()
  const { t } = useTranslation('navigation')
  const { t: tCommon } = useTranslation('common')

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className={cn(
          'w-[300px] transition-colors duration-300',
          isDark
            ? 'bg-secondary border-neutral-800'
            : 'bg-white border-neutral-200'
        )}
      >
        <SheetHeader
          className={cn(
            'border-b pb-4 transition-colors duration-300',
            isDark ? 'border-neutral-800' : 'border-neutral-200'
          )}
        >
          <SheetTitle className="flex items-center justify-between">
            <Logo showText={true} />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className={cn(
                'transition-colors',
                isDark
                  ? 'text-neutral-400 hover:text-white hover:bg-white/10'
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
              )}
            >
              <X className="h-5 w-5" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={cn(
                    'block py-3 px-4 rounded-lg transition-colors font-medium cursor-pointer',
                    isDark
                      ? 'text-neutral-300 hover:text-white hover:bg-white/5'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  )}
                  activeClass="!text-primary bg-primary/10"
                  onClick={onClose}
                >
                  {t(link.to === 'hero' ? 'home' : link.to)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 px-4">
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={onClose}
            >
              <Button className="w-full bg-primary hover:bg-primary-light text-secondary font-semibold">
                {tCommon('contactUs')}
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
