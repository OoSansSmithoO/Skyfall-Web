import HeroOrbitalNetwork from './HeroOrbitalNetwork'

function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-heading"
    >
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow-mask">
            <p className="hero-eyebrow">
              AUTONOMOUS SYSTEMS FOR THE ORBITAL ECONOMY
            </p>
          </div>

          <h1
            className="hero-title"
            id="hero-heading"
          >
            <span className="hero-title-line">
              <span className="hero-title-reveal hero-title-primary">
                Capture the
              </span>
            </span>

            <span className="hero-title-line">
              <span className="hero-title-reveal hero-title-secondary">
                unreachable.
              </span>
            </span>
          </h1>

          <div className="hero-lead-mask">
            <p className="hero-lead">
              Skyfall develops autonomous spacecraft, 
              orbital robotics, deployable capture systems, 
              proximity-operations technology, 
              and mission software for commercial, 
              civil, defense, research, and emerging orbital missions.
            </p>
          </div>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#technology"
            >
              <span>
                Explore Technology
              </span>

              <span
                className="button-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              className="button button-secondary"
              href="#contact"
            >
              <span>
                Work With Skyfall
              </span>

              <span
                className="button-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <HeroOrbitalNetwork />
      </div>
    </section>
  )
}

export default Hero