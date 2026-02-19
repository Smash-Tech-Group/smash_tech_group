'use client'

import { useEffect, useState } from 'react'

const CORRECT_PIN = '879316'

const brandData: Record<string, { name: string; youtubeUrl: string; formUrl: string }> = {
  'Smash Travels': {
    name: 'Smash Travels',
    youtubeUrl: 'https://youtube.com/shorts/MR9m4-LRrnw',
    formUrl: 'https://forms.gle/NbVoYSM9MoxZfTrt8',
  },
  'Ride Smash': {
    name: 'Ridesmash',
    youtubeUrl: 'https://youtu.be/jsgkCGjE2uU',
    formUrl: '',
  },
//   MailBux: {
//     name: 'MailBux',
//     youtubeUrl: 'https://youtu.be/Gak1LW4cmsI',
//     formUrl: '',
//   },
  Qiimeet: {
    name: 'Qiimeet',
    youtubeUrl: '',
    formUrl: '',
  },
  SmashWise: {
    name: 'SmashWise',
    youtubeUrl: '',
    formUrl: '',
  },
  'Smash Remit': {
    name: 'Smash Remit',
    youtubeUrl: '',
    formUrl: '',
  },
  'Smash Apartments': {
    name: 'Smash Apartments',
    youtubeUrl: '',
    formUrl: '',
  },
  'Smash Chat': {
    name: 'Smash Chat',
    youtubeUrl: '',
    formUrl: '',
  },
}

export default function Onboarding() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState('')

  useEffect(() => {
    const authenticated = sessionStorage.getItem('onboarding-authenticated')
    if (authenticated === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pinInput === CORRECT_PIN) {
      setIsAuthenticated(true)
      setPinError('')
      sessionStorage.setItem('onboarding-authenticated', 'true')
    } else {
      setPinError('Invalid PIN. Please try again.')
      setPinInput('')
    }
  }

  const handleFilterClick = (filter: string) => {
    if (filter !== activeFilter) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveFilter(filter)
        setTimeout(() => setIsTransitioning(false), 50)
      }, 150)
    }
  }

  const getFilteredBrands = () => {
    if (activeFilter === 'All') return Object.keys(brandData)
    return [activeFilter]
  }

  // ─── PIN SCREEN ───
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
          <h2 className="text-2xl font-bold text-center mb-2 text-[#FF5722]">
            Access Required
          </h2>
          <p className="text-gray-500 text-center mb-8 text-sm">
            Enter your PIN to access the onboarding materials.
          </p>
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              placeholder="Enter PIN"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722]/40 focus:border-[#FF5722] text-center text-lg tracking-[0.3em] mb-4 transition-all"
              maxLength={10}
              autoComplete="off"
            />
            {pinError && (
              <p className="text-red-500 text-center text-sm mb-4">{pinError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#FF5722] text-white py-3 rounded-lg hover:bg-[#e64a19] transition-colors duration-200 font-semibold"
            >
              Access Onboarding
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ─── MAIN CONTENT ───
  const filterBrands = Object.keys(brandData)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
      {/* Header + Logout */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Onboarding</h1>
          <p className="text-gray-500 mt-1">Welcome aboard – get up to speed with our products.</p>
        </div>
        <button
          onClick={() => {
            setIsAuthenticated(false)
            sessionStorage.removeItem('onboarding-authenticated')
            setPinInput('')
          }}
          className="text-sm text-gray-400 hover:text-[#FF5722] transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        <FilterButton
          label="All"
          active={activeFilter === 'All'}
          onClick={() => handleFilterClick('All')}
        />
        {filterBrands.map((brand) => (
          <FilterButton
            key={brand}
            label={brand}
            active={activeFilter === brand}
            onClick={() => handleFilterClick(brand)}
          />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Brand Cards */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-semibold text-[#FF5722]">
            Onboarding Videos on YouTube
          </h3>
          <div
            className="space-y-4 transition-all duration-300"
            style={{ minHeight: '200px' }}
          >
            {getFilteredBrands().map((brandKey) => {
              const brand = brandData[brandKey]
              return (
                <div
                  key={brandKey}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(12px)' : 'translateY(0)',
                  }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {brand.name}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    At the core of everything we do is a passion to deliver excellence and
                    value powered by a collaborative team that produces results. These short
                    onboarding videos give you a glimpse into our culture and the product
                    knowledge needed to excel in your role.
                  </p>
                  {brand.youtubeUrl ? (
                    <a
                      href={brand.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#FF5722] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#e64a19] transition-colors"
                    >
                      ▶ Watch on YouTube
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm italic">
                      Video coming soon
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Test Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 sticky top-24">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Test</h3>
            <p className="text-gray-500 text-sm mb-5">Read and answer carefully</p>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <p className="font-medium text-gray-900 mb-3">Onboarding Test</p>
              {brandData['Smash Travels']?.formUrl ? (
                <a
                  href={brandData['Smash Travels'].formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF5722] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#e64a19] transition-colors"
                >
                  Open Form
                </a>
              ) : (
                <span className="text-gray-400 text-sm">Form not available</span>
              )}
              <p className="text-gray-400 text-xs mt-3">
                All answers will be received by the H.R. Manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Filter Button ─── */
function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        active
          ? 'bg-[#FF5722] text-white shadow-sm'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  )
}