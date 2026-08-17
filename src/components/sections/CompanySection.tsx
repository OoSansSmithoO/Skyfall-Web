function CompanySection() {
  return (
    <section
      className="company-section"
      id="company"
      aria-labelledby="company-heading"
    >
      <div className="section-label">
        <span>07</span>
        <p>COMPANY</p>
      </div>

      <div className="company-layout">
        <div className="company-heading">
          <p className="eyebrow">
            SKYFALL
          </p>

          <h2 id="company-heading">
            Building autonomous systems
            <span>
              {' '}
              for the orbital economy.
            </span>
          </h2>
        </div>

        <div className="company-copy">
          <p>
            Skyfall develops spacecraft technologies, mission
            software, autonomous capture systems, and engineering
            capabilities for increasingly complex operations in Earth
            orbit and beyond.
          </p>

          <p>
            Our work combines capture, autonomy, sensing, simulation,
            integration, and distributed mission architectures into
            deployable systems and commercial technology platforms.
          </p>

          <div className="company-actions">
            <a
              className="company-link"
              href="#contact"
            >
              Work With Skyfall

              <span aria-hidden="true">
                →
              </span>
            </a>

            <a
              className="company-link company-link-muted"
              href="#research"
            >
              Research + Development

              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="company-principles">
        <div>
          <small>01</small>
          <strong>MISSION DRIVEN</strong>
        </div>

        <div>
          <small>02</small>
          <strong>MODULAR SYSTEMS</strong>
        </div>

        <div>
          <small>03</small>
          <strong>AUTONOMOUS OPERATIONS</strong>
        </div>

        <div>
          <small>04</small>
          <strong>COMMERCIAL DEPLOYMENT</strong>
        </div>
      </div>
    </section>
  )
}

export default CompanySection