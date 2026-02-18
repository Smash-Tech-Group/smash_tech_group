



export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'allen',
    name: 'Allen',
    role: 'Group Business Manager',
    image: '/allen.svg',
    bio: [
      'Since joining Smash Technology Limited as the Group Business Manager, my journey has been defined by strategic growth and operational excellence.',
      'I have had the privilege of overseeing business operations across multiple divisions, ensuring alignment with our corporate vision and driving sustainable expansion.',
      'My focus has been on building strong partnerships, optimizing processes, and creating frameworks that enable our teams to achieve exceptional results consistently.'
    ]
  },
  {
    id: 'favour',
    name: 'Favour Chibuike Samuel',
    role: 'Human Resource Manager',
    image: '/favour.svg',
    bio: [
      'Since joining Smash Technology Limited as the HR Manager, my journey has been defined by growth, innovation, and transformation. I have had the privilege of building and strengthening the company\'s workforce across all areas, ensuring that every department is equipped with the right talent to drive our vision forward.',
      'One of my proudest achievements has been leading the expansion of our workforce, not only in numbers but also in quality - ensuring that every hire aligns with our culture of excellence, innovation, and discipline. Alongside this, I have focused on ensuring compliance with company policies while also creating new policies that protect both the staff and the organization, fostering an environment built on accountability, fairness, and trust.',
      'Recognizing that Smash Technology is a tech-driven organization, I have also integrated technology into HR practices to streamline recruitment, onboarding, staff management, and performance tracking. This has allowed us to build a more efficient and data-driven HR structure that supports the company\'s overall growth strategy.',
      'For me, HR is more than managing processes — it is about shaping lives, driving growth, and laying the foundation for the company\'s long-term success. At Smash Technology Limited, I am inspired daily by the opportunity to make a difference, to help people grow, and to see our collective efforts translate into real impact for the business and the communities we serve.'
    ]
  },
  {
    id: 'john',
    name: 'John',
    role: 'Technology Lead',
    image: '/val.svg',
    bio: [
      'Leading technology initiatives at Smash Technology Limited, I focus on innovation and scalable solutions.',
      'My role involves architecting robust systems and mentoring development teams to deliver excellence.',
      'Technology is not just about code—it\'s about creating solutions that transform businesses and empower people.'
    ]
  },
  {
    id: 'sarah',
    name: 'Sarah',
    role: 'Customer Success Manager',
    image: '/fav.svg',
    bio: [
      'Building bridges between our clients and our solutions, I ensure every interaction creates value.',
      'My passion lies in understanding customer needs and translating them into actionable insights for our teams.',
      'Success is measured not just in metrics, but in the relationships we build and the trust we earn.'
    ]
  },
  {
    id: 'michael',
    name: 'Michael',
    role: 'Operations Director',
    image: '/auditor.svg',
    bio: [
      'Orchestrating seamless operations across Smash Technology, I ensure efficiency meets excellence.',
      'From process optimization to team coordination, my focus is on creating systems that scale.',
      'Great operations are invisible—they enable everyone else to shine.'
    ]
  }
];
