import './App.css'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import ExperienceSection from './components/sections/ExperienceSection'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import StrengthsSection from './components/sections/StrengthsSection'

function App() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <HeroSection />

        <StrengthsSection />

        <ProjectsSection />

        <ExperienceSection />

        <SkillsSection />

        <AboutSection />
        
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App