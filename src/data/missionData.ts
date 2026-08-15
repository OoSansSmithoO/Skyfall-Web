export type MissionApplication = {
  number: string
  category: string
  title: string
  description: string
  icon: string
}

export const missionApplications: MissionApplication[] = [
  {
    number: '01',
    category: 'ORBITAL ENVIRONMENT',
    title: 'Orbital Debris',
    description:
      'Capture, stabilization, controlled transfer, and retrieval concepts for non-cooperative orbital debris targets.',
    icon: 'debris',
  },
  {
    number: '02',
    category: 'SPACECRAFT OPERATIONS',
    title: 'Satellite Inspection',
    description:
      'Autonomous proximity operations for close-range observation, characterization, and spacecraft-condition assessment.',
    icon: 'inspection',
  },
  {
    number: '03',
    category: 'SPACECRAFT SUPPORT',
    title: 'In-Space Servicing',
    description:
      'Capture and stabilization technologies supporting future spacecraft inspection, relocation, servicing, and support missions.',
    icon: 'servicing',
  },
  {
    number: '04',
    category: 'SCIENCE & EXPLORATION',
    title: 'Material Retrieval',
    description:
      'Containment and retrieval architectures for scientific samples, experimental payloads, and extraterrestrial material.',
    icon: 'material',
  },
  {
    number: '05',
    category: 'RESEARCH',
    title: 'Research Missions',
    description:
      'Mission platforms for universities, laboratories, technology demonstrations, and orbital research programs.',
    icon: 'research',
  },
  {
    number: '06',
    category: 'FUTURE INFRASTRUCTURE',
    title: 'Orbital Logistics',
    description:
      'Distributed systems for securing, transferring, routing, and recovering objects throughout a coordinated orbital network.',
    icon: 'logistics',
  },
]