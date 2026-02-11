import Image from 'next/image';
import { notFound } from 'next/navigation';
import { teamMembers } from '@/data/teamMembers';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.id,
  }));
}

export default function TeamMemberPage({ params }: PageProps) {
  const member = teamMembers.find(
    (m) => m.id === params.slug
  );

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FDFBFB] px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header Image Section */}
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-[30px] overflow-hidden shadow-lg my-12 group">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-[50%_10%] transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Gradient Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Role Title Overlay */}
          <div className="absolute bottom-8 left-0 right-0 text-center z-10 px-4">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide drop-shadow-md">
              {member.role}
            </h2>
          </div>
        </div>

        {/* Biography Section */}
        <div className=" mx-auto space-y-6 text-[#393838] text-base md:text-lg font-extralight">
          {member.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100/50">
          {/* Name */}
          <h1 className="text-lg md:text-xl font-semibold text-[#1D1D1D] order-2 md:order-1 self-start md:self-auto">
            {member.name}
          </h1>

          {/* Back Button */}
          <Link
            href="/company"
            className="group flex items-center gap-2 bg-[#F34B02] hover:bg-[#d64000] text-white px-14 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg order-1 md:order-2 self-end md:self-auto"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium text-lg">Back</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
