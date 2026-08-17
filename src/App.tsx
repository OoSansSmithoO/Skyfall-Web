import {
  useCallback,
  useState,
} from 'react'

import PreloaderGate from './components/system/PreloaderGate'

import Header from './components/layout/Header'
import Hero from './components/hero/Hero'
import MissionStrip from './components/sections/MissionStrip'
import FlagshipSection from './components/sections/FlagshipSection'
import TechnologySection from './components/sections/TechnologySection'
import IndustriesSection from './components/sections/IndustriesSection'
import MissionsSection from './components/sections/MissionsSection'
import CapabilitiesSection from './components/sections/CapabilitiesSection'
import ProductsSection from './components/sections/ProductsSection'
import ResearchSection from './components/sections/ResearchSection'
import CompanySection from './components/sections/CompanySection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'

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
