export type NavigationItem = {
  label: string
  href: string
}

export type FlagshipSpec = {
  number: string
  title: string
  description: string
}

export type ProductAttribute = {
  label: string
  value: string
}

export type TechnologyItem = {
  number: string
  title: string
  description: string
}

export const navigationItems: NavigationItem[] = [
  { label: 'Technology', href: '#technology' },
  { label: 'Products', href: '#products' },
  { label: 'Missions', href: '#missions' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Research', href: '#research' },
  { label: 'Company', href: '#company' },
]

export const missionSteps: string[] = [
  'DETECT',
  'APPROACH',
  'CAPTURE',
  'STABILIZE',
  'RECOVER',
]

export const flagshipSpecs: FlagshipSpec[] = [
  {
    number: '01',
    title: 'Soft Capture',
    description:
      'Deployable capture architecture designed to interact with irregular and non-cooperative targets.',
  },
  {
    number: '02',
    title: 'Modular Integration',
    description:
      'Mission-configurable interfaces supporting spacecraft, payload, and research-platform integration.',
  },
  {
    number: '03',
    title: 'Capture Verification',
    description:
      'Sensor-driven system architecture for deployment monitoring and capture-state confirmation.',
  },
]

export const productAttributes: ProductAttribute[] = [
  {
    label: 'ARCHITECTURE',
    value: 'MODULAR',
  },
  {
    label: 'CONTROL',
    value: 'AUTONOMOUS',
  },
  {
    label: 'INTERFACE',
    value: 'MISSION CONFIGURABLE',
  },
]

export const technologyItems: TechnologyItem[] = [
  {
    number: '01',
    title: 'Capture',
    description:
      'Deployable soft-capture systems for interaction with irregular and non-cooperative orbital targets.',
  },
  {
    number: '02',
    title: 'Vision',
    description:
      'Relative-navigation and target-characterization systems for autonomous proximity operations.',
  },
  {
    number: '03',
    title: 'Navigation',
    description:
      'Guidance and mission-control logic for approach, positioning, stabilization, and transfer operations.',
  },
  {
    number: '04',
    title: 'Tether Systems',
    description:
      'Deployment, load management, tension monitoring, and controlled post-capture transfer.',
  },
  {
    number: '05',
    title: 'Sensing',
    description:
      'Capture-state verification, system health monitoring, and mission-condition awareness.',
  },
  {
    number: '06',
    title: 'Mission Software',
    description:
      'Distributed telemetry, tasking, coordination, and mission-state management across Skyfall assets.',
  },
]