'use client'

import Image from "next/image"
import { assets } from "../../../../assets/assets"

export default function StatsSection() {
    return (
        <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-6">

                    {/* Left Image Card */}
                    <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden group md:col-span-2">
                        <Image
                            src={assets.left_stat_section_img} // 👈 replace with your actual image key
                            alt="Office Workspace"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Center Stats Card */}
                    <div className="bg-[#F2E5D5] rounded-3xl p-8 shadow-sm flex flex-col justify-between md:col-span-1">
                        <div>
                            <p className="text-gray-700 text-base mb-12 leading-relaxed">
                                One group. Multiple industries.<br />
                                Shared standards.
                            </p>
                            <h3 className="text-5xl  font-bold text-gray-900 mb-3">10+</h3>
                            <p className="text-gray-700 font-medium text-lg mb-8">Industries Served</p>
                        </div>

                        {/* Brand logos/colored dots with overlap */}
                        <div className="flex items-center -space-x-3">
                            {[
                                assets.qiimeet_stats,
                                assets.smashTravels_stats,
                                assets.rideSmash_stats,
                                assets.smashRemit_stats,
                                assets.smashFood_stats,
                                assets.smashMail_stats
                            ].map((imgSrc, idx) => (
                                <div
                                    key={idx}
                                    className="w-10 h-10 rounded-full  overflow-hidden shadow-md"
                                >
                                    <Image
                                        src={imgSrc}
                                        alt={`Brand ${idx + 1}`}
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right Image Card */}
                    <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden group md:col-span-1">
                        <Image
                            src={assets.right_stat_section_img} // 👈 replace with your actual image key
                            alt="Team Collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
