import { missionSteps } from '../data/siteData'

function MissionStrip() {
  return (
    <section
      className="mission-strip"
      aria-label="Skyfall capture mission sequence"
    >
      {missionSteps.map((step, index) => (
        <div key={step}>
          <span>
            {String(index + 1).padStart(2, '0')}
          </span>

          <strong>{step}</strong>
        </div>
      ))}
    </section>
  )
}

export default MissionStrip