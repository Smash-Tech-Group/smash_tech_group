import React from 'react';
import Image from 'next/image';

const GrowWithUs = () => {
    return (
        <section className="relative w-full bg-[#FAFAFA] py-16 pt-28 md:py-24 lg:pt-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Block */}
                <div className="relative text-center mb-12 md:mb-16 lg:mb-20">
                    {/* Yellow icon - Desktop: left of "Grow with us", Mobile: left under subtext */}
                    <div className="hidden lg:block absolute -left-4 top-0 md:-left-8 md:top-2 lg:-left-16 lg:top-0">
                        <img src='/yellow.svg' className='w-20 h-20' alt='yellow icon' />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-[#393838] mb-4 md:mb-6">
                        Grow With Us
                    </h1>

                    <div className="relative inline-block max-w-3xl">
                        {/* Green icon - Desktop: right beside subtext, Mobile: hidden (will show on image) */}
                        <div className="hidden lg:block absolute -right-4 -translate-y-1/2 md:-right-8 lg:-right-32">
                            <img src='/green.svg' className='w-20 h-20' alt='green icon' />
                        </div>
                        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#393838] leading-relaxed">
                            A team, a mission, and the freedom to grow into your best self while <br className='hidden lg:block' /> building things that matter.
                        </p>
                    </div>

                    {/* Yellow icon - Mobile: left side under subtext */}
                    <div className="lg:hidden flex justify-start mt-6 pl-4">
                        <img src='/yellow.svg' className='w-16 h-16 md:w-20 md:h-20' alt='yellow icon' />
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="relative w-full max-w-6xl mx-auto">
                    {/* Main Image Container */}
                    <div className="relative w-full">
                        {/* Green icon - Mobile: top right of large image, Desktop: hidden (shown by subtext) */}
                        <div className="lg:hidden absolute -top-4 -right-4 md:-top-6 md:-right-6 z-10">
                            <img src='/green.svg' className='w-16 h-16 md:w-20 md:h-20' alt='green icon' />
                        </div>

                        {/* Blue icon - Desktop: far right on top of the large image, Mobile: hidden (will show below) */}
                        <div className="hidden lg:block absolute -top-6 -right-4 md:-top-8 md:-right-6 lg:-top-10 lg:-right-8">
                            <img src='/blue.svg' className='w-20 h-20' alt='blue icon' />
                        </div>

                        {/* Main Collage Image (1.svg) */}
                        <div className="relative w-full z-0">
                            <Image
                                src="/1.svg"
                                alt="Team collaboration and growth"
                                width={1200}
                                height={600}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Quote Box (at.svg) - Desktop Layout (Overlapping top-left) */}
                        <div className="hidden lg:block absolute -top-26 z-20 w-80 xl:w-[400px]">
                            <Image
                                src="/at.svg"
                                alt="At Smash Technology quote"
                                width={400}
                                height={180}
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Quote Box (at.svg) - Mobile/Tablet Layout (Below Image) */}
                    <div className="block lg:hidden w-full mt-8 relative z-20">
                        <div className="flex items-center justify-between gap-4 px-4">
                            {/* Quote box - left aligned, 3/5 width */}
                            <div className="flex-1">
                                <Image
                                    src="/at.svg"
                                    alt="At Smash Technology quote"
                                    width={400}
                                    height={180}
                                    className="w-full h-auto drop-shadow-xl"
                                />
                            </div>

                            {/* Blue icon - right side beside quote box */}
                            <div className="-mr-6">
                                <img src='/blue.svg' className='w-14 h-14 md:w-20 md:h-20' alt='blue icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowWithUs;