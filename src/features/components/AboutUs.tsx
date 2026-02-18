'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/**
 * PathOrbitIcon: 
 * Animates an icon along a custom SVG path using CSS offset-path.
 * The icon follows the irregular, hand-drawn path.
 */
const PathOrbitIcon = ({
  pathId,
  duration,
  delay = 0,
  className,
  children
}: {
  pathId: string,
  duration: number,
  delay?: number,
  className?: string,
  children: React.ReactNode
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        offsetPath: `path('${getPathData(pathId)}')`,
        offsetRotate: '0deg', // Keep icon upright
      }}
      animate={{
        offsetDistance: ['0%', '100%']
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

// Helper function to get path data by ID
const getPathData = (pathId: string): string => {
  const paths: Record<string, string> = {
    'inner': 'M 200 100 Q 150 350 250 500 Q 300 600 400 650 Q 600 720 800 650 Q 900 600 950 500 Q 1050 350 1000 100',
    'outer': 'M 50 60 Q -20 450 100 700 Q 250 900 500 1000 Q 600 1050 700 1000 Q 950 900 1100 700 Q 1220 450 1150 60'
  }
  return paths[pathId] || paths['inner']
}

export default function AboutUs() {
  return (
    <section className="relative w-full min-h-screen bg-white py-16 px-6 overflow-hidden flex flex-col items-center ">

      {/* --- HAND-DRAWN ELLIPTICAL PATHS --- */}
      {/* These create the "cradle" or "u-shape" effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="1200"
          height="1100"
          viewBox="0 0 1200 1100"
          className="opacity-40"
          style={{ transform: 'translateY(-10%)' }}
        >
          {/* Inner path - irregular ellipse with hand-drawn feel */}
          <path
            id="innerPath"
            d="M 200 100 Q 150 350 250 500 Q 300 600 400 650 Q 600 720 800 650 Q 900 600 950 500 Q 1050 350 1000 100"
            stroke="#4A5568"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Outer path - widest irregular ellipse */}
          <path
            id="outerPath"
            d="M 50 60 Q -20 450 100 700 Q 250 900 500 1000 Q 600 1050 700 1000 Q 950 900 1100 700 Q 1220 450 1150 60"
            stroke="#4A5568"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* --- REVOLVING BRAND ICONS FOLLOWING PATHS --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative" style={{ width: '1200px', height: '1100px', transform: 'translateY(-10%)' }}>

          {/* 1. INNER PATH: Kolomoni (Green) - Organic blob effect */}
          <PathOrbitIcon pathId="inner" duration={35} delay={0} className="w-32 h-32">
            <div className="relative w-full h-full overflow-hidden rounded-full bg-[#0D5C4A] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">😊</span>
              </div>
              {/* Clip to create half-circle/blob effect */}
              <div
                className="absolute inset-0 bg-[#0D5C4A]"
                style={{
                  clipPath: 'ellipse(50% 60% at 50% 45%)'
                }}
              />
            </div>
          </PathOrbitIcon>

          {/* 2. OUTER PATH: Smash Travels (Beige) - Half-circle effect */}
          <PathOrbitIcon pathId="outer" duration={45} delay={0} className="w-28 h-28">
            <div className="relative w-full h-full overflow-hidden rounded-full bg-[#F5DCC4] shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                <div className="text-orange-500 text-xl mb-0.5">✈️</div>
                <div className="text-[8px] font-bold text-gray-800 uppercase tracking-tighter leading-none text-center">
                  Smash<br />Travels
                </div>
              </div>
              {/* Half-circle mask effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5DCC4]/20" />
            </div>
          </PathOrbitIcon>

          {/* 3. OUTER PATH: Cardify (Blue) - Half-circle with offset */}
          <PathOrbitIcon pathId="outer" duration={45} delay={22.5} className="w-36 h-36">
            <div className="relative w-full h-full overflow-hidden rounded-full bg-[#172554] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4ade80] rounded-xl flex items-center justify-center shadow-inner">
                  <span className="text-white font-bold text-2xl italic">R</span>
                </div>
              </div>
              {/* Half-circle effect using clip-path */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(23,37,84,0) 0%, rgba(23,37,84,0.3) 100%)'
                }}
              />
            </div>
          </PathOrbitIcon>
        </div>
      </div>

      {/* --- MAIN CONTENT (Centered in the cradle) --- */}
      <div className="relative z-10 max-w-3xl mx-auto text-center" >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#FF5722] text-lg font-medium mb-10"
        >
          ABOUT US
        </motion.h2>

        <p className="text-slate-600 font-light text-lg lg:text-xl leading-relaxed mb-12 px-4">
          Welcome to SmashTech Group We are a global technology company building digital products that power businesses and everyday experiences.
          Across industries and markets, we design and deploy scalable platforms focused on reliability, efficiency, and long-term value.
        </p>

        <Link
          href="#learn-more"
          className="inline-block bg-[#FF5722] text-white text-lg font-semibold px-12 py-4 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,87,34,0.3)] hover:scale-105 active:scale-95"
        >
          Learn More
        </Link>
      </div>

      {/* Decorative Small Dots */}
      <div className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-slate-200" />
      <div className="absolute bottom-[20%] right-[15%] w-3 h-3 rounded-full bg-slate-200" />
    </section>
  )
}