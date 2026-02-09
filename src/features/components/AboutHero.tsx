import Image from 'next/image'
import { assets } from '../../../assets/assets'

export default function AboutHero() {
  return (
    <section className="w-full bg-[#F8F8FB] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[100rem] mx-auto">
        {/* Hero Container with Background Image */}
        <div className="relative w-full h-[18.75rem] md:h-[25rem] lg:h-[28.25rem] rounded-[1.25rem] md:rounded-[1.875rem] overflow-hidden">
          {/* Background Image */}
          <Image
            src={'/about-hero-bg.png'}
            alt="About Smash Technology - Building Background"
            fill
            className="object-cover object-top"
            priority
          />

          {/* Decorative White Rectangle with Text */}
          <div className="absolute bottom-4 md:bottom-6 lg:bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[60rem] xl:w-[73.75rem] 2xl:w-[80rem] lg:left-[-0.125rem] xl:left-[-0.125rem] lg:translate-x-0">
            <div className="bg-white rounded-2xl md:rounded-3xl px-6 md:px-12 lg:px-16 py-6 md:py-8 lg:py-10 shadow-lg">
              <h1 
                className="text-[#F34B02] text-xl md:text-2xl lg:text-4xl font-medium leading-tight md:leading-snug lg:leading-[2.5rem]"
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              >
                About Smash Technology
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}