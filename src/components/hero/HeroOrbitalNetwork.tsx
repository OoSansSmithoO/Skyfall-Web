const missionSequence = [
  {
    number: '01',
    label: 'DETECT',
    status: 'ONLINE',
    className: 'sequence-detect',
  },
  {
    number: '02',
    label: 'APPROACH',
    status: 'STANDBY',
    className: 'sequence-approach',
  },
  {
    number: '03',
    label: 'CAPTURE',
    status: 'STANDBY',
    className: 'sequence-capture',
  },
  {
    number: '04',
    label: 'STABILIZE',
    status: 'STANDBY',
    className: 'sequence-stabilize',
  },
  {
    number: '05',
    label: 'RECOVER',
    status: 'STANDBY',
    className: 'sequence-recover',
  },
]

function HeroOrbitalNetwork() {
  return (
    <div
      className="hero-orbital-network"
      aria-hidden="true"
    >
      <div className="hero-network-topline">
        <span>
          SKYFALL / ORBITAL NETWORK
        </span>

        <span className="hero-sim-status">
          <i />
          SIMULATION
        </span>
      </div>

      <div className="hero-earth-field">
        <div className="hero-earth-glow" />

        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-orbit hero-orbit-three" />

        <div className="hero-earth">
          <div className="hero-earth-grid hero-earth-grid-a" />
          <div className="hero-earth-grid hero-earth-grid-b" />
          <div className="hero-earth-grid hero-earth-grid-c" />

          <div className="hero-land land-one" />
          <div className="hero-land land-two" />
          <div className="hero-land land-three" />

          <div className="hero-earth-shadow" />

          <div className="hero-ground-station">
            <span className="hero-ground-dot" />

            <small className="hero-ground-label">
              GS / POLAR
            </small>
          </div>
        </div>

        {/* ====================================================
            S1 / CAPTURE
            ==================================================== */}

        <div className="hero-node hero-node-one">
            <div className="hero-node-core">
            <span>S1</span>
            </div>
          <small>
            CAPTURE
          </small>
        </div>

        {/* ====================================================
            S2 / TRANSFER
            ==================================================== */}

        <div className="hero-node hero-node-two">
          <div className="hero-node-core">
            <span>S2</span>
          </div>

          <small>
            TRANSFER
          </small>
        </div>

        {/* ====================================================
            S3 / RECOVERY
            ==================================================== */}

        <div className="hero-node hero-node-three">
          <div className="hero-node-core">
            <span>S3</span>
          </div>

          <small>
            RECOVERY
          </small>
        </div>

        {/* ====================================================
            SKYFALL / PRIMARY VEHICLE
            ==================================================== */}

        <div className="hero-node hero-node-four">
          <div className="hero-node-logo">

            <img
              src={`${import.meta.env.BASE_URL}brand/manifestation.png`}
              alt="Skyfall"
            />
          </div>

          <small>
            SKYFALL / 01
          </small>
        </div>

        {/* ====================================================
            OBJECT / TARGET
            ==================================================== */}

        <div className="hero-target">
          <span />

          <small>
            OBJECT / 01
          </small>
        </div>

        {/* ====================================================
            ACQUISITION
            ==================================================== */}

        <div className="hero-acquisition-ring ring-one" />
        <div className="hero-acquisition-ring ring-two" />

        <div className="hero-intercept-path" />

        {/* ====================================================
            DATA LINK
            ==================================================== */}

        <div className="hero-link-stream">
          <span>
            101101
          </span>

          <span>
            TRACK / 01
          </span>

          <span>
            LINK / NOMINAL
          </span>

          <span>
            011010
          </span>
        </div>

        {/* ====================================================
            NETWORK READOUT
            ==================================================== */}

        <div className="hero-map-readout">
          <span>
            PROFILE
          </span>

          <strong>
            SF-N01 / DEMO
          </strong>

          <span>
            ORBIT
          </span>

          <strong>
            LEO / SIM
          </strong>

          <span>
            NETWORK
          </span>

          <strong>
            04 NODES
          </strong>
        </div>
      </div>

      {/* ======================================================
          INTERNAL MISSION SEQUENCE
          ====================================================== */}

      <div className="hero-mission-sequence">
        <div className="hero-sequence-header">
          <span>
            MISSION SEQUENCE
          </span>

          <span>
            T+ 00:02:14
          </span>
        </div>

        {missionSequence.map((stage) => (
          <div
            className={`hero-sequence-row ${stage.className}`}
            key={stage.number}
          >
            <span>
              {stage.number}
            </span>

            <strong>
              {stage.label}
            </strong>

            <small>
              {stage.status}
            </small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroOrbitalNetwork
