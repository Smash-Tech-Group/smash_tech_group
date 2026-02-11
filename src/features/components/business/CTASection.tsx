'use client'

import { useState } from 'react'
import Image from 'next/image'
import { assets } from '../../../../assets/assets'

export default function CTASection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section
      className="py-20 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.CTA_business_bg.src})` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 "></div> 

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <Image
              src={assets.smashinvoice_log2}
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Start your digital journey
        </h2>

        {/* Description */}
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          Let us help you build, launch, and scale your technology with confidence.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto relative"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-6 py-3.5 pr-36 rounded-full bg-white backdrop-blur-sm border border-white/20 text-white placeholder:text-[#393838] focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
