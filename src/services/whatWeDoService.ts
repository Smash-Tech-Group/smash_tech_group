import { assets } from "../../assets/assets"


export type Sector = {
  id: number
  title: string
  subtitle: string
  image: string
  alt: string
}

// Default fallback data
export const defaultSectors: Sector[] = [
  {
    id: 1,
    title: 'Software Product Development',
    subtitle: 'End to end development of web, mobile, and SaaS platforms',
    image: assets.What_we_do_1,
    alt: 'Financial technology development',
  },
  {
    id: 2,
    title: 'Travel & Mobility Technology',
    subtitle: 'Digital solutions that support travel, mobility, logistics, and cross-border operations',
    image: assets.What_we_do_2,
    alt: 'Travel and tourism technology',
  },
  {
    id: 3,
    title: 'Enterprise & Digital Solution',
    subtitle: 'Custom systems, automation, and cloud-based platforms that modernise enterprise operations.',
    image: assets.What_we_do_3,
    alt: 'Virtual reality solutions',
  },
  {
    id: 4,
    title: 'Technology Consulting',
    subtitle: 'Product strategy, system architecture, and technical advisory for growing and established organisations.',
    image: assets.What_we_do_4,
    alt: 'Enterprise business solutions',
  },
]

// Fetch sectors from API with fallback
export const fetchSectors = async (): Promise<Sector[]> => {
  try {
    const response = await fetch('/api/what-we-do')
    if (!response.ok) throw new Error('Failed to fetch sectors')
    const data: Sector[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching sectors:', error)
    return defaultSectors
  }
}
