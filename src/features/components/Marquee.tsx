'use client'
import { assets } from '../../../assets/assets'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Marquee() {
  const partners = [
    { 
      name: 'Moniepoint', 
      logo: assets.moniepoint, 
      icon: assets.Group_10, 
      subtitle: 'MICROFINANCE BANK' 
    },
    { 
      name: 'PremiumTrust Bank', 
      logo: assets.premiumtrust, 
      icon: assets.Group_10, 
      subtitle: '' 
    },
    { 
      name: 'Globus Bank', 
      logo: assets.globus_bank, 
      icon: assets.Group_10, 
      subtitle: '' 
    },
    { 
      name: 'TAJ Bank', 
      logo: assets.taj_bank, 
      icon: assets.Group_10, 
      subtitle: '' 
    },
  ]

  const renderPartner = (partner: typeof partners[0], index: number) => (
    <div key={index} className="flex items-center px-4 md:px-12 bg-[#020066] shrink-0">
      <div className="flex items-center gap-2 md:gap-3 bg-[#020066] rounded-xl px-3 md:px-6 py-3 md:py-4 min-w-[120px] md:min-w-[180px]">
        <div className="flex flex-col">
          <div className="w-24 h-12 md:w-50 md:h-20 relative">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain"
            />
          </div>
          {partner.subtitle && (
            <span className="text-[#0a1647] text-[8px] md:text-[10px] font-medium tracking-wider">
              {partner.subtitle}
            </span>
          )}
        </div>
        <div className="w-12 h-10 md:w-20 md:h-15 relative">
          <Image 
            src={partner.icon} 
            alt={`${partner.name} icon`} 
            fill 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative w-full bg-[#020066] py-3 md:py-5 overflow-hidden">
      {/* Gradient overlays for fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a1647] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a1647] to-transparent z-10" />

      {/* Marquee - using framer-motion for reliable mobile animation */}
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        style={{ willChange: 'transform' }}
      >
        {/* Two identical sets for seamless loop */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {partners.map(renderPartner)}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
