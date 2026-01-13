import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared/Logo'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? isDark
            ? 'bg-secondary/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={cn(
                  'cursor-pointer transition-colors font-medium',
                  isDark
                    ? 'text-neutral-300 hover:text-primary'
                    : 'text-neutral-600 hover:text-primary'
                )}
                activeClass="!text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button className="bg-primary hover:bg-primary-light text-secondary font-semibold">
              Fale Conosco
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'hover:bg-white/10',
              isDark
                ? 'text-white hover:text-primary'
                : 'text-neutral-700 hover:text-primary'
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}
