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

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-[300px] bg-secondary border-neutral-800"
      >
        <SheetHeader className="border-b border-neutral-800 pb-4">
          <SheetTitle className="flex items-center justify-between">
            <Logo showText={true} />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-neutral-400 hover:text-white hover:bg-white/10"
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
                  className="block py-3 px-4 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-colors font-medium cursor-pointer"
                  activeClass="!text-primary bg-primary/10"
                  onClick={onClose}
                >
                  {link.name}
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
                Fale Conosco
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
