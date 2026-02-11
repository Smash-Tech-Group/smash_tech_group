'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { assets } from '../../../assets/assets'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = usePathname()
  const isHome = pathname === '/'

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Company', href: '/company' },
    { name: 'Business', href: '/business' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Media', href: '/media' },
    { name: 'Careers', href: '/careers' },
    { name: 'Onboarding', href: '/onboarding' },
  ]

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 transition-all duration-300
      ${isHome ? 'absolute bg-transparent' : 'sticky bg-navy shadow-md'}`}
    >
      <div className="container-custom flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 relative">
            <Image src={assets.smash_logo} alt="Logo" fill className="object-contain" />
          </div>
          <span className="text-white font-display text-xl hidden sm:block">
            Smash Technology
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className={isHome ? "text-white hover:text-primary transition-colors duration-200" : "text-black"}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            href="#contact"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 z-40 bg-navy shadow-lg">
          <div className="py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-6 py-3 text-white hover:text-primary hover:bg-navy transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="px-6 pt-4">
              <Link
                href="#contact"
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
