import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/shared/Logo'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          ? 'bg-secondary/95 backdrop-blur-md shadow-lg shadow-black/20'
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
                className="cursor-pointer text-neutral-300 hover:text-primary transition-colors font-medium"
                activeClass="!text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          to="contact"
          smooth={true}
          offset={-80}
          duration={500}
          className="hidden md:block"
        >
          <Button className="bg-primary hover:bg-primary-light text-secondary font-semibold">
            Fale Conosco
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-primary hover:bg-white/10"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}
