import Image from 'next/image'


export default function AboutHero() {
  return (
    <section className="w-full bg-[#F8F8FB] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[100rem] mx-auto">
        <div className="relative sm:rounded-[1.875rem] sm:overflow-hidden">
          {/* Image Container */}
          <div className="relative w-full h-[18.75rem] md:h-[25rem] lg:h-[28.25rem] rounded-t-[1.25rem] rounded-b-none sm:rounded-[1.875rem] overflow-hidden">
            <Image
              src={'/about-hero-bg.png'}
              alt="About Smash Technology - Building Background"
              fill
              className="object-cover xl:object-top"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1600px"
            />
          </div>

          {/* Text Container */}
          <div className="
            bg-white shadow-lg
            rounded-b-[1.25rem] sm:rounded-[1.875rem]
            px-6 py-8 md:px-16 md:py-10
            
            /* Tablet/Desktop: Overlapping */
            sm:absolute sm:bottom-0 sm:left-0
            sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[73.75rem] 2xl:w-[80rem]
            sm:shadow-lg
          ">
            <h1
              className="text-[#F34B02] text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[2.5rem]"
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
            >
              About Smash Technology
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}