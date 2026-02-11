"use client"

import { useState } from "react"
import Image from "next/image"
import GrowWithUs from "@/features/components/GrowWithUs"
import type { JobOpening } from "@/data/jobOpenings"

interface JobDetailsClientProps {
    job: JobOpening
}

export default function JobDetailsClient({ job }: JobDetailsClientProps) {
    const [activeTab, setActiveTab] = useState<"overview" | "application">("overview")

    // Split the title to italicize the last word (matching the design)
    const titleWords = job.title.split(" ")
    const lastWord = titleWords.pop()
    const firstWords = titleWords.join(" ")

    return (
        <div className="w-full bg-[#F8F8FB] min-h-screen">
            <GrowWithUs />
            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16">
                {/* Tab Switcher - Hidden on Desktop */}
                <div className="flex items-center gap-1 mb-8 md:mb-10 bg-gray-100 rounded-full p-1 w-fit lg:hidden">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "overview"
                            ? "bg-[#F34B02] text-white shadow-md"
                            : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("application")}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "application"
                            ? "bg-[#F34B02] text-white shadow-md"
                            : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Application
                    </button>
                </div>

                {/* Layout: Two-column on desktop always, tab-based on mobile */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                    {/* Job Details Column - Hidden on mobile when Application tab is active */}
                    <div className={`${activeTab === "application" ? "hidden lg:block" : ""}`}>
                        {/* Job Title */}
                        <h1 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold text-gray-900 mb-6 md:mb-4">
                            {firstWords}{" "}
                            <span className="text-[#F34B02]">{lastWord}</span>
                        </h1>

                        {/* Job Content */}
                        <div className="space-y-6">
                            {/* Job Description */}
                            <div>
                                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                    Job Description:
                                </h2>
                                <p className="text-[#393838] text-sm md:text-lg font-normal leading-relaxed lg:leading-7">
                                    {job.fullDescription.roleOverview}
                                </p>
                            </div>

                            {/* Key Responsibilities */}
                            <div>
                                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">
                                    Key Responsibilities:
                                </h2>
                                {job.fullDescription.keyResponsibilities.map((section, index) => (
                                    <div key={index} className="mb-4">
                                        <h3 className="text-sm md:text-lg font-normal text-gray-800 mb-2">
                                            {section.heading}
                                        </h3>
                                        <ul className="space-y-1.5 ml-1">
                                            {section.items.map((item, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="text-gray-600 text-sm md:text-base leading-relaxed lg:leading-7 flex  items-start gap-2"
                                                >
                                                    <span className="text-gray-900 flex-shrink-0">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Other Requirements */}
                            <div>
                                <h3 className="text-sm md:text-lg font-base text-gray-800 mb-2">
                                    Other Requirements
                                </h3>
                                <ul className="space-y-1.5 ml-1">
                                    {job.fullDescription.otherRequirements.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-gray-600 text-sm md:text-base leading-relaxed lg:leading-7 flex items-start gap-2"
                                        >
                                            <span className="text-gray-900 flex-shrink-0">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Requirements */}
                            <div>
                                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                    Requirements:
                                </h2>
                                <ul className="space-y-1.5 ml-1">
                                    {job.fullDescription.requirements.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-gray-600 text-sm md:text-[15px] leading-relaxed lg:leading-7 flex items-start gap-2"
                                        >
                                            <span className="text-gray-900 mt-1.5 flex-shrink-0">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tag Pills */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                {/* Location Tag */}
                                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 bg-[#F8F8FB]">
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
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-[#F8F8FB]">
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
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-[#F8F8FB]">
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
                        </div>

                        {/* CTA to switch to Application tab (shown only on mobile in overview) */}
                        <div className="mt-10 lg:hidden">
                            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Interested in this role?
                                </h2>
                                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                                    Switch to the Application tab to submit your application for the{" "}
                                    <span className="font-semibold text-gray-800">{job.title}</span> position.
                                </p>
                                <button
                                    onClick={() => {
                                        setActiveTab("application")
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }}
                                    className="inline-flex items-center justify-center gap-2 bg-[#F34B02] hover:bg-[#E04500] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                                >
                                    Apply Now
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
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Application Form — always shown on desktop, shown in Application tab on mobile */}
                    <div className={`${activeTab === "overview" ? "hidden lg:block" : ""} mt-10 lg:mt-0`} id="application-form">
                        <ApplicationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ApplicationForm() {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <form className="p-6 md:p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Personal Information Section */}
                <div className="space-y-5">
                    <h2 className="text-base font-semibold text-gray-900">
                        Personal Information
                    </h2>

                    {/* First Name & Middle Name (optional) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="middleName" className="block text-sm font-medium text-gray-900 mb-2">
                                Middle Name (optional)
                            </label>
                            <input
                                id="middleName"
                                type="text"
                                placeholder="Enter your middle name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Last Name & Date of Birth */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-900 mb-2">
                                Date of Birth
                            </label>
                            <div className="relative">
                                <input
                                    id="dateOfBirth"
                                    type="text"
                                    placeholder="dd/mm/yy"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                                />
                                <svg
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M16 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* State of Origin & State of Residence */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="stateOfOrigin" className="block text-sm font-medium text-gray-900 mb-2">
                                State of Origin
                            </label>
                            <div className="relative">
                                <select
                                    id="stateOfOrigin"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                                >
                                    <option>Select your state of origin</option>
                                </select>
                                <svg
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="stateOfResidence" className="block text-sm font-medium text-gray-900 mb-2">
                                State of Residence
                            </label>
                            <div className="relative">
                                <select
                                    id="stateOfResidence"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                                >
                                    <option>Select your state of Residence</option>
                                </select>
                                <svg
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-2">
                            Address
                        </label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Enter your full Address"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="space-y-5">
                    <h2 className="text-base font-semibold text-gray-900">
                        Contact Information
                    </h2>

                    {/* Email Address & Phone Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your Email address"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* LinkedIn Profile & Portfolio Link */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-900 mb-2">
                                LinkedIn Profile
                            </label>
                            <input
                                id="linkedin"
                                type="url"
                                placeholder="https://www.linkedin.com/yourprofile"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-900 mb-2">
                                Portfolio Link
                            </label>
                            <input
                                id="portfolio"
                                type="url"
                                placeholder="https://yourportfolioname.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#F8F8FB] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F34B02]/20 focus:border-[#F34B02] transition-all duration-200"
                            />
                        </div>
                    </div>
                </div>

                {/* Cover Letter Upload Section */}
                <div className="space-y-3">
                    <h2 className="text-base font-semibold text-gray-900">
                        Cover Letter Upload
                    </h2>
                    <p className="text-sm font-medium text-gray-900">
                        Upload your cover letter
                    </p>
                    <label
                        htmlFor="coverLetter"
                        className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-[#F34B02]/40 transition-colors duration-200 cursor-pointer bg-[#F34B02]/[0.02] block"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3">
                                <svg
                                    className="text-gray-400"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 17H15M12 3V14M12 14L8 10M12 14L16 10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 17V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-gray-900 mb-1">
                                Tap to upload doc
                            </p>
                            <p className="text-xs text-gray-500">
                                pdf (max 2mb)*
                            </p>
                        </div>
                        <input id="coverLetter" type="file" accept=".pdf,.doc,.docx" className="hidden" />
                    </label>
                </div>

                {/* Resume Upload Section */}
                <div className="space-y-3">
                    <h2 className="text-base font-semibold text-gray-900">
                        Resume Upload
                    </h2>
                    <p className="text-sm font-medium text-gray-900">
                        Upload your CV/Resume
                    </p>
                    <label
                        htmlFor="resume"
                        className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-[#F34B02]/40 transition-colors duration-200 cursor-pointer bg-[#F34B02]/[0.02] block"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3">
                                <svg
                                    className="text-gray-400"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 17H15M12 3V14M12 14L8 10M12 14L16 10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 17V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-gray-900 mb-1">
                                Tap to upload doc
                            </p>
                            <p className="text-xs text-gray-500">
                                pdf (max 2mb)*
                            </p>
                        </div>
                        <input id="resume" type="file" accept=".pdf,.doc,.docx" className="hidden" />
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    id="submit-application"
                    className="w-full bg-[#F34B02] hover:bg-[#E04500] text-white font-semibold text-base py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 13L9 17L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Submit Application
                </button>

                {/* Back Button */}
                <button
                    type="button"
                    className="w-full bg-white hover:bg-gray-50 text-[#F34B02] font-semibold text-base py-3.5 rounded-full border-2 border-[#F34B02] transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
                >
                    <svg
                        width="20"
                        height="20"
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
                    Back
                </button>
            </form>
        </div>
    )
}