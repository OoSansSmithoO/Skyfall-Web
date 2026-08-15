export type CapabilityItem = {
  number: string
  title: string
  summary: string
  deliverables: string[]
  commercial: string[]
}

export const capabilityItems: CapabilityItem[] = [
  {
    number: '01',
    title: 'Autonomous Systems',
    summary:
      'Autonomy architectures for guidance, navigation, proximity operations, tasking, and distributed mission behavior.',
    deliverables: [
      'GUIDANCE + NAVIGATION',
      'PROXIMITY OPERATIONS',
      'AUTONOMOUS TASKING',
      'CONTROL SOFTWARE',
    ],
    commercial: [
      'SOFTWARE',
      'INTEGRATION',
      'R&D',
    ],
  },
  {
    number: '02',
    title: 'Capture Systems',
    summary:
      'Deployable capture architectures for non-cooperative targets, controlled retention, and post-capture handling.',
    deliverables: [
      'DEPLOYMENT SYSTEMS',
      'NET ARCHITECTURES',
      'TETHER SYSTEMS',
      'CAPTURE CONTROL',
    ],
    commercial: [
      'HARDWARE',
      'LICENSING',
      'INTEGRATION',
    ],
  },
  {
    number: '03',
    title: 'Sensing & Perception',
    summary:
      'Sensor-driven target acquisition, characterization, tracking, relative navigation, and capture-state awareness.',
    deliverables: [
      'TARGET DETECTION',
      'TRACKING',
      'SENSOR FUSION',
      'RELATIVE NAVIGATION',
    ],
    commercial: [
      'SOFTWARE',
      'PAYLOADS',
      'R&D',
    ],
  },
  {
    number: '04',
    title: 'Mission Software',
    summary:
      'Mission-planning and operations software for telemetry, command, coordination, tasking, and fleet-level control.',
    deliverables: [
      'TELEMETRY',
      'COMMAND + CONTROL',
      'MISSION PLANNING',
      'FLEET COORDINATION',
    ],
    commercial: [
      'SOFTWARE',
      'LICENSING',
      'SERVICES',
    ],
  },
  {
    number: '05',
    title: 'Spacecraft Integration',
    summary:
      'Engineering integration across payload interfaces, avionics, communications, power, and spacecraft subsystems.',
    deliverables: [
      'AVIONICS',
      'PAYLOAD INTERFACES',
      'POWER + COMMS',
      'SYSTEM INTEGRATION',
    ],
    commercial: [
      'ENGINEERING',
      'INTEGRATION',
      'R&D',
    ],
  },
  {
    number: '06',
    title: 'Simulation & Digital Engineering',
    summary:
      'Mission modeling, simulation, test environments, and digital engineering for system development and validation.',
    deliverables: [
      'MISSION MODELING',
      'SIL / HIL',
      'DIGITAL ENGINEERING',
      'VERIFICATION',
    ],
    commercial: [
      'SOFTWARE',
      'ENGINEERING',
      'SERVICES',
    ],
  },
]