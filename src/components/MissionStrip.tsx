const missionSteps = [
  'DETECT',
  'APPROACH',
  'CAPTURE',
  'STABILIZE',
  'RECOVER',
]

function MissionStrip() {
  return (
    <section
      className="mission-strip"
      aria-label="Skyfall mission sequence"
    >
      {missionSteps.map((step, index) => (
        <div
          className="mission-strip-stage"
          key={step}
        >
          <span
            className="mission-strip-lamp"
            aria-hidden="true"
          />

          <span className="mission-strip-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          <strong>
            {step}
          </strong>
        </div>
      ))}
    </section>
  )
}

export default MissionStrip