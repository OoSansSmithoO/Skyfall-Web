import { missionApplications } from '../../data/missionData'

function MissionsSection() {
  return (
    <section
      className="missions-section"
      id="missions"
      aria-labelledby="missions-heading"
    >
      <div className="section-label">
        <span>03</span>
        <p>MISSION APPLICATIONS</p>
      </div>

      <div className="missions-header">
        <div>
          <p className="eyebrow">
            FROM CAPTURE TO ORBITAL OPERATIONS
          </p>

          <h2 id="missions-heading">
            Built for missions
            <span>
              {' '}
              beyond debris retrieval.
            </span>
          </h2>
        </div>

        <p className="missions-intro">
          Skyfall technologies support autonomous capture, inspection,
          stabilization, servicing, material retrieval, research, and
          future orbital logistics across multiple mission classes.
        </p>
      </div>

      <div className="missions-grid">
        {missionApplications.map((mission) => (
          <article
            className="mission-card"
            key={mission.number}
          >
            <div className="mission-card-top">
              <span>
                {mission.number}
              </span>

              <small>
                {mission.category}
              </small>
            </div>

            <div
              className="mission-card-visual"
              aria-hidden="true"
            >
              <div
                className={`mission-icon mission-icon-${mission.icon}`}
              >
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="mission-card-body">
              <h3>
                {mission.title}
              </h3>

              <p>
                {mission.description}
              </p>
            </div>

            <div className="mission-card-footer">
              <span>
                MISSION CLASS
              </span>

              <span aria-hidden="true">
                →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MissionsSection
