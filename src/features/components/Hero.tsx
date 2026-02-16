'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-start justify-center min-h-[120vh] lg:min-h-[140vh] px-6 lg:px-16 text-left overflow-hidden">

      {/* Quote text */}
      <motion.p
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mt-1 text-base sm:text-lg md:text-xl text-white max-w-full sm:max-w-2xl md:max-w-3xl italic leading-relaxed"
      >
        “SmashTech Group isn’t just a technology company, we<br />
        build platforms that power businesses, communities,<br />
        and everyday life through scalable digital solutions.”
      </motion.p>

      {/* Main Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: 160 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.3 }}
        className="text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] font-bold text-white leading-tight mt-6 md:mt-8"
      >
        <span className="text-primary">INNOVATE</span>
      </motion.h1>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-24 sm:bottom-32 md:bottom-40 lg:bottom-60 right-4 sm:right-8 lg:right-40 z-20"
      >
        <Link
          href="#solutions"
          className="text-white text-sm sm:text-base md:text-lg font-medium hover:text-orange-400 transition-colors"
        >
          Discover Our Solutions →
        </Link>
      </motion.div>
    </div>
  )
}
