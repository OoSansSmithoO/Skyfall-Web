import { useEffect, useRef, useState } from 'react'
import { technologyItems } from '../../data/siteData'

function TechnologySection() {
  const technologyRef = useRef<HTMLElement | null>(null)
  const [technologyActive, setTechnologyActive] = useState(false)

  useEffect(() => {
    const section = technologyRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setTechnologyActive(true)
        observer.unobserve(entry.target)
      },
      {
        threshold: 0.22,
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={technologyRef}
      className={`technology-section${technologyActive ? ' is-active' : ''}`}
      id="technology"
      aria-labelledby="technology-heading"
    >
      <div className="section-label">
        <span>02</span>
        <p>TECHNOLOGY ECOSYSTEM</p>
      </div>

      <div className="technology-header">
        <div>
          <p className="eyebrow">
            SKYFALL SYSTEM ARCHITECTURE
          </p>

          <h2 id="technology-heading">
            One capture platform.
            <span>
              A coordinated orbital network.
            </span>
          </h2>
        </div>

        <p className="technology-intro">
          Skyfall combines autonomous capture systems, distributed
          sensing, proximity operations, mission software, and
          coordinated orbital transfer into a scalable debris-retrieval
          architecture.
        </p>
      </div>

      <div className="constellation-panel">
        <div className="constellation-copy">
          <span className="system-status">
            NETWORK / ACTIVE
          </span>

          <h3>
            Distributed Capture
            <span>
              {' '}
              &amp; Transfer Architecture
            </span>
          </h3>

          <p>
            Individual Skyfall capture vehicles operate as
            mission-capable nodes while remaining coordinated through
            a larger constellation architecture for tracking, tasking,
            capture, stabilization, transfer, and recovery operations.
          </p>

          <div className="constellation-stats">
            <div>
              <small>MODE</small>
              <strong>DISTRIBUTED</strong>
            </div>

            <div>
              <small>CONTROL</small>
              <strong>AUTONOMOUS</strong>
            </div>

            <div>
              <small>NETWORK</small>
              <strong>COORDINATED</strong>
            </div>
          </div>
        </div>

        <div
          className="constellation-visual"
          aria-hidden="true"
        >
          <div className="earth-art">
            <div className="earth-glow" />

            <div className="earth-sphere">
              <span className="earth-continent continent-a" />
              <span className="earth-continent continent-b" />
              <span className="earth-continent continent-c" />

              <span className="earth-cloud cloud-a" />
              <span className="earth-cloud cloud-b" />
            </div>

            <div className="earth-atmosphere" />
            <div className="earth-horizon" />

            <div className="ground-station">
              <div className="ground-mast" />

              <div className="ground-dish dish-primary">
                <span />
              </div>

              <div className="ground-dish dish-secondary">
                <span />
              </div>

              <div className="ground-base">
                <small>SVALBARD / GS</small>
              </div>
            </div>
          </div>

          <div className="transfer-orbit orbit-a" />
          <div className="transfer-orbit orbit-b" />
          <div className="transfer-orbit orbit-c" />

          <div className="debris-object">
            <span>DEBRIS</span>
          </div>

          <div className="constellation-search search-one" />
          <div className="constellation-search search-two" />
          <div className="constellation-search search-three" />

          <div className="constellation-node node-primary">
            <div className="satellite-art">
              <span className="sat-panel sat-panel-left" />

              <span className="sat-body">
                <small>S1</small>
              </span>

              <span className="sat-panel sat-panel-right" />
              <span className="sat-antenna" />
            </div>

            <span className="node-role">
              CAPTURE
            </span>
          </div>

          <div className="constellation-node node-two">
            <div className="satellite-art">
              <span className="sat-panel sat-panel-left" />

              <span className="sat-body">
                <small>S2</small>
              </span>

              <span className="sat-panel sat-panel-right" />
              <span className="sat-antenna" />
            </div>

            <span className="node-role">
              TRANSFER
            </span>
          </div>

          <div className="constellation-node node-three">
            <div className="satellite-art">
              <span className="sat-panel sat-panel-left" />

              <span className="sat-body">
                <small>S3</small>
              </span>

              <span className="sat-panel sat-panel-right" />
              <span className="sat-antenna" />
            </div>

            <span className="node-role">
              RECOVERY
            </span>
          </div>

          <div className="constellation-node node-four">
            <div className="satellite-art">
              <span className="sat-panel sat-panel-left" />

              <span className="sat-body">
                <small>S4</small>
              </span>

              <span className="sat-panel sat-panel-right" />
              <span className="sat-antenna" />
            </div>

            <span className="node-role">
              RELAY
            </span>
          </div>

          <div className="constellation-capture-tether" />

          <div className="constellation-net">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="payload-capture-ring">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="payload-status">
            <span className="status-dot" />
            PAYLOAD SECURED
          </div>

          <div className="transfer-line transfer-one" />
          <div className="transfer-line transfer-two" />

          <div className="transfer-packet packet-one" />
          <div className="transfer-packet packet-two" />

          <div className="network-label label-track">
            TRACK
          </div>

          <div className="network-label label-transfer">
            TRANSFER
          </div>

          <div className="network-label label-recover">
            RECOVER
          </div>

          <div className="relay-data-stream">
            <span>01001001</span>
            <span>SYS::LINK</span>
            <span>0x7A4F</span>
            <span>TLM</span>
            <span>10110110</span>
            <span>NAV</span>
            <span>CRC:OK</span>
            <span>00101101</span>
            <span>RX</span>
            <span>0x2F91</span>
            <span>SYNC</span>
            <span>11001010</span>
          </div>

          <div className="ground-link-label">
            S4 / DOWNLINK
          </div>
        </div>
      </div>

      <div className="technology-grid">
        {technologyItems.map((item) => (
          <article key={item.number}>
            <span>
              {item.number}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechnologySection
