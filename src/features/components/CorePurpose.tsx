'use client'

import Image from 'next/image'
import { assets } from '../../../assets/assets'

export default function CorePurpose() {
  const values = [
    {
      id: 1,
      title: 'Ease Your Stress',
      description:
        'Our core purpose is to ensure you live an easy and stress-free life. We are breaking down those difficult-to-achieve tasks into a single press of a button so you can have a wonderful experience in the comfort of your home or office space.',
      iconImage: assets.winking,
      iconAlt: 'Speed and efficiency',
      visualImage: assets.Thunderbolt,
      visualAlt: 'Lightning bolt representing speed and efficiency',
    },
    {
      id: 2,
      title: 'Make A Difference',
      description:
        "We want you to be unique and different. You don't have to wait under the sun for a cab or bus or struggle to meet your team or investors as others do.",
      iconImage: assets.star_face,
      iconAlt: 'Excellence and distinction',
      visualImage: assets.Medal,
      visualAlt: 'Badge representing excellence',
    },
    {
      id: 3,
      title: 'Get 100% Enjoyment',
      description:
        "We won’t only ease your stress but also ensure you get 100% satisfaction and first-rate customer service. Our customer support is always available 24/7 to attend to your needs.",
      iconImage: assets.in_love,
      iconAlt: 'Customer satisfaction',
      visualImage: assets.Like,
      visualAlt: 'Thumbs up representing satisfaction',
    },
  ]

  return (
    <section className="w-full bg-[#F8F8FB] py-16 px-6 lg:px-16">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#F34B02] text-sm font-bold tracking-[0.2em] mb-4">
            OUR CORE PURPOSE
          </h2>
          <h3 className="text-[#393838] text-lg lg:text-4xl font-semibold">
            Committed to Reliable, Scalable & Future Ready Solutions
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="  bg-white rounded-3xl p-8 flex flex-col transition-all duration-300 hover:shadow-[0_25px_20px_rgba(243,75,2,0.4)]"
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 relative">
                <Image
                  src={value.iconImage}
                  alt={value.iconAlt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h4 className="text-gray-900 text-2xl font-semibold mb-4">
                {value.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                {value.description}
              </p>

              {/* Visual Image */}
              <div className="relative w-full h-64 bg-[#FBF3F0] rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src={value.visualImage}
                  alt={value.visualAlt}
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
