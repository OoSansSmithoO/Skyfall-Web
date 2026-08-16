import {
  useCallback,
  useState,
} from 'react'

import PreloaderGate from './components/PreloaderGate'

import Header from './components/Header'
import Hero from './components/Hero'
import MissionStrip from './components/MissionStrip'
import FlagshipSection from './components/FlagshipSection'
import TechnologySection from './components/TechnologySection'
import IndustriesSection from './components/IndustriesSection'
import MissionsSection from './components/MissionsSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ProductsSection from './components/ProductsSection'
import ResearchSection from './components/ResearchSection'
import CompanySection from './components/CompanySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [siteReady, setSiteReady] =
    useState(false)

  const handleGateComplete =
    useCallback(() => {
      setSiteReady(true)
    }, [])

  const appClasses = [
    'app-shell',
    siteReady
      ? 'is-site-ready'
      : 'is-site-locked',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={appClasses}>
      <PreloaderGate
        onComplete={handleGateComplete}
      />

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

        <IndustriesSection />

        <MissionsSection />

        <CapabilitiesSection />

        <ProductsSection />

        <ResearchSection />

        <CompanySection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App