import Header from './components/Header'
import Hero from './components/Hero'
import MissionStrip from './components/MissionStrip'
import FlagshipSection from './components/FlagshipSection'
import TechnologySection from './components/TechnologySection'
import MissionsSection from './components/MissionsSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ProductsSection from './components/ProductsSection'
import ResearchSection from './components/ResearchSection'
import CompanySection from './components/CompanySection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="app-shell">
      <a
        className="skip-link"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div id="top" />

      <Header />

      <main
        id="main-content"
        tabIndex={-1}
      >
        <Hero />
        <MissionStrip />
        <FlagshipSection />
        <TechnologySection />
        <MissionsSection />
        <CapabilitiesSection />
        <ProductsSection />
        <ResearchSection />
        <CompanySection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App