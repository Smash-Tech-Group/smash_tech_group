/**
 * Gallery Mock Data
 * Simulates API responses until backend is ready
 */

import { GalleryImage } from '@/types/gallery.types';
import { assets } from '../../assets/assets';

export const MOCK_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    image: assets.gallery_1,
    alt: 'Annual charity fundraiser event',
    title: 'Annual Fundraiser 2024',
    description: 'Our successful charity fundraiser that raised over $50,000',
    category: 'events',
    uploadedAt: '2024-01-15T10:30:00Z',
    uploadedBy: 'admin',
    isActive: true,
    order: 1,
  },
  {
    id: '2',
    image: assets.gallery_2,
    alt: 'Team strategy meeting',
    title: 'Strategic Planning Session',
    description: 'Quarterly planning meeting with our leadership team',
    category: 'meetings',
    uploadedAt: '2024-01-20T14:15:00Z',
    uploadedBy: 'admin',
    isActive: true,
    order: 2,
  },
  {
    id: '3',
    image: assets.gallery_3,
    alt: 'Community outreach program',
    title: 'Community Outreach',
    description: 'Engaging with local communities and stakeholders',
    category: 'community',
    uploadedAt: '2024-01-25T09:45:00Z',
    uploadedBy: 'admin',
    isActive: true,
    order: 3,
  },
  {
    id: '4',
    image: assets.gallery_4,
    alt: 'Educational workshop session',
    title: 'Skills Development Workshop',
    description: 'Training workshop for team skill enhancement',
    category: 'training',
    uploadedAt: '2024-02-01T11:00:00Z',
    uploadedBy: 'admin',
    isActive: true,
    order: 4,
  },
  {
    id: '5',
    image: assets.gallery_5,
    alt: 'Annual award ceremony',
    title: 'Excellence Awards 2024',
    description: 'Recognizing outstanding contributions and achievements',
    category: 'events',
    uploadedAt: '2024-02-05T16:30:00Z',
    uploadedBy: 'admin',
    isActive: true,
    order: 5,
  },
  {
    id: '6',
    image: assets.gallery_6,
    alt: 'Volunteer appreciation day',
    title: 'Volunteer Day',
    description: 'Celebrating our amazing volunteers and their dedication',
    category: 'community',
    uploadedAt: '2024-02-10T10:00:00Z',
    uploadedBy: 'admin',
    isActive: true,
    order: 6,
  },
  {
    id: '7',
    image: assets.gallery_7,
    alt: 'New project launch event',
    title: 'Innovation Lab Launch',
    description: 'Launching our new innovation and research facility',
    category: 'events',
    uploadedAt: '2024-02-12T13:20:00Z',
    uploadedBy: 'admin',
    isActive: true,
    order: 7,
  },
  {
    id: '8',
    image: assets.gallery_8,
    alt: 'Team building activities',
    title: 'Team Building Retreat',
    description: 'Annual team building and bonding activities',
    category: 'team',
    uploadedAt: '2024-02-14T15:45:00Z',
    uploadedBy: 'admin',
    isActive: true,
    order: 8,
  }
  
];

// Simulated delay to mimic API latency
export const simulateApiDelay = (ms: number = 500): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};