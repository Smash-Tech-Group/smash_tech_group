'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface BusinessCardProps {
    icon: any
    category: string
    name: string
    description: string
    bgImage: any
    status: 'active' | 'in-progress'
    website?: string
}

export default function BusinessCard({
    icon,
    category,
    name,
    description,
    bgImage,
    status,
    website
}: BusinessCardProps) {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Icon and Arrow */}
            <div className="p-6 flex justify-between items-start">

                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <Image
                        src={icon}
                        alt={name}
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </div>

                {/* Arrow / Status */}
                <div className="w-8 h-8 flex items-center justify-center">
                    {status === 'active' ? (
                        <Link
                            href={website || '#'}
                            target="_blank"
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full
                            bg-orange-100 text-orange-700
                            hover:bg-orange-200 transition"
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    ) : (
                        <span className="text-[14px] font-semibold text-[#F34B02] whitespace-nowrap px-3">
                            In Progress
                        </span>
                    )}
                </div>

            </div>

            {/* Content */}
            <div className="px-6 pb-4">
                <p className="text-orange-500 text-xs font-medium mb-2 uppercase tracking-wide">
                    {category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {description}
                </p>
            </div>

            {/* Preview Image */}
            <div className="px-6 pb-6">
                <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                        src={bgImage}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

        </div>
    )
}
