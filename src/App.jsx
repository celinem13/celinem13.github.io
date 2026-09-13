import "./App.css";

import { SiteFooter, SiteHeader } from "./components/layout/index.js";

import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  StrengthsSection,
} from "./components/sections/index.js";

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