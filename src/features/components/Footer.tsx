'use client'

import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../../../assets/assets'

export default function Footer() {
    const companyLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Our businesses', href: '/businesses' },
        { name: 'Career Opportunities', href: '/careers' },
        { name: 'Latest News & Updates', href: '/news' }
    ]

    const businesses = [
        { name: 'Smashwise', href: '/smashwise' },
        { name: 'SmashTravels', href: '/smashtravels' },
        { name: 'Ridesmash', href: '/ridesmash' },
        { name: 'Qiimeet', href: '/qiimeet' },
        { name: 'SmashApartments', href: '/smashapartments' },
        { name: 'Owenas', href: '/owenas' },
        { name: 'SmashBookings', href: '/smashbookings' },
        { name: 'SmashChat', href: '/smashchat' },
        { name: 'Smashfood', href: '/smashfood' },
        { name: 'SmashRemit', href: '/smashremit' },
        { name: 'SmashInvoice', href: '/smashinvoice' },
        { name: 'SmashMail', href: '/smashmail' }
    ]

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Use', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
    ]

    const socialIcons = [
        { src: assets.X_icon, alt: 'X', href: 'https://twitter.com/smashtech' },
        { src: assets.instagram_icon, alt: 'Instagram', href: 'https://instagram.com/smashtech' },
        { src: assets.tiktok_icon, alt: 'TikTok', href: 'https://tiktok.com/@smashtech' },
        { src: assets.linkedIn_icon, alt: 'LinkedIn', href: 'https://linkedin.com/company/smashtech' },
        { src: assets.facebook_icon, alt: 'Facebook', href: 'https://facebook.com/smashtech' },
    ]

    return (
        <footer className="bg-[#020066] text-white">
            <div className="max-w-screen mx-auto px-6 lg:px-10 py-16">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={assets.smash_tech_icon}
                            alt="Smash Technology Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <span className="text-xl font-semibold">
                            Smash Technology
                        </span>
                    </Link>

                    <div className="flex items-center gap-6">
                        {socialIcons.map((icon, i) => (
                            <Link key={i} href={icon.href} target="_blank">
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                    className="hover:opacity-70 transition-opacity"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr_1.2fr] gap-10">

                    {/* Company */}
                    <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-4 text-xs text-gray-300">
                            {companyLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-orange-500">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Businesses */}
                    <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold mb-4">Our Businesses</h3>
                        <div className="grid grid-cols-2 gap-y-3 text-xs text-gray-300">
                            {businesses.map(b => (
                                <Link key={b.name} href={b.href} className="hover:text-orange-500">
                                    {b.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[11px] text-gray-300">

                            <div className="space-y-4">
                                <p className="text-sm font-semibold">
                                    070<span className="text-orange-500">SMASHTECH</span>
                                </p>

                                <div>
                                    <p className="text-orange-500 text-xs mb-1">Abuja Head Office</p>
                                    <p>+2349097403297 (Smash Travels)</p>
                                    <p>+2348100693634 (Ridesmash)</p>
                                    <p>+2347054881783 (Ridesmash)</p>
                                </div>

                                <div>
                                    <p className="text-orange-500 text-xs mb-1">Cape Town Head Office</p>
                                    <p>+2349097403297</p>
                                    <p>+2348100693634</p>
                                    <p>+2347054881783</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm font-semibold">0916-974-0288</p>
                                <div>
                                    <p className="text-orange-500 text-xs mb-1">Lagos Business Office</p>
                                    <p>+2348144824339</p>
                                    <p className="break-all">wecare@smashtechgroup.com</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold mb-4">Location</h3>

                        <div className="text-xs text-gray-300 space-y-6">
                            <div>
                                <p className="text-orange-500 font-semibold mb-1">
                                    Nigeria Business Office
                                </p>
                                <p>
                                    2 King Jaja Street, Works & Housing, 3rd Avenue Gwarinpa Abuja
                                </p>
                                <p className="mt-1">
                                    No. 1, Kofoworola Crescent, Ikeja, Lagos
                                </p>
                            </div>

                            <div>
                                <p className="text-orange-500 font-semibold mb-1">
                                    International Business Office
                                </p>
                                <p>
                                    Suite 100, The Towers, Sandton, Johannesburg
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <span>©</span>
                        <span className="text-orange-500">
                            Smash Technology. All Rights Reserved
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {legalLinks.map(link => (
                            <Link key={link.name} href={link.href} className="hover:text-orange-500">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}
