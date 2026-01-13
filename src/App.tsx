import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { ContactSection } from '@/components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-secondary text-white">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
