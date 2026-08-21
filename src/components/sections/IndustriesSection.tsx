const industries = [
  {
    number: '01',
    title: 'Commercial Space',
    description:
      'Autonomous spacecraft, mission systems, orbital logistics, servicing, inspection, and emerging in-space operations.',
    tags: [
      'SPACECRAFT',
      'LOGISTICS',
      'SERVICING',
    ],
    image:
      'images/industries/commercial-space.png',
  },
  {
    number: '02',
    title: 'Defense & National Security',
    description:
      'Distributed sensing, proximity operations, resilient spacecraft systems, mission autonomy, and space-domain capabilities.',
    tags: [
      'AUTONOMY',
      'SENSING',
      'SPACE DOMAIN',
    ],
    image:
      'images/industries/defense-national-security.png',
  },
  {
    number: '03',
    title: 'Civil Space',
    description:
      'Advanced technologies for exploration, orbital infrastructure, research missions, servicing, and sustainable space operations.',
    tags: [
      'EXPLORATION',
      'INFRASTRUCTURE',
      'RESEARCH',
    ],
    image:
      'images/industries/civil-space.png',
  },
  {
    number: '04',
    title: 'Satellite Operators',
    description:
      'Inspection, rendezvous, recovery, servicing, mission extension, monitoring, and future orbital support capabilities.',
    tags: [
      'INSPECTION',
      'RPO',
      'RECOVERY',
    ],
    image:
      'images/industries/satellite-operators.png',
  },
  {
    number: '05',
    title: 'Spacecraft Manufacturers',
    description:
      'Mission-configurable subsystems, autonomy, sensing, software, capture technologies, integration, and engineering support.',
    tags: [
      'SUBSYSTEMS',
      'AVIONICS',
      'INTEGRATION',
    ],
    image:
      'images/industries/spacecraft-manufacturing.png',
  },
  {
    number: '06',
    title: 'Launch & Mission Providers',
    description:
      'Post-deployment operations, mission software, orbital transfer support, payload interaction, and coordinated spacecraft operations.',
    tags: [
      'DEPLOYMENT',
      'TRANSFER',
      'OPERATIONS',
    ],
    image:
      'images/industries/launch-mission-providers.png',
  },
  {
    number: '07',
    title: 'Research & Universities',
    description:
      'Experimental spacecraft systems, simulation, prototypes, orbital robotics, sensing, flight software, and collaborative research.',
    tags: [
      'R&D',
      'PROTOTYPING',
      'SIMULATION',
    ],
    image:
      'images/industries/research-universities.png',
  },
  {
    number: '08',
    title: 'Orbital Servicing & Logistics',
    description:
      'Capture, stabilization, transfer, inspection, recovery, material movement, and future infrastructure operations in orbit.',
    tags: [
      'CAPTURE',
      'TRANSFER',
      'LOGISTICS',
    ],
    image:
      'images/industries/orbital-servicing-logistics.png',
  },
  {
    number: '09',
    title: 'Space Sustainability',
    description:
      'Debris remediation, responsible orbital operations, inspection, retrieval, tracking support, and spacecraft recovery technologies.',
    tags: [
      'DEBRIS',
      'REMEDIATION',
      'SUSTAINABILITY',
    ],
    image:
      'images/industries/space-sustainability.png',
  },
  {
    number: '10',
    title: 'Space Domain Awareness & On-Orbit Operations',
    description:
      'Tracking, characterization, distributed sensing, orbital monitoring, proximity operations, and coordinated on-orbit mission support.',
    tags: [
      'SPACE DOMAIN',
      'TRACKING',
      'ON-ORBIT',
    ],

    image:
      'images/industries/space-domain-awareness.png',
  },
]

function IndustriesSection() {
  return (
    <section
      className="industries-section"
      id="industries"
      aria-labelledby="industries-heading"
    >
      <div className="industries-inner">
        <div className="section-label industries-label">
          <span>
            03
          </span>

          <p>
            MARKETS & INDUSTRIES
          </p>
        </div>

        <div className="industries-header">
          <div>
            <p className="eyebrow">
              TECHNOLOGY ACROSS THE ORBITAL ECONOMY
            </p>

            <h2 id="industries-heading">
              Built for more than
              <span>
                {' '}
                one mission.
              </span>
            </h2>
          </div>

          <p className="industries-intro">
            Skyfall develops adaptable spacecraft,
            robotics, software, sensing, and orbital
            systems for commercial, civil, defense,
            research, infrastructure, servicing, and
            emerging in-space markets.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <article
              className="industry-card"
              key={industry.number}
            >
              <div className="industry-card-top">
                <span className="industry-number">
                  {industry.number}
                </span>

                <span
                  className="industry-node"
                  aria-hidden="true"
                />
              </div>

              <div className="industry-image">
                <img
                  src={`${import.meta.env.BASE_URL}${industry.image}`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="industry-image-grid"
                  aria-hidden="true"
                />

                <div
                  className="industry-image-scan"
                  aria-hidden="true"
                />

                <div
                  className="industry-image-corners"
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <h3>
                {industry.title}
              </h3>

              <p>
                {industry.description}
              </p>

              <div className="industry-tags">
                {industry.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="industries-outreach">
          <div>
            <span className="industries-outreach-label">
              PARTNERSHIPS / PROGRAMS / PROCUREMENT
            </span>

            <strong>
              Have a mission outside these categories?
            </strong>

            <p>
              Skyfall is structured around adaptable
              mission architectures and collaborative
              technology development.
            </p>
          </div>

          <a
            className="industries-outreach-link"
            href="#contact"
          >
            Discuss a Mission

            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
