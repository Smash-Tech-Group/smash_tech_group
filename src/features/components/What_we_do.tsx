'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { assets } from '../../../assets/assets'
import { fetchSectors, Sector } from '@/services/whatWeDoService'

export default function WhatWeDo() {
  const [sectors, setSectors] = useState<Sector[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSectors = async () => {
      const data = await fetchSectors()
      setSectors(data)
      setLoading(false)
    }
    loadSectors()
  }, [])

  if (loading) {
    return (
      <section className="w-full bg-[#F8F8FB] py-16 px-6 lg:px-16">
        <div className="text-center text-gray-400">Loading...</div>
      </section>
    )
  }


  return (
    <section className="w-full bg-[#F8F8FB] py-16 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[#FF5722] text-sm font-bold tracking-[0.2em] mb-4">
            WHAT WE DO
          </h2>
          <h3 className="text-[#393838] text-4xl lg:text-5xl font-bold">
            Delivering Value Across Key Sectors
          </h3>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className={`relative overflow-hidden rounded-2xl ${
                sector.id === 3 ? 'lg:-mr-16 z-10' : sector.id === 4 ? 'lg:ml-16' : ''
              }`}
            >
              <div className="relative hover:scale-110 transition-transform duration-700 w-full h-64 md:h-80 lg:h-96">
                {/* Image */}
                <Image
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    sector.id === 3 ? 'lg:w-[140%] lg:max-w-none' : ''
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Dim Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Animated Text */}
                <motion.div
                  initial={{ opacity: 0, y: 90 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{
                    duration: 0.9,
                    ease: 'easeOut',
                  }}
                  className="absolute bottom-6 left-0 right-0 p-6 md:p-8 z-20"
                >
                  <h4 className="text-white text-2xl font-semibold">{sector.title}</h4>
                  <p className="mt-2 text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                    {sector.subtitle}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
