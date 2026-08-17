function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">
            START A PROGRAM
          </p>

          <h2 id="contact-heading">
            Build the next
            <span>
              {' '}
              orbital capability.
            </span>
          </h2>

          <p>
            Talk with Skyfall's team about capture systems, autonomy, mission
            software, spacecraft integration, research programs, and
            commercial partnerships.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href="mailto:contact@skyfall.space"
          >
            Contact Skyfall
          </a>

          <a
            className="button button-secondary"
            href="#products-catalog"
          >
            View Products
          </a>
        </div>
      </div>

      
    </section>
  )
}

export default ContactSection