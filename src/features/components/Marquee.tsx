'use client'
import { assets } from '../../../assets/assets'
import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
  { name: 'Paradise', logo: assets.paradise },
  { name: 'Qiimeet', logo: assets.qiimeet },
  { name: 'RideSmash', logo: assets.marquee_ridesmash },
  { name: 'Smash Apartment', logo: assets.smashapartment },
  { name: 'Smash Chat', logo: assets.marquee_smashchat },
  { name: 'Smash Food', logo: assets.marquee_smashfood },
  { name: 'Smash Logistics', logo: assets.smashlogistics },
  { name: 'Smash Mail', logo: assets.marquee_smashmail },
  { name: 'Smash Tech', logo: assets.smashtech },
  { name: 'Smash Wise', logo: assets.marquee_smashwise },
  { name: 'Smash Travels', logo: assets.marquee_travels },
]

export default function Marquee() {
  return (
    <div className="relative w-full bg-[#020066] py-8 md:py-10 overflow-hidden">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#020066] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#020066] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ x: { duration: 30, repeat: Infinity, ease: 'linear' } }}
        style={{ willChange: 'transform' }}
      >
        {/* Two identical sets for a seamless loop */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-x-8 md:gap-x-24 items-center shrink-0">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex md:gap-2 items-center opacity-90 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white font-bold text-xl md:text-3xl whitespace-nowrap">
                  {brand.name}
                </span>
                <div className="relative h-8 md:h-10 w-12 md:w-14">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain w-fit"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
