'use client'

import Image from 'next/image'
import { assets } from '../../../assets/assets'

export default function GlobalReach() {
  const countries = [
    {
      id: 1,
      name: 'South Africa',
      flag: assets.southAfrica,
      desktopPosition: { top: '62%', left: '52%' },
      mobilePosition: { top: '40%', left: '53%' },
    },
    {
      id: 2,
      name: 'Nigeria',
      flag: assets.Nigeria,
      desktopPosition: { top: '55%', left: '48%' },
      mobilePosition: { top: '34%', left: '50%' },
    },
  ]

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[800px] overflow-hidden">
      {/* 🌍 Background Map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={assets.World_map_bg}
            alt="World map background"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 md:py-20 px-6 lg:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-20 max-w-3xl">
          <h2 className="text-[#FF5722] text-xs sm:text-sm font-bold tracking-[0.2em] mb-4">
            OUR GLOBAL REACH
          </h2>
          <h3 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-normal">
            Building technology that scales across borders.
          </h3>
        </div>

        {/* Map Interaction Layer */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[650px]">
          {countries.map((country) => (
            <div key={country.id}>
              {/* Mobile pin */}
              <div
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 md:hidden"
                style={country.mobilePosition}
              >
                <div className="flex flex-col items-center bg-transparent px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="relative w-5 h-5">
                      <Image
                        src={country.flag}
                        alt={`${country.name} flag`}
                        fill
                        className="object-cover rounded-sm"
                      />
                    </div>
                  </div>
                  <span className="mt-1 w-2 h-2 bg-[#FF5722] rounded-full animate-pulse" />
                </div>
              </div>

              {/* Desktop pin */}
              <div
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                style={country.desktopPosition}
              >
                <div className="flex flex-col items-center bg-transparent px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src={country.flag}
                        alt={`${country.name} flag`}
                        fill
                        className="object-cover rounded-sm"
                      />
                    </div>
                    <span className="text-gray-900 text-lg font-semibold whitespace-nowrap">
                      {country.name}
                    </span>
                  </div>
                  <span className="mt-1 w-2 h-2 bg-[#FF5722] rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
