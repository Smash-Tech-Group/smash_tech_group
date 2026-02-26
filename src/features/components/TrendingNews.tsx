'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const newsItems = [
    {
        category: "Agriculture",
        date: "Jan 08, 2026",
        title: "Smash Remit Set to Launch in Nigeria on 1st April 2026, Announces Co-Founder Eigbefoh Paul Smith",
        image: "/smashremit.png",
        link: "/blogs/smash-remit-set-to-launch-in-nigeria-on-1st-april-2026",
        isLarge: true
    },
    {
        category: "Real Estate",
        date: "Jan 05, 2026",
        title: "Smash Technology Profit Tunnel to Nigerian Real Estate Gold mine",
        image: "/blog2.png",
        link: "/blogs/real-estate-gold-mine",
        isLarge: false
    },
    {
        category: "Real Estate",
        date: "Jan 05, 2026",
        title: "Smash Technology Profit Tunnel to Nigerian Real Estate Gold mine",
        image: "/blog2.png",
        link: "/blogs/ride-hailing-profit-tunnel",
        isLarge: false
    }
];

export default function TrendingNews() {
    return (
        <section className="w-full bg-[#f6f6f6] py-[60px] md:py-20 px-4 md:px-8 lg:px-12 xl:px-[100px]">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <h2 className="text-[#1D1D1D] text-[28px] font-medium mb-8 font-sans">Trending News</h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">

                    {/* Large Card (Left) */}
                    <div className="lg:col-span-2 relative h-[400px] lg:h-full rounded-[24px] overflow-hidden group shadow-sm w-full">
                        <Link href={newsItems[0].link} className="block w-full h-full relative">
                            {/* Background Image */}
                            <Image
                                src={newsItems[0].image}
                                alt={newsItems[0].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                                priority
                            />

                            {/* Date Badge */}
                            <div className="absolute top-6 left-6 z-10">
                                <span className="bg-white px-4 py-1.5 rounded-full text-xs font-medium text-[#1D1D1D] shadow-sm">
                                    {newsItems[0].date}
                                </span>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                                <div className="flex flex-col items-start pointer-events-auto max-w-[85%] sm:max-w-[70%] lg:max-w-[65%]">
                                    {/* Tag Tab */}
                                    <div className="bg-white px-4 py-1.5 rounded-t-xl translate-y-[1px] relative z-20">
                                        <span className="text-[#F34B02] text-[10px] font-normal tracking-wider">
                                            {newsItems[0].category}
                                        </span>
                                    </div>
                                    {/* Title Box */}
                                    <div className="bg-white p-6 pr-8 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-lg relative z-10">
                                        <h3 className="text-[#1D1D1D] text-[26px] font-medium font-sans italic leading-[1.15]">
                                            {newsItems[0].title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-[#F34B02] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:bg-[#d64000] transition-all duration-300 transform group-hover:rotate-45 shrink-0 mb-2">
                                    <ArrowUpRight size={22} className="stroke-[2.5]" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Small Cards (Right Stack) */}
                    <div className="flex flex-col gap-6 h-full">
                        {newsItems.slice(1).map((item, index) => (
                            <div key={index} className="relative flex-1 rounded-[24px] overflow-hidden group min-h-[240px] shadow-sm w-full">
                                <Link href={item.link} className="block w-full h-full relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />

                                    {/* Date Badge */}
                                    <div className="absolute top-5 left-5 z-10">
                                        <span className="bg-white px-3 py-1 rounded-full text-[11px] font-medium text-[#1D1D1D] shadow-sm">
                                            {item.date}
                                        </span>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between pointer-events-none">
                                        <div className="flex flex-col items-start pointer-events-auto max-w-[80%]">
                                            {/* Tag Tab */}
                                            <div className="bg-white px-3 py-1 rounded-t-lg translate-y-[1px] relative z-20">
                                                <span className="text-[#F34B02] text-[9px] font-bold uppercase tracking-wider">
                                                    {item.category}
                                                </span>
                                            </div>
                                            {/* Title Box */}
                                            <div className="bg-white p-4 pr-6 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-lg relative z-10">
                                                <h3 className="text-[#1D1D1D] text-[17px] font-medium font-sans italic leading-[1.25] line-clamp-3">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <div className="bg-[#F34B02] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:bg-[#d64000] transition-all duration-300 transform group-hover:rotate-45 shrink-0 mb-1 ml-3">
                                            <ArrowUpRight size={18} className="stroke-[2.5]" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
