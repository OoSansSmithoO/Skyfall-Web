import { useEffect, useRef, useState } from 'react'
import {
  flagshipSpecs,
  productAttributes,
} from '../../data/siteData'

function FlagshipSection() {
  const flagshipRef = useRef<HTMLElement | null>(null)
  const [flagshipActive, setFlagshipActive] = useState(false)

  useEffect(() => {
    const section = flagshipRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setFlagshipActive(true)
        observer.unobserve(entry.target)
      },
      {
        threshold: 0.28,
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={flagshipRef}
      className={`flagship${flagshipActive ? ' is-active' : ''}`}
      id="products"
      aria-labelledby="flagship-heading"
    >
      <div className="section-label">
        <span>01</span>
        <p>FLAGSHIP SYSTEM</p>
      </div>

      <div className="flagship-header">
        <div>
          <p className="eyebrow">
            SKYFALL CAPTURE SYSTEMS
          </p>

          <h2 id="flagship-heading">
            N-SERIES
            <span>
              Deployable Capture Systems
            </span>
          </h2>
        </div>

        <p className="flagship-intro">
          A modular soft-capture architecture developed for controlled
          interaction with non-cooperative orbital objects, research
          targets, debris, and material-retrieval missions.
        </p>
      </div>

      <div className="flagship-grid">
        <article className="product-main">
          <div className="product-meta">
            <span>SKYFALL / N-SERIES</span>
            <span>CAPTURE PLATFORM</span>
          </div>

          <div
            className="capture-visual"
            aria-hidden="true"
          >
            <div className="acquisition-sweep" />

            <div className="capture-vehicle">
              <span>SKYFALL</span>

              <div className="launcher-port" />
            </div>

            <div className="capture-tether">
              <span />
            </div>

            <div className="projectile projectile-top" />
            <div className="projectile projectile-bottom" />

            <div className="capture-net">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="capture-target">
              <span>TARGET</span>
            </div>

            <div className="capture-confirm">
              CAPTURE VERIFIED
            </div>
          </div>

          <div className="product-footer">
            {productAttributes.map((attribute) => (
              <div key={attribute.label}>
                <small>
                  {attribute.label}
                </small>

                <strong>
                  {attribute.value}
                </strong>
              </div>
            ))}
          </div>
        </article>

        <div className="flagship-specs">
          {flagshipSpecs.map((spec) => (
            <article key={spec.number}>
              <span>
                {spec.number}
              </span>

              <h3>
                {spec.title}
              </h3>

              <p>
                {spec.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlagshipSection
