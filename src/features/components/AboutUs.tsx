'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import smash_travels from '/travels.svg'
import ridesmash from '/ridesmash.svg'
import smashfood from '/smashfood.svg'
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
    'inner': 'M 600 270 A 480 480 0 1 1 599.99 270 Z',
    'outer': 'M 600 220 A 590 560 0 1 1 599.99 220 Z'
  }
  return paths[pathId] || paths['inner']
}

export default function AboutUs() {
  return (
    <section className="relative lg:min-h-screen bg-white py-16 px-6 overflow-hidden flex flex-col items-center">

      {/* --- HAND-DRAWN ELLIPTICAL PATHS --- */}
      {/* These create the "cradle" or "u-shape" effect */}
      <div className="absolute w-full top-[-40rem] inset-0 hidden lg:flex items-center justify-center pointer-events-none">
        <svg
          width="1200"
          height="1500"
          viewBox="0 0 1200 1500"
          className="opacity-40"
        >
          {/* Inner path - fully rounded circle */}
          <path
            id="innerPath"
            d="M 600 270 A 480 480 0 1 1 599.99 270 Z"
            stroke="#DDDDDD"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Outer path - fully rounded circle */}
          <path
            id="outerPath"
            d="M 600 220 A 590 560 0 1 1 599.99 220 Z"
            stroke="#DDDDDD"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* --- REVOLVING BRAND ICONS FOLLOWING PATHS --- */}
      <div className="absolute w-full top-[-40rem] inset-0 hidden lg:flex items-center justify-center pointer-events-none">
        <div className="relative" style={{ width: '1200px', height: '1500px' }}>

          {/* 1. INNER PATH: Kolomoni (Green) - Organic blob effect */}
          <PathOrbitIcon pathId="inner" duration={35} delay={0} className="w-32 h-32">
            <div className="relative w-full h-full overflow-hidden rounded-full bg-[#0D5C4A] shadow-xl">
              <img src='/smashfood.svg' alt='smash food' />
            </div>
          </PathOrbitIcon>

          {/* 2. OUTER PATH: Smash Travels (Beige) - Half-circle effect */}
          <PathOrbitIcon pathId="outer" duration={45} delay={0} className="w-28 h-28">
            <div className="relative w-full h-full overflow-hidden rounded-full bg-[#F5DCC4] shadow-xl">
              <img src='/travels.svg' alt='smash travels' />
              
            </div>
          </PathOrbitIcon>

          {/* 3. OUTER PATH: Cardify (Blue) - Half-circle with offset */}
          <PathOrbitIcon pathId="outer" duration={45} delay={22.5} className="w-36 h-36">
            <div className="relative">
              <img src='/ridesmash.svg' alt='ride smash' />
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