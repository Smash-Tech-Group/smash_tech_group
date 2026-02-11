"use client"

import Image from "next/image"
import Link from "next/link"
import { jobOpenings, type JobOpening } from "@/data/jobOpenings"

export default function CurrentOpenings() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 md:mb-10 lg:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900 mb-3">
                        Current <span className="text-[#F34B02]">Openings</span>
                    </h2>
                    <p className="text-[#393838] font-normal text-lg md:text-lg">
                        We are currently seeking qualified candidates for these positions
                    </p>
                </div>

                {/* Job Listings */}
                <div className="space-y-10 lg:space-y-12">
                    {jobOpenings.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function JobCard({ job }: { job: JobOpening }) {
    return (
        <div className="border-b border-gray-100 pb-10 lg:pb-12 last:border-b-0">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {job.title}
            </h3>

            <div className="mb-2">
                <h4 className="text-lg font-medium text-gray-800">
                    Job Description:
                </h4>
                <p className="text-[#393838] font-light text-sm md:text-lg leading-relaxed lg:leading-8">
                    {job.description}
                </p>
            </div>

            {/* Tags and Apply Button */}
            <div className="font-light flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                    {/* Location Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 bg-white">
                        <Image
                            src={job.location.flagSrc}
                            alt={job.location.country}
                            width={20}
                            height={14}
                            className="w-5 h-auto object-contain"
                        />
                        <span className="text-sm text-gray-700">{job.location.country}</span>
                    </div>

                    {/* Work Type Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500"
                        >
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span className="text-sm text-gray-700">{job.workType}</span>
                    </div>

                    {/* Employment Type Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500"
                        >
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                            <path
                                d="M12 7V12L15 15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="text-sm text-gray-700">{job.employmentType}</span>
                    </div>
                </div>

                {/* Apply Button — now links to dynamic route */}
                <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#F34B02] hover:bg-[#E04500] text-white font-normal text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full lg:w-auto"
                >
                    Apply now
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
