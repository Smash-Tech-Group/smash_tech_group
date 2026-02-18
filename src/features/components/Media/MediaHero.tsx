import Image from 'next/image'
import { assets } from '../../../../assets/assets'

export default function AboutHero() {
  return (
    <section className="w-full bg-[#F8F8FB] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[100rem] mx-auto">
        {/* Hero Container with Background Image */}
        <div className="relative w-full h-[18.75rem] md:h-[25rem] lg:h-[28.25rem] rounded-[1.25rem] md:rounded-[1.875rem] overflow-hidden">
          {/* Background Image */}
          <Image
            src={assets.Hero_bg_all}
            alt="About Smash Technology - Building Background"
            fill
            className="object-cover xl:object-top"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1600px"
          />

          {/* Mobile & Tablet Only - Gradient Overlay + Text */}
          <div className="xl:hidden">
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            {/* Text Overlay - Centered */}
            <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
              <h1 
                className="text-white text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-snug text-center max-w-4xl"
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              >
                Media
              </h1> 
            </div>
          </div>

          {/* Desktop Only (xl and above) - White Card */}
          <div className="hidden xl:block absolute bottom-0 left-[-0.125rem] w-[73.75rem] 2xl:w-[80rem]">
            <div className="bg-white rounded-3xl px-16 py-10 shadow-lg">
              <h1 
                className="text-[#F34B02] text-4xl font-medium leading-[2.5rem]"
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              >
                Media
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}