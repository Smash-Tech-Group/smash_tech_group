import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LHero from '@/features/components/LHero';
import BlogImage from '../../../../public/blog2.png';

const blogPosts = [
    {
        slug: 'agric-wealth',
        category: "Agriculture",
        date: "Jan 08, 2026",
        title: "Agric Wealth on Smash Technology: Transforming Farming into a Profit Future",
        description: "Agriculture remains one of the most powerful engines for economic growth, yet many farmers and agribusinesses still struggle with low productivity, limited market access, and financial constraints. At Smash Technology, we believe the future of agriculture lies in innovation. By combining technology with agribusiness, we are unlocking new pathways to sustainable agric wealth.",
        image: "/blog1.jpg",
        content: (
            <>
                <p className="mb-6 text-[#393838] text-base leading-relaxed">
                    Agriculture remains one of the most powerful engines for economic growth, yet many farmers and agribusinesses still struggle with low productivity, limited market access, and financial constraints. At Smash Technology, we believe the future of agriculture lies in innovation. By combining technology with agribusiness, we are unlocking new pathways to sustainable agric wealth.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">Redefining Agriculture with Technology</h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Traditional farming methods are no longer sufficient to meet today's demand for efficiency, scalability, and profitability. Smash Technology is transforming agriculture by introducing digital solutions that empower farmers, agribusiness owners, and stakeholders across the value chain.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Our approach focuses on using technology to simplify farming operations, improve decision-making, and create access to economic opportunities that were previously out of reach.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">How Smash Technology Enables Agric Wealth</h3>

                <h4 className="text-[#1D1D1D] text-base font-bold mt-6 mb-3">Smart, Data-Driven Farming</h4>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Smash Technology leverages digital tools and data insights to help farmers make informed decisions. From soil analysis to crop monitoring and yield optimization, our solutions reduce guesswork and improve productivity. The result is higher output, reduced losses, and better resource management.
                </p>

                <h4 className="text-[#1D1D1D] text-base font-bold mt-6 mb-3">Market Access and Fair Pricing</h4>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Access to reliable markets is a major challenge in agriculture. Smash Technology connects farmers directly to buyers, processors, and distributors through digital platforms. This shortens the supply chain, reduces dependency on middlemen, and ensures farmers receive fair value for their produce.
                </p>

                <h4 className="text-[#1D1D1D] text-base font-bold mt-6 mb-3">Financial Inclusion for Farmers</h4>
                <p className="mb-4 text-[#555555] text-base leading-relaxed">
                    Sustainable agric wealth requires access to finance. Through secure digital payment systems and financial service integrations, Smash Technology enables farmers to:
                </p>
                <ul className="list-disc list-inside mb-6 text-[#555555] text-base leading-relaxed pl-4 space-y-2">
                    <li>Receive payments faster</li>
                    <li>Access credit and micro-financing</li>
                    <li>Save and reinvest in their operations</li>
                </ul>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    This financial empowerment supports business growth and long-term stability.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">Efficient Supply Chain Management</h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Post-harvest losses significantly reduce farmers' income. Smash Technology improves supply chain visibility and coordination, helping to minimize waste, improve logistics, and ensure produce reaches the market in optimal condition.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    By introducing modern technology into agriculture, Smash Technology makes the sector more attractive to young innovators and entrepreneurs. This drives job creation, innovation, and sustainable development within the agricultural ecosystem.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">Our Vision for Sustainable Agric Wealth</h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    At Smash Technology, our vision is to build an agricultural ecosystem where technology drives prosperity. We are committed to helping farmers and agribusinesses move from subsistence operations to scalable, profitable enterprises.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    By embracing digital transformation, agriculture can become a reliable source of income, economic resilience, and long-term wealth creation.
                </p>

                <h3 className="text-[#1D1D1D] text-base font-bold mt-8 mb-4">Conclusion</h3>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Agric wealth is built when farmers have the right tools, access, and support. Smash Technology is proud to be at the forefront of this transformation—using innovation to unlock the true economic potential of agriculture.
                </p>
                <p className="mb-6 text-[#555555] text-base leading-relaxed">
                    Together, we are not just farming for today; we are building wealth for the future.
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
                image={BlogImage}
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
