import { useState } from 'react'

const primaryNavigation = [
  { label: 'Technology', href: '#technology' },
  { label: 'Products', href: '#products-catalog' },
  { label: 'Missions', href: '#missions' },
  { label: 'Company', href: '#company' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-header-shell">
      <div className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Skyfall home"
          onClick={closeMenu}
        >
          SKYFALL
        </a>

        <nav
          className="site-nav"
          aria-label="Primary navigation"
        >
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="header-cta"
            href="#contact"
          >
            Contact
          </a>

          <button
            className={`mobile-menu-button${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="true"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`mobile-navigation${menuOpen ? ' is-open' : ''}`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation">
          {primaryNavigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <strong>
                {item.label}
              </strong>

              <span aria-hidden="true">
                →
              </span>
            </a>
          ))}

          <a
            className="mobile-contact-link"
            href="#contact"
            onClick={closeMenu}
          >
            <span>05</span>
            <strong>Contact</strong>

            <span aria-hidden="true">
              →
            </span>
          </a>
        </nav>

        <div className="mobile-navigation-meta">
          <span>AUTONOMOUS SYSTEMS</span>
          <span>SPACE TECHNOLOGY</span>
          <span>MISSION SOFTWARE</span>
        </div>
      </div>
    </header>
  )
}

export default Header