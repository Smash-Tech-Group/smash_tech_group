import Image from "next/image";
import Link from "next/link";
import { assets } from "../../../../assets/assets";

export default function CTA() {
    return (
        <section className="relative w-full overflow-hidden py-24 lg:py-32 min-h-[500px] z-0">

            {/* Decorative Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={assets.CTA_bg}
                    alt="Decorative Background"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: CTA Text */}
                    <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                        <h2 className="text-gray-900 text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-semibold leading-[1.2] mb-6 lg:mb-8">
                            Start your digital journey
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-7 mb-10">
                            We help organizations design, deploy, and scale technology with confidence.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-[#F34B02] hover:bg-[#E64A19] text-white font-semibold text-base sm:text-lg lg:text-xl py-3 sm:py-4 px-8 sm:px-12 rounded-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Right: Newsletter */}
                    <div className="mx-auto lg:mx-0 w-full max-w-md sm:max-w-lg lg:max-w-[500px]">
                        <div className="bg-[#FBF3F0] backdrop-blur-md border border-white/40 rounded-2xl p-8 sm:p-10 shadow-xl">
                            <h3 className="text-gray-900 text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left">
                                Subscribe to Our Newsletter
                            </h3>
                            <form className="flex flex-col gap-4 sm:gap-5">
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full pr-28 sm:pr-32 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] placeholder-gray-400"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-[#FF5722] hover:bg-[#E64A19] text-white font-semibold rounded-full px-4 sm:px-6 py-1.5 sm:py-2 transition-transform duration-300 hover:scale-[1.02]"
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
    );
}
