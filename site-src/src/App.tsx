import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import ResearchSection from './sections/ResearchSection'
import ExperienceSection from './sections/ExperienceSection'
import BuildingSection from './sections/BuildingSection'
import SimulationsSection from './sections/SimulationsSection'
import HonoursSection from './sections/HonoursSection'
import CredentialsSection from './sections/CredentialsSection'
import SkillsSection from './sections/SkillsSection'
import EducationSection from './sections/EducationSection'
import FaqSection from './sections/FaqSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ResearchSection />
      <ExperienceSection />
      <BuildingSection />
      <SimulationsSection />
      <HonoursSection />
      <CredentialsSection />
      <SkillsSection />
      <EducationSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
