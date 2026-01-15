import '@/i18n'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { QualiObraSection } from '@/components/sections/QualiObraSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { EstimatorSection } from '@/components/sections/EstimatorSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { ContactSection } from '@/components/sections/ContactSection'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen theme-bg theme-text transition-colors duration-300">
        <Header />

        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <QualiObraSection />
          <ProcessSection />
          <EstimatorSection />
          <TestimonialsSection />
          <ProjectsSection />
          <TeamSection />
          <ContactSection />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
