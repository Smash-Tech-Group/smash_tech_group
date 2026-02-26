import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LHero from '@/features/components/LHero';
import BlogImage from '../../../../public/blog2.png';
import smashremithero from '../../../../assets/Hero_banner.png';

const blogPosts = [
    {
        slug: 'smash-remit-set-to-launch-in-nigeria-on-1st-april-2026',
        category: "Agriculture",
        date: "Jan 08, 2026",
        title: "Smash Remit Set to Launch in Nigeria on 1st April 2026",
        description: "Nigeria is set to welcome a new era of seamless digital payments as Smash Remit Nigeria officially announces its launch on 1st April 2026",
        image: "/blog1.jpg",
        content: (
            <>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-12 mb-4">
                    Smash Remit Set to Launch in Nigeria on 1st April 2026
                </h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Nigeria is set to welcome a new era of seamless digital payments as <strong>Smash Remit Nigeria</strong> officially announces its launch on <strong>1st April 2026</strong>. The announcement was made by co-founder <strong>Eigbefoh Paul Smith</strong>, who emphasized the platform’s mission to simplify financial transactions, enhance financial inclusion, and empower both individuals and businesses across the country.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    As the demand for fast, secure, and reliable <strong>digital payment solutions in Nigeria</strong> continues to grow, Smash Remit is positioned to deliver innovative fintech services tailored specifically for the modern Nigerian market.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">
                    A Digital Payment Platform Built for the Modern Nigerian Market
                </h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Smash Remit is designed to provide <strong>fast money transfers, secure online payments, and efficient bill payment services</strong> for both personal and business use. Whether you are a small business owner, entrepreneur, student, or working professional, the platform enables you to manage your finances directly from your smartphone or web-enabled device.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    With minimal transaction fees, advanced encryption technology, and high-level security protocols, Smash Remit ensures that every transaction is safe, transparent, and reliable. Users can expect a seamless experience that removes the traditional barriers often associated with financial services in Nigeria.
                </p>

                <h4 className="text-[#1D1D1D] text-base font-bold mt-6 mb-3">
                    Empowering Nigerians Through Fintech Innovation
                </h4>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Speaking on the vision behind the platform, co-founder <strong>Eigbefoh Paul Smith</strong> stated:
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed italic">
                    “Smash Remit is about empowering Nigerians with technology that simplifies financial transactions. Our goal is to make payments faster, easier, and accessible to everyone, whether you are a small business owner, a student, or a professional.”
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    This vision reflects Smash Remit’s commitment to leveraging <strong>financial technology (fintech)</strong> to drive convenience, efficiency, and economic opportunity nationwide.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">
                    Driving Financial Inclusion in Nigeria
                </h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Financial inclusion remains a major priority in Nigeria’s growing digital economy. Smash Remit aims to bridge the gap for underserved and unbanked populations by offering accessible digital financial services that do not rely solely on traditional banking infrastructure.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    By making <strong>digital payments in Nigeria</strong> more inclusive and user-friendly, Smash Remit enables individuals and small businesses to participate fully in the formal financial system—unlocking new opportunities for savings, investment, and growth.
                </p>

                <h4 className="text-[#1D1D1D] text-base font-bold mt-6 mb-3">
                    Key Features of Smash Remit
                </h4>
                <ul className="list-disc list-inside mb-6 text-[#555555] text-base leading-relaxed pl-4 space-y-2">
                    <li>Real-time payment tracking</li>
                    <li>Secure peer-to-peer transfers</li>
                    <li>Bill payments and business transaction support</li>
                    <li>Cross-platform compatibility (mobile and web)</li>
                    <li>Robust data protection and transaction security</li>
                </ul>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    These features position Smash Remit as a competitive player in Nigeria’s rapidly expanding fintech ecosystem.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">
                    About Smash Remit
                </h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Smash Remit is co-founded by <strong>Eigbefoh Paul Smith</strong>, a Nigerian entrepreneur known for developing innovative technology solutions tailored to the local market. The platform represents a strategic step toward bridging the gap between advanced financial technology and everyday financial needs in Nigeria.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    By combining innovation, security, and accessibility, Smash Remit seeks to become a trusted name in <strong>Nigeria’s digital payments industry</strong>.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">
                    Launch Event – 1st April 2026
                </h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    The official launch event on <strong>1st April 2026</strong> will showcase Smash Remit’s capabilities through live demonstrations, strategic partnership announcements, and exclusive opportunities for early adopters to explore the platform’s full range of features.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    As Nigeria continues to embrace digital transformation, Smash Remit is poised to play a significant role in shaping the future of secure, accessible, and efficient financial transactions across the country.
                </p>
            </>
        )
    },
    {
        slug: 'real-estate-gold-mine',
        category: "Real estate",
        date: "Jan 08, 2026",
        title: "Real estate Gold Mine",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog2.png",
        content: <p className="text-lg text-gray-600">Content coming soon...</p>
    },
    {
        slug: 'ride-hailing-profit-tunnel',
        category: "Ride-hailing",
        date: "Jan 08, 2026",
        title: "Ride-hailing Profit Tunnel",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog2.png",
        content: <p className="text-lg text-gray-600">Content coming soon...</p>
    },
    {
        slug: 'agric-wealth-2',
        category: "Agriculture",
        date: "Jan 08, 2026",
        title: "Agric Wealth",
        description: "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices.",
        image: "/blog1.jpg",
        content: <p className="text-lg text-gray-600">Content coming soon...</p>
    },
];

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    // Related posts logic: exclude current post, take first 3 of remaining
    const relatedPosts = blogPosts.filter(p => p.slug !== params.slug).slice(0, 3);

    return (
        <div className="bg-[#F8F8FB] text-[#393838]">
            <LHero
                image={smashremithero}
                title="Blog > Details"
            />

            {/* Main Content Container */}
            <section className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-12 xl:px-[100px]">
                <div className="max-w-[1440px] mx-auto">

                    {/* Article Title */}
                    <div className="  p-8 md:p-12 mb-12">
                        <h1 className="text-[#393838] text-2xl bg-white p-2 md:text-3xl lg:text-2xl font-semibold text-center leading-tight mb-8">
                            {post.title}
                        </h1>

                        {/* Article Content */}
                        <div className="max-w-none text-left">
                            {post.content}
                        </div>
                    </div>


                    {/* Related Articles Section */}
                    <div className="px-8 md:px-12">
                        <h2 className="text-[#F34B02] text-[24px] font-semibold mb-10 font-sans">Related Articles</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                            {relatedPosts.map((relatedPost, index) => (
                                <Link href={`/blogs/${relatedPost.slug}`} key={index} className="flex flex-col group cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[20px] mb-5">
                                        <Image
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
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
                                                <span className='w-1 h-1 rounded-full bg-[#F34B02]'></span>{relatedPost.category}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-[#F34B02]" />
                                            <span className="text-[#F34B02] text-[10px] font-bold uppercase tracking-wider">
                                                {relatedPost.date}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[#1D1D1D] text-xl font-bold mb-3 leading-tight group-hover:text-[#F34B02] transition-colors duration-300">
                                            {relatedPost.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[#393838] text-base leading-relaxed line-clamp-3">
                                            {relatedPost.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
