export type ProductItem = {
  number: string
  family: string
  title: string
  description: string
  mode: string
  status: string
  tags: string[]
}

export const productItems: ProductItem[] = [
  {
    number: '01',
    family: 'CAPTURE SYSTEMS',
    title: 'N-Series',
    description:
      'Deployable soft-capture architecture for irregular and non-cooperative orbital targets.',
    mode: 'SPACECRAFT INTEGRATED',
    status: 'FLAGSHIP',
    tags: [
      'NET CAPTURE',
      'TETHER CONTROL',
      'CAPTURE VERIFICATION',
    ],
  },
  {
    number: '02',
    family: 'MISSION SOFTWARE',
    title: 'Skyfall Mission Core',
    description:
      'Mission-planning, telemetry, tasking, command, and coordination software for distributed orbital operations.',
    mode: 'SOFTWARE PLATFORM',
    status: 'DEVELOPMENT',
    tags: [
      'MISSION PLANNING',
      'TELEMETRY',
      'FLEET COORDINATION',
    ],
  },
  {
    number: '03',
    family: 'AUTONOMY',
    title: 'Proximity Operations Suite',
    description:
      'Autonomy software for target approach, relative navigation, station keeping, and controlled close-range operations.',
    mode: 'SOFTWARE / AVIONICS',
    status: 'DEVELOPMENT',
    tags: [
      'RELATIVE NAV',
      'GUIDANCE',
      'AUTONOMOUS CONTROL',
    ],
  },
  {
    number: '04',
    family: 'SENSING',
    title: 'Capture Verification Module',
    description:
      'Sensor and software package for monitoring deployment state, target interaction, and capture confirmation.',
    mode: 'PAYLOAD MODULE',
    status: 'CONCEPT',
    tags: [
      'SENSOR FUSION',
      'STATE DETECTION',
      'TELEMETRY',
    ],
  },
  {
    number: '05',
    family: 'SIMULATION',
    title: 'Skyfall Digital Mission Lab',
    description:
      'Simulation and digital engineering environment for mission analysis, autonomy development, and system validation.',
    mode: 'SOFTWARE / SERVICES',
    status: 'DEVELOPMENT',
    tags: [
      'MISSION MODELING',
      'SIL / HIL',
      'VALIDATION',
    ],
  },
  {
    number: '06',
    family: 'ENGINEERING SERVICES',
    title: 'Mission Integration',
    description:
      'Engineering support for payload integration, avionics, communications, mission architecture, and technology demonstrations.',
    mode: 'ENGINEERING SERVICES',
    status: 'AVAILABLE',
    tags: [
      'INTEGRATION',
      'R&D',
      'MISSION SUPPORT',
    ],
  },
]