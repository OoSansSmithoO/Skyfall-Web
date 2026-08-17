import { capabilityItems } from '../../data/capabilityData'

function CapabilitiesSection() {
  return (
    <section
      className="capabilities-section"
      id="capabilities"
      aria-labelledby="capabilities-heading"
    >
      <div className="section-label">
        <span>04</span>
        <p>CAPABILITIES</p>
      </div>

      <div className="capabilities-header">
        <div>
          <p className="eyebrow">
            ENGINEERING + SOFTWARE + INTEGRATION
          </p>

          <h2 id="capabilities-heading">
            Engineering the
            <span>
              {' '}
              mission stack.
            </span>
          </h2>
        </div>

        <div className="capabilities-header-copy">
          <p>
            Skyfall develops modular systems and engineering
            capabilities that can be delivered independently or
            integrated into larger mission architectures.
          </p>

          <div className="capabilities-commercial-line">
            <span>SYSTEMS</span>
            <span>SOFTWARE</span>
            <span>INTEGRATION</span>
            <span>R&amp;D</span>
            <span>LICENSING</span>
          </div>
        </div>
      </div>

      <div className="capability-matrix">
        <div
          className="capability-matrix-head"
          aria-hidden="true"
        >
          <span>CAPABILITY</span>
          <span>ENGINEERING OUTPUT</span>
          <span>COMMERCIAL PATH</span>
        </div>

        {capabilityItems.map((capability) => (
          <article
            className="capability-row"
            key={capability.number}
          >
            <div className="capability-title">
              <span className="capability-number">
                {capability.number}
              </span>

              <div>
                <h3>
                  {capability.title}
                </h3>

                <p>
                  {capability.summary}
                </p>
              </div>
            </div>

            <div className="capability-deliverables">
              {capability.deliverables.map((deliverable) => (
                <span key={deliverable}>
                  {deliverable}
                </span>
              ))}
            </div>

            <div className="capability-commercial">
              {capability.commercial.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CapabilitiesSection
