'use client'

import Image from "next/image"
import { assets } from "../../../../assets/assets"

export default function HeroBanner() {
  return (
    <section className="pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">

          {/* Hero Image */}
          <div className="w-full h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden">

            <Image
              src='' // 👈 change to your actual asset key
              alt="Business buildings"
              fill
              priority
              className="object-cover"
            />

            {/* Optional overlay gradient (if you still want cyan tint) */}
            <div className="absolute inset-0 bg-cyan-500/30 mix-blend-overlay"></div>

          </div>

          {/* Business Tag Card */}
          <div className="absolute -bottom-6 left-6 md:left-12 z-10">
            <div className="bg-white px-10 py-4 rounded-2xl shadow-xl">
              <h2 className="text-orange-500 text-3xl md:text-4xl font-bold">
                Business
              </h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
