'use client'

import Image from 'next/image'
import { assets } from '../../../assets/assets'

export default function WhyChooseUs() {
    const features = [
        {
            id: 1,
            icon: assets.mentoring, // replace with your actual icon path
            title: 'Multi-Industry Expertise',
            description: 'We build and operate platforms across finance, mobility, workforce, and digital services, bringing cross-industry insight to every solution.',
            position: 'top-left'
        },
        {
            id: 2,
            icon: assets.agreement, // replace with your actual icon path
            title: 'Long Term Partnership Mindset',
            description: 'We work closely with our partners beyond launch, providing continuous support, improvement, and growth over the long term.',
            position: 'bottom-left'
        },
        {
            id: 3,
            icon: assets.user_group, // replace with your actual icon path
            title: 'Product Used by Millions',
            description: 'Our platforms support millions of users and businesses, delivering reliable, everyday digital experiences at scale.',
            position: 'top-right'
        },
        {
            id: 4,
            icon: assets.globe, // replace with your actual icon path
            title: 'Africa Rooted Globally Focused',
            description: 'Built from Africa for the world, our solutions are designed to scale across regions while addressing real-world needs in diverse markets.',
            position: 'bottom-right'
        }
    ]

    return (
        <section className="w-full bg-[#F8F8FB] py-20 px-6 lg:px-16">
            <div className="max-w-8xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-[#FF5722] text-sm font-bold tracking-[0.2em] mb-4">
                        WHY CHOOSE SMASHTECH GROUP
                    </h2>
                    <h3 className="text-gray-900 text-4xl lg:text-5xl font-normal">
                        Where technology meets trust and scale.
                    </h3>
                </div>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Features 1 & 2 */}
                    <div className="space-y-12">
                        {features.slice(0, 2).map((feature) => (
                            <div
                                key={feature.id}
                                className="text-center lg:text-center"
                            >
                                {/* Icon */}
                                <div className="flex justify-center lg:justify-center items-center mb-4">
                                    <div className="relative w-12 h-12">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="text-gray-900 text-xl font-semibold mb-3">
                                    {feature.title}
                                </h4>

                                {/* Description */}
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>


                    {/* Center Column - Image */}
                    <div className="relative">
                        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={assets.why_us_bg} // Replace with your actual image
                                alt="Team collaboration overhead view"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-8 -right-8 w-full h-full bg-orange-100 rounded-3xl -z-10" />
                    </div>

                    {/* Right Column - Features 3 & 4 */}
                    <div className="space-y-12">
                        {features.slice(2, 4).map((feature) => (
                            <div
                                key={feature.id}
                                className="text-center lg:text-center"
                            >
                                {/* Icon */}
                                <div className="flex justify-center items-center mb-4">
                                    <div className="relative w-12 h-12">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="text-gray-900 text-xl font-semibold mb-3">
                                    {feature.title}
                                </h4>

                                {/* Description */}
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
