import Link from "next/link"

export default function JobNotFound() {
    return (
        <div className="w-full bg-white min-h-[60vh] flex items-center justify-center">
            <div className="max-w-md mx-auto px-4 text-center">
                {/* 404 Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-orange-50 rounded-full flex items-center justify-center">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#F34B02]"
                    >
                        <path
                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 8L12 12M12 8L8 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    Job Not Found
                </h1>
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                    The job listing you&apos;re looking for doesn&apos;t exist or may have been removed.
                    Browse our current openings to find the right role for you.
                </p>

                <Link
                    href="/careers"
                    className="inline-flex items-center justify-center gap-2 bg-[#F34B02] hover:bg-[#E04500] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 12H5M5 12L12 19M5 12L12 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    View All Openings
                </Link>
            </div>
        </div>
    )
}
