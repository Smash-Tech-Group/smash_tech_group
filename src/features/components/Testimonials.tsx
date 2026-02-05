'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { fetchTestimonials } from '@/services/testimonials'
import { Testimonial } from '@/types/testimonial'
import { assets } from '../../../assets/assets'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [loading, setLoading] = useState(true)

    const controls = useAnimation()
    const ref = useRef(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    const [gridPositions, setGridPositions] = useState<{ x: number; y: number }[]>([])

    const defaultPositions = [
        { rotation: -15, position: { top: '10%', left: '5%' } },
        { rotation: 3, position: { top: '10%', left: '40%' } },
        { rotation: 12, position: { top: '5%', right: '8%' } },
        { rotation: -18, position: { top: '45%', left: '8%' } },
        { rotation: 2, position: { top: '45%', left: '38%' } },
        { rotation: 15, position: { top: '50%', right: '10%' } },
    ]

    useEffect(() => {
        const loadTestimonials = async () => {
            setLoading(true)
            const data = await fetchTestimonials()
            const merged = data.map((t, i) => ({
                ...t,
                rotation: defaultPositions[i]?.rotation || 0,
                position: defaultPositions[i]?.position || { top: '10%', left: '10%' }
            }))
            setTestimonials(merged)
            setLoading(false)
        }
        loadTestimonials()
    }, [])

    // Desktop grid positions (lg+)
    useEffect(() => {
        if (containerRef.current && testimonials.length > 0) {
            const gap = 32
            const cardWidth = 380
            const cardHeight = 350

            const positions = testimonials.map((_, i) => {
                const col = i % 3
                const row = Math.floor(i / 3)
                return {
                    x: col * (cardWidth + gap),
                    y: row * cardHeight,
                }
            })

            setGridPositions(positions)
        }
    }, [testimonials])

    useEffect(() => {
        if (inView && gridPositions.length > 0) {
            controls.start('grid')
        }
    }, [inView, gridPositions, controls])

    const getScatteredPosition = (
        testimonial: Testimonial,
        containerWidth: number,
        containerHeight: number
    ) => {
        let x = 0, y = 0
        if (testimonial.position.top)
            y = (parseFloat(testimonial.position.top) / 100) * containerHeight
        if (testimonial.position.left)
            x = (parseFloat(testimonial.position.left) / 100) * containerWidth
        else if (testimonial.position.right)
            x =
                containerWidth -
                (parseFloat(testimonial.position.right) / 100) * containerWidth -
                380

        return { x, y }
    }

    return (
        <section
            ref={ref}
            className="relative w-full bg-[#F5E6D3] py-20 px-6 min-h-[900px] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 relative z-[100]">
                    <h2 className="text-[#FF5722] text-2xl font-bold tracking-wider">
                        TESTIMONIALS
                    </h2>
                </div>

                {loading ? (
                    <div className="text-center text-gray-600">
                        Loading testimonials...
                    </div>
                ) : (
                    <div ref={containerRef} className="w-full relative min-h-[800px]">

                        {/* Mobile + Tablet (1 col → 2 cols) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
                            {testimonials.map(t => (
                                <div
                                    key={t.id}
                                    className="bg-white rounded-2xl p-8 shadow-xl flex flex-col"
                                >
                                    <div className="mb-4">
                                        <Image
                                            src={assets.quote_up}
                                            alt="Quote Icon"
                                            width={32}
                                            height={32}
                                        />
                                    </div>

                                    <p className="text-gray-700 text-base leading-relaxed mb-2 min-h-[100px]">
                                        {t.quote}
                                    </p>

                                    <div className="w-80 h-[2px] bg-[#DDDDDD] rounded-full mb-6" />

                                    <div className="flex items-center gap-3 mt-auto pt-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                            <Image
                                                src={t.author.avatar}
                                                alt={t.author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-900 font-semibold text-sm">
                                                {t.author.name}
                                            </p>
                                            <p className="text-gray-600 text-xs">
                                                {t.author.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop (lg+) scattered → grid */}
                        <div className="hidden lg:block">
                            {testimonials.map((testimonial, index) => {
                                const containerWidth =
                                    containerRef.current?.offsetWidth || 1200
                                const containerHeight = 700

                                const scatteredPos = getScatteredPosition(
                                    testimonial,
                                    containerWidth,
                                    containerHeight
                                )

                                const gridPos = gridPositions[index] || { x: 0, y: 0 }

                                return (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{
                                            x: scatteredPos.x,
                                            y: scatteredPos.y,
                                            rotate: testimonial.rotation,
                                            opacity: 1,
                                        }}
                                        animate={controls}
                                        variants={{
                                            grid: {
                                                x: gridPos.x,
                                                y: gridPos.y,
                                                rotate: 0,
                                                transition: {
                                                    type: 'spring',
                                                    stiffness: 80,
                                                    damping: 20,
                                                    delay: index * 0.15,
                                                },
                                            },
                                        }}
                                        className="absolute bg-white rounded-2xl p-8 shadow-xl"
                                        style={{
                                            width: '380px',
                                            top: 0,
                                            left: 0,
                                            zIndex: 10 - index,
                                        }}
                                    >
                                        <Image
                                            src={assets.quote_up}
                                            alt="Quote Icon"
                                            width={32}
                                            height={32}
                                            className="mb-4"
                                        />

                                        <p className="text-gray-700 text-base leading-relaxed mb-2 min-h-[100px]">
                                            {testimonial.quote}
                                        </p>

                                        <div className="w-80 h-[2px] bg-[#DDDDDD] rounded-full mb-6" />

                                        <div className="flex items-center gap-3 pt-4">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                                <Image
                                                    src={testimonial.author.avatar}
                                                    alt={testimonial.author.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-semibold text-sm">
                                                    {testimonial.author.name}
                                                </p>
                                                <p className="text-gray-600 text-xs">
                                                    {testimonial.author.role}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
