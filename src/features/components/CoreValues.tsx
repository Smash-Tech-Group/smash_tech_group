import Image from 'next/image'
import { assets } from '../../../assets/assets'

export default function CoreValues() {
  const values = [
    {
      id: 1,
      title: 'Integrity',
      description: "At the heart of Smash Technology Limited is a relentless drive to innovate and push the boundaries of what's possible. We constantly seek new and creative ways to solve problems and deliver cutting-edge solutions that set us apart from the competition.",
      image: '/integrity.png',
    },
    {
      id: 2,
      title: 'Innovation',
      description: "At the heart of Smash Technology Limited is a relentless drive to innovate and push the boundaries of what's possible. We constantly seek new and creative ways to solve problems and deliver cutting-edge solutions that set us apart from the competition.",
      image: '/innovation.png',
    },
    {
      id: 3,
      title: 'Excellence',
      description: "At the heart of Smash Technology Limited is a relentless drive to innovate and push the boundaries of what's possible. We constantly seek new and creative ways to solve problems and deliver cutting-edge solutions that set us apart from the competition.",
      image: '/excellence.png',
    },
    {
      id: 4,
      title: 'Collaboration',
      description: "At the heart of Smash Technology Limited is a relentless drive to innovate and push the boundaries of what's possible. We constantly seek new and creative ways to solve problems and deliver cutting-edge solutions that set us apart from the competition.",
      image: '/collaboration.png',
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-16 bg-[#F8F8FB]">
      <div className="max-w-[100rem] mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <p 
            className="text-[#F34B02] text-base md:text-lg lg:text-xl font-medium mb-3 md:mb-4 tracking-[0.04em]"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            OUR CORE VALUE
          </p>
          <h2 
            className="text-[#393838] text-2xl md:text-3xl lg:text-5xl font-medium leading-tight md:leading-snug lg:leading-[2.75rem] max-w-4xl"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            We understand the importance of ethics in our business
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-80 lg:h-[29.54rem] bg-[#FBF3F0] rounded-lg mb-6 md:mb-8 overflow-hidden">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>

              {/* Content - Title and Description */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Title */}
                <h3 
                  className="text-[#F34B02] text-xl md:text-2xl font-bold leading-tight shrink-0 md:w-32 lg:w-40"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#393838] text-base md:text-lg lg:text-xl font-light leading-relaxed md:leading-7"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}