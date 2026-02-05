'use client'

import Link from 'next/link'

export default function AboutUs() {
  return (
    <section className="relative w-full min-h-screen bg-gray-50 py-20 px-6 lg:px-16 overflow-hidden">
      {/* Decorative Curved Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Top Left Curve */}
        <path
          d="M-50 0 Q 150 200, 250 400"
          stroke="#E5E7EB"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        
        {/* Middle Curve */}
        <path
          d="M-50 200 Q 200 350, 450 550 T 1100 700"
          stroke="#E5E7EB"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        
        {/* Bottom Right Curve */}
        <path
          d="M300 600 Q 800 650, 1200 750 T 1500 800"
          stroke="#E5E7EB"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-[#FF5722] text-sm font-bold tracking-[0.2em] mb-8">
          ABOUT US
        </h2>

        {/* Main Heading */}
        <h3 className="text-gray-800 text-3xl lg:text-4xl font-normal mb-6 leading-relaxed">
          Welcome to SmashTech Group.
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
          We are a global technology company building digital products that power businesses and everyday experiences. 
          Across industries and markets, we design and deploy scalable platforms focused on reliability, efficiency, and long-term value.
        </p>

        {/* CTA Button */}
        <Link
          href="#learn-more"
          className="inline-block bg-[#FF5722] hover:bg-[#E64A19] text-white text-lg font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105"
        >
          Learn More
        </Link>
      </div>

      {/* Floating Brand Circles */}
      {/* Top Left - Smash Travels */}
      <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full bg-[#F5DCC4] shadow-lg flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
          <div className="text-orange-500 text-3xl mb-1">✈️</div>
          <div className="text-center">
            <div className="text-gray-800 text-xs font-bold">Smash Travels</div>
          </div>
        </div>
      </div>

      {/* Middle Left - Kolomoni */}
      <div className="absolute top-[50%] left-[18%] w-36 h-36 rounded-full bg-[#0D5C4A] shadow-lg flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="text-orange-500 text-5xl">😊</div>
        </div>
      </div>

      {/* Bottom Right - Cardify */}
      <div className="absolute bottom-[15%] right-[10%] w-40 h-40 rounded-full bg-[#1E3A8A] shadow-lg flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 bg-cyan-400 rounded-xl flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[#1E3A8A]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Additional Decorative Small Circles */}
      <div className="absolute top-[25%] right-[15%] w-3 h-3 rounded-full bg-gray-300 opacity-50" />
      <div className="absolute bottom-[30%] left-[12%] w-2 h-2 rounded-full bg-gray-300 opacity-50" />
      <div className="absolute top-[60%] right-[25%] w-4 h-4 rounded-full bg-gray-300 opacity-50" />
    </section>
  )
}