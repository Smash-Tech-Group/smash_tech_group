"use client"

import Image from "next/image"
import { assets } from "../../../assets/assets"
import Background from "../../../public/newsletterbg.svg"
export default function NewsLetter() {
    return (
        <section className="relative w-full overflow-hidden z-0">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={assets.CTA_bg}
                    alt="Decorative Background"
                    fill
                    className="object-cover object-center opacity-90"
                    priority
                />

            </div>

            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: CTA Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 lg:mb-6">
                            Start your digital journey
                        </h2>
                        <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                            We help organizations design, deploy, and scale technology with confidence.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center bg-[#F34B02] hover:bg-[#E04500] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 border-[#F34B02] hover:border-[#E04500]"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Right: Newsletter Form */}
                    <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                        <div className="bg-[#2B2B2B]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10">
                            <h3 className="text-white text-lg sm:text-xl font-semibold mb-6 text-center">
                                Subscribe to Our Newsletter
                            </h3>
                            <form className="space-y-4">
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full bg-[#1A1A1A] text-white placeholder-gray-400 px-5 py-3.5 pr-28 rounded-full border border-gray-600 focus:outline-none focus:border-[#F34B02] focus:ring-1 focus:ring-[#F34B02] transition-all duration-200"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#F34B02] hover:bg-[#E04500] text-white font-semibold rounded-full px-5 py-2 text-sm transition-all duration-300 hover:shadow-lg"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
