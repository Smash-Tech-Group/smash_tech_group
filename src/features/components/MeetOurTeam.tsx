'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { teamMembers } from '@/data/teamMembers';


interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
}


export default function MeetOurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const visible = [];
    // Show 6 cards to guarantee cut-off effect on larger screens
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      visible.push({ ...teamMembers[index], displayIndex: i });
    }
    return visible;
  };

  const visibleMembers = getVisibleMembers();

  // Helper to render the cards
  const RenderMemberCard = ({ member, isFeatured, idx }: { member: TeamMember; isFeatured: boolean; idx: number }) => (
    <Link
      href={`/team/${member.id}`}
      // ---------------------------------------------------------
      // ADJUST WIDTH HERE
      // ---------------------------------------------------------
      // Mobile: Featured full width (w-full), max-w for constraint
      // Desktop: Featured 390px, Standard 190px
      className={`group relative block transition-all duration-500 will-change-transform shrink-0
        ${isFeatured
          ? 'w-full max-w-[320px] lg:max-w-none lg:w-[390px]'
          : 'lg:w-[190px]'
        }`}
      style={{
        animationDelay: `${idx * 100}ms`
      }}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl transition-all duration-500 hover:shadow-orange-500/20 hover:scale-[1.02]
          ${isFeatured ? 'rounded-[2.5rem]' : 'rounded-3xl'}
        `}
      >
        {/* 
           ---------------------------------------------------------
           ADJUST HEIGHT / ASPECT RATIO HERE
           ---------------------------------------------------------
        */}
        <div className={`relative overflow-hidden ${isFeatured ? 'h-[400px] lg:h-[350px]' : 'h-[290px]'}`}>
          <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-700 -translate-x-full group-hover:translate-x-full"></div>
        </div>

        {/* Floating Name Card - Only for Featured */}
        {isFeatured && (
          <div className="absolute bottom-6 left-6 right-6 p-3 lg:p-2 text-center bg-white shadow-lg shadow-black/5 rounded-2xl transform translate-y-0 transition-transform duration-500">
            <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-1 tracking-tight">
              {member.name}
            </h2>
            <p className="text-xs font-light text-orange-600">
              {member.role}
            </p>
          </div>
        )}

      </div>
    </Link>
  );

  return (
    <main className=" bg-gradient-to-br from-slate-50 via-orange-50/20 to-slate-100 relative overflow-hidden py-16 px-6 lg:px-16">
      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-3xl font-semibold text-[#F34B02] tracking-tight">
            Meet Our Team
          </h1>
        </div>

        {/* Mobile Layout - Single Featured Card */}
        <div className="lg:hidden flex flex-col items-center">
          <RenderMemberCard
            member={visibleMembers[0]}
            isFeatured={true}
            idx={0}
          />

          {/* Mobile Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-orange-200 bg-white text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
              aria-label="Previous team member"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-sm text-slate-500 font-medium">
              {currentIndex + 1} / {teamMembers.length}
            </span>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-orange-200 bg-white text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
              aria-label="Next team member"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Layout - Multiple Cards with Cut-off Effect */}
        <div className="hidden lg:block w-full overflow-x-hidden">
          <div className="flex flex-nowrap items-start gap-8">

            {/* Slot 1: Featured (Big) */}
            <RenderMemberCard
              member={visibleMembers[0]}
              isFeatured={true}
              idx={0}
            />

            {/* Slot 2: Standard + Navigation */}
            <div className="flex flex-col gap-6 shrink-0">
              <RenderMemberCard
                member={visibleMembers[1]}
                isFeatured={false}
                idx={1}
              />

              {/* Controls aligned under 2nd card */}
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-orange-200 bg-white text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
                  aria-label="Previous team member"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-orange-200 bg-white text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
                  aria-label="Next team member"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Slot 3: Standard */}
            <div className="shrink-0">
              <RenderMemberCard member={visibleMembers[2]} isFeatured={false} idx={2} />
            </div>

            {/* Slot 4: Standard */}
            <div className="shrink-0">
              <RenderMemberCard member={visibleMembers[3]} isFeatured={false} idx={3} />
            </div>

            {/* Slot 5: Standard */}
            <div className="shrink-0">
              <RenderMemberCard member={visibleMembers[4]} isFeatured={false} idx={4} />
            </div>

            {/* Slot 6: Extra card for Wide Screens */}
            <div className="shrink-0">
              <RenderMemberCard member={visibleMembers[5]} isFeatured={false} idx={5} />
            </div>

          </div>
        </div>

        {/* Mobile View Indicators - Dot navigation */}
        <div className="flex lg:hidden justify-center gap-2 mt-6">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .group {
          animation: fadeInUp 0.5s ease-out backwards;
        }
      `}</style>
    </main>
  );
}