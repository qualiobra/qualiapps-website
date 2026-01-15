import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const { isDark } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        'font-semibold text-xs px-2 min-w-[40px]',
        isDark
          ? 'text-neutral-300 hover:text-primary hover:bg-white/10'
          : 'text-neutral-600 hover:text-primary hover:bg-neutral-100'
      )}
      title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>
  )
}
