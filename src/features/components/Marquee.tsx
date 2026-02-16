'use client'
import { assets } from '../../../assets/assets'

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
    <div key={index} className="flex items-center px-12 bg-[#020066]">
      <div className="flex items-center gap-3 bg-[#020066] rounded-xl px-6 py-4 min-w-[180px]">
        {/* Partner Icon */}
               <div className="flex flex-col">
          <div className="w-50 h-20 relative">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain"
            />
          </div>
          {partner.subtitle && (
            <span className="text-[#0a1647] text-[10px] font-medium tracking-wider">
              {partner.subtitle}
            </span>
          )}
        </div>
        <div className="w-20 h-15 relative">
          <Image 
            src={partner.icon} 
            alt={`${partner.name} icon`} 
            fill 
            className="object-contain"
          />
        </div>

        {/* Partner Logo + Text */}
 
      </div>
    </div>
  )

  return (
    <div className="relative w-full bg-[#020066] py-5 overflow-hidden">
      {/* Gradient overlays for fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a1647] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a1647] to-transparent z-10" />

      {/* Marquee */}
      <div className="flex animate-marquee">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-0 min-w-max">
            {partners.map(renderPartner)}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
