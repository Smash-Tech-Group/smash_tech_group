import Link from "next/link"
import { getJobs, jobToSlug } from "@/services/jobs.service"
import type { Job } from "@/types/jobs.types"

/**
 * Server Component — fetches live job data from the API.
 */
export default async function CurrentOpenings() {
    let jobs: Job[] = []
    let fetchError = false

    try {
        jobs = await getJobs()
        // Only show active jobs
        jobs = jobs.filter((j) => j.is_active)
    } catch {
        fetchError = true
    }

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

                {/* Error State */}
                {fetchError && (
                    <div className="rounded-xl border border-red-100 bg-red-50 px-6 py-8 text-center">
                        <p className="text-red-600 font-medium">
                            Unable to load job openings right now. Please try again later.
                        </p>
                    </div>
                )}

                {/* Empty State */}
                {!fetchError && jobs.length === 0 && (
                    <div className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-12 text-center">
                        <p className="text-gray-500 text-lg">
                            No open positions at the moment. Check back soon!
                        </p>
                    </div>
                )}

                {/* Job Listings */}
                {!fetchError && jobs.length > 0 && (
                    <div className="space-y-10 lg:space-y-12">
                        {jobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

function JobCard({ job }: { job: Job }) {
    const slug = jobToSlug(job)
    const deadline = new Date(job.application_deadline).toLocaleDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return (
        <div className="border-b border-gray-100 pb-10 lg:pb-12 last:border-b-0">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {job.title}
            </h3>

            <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-800">Job Description:</h4>
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
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500"
                        >
                            <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="text-sm text-gray-700">{job.location}</span>
                    </div>

                    {/* Job Type Tag */}
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
                        <span className="text-sm text-gray-700">{job.job_type}</span>
                    </div>

                    {/* Salary Range Tag */}
                    {job.salary_range && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-gray-500"
                            >
                                <path
                                    d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-sm text-gray-700">{job.salary_range}</span>
                        </div>
                    )}

                    {/* Deadline Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500"
                        >
                            <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                            <path d="M8 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M16 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-sm text-gray-700">Deadline: {deadline}</span>
                    </div>
                </div>

                {/* Apply Button */}
                <Link
                    href={`/careers/${slug}`}
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
