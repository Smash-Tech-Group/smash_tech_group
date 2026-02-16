// services/testimonials.ts
import { Testimonial } from '@/types/testimonial'

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await fetch('/api/testimonials')
    if (!response.ok) throw new Error('Failed to fetch testimonials')
    const data: Testimonial[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}
