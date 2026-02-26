'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        category: "Agriculture",
        date: "Jan 08, 2026",
        title: "Agric Wealth",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog1.jpg",
    },
    {
        id: 2,
        category: "Real estate",
        date: "Jan 08, 2026",
        title: "Real estate Gold Mine",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog2.png",
    },
    {
        id: 3,
        category: "Ride-hailing",
        date: "Jan 08, 2026",
        title: "Ride-hailing Profit Tunnel",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog2.png",
    },
    {
        id: 4,
        category: "Agriculture",
        date: "Jan 08, 2026",
        title: "Agric Wealth",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog1.jpg",
    },
    {
        id: 5,
        category: "Real estate",
        date: "Jan 08, 2026",
        title: "Real estate Gold Mine",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog2.png",
    },
    {
        id: 6,
        category: "Ride-hailing",
        date: "Jan 08, 2026",
        title: "Ride-hailing Profit Tunnel",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog2.png",
    },
    {
        id: 7,
        category: "Agriculture",
        date: "Jan 08, 2026",
        title: "Agric Wealth",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog1.jpg",
    },
    {
        id: 8,
        category: "Real estate",
        date: "Jan 08, 2026",
        title: "Real estate Gold Mine",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog2.png",
    },
    {
        id: 9,
        category: "Ride-hailing",
        date: "Jan 08, 2026",
        title: "Ride-hailing Profit Tunnel",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog2.png",
    }
];

export default function AllBlogNews() {
    return (
        <section className="w-full bg-[#f6f6f6] pb-24 px-4 md:px-8 lg:px-12 xl:px-[100px]">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <h2 className="text-[#1D1D1D] text-[28px] font-medium mb-10 font-sans">All Blog News</h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex flex-col group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[20px] mb-5">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col items-start px-1">
                                {/* Meta Data */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="flex items-center gap-2 text-[#F34B02] text-[10px] font-bold uppercase tracking-wider">
                                        <p className='w-1 h-1 rounded-full bg-[#F34B02]'></p>{post.category}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-[#F34B02]" />
                                    <span className="text-[#F34B02] text-[10px] font-bold uppercase tracking-wider">
                                        {post.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-[#1D1D1D] text-2xl font-bold mb-3 leading-tight group-hover:text-[#F34B02] transition-colors duration-300">
                                    {post.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#555555] text-lg leading-relaxed line-clamp-3">
                                    {post.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-20 pt-4">
                    <button className="px-5 py-2 rounded-lg border border-[#E5E5E5] bg-white text-[#1D1D1D] text-sm font-medium hover:bg-gray-50 transition-colors">
                        Previous
                    </button>

                    <div className="flex items-center gap-2">
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E5E5E5] bg-white text-[#1D1D1D] text-sm font-medium shadow-sm">
                            1
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg text-[#555555] text-sm font-medium hover:bg-gray-100 transition-colors">
                            2
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg text-[#555555] text-sm font-medium hover:bg-gray-100 transition-colors">
                            3
                        </button>
                    </div>

                    <button className="px-5 py-2 rounded-lg border border-[#E5E5E5] bg-white text-[#1D1D1D] text-sm font-medium hover:bg-gray-50 transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
