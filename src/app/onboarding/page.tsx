import Onboarding from '@/features/components/onboarding'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding | Smash Technology',
  description: 'Access onboarding materials and product training videos for Smash Technology team members.',
}

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Onboarding />
    </main>
  )
}
