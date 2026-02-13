'use client'

import Image from 'next/image'
import { useState } from 'react'
import { assets } from '../../../assets/assets'

export default function Blog() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  const blogPosts = [
    {
      id: 1,
      category: 'Special Recognition',
      title: 'CEO, Amb. Paul Smith, has been recognized by The Guardian Nigeria as one of the Top 100 Most Innovative CEOs of 2025.',
      excerpt: 'CEO, Amb. Paul Smith, has been recognized by The Guardian Nigeria as one of the Top 100 Most Innovative CEOs of 2025.',
      image: '/images/ceo-paul-smith.jpg',
      link: '#'
    }
  ]

  const facts = [
    {
      id: 1,
      text: 'Joshua is the first billionaire in dollar from Kwara State, just by being a product designer.'
    },
    {
      id: 2,
      text: 'SmashTech Group operates in over 15 countries across 3 continents.'
    },
    {
      id: 3,
      text: 'Our platforms process over $2 billion in transactions annually.'
    }
  ]

  const nextFact = () => {
    setCurrentFactIndex((prev) => (prev + 1) % facts.length)
  }

  return (
    <section className="w-full bg-[#F8F8FB] py-16 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[#FF5722] text-sm font-bold tracking-[0.2em] mb-4">
            BLOG POST
          </h2>
          <h3 className="text-[#393838] text-4xl lg:text-4xl font-semibold">
            In the News.
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Blog Post Card - Takes 8 columns */}
          <div className="lg:col-span-8">
            <div className="bg-[#F2F2F2] rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-80 md:h-full min-h-[400px]">
                  <Image
                    src={assets.CEO}
                    alt="CEO Paul Smith"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <p className="text-[#FF5722] text-sm font-semibold mb-4">
                      {blogPosts[0].category}
                    </p>
                    <h4 className="text-[#393838] text- font-semibold mb-6 leading-tight">
                      {blogPosts[0].title}
                    </h4>
                  </div>

                  {/* Quote Box */}
                  <div className="border-l-2 border-[#F34B02] pl-6 mb-8">
                    <p className="text-[#393838] text-base leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center justify-end">
                    <a
                      href={blogPosts[0].link}
                      className="inline-flex items-center gap-2 text-gray-900 hover:text-[#FF5722] transition-colors group"
                    >
                      <span className="text-2xl transform group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facts Card - Takes 4 columns */}
          <div className="lg:col-span-4">
            <div className="bg-[#F2F2F2] rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-between min-h-[400px]">
              <div>
                <p className="text-[#FF5722] text-sm font-semibold mb-4">
                  Facts
                </p>
                <h4 className="text-[#393838] text-2xl font-semibold mb-8">
                  Did you know?
                </h4>
                <p className="text-[#393838] text-lg leading-relaxed">
                  {facts[currentFactIndex].text}
                </p>
              </div>

              {/* Refresh Button */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={nextFact}
                  className="w-12 h-12 rounded-full  bg-[#F2E5D5] flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 group"
                  aria-label="Next fact"
                >
                  <svg
                    className="w-6 h-6 transform group-hover:rotate-180 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}