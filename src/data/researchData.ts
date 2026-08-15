export type ResearchItem = {
  number: string
  title: string
  description: string
}

export const researchItems: ResearchItem[] = [
  {
    number: '01',
    title: 'Autonomous Rendezvous',
    description:
      'Relative navigation, approach planning, station keeping, and proximity-operation autonomy.',
  },
  {
    number: '02',
    title: 'Distributed Systems',
    description:
      'Coordinated spacecraft, distributed tasking, communications, and fleet-level mission behavior.',
  },
  {
    number: '03',
    title: 'Capture Dynamics',
    description:
      'Soft-capture behavior, deployment mechanics, tether dynamics, stabilization, and post-capture control.',
  },
  {
    number: '04',
    title: 'Material Retrieval',
    description:
      'Containment, controlled transfer, sample recovery, and future extraterrestrial-material handling concepts.',
  },
  {
    number: '05',
    title: 'Digital Engineering',
    description:
      'Mission simulation, SIL/HIL environments, system modeling, software validation, and digital mission development.',
  },
  {
    number: '06',
    title: 'Orbital Logistics',
    description:
      'Transfer architectures, distributed custody, recovery concepts, and future infrastructure for orbital movement.',
  },
]