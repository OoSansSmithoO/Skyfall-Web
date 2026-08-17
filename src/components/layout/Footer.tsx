import AmericanFlag from '../visuals/AmericanFlag'

function Footer() {
  const currentYear =
    new Date().getFullYear()

  return (
    <footer
      className="site-footer"
      aria-label="Skyfall site footer"
    >
      <div className="footer-inner">
        <div className="footer-primary">
          <a
            className="footer-brand"
            href="#top"
            aria-label="Skyfall home"
          >
            <span className="footer-brand-mark">
              SKYFALL
            </span>

            <span className="footer-brand-tagline">
              Autonomous systems for the orbital economy.
            </span>
          </a>

          <nav
            className="footer-navigation"
            aria-label="Footer navigation"
          >
            <a href="#technology">
              Technology
            </a>

            <a href="#products">
              Products
            </a>

            <a href="#missions">
              Missions
            </a>

            <a href="#capabilities">
              Capabilities
            </a>

            <a href="#research">
              Research
            </a>

            <a href="#company">
              Company
            </a>

            <a href="#contact">
              Contact
            </a>
          </nav>
        </div>

        <div className="footer-secondary">
          <div className="footer-american-mark">
            <AmericanFlag />

            <span>
              BUILT IN THE UNITED STATES
            </span>
          </div>

          <p className="footer-copyright">
            © {currentYear} SKYFALL.
            ALL RIGHTS RESERVED.
            <br />
            <span className="footer-attribution">
              Developed by Sanchez &amp; Schmitt
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
