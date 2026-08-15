function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          AUTONOMOUS SYSTEMS FOR THE ORBITAL ECONOMY
        </p>

        <h1>
          Capture the
          <span> unreachable.</span>
        </h1>

        <p className="hero-lead">
          Skyfall develops autonomous spacecraft technologies,
          deployable capture systems, proximity-operation systems,
          and mission software for orbital operations.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#technology"
          >
            Explore Technology
          </a>

          <a
            className="button button-secondary"
            href="#contact"
          >
            Work With Skyfall
          </a>
        </div>
      </div>

      <div
        className="hero-visual"
        aria-hidden="true"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="target-node" />

        <div className="spacecraft-node">
          <span>S</span>
        </div>
      </div>
    </section>
  )
}

export default Hero