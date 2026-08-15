import { researchItems } from '../data/researchData'

function ResearchSection() {
  return (
    <section
      className="research-section"
      id="research"
      aria-labelledby="research-heading"
    >
      <div className="section-label">
        <span>06</span>
        <p>RESEARCH + DEVELOPMENT</p>
      </div>

      <div className="research-header">
        <div>
          <p className="eyebrow">
            ADVANCED ORBITAL SYSTEMS
          </p>

          <h2 id="research-heading">
            Advancing the next
            <span>
              {' '}
              orbital capability.
            </span>
          </h2>
        </div>

        <div className="research-intro">
          <p>
            Skyfall research extends the technologies behind
            autonomous capture into increasingly capable mission
            architectures, software systems, and orbital
            infrastructure.
          </p>

          <a
            className="research-link"
            href="#contact"
          >
            Explore Research

            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="research-field">
        <div
          className="research-orbit-visual"
          aria-hidden="true"
        >
          <div className="research-orbit orbit-research-one" />
          <div className="research-orbit orbit-research-two" />

          <div className="research-object research-object-a">
            <span>R1</span>
          </div>

          <div className="research-object research-object-b">
            <span>R2</span>
          </div>

          <div className="research-object research-object-c">
            <span>R3</span>
          </div>

          <div className="research-path" />

          <div className="research-packet packet-research-one" />
          <div className="research-packet packet-research-two" />

          <span className="research-field-label label-model">
            MODEL
          </span>

          <span className="research-field-label label-sim">
            SIM
          </span>

          <span className="research-field-label label-flight">
            FLIGHT
          </span>
        </div>

        <div className="research-list">
          {researchItems.map((item) => (
            <article
              className="research-item"
              key={item.number}
            >
              <span className="research-number">
                {item.number}
              </span>

              <div>
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchSection