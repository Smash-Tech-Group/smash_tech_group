"use client"

import { useState, useRef, type ChangeEvent, type FormEvent, type RefObject } from "react"
import GrowWithUs from "@/features/components/GrowWithUs"
import type { Job } from "@/types/jobs.types"
import { applyToJob, type ApplyFormData } from "@/services/jobs.service"

interface JobDetailsClientProps {
    job: Job
}

// ─── Main page component ──────────────────────────────────────────────────────

export default function JobDetailsClient({ job }: JobDetailsClientProps) {
    const [activeTab, setActiveTab] = useState<"overview" | "application">("overview")

    const titleWords = job.title.split(" ")
    const lastWord = titleWords.pop()
    const firstWords = titleWords.join(" ")

    const deadline = new Date(job.application_deadline).toLocaleDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    const requirementLines = job.requirements
        .split(/\n|•/)
        .map((s) => s.trim())
        .filter(Boolean)

    const responsibilityLines = job.responsibility
        .split(/\n|•/)
        .map((s) => s.trim())
        .filter(Boolean)

    return (
        <div className="w-full bg-[#F8F8FB] min-h-screen">
            <GrowWithUs />
            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16">

                {/* Tab Switcher — mobile only */}
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

                {/* Two-column on desktop, tab-based on mobile */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">

                    {/* ── Job Details Column ── */}
                    <div className={`${activeTab === "application" ? "hidden lg:block" : ""}`}>
                        <h1 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold text-gray-900 mb-6 md:mb-4">
                            {firstWords}{" "}
                            <span className="text-[#F34B02]">{lastWord}</span>
                        </h1>

                        <div className="space-y-6">
                            {/* Description */}
                            <div>
                                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                    Job Description:
                                </h2>
                                <p className="text-[#393838] text-sm md:text-lg font-normal leading-relaxed lg:leading-7">
                                    {job.description}
                                </p>
                            </div>

                            {/* Responsibilities */}
                            {responsibilityLines.length > 0 && (
                                <div>
                                    <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">
                                        Key Responsibilities:
                                    </h2>
                                    <ul className="space-y-1.5 ml-1">
                                        {responsibilityLines.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm md:text-base leading-relaxed lg:leading-7 flex items-start gap-2">
                                                <span className="text-gray-900 flex-shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Requirements */}
                            {requirementLines.length > 0 && (
                                <div>
                                    <h2 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                        Requirements:
                                    </h2>
                                    <ul className="space-y-1.5 ml-1">
                                        {requirementLines.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm md:text-[15px] leading-relaxed lg:leading-7 flex items-start gap-2">
                                                <span className="text-gray-900 mt-1.5 flex-shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tag Pills */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                <TagPill icon="location">{job.location}</TagPill>
                                <TagPill icon="clock">{job.job_type}</TagPill>
                                {job.salary_range && <TagPill icon="salary">{job.salary_range}</TagPill>}
                                <TagPill icon="calendar">Deadline: {deadline}</TagPill>
                            </div>
                        </div>

                        {/* Mobile CTA */}
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
                                    <ArrowUpRight />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Application Form Column ── */}
                    <div
                        className={`${activeTab === "overview" ? "hidden lg:block" : ""} mt-10 lg:mt-0`}
                        id="application-form"
                    >
                        <ApplicationForm jobId={job.id} jobTitle={job.title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

// ─── Application Form ─────────────────────────────────────────────────────────

const EMPTY_FORM: ApplyFormData = {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    state_of_origin: "",
    state_of_resident: "",
    portfolio: "",
    social_link: "",
    cv_file: null,
    cover_letter_file: null,
}

type FormErrors = Partial<Record<keyof ApplyFormData, string>>

function validate(data: ApplyFormData): FormErrors {
    const errors: FormErrors = {}
    if (!data.first_name.trim()) errors.first_name = "First name is required"
    if (!data.last_name.trim()) errors.last_name = "Last name is required"
    if (!data.email.trim()) {
        errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Enter a valid email address"
    }
    if (!data.phone.trim()) errors.phone = "Phone number is required"
    if (!data.address.trim()) errors.address = "Address is required"
    if (!data.state_of_origin.trim()) errors.state_of_origin = "State of origin is required"
    if (!data.state_of_resident.trim()) errors.state_of_resident = "State of residence is required"
    if (!data.cv_file) errors.cv_file = "Please upload your CV / Resume"
    return errors
}

function ApplicationForm({ jobId, jobTitle }: { jobId: number; jobTitle: string }) {
    const [form, setForm] = useState<ApplyFormData>(EMPTY_FORM)
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [serverError, setServerError] = useState("")

    const cvRef = useRef<HTMLInputElement>(null!)
    const clRef = useRef<HTMLInputElement>(null!)

    // ── Field helpers ──────────────────────────────────────────────────────────

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof ApplyFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    function handleFile(field: "cv_file" | "cover_letter_file", e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null
        setForm((prev) => ({ ...prev, [field]: file }))
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    function removeFile(field: "cv_file" | "cover_letter_file") {
        setForm((prev) => ({ ...prev, [field]: null }))
        if (field === "cv_file" && cvRef.current) cvRef.current.value = ""
        if (field === "cover_letter_file" && clRef.current) clRef.current.value = ""
    }

    // ── Submit ─────────────────────────────────────────────────────────────────

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const validationErrors = validate(form)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            // Scroll to first error
            const firstErrorEl = document.querySelector("[data-error]")
            firstErrorEl?.scrollIntoView({ behavior: "smooth", block: "center" })
            return
        }

        setStatus("submitting")
        setServerError("")

        try {
            await applyToJob(jobId, form)
            setStatus("success")
            setForm(EMPTY_FORM)
            if (cvRef.current) cvRef.current.value = ""
            if (clRef.current) clRef.current.value = ""
        } catch (err) {
            setStatus("error")
            setServerError(
                err instanceof Error ? err.message : "Something went wrong. Please try again."
            )
        }
    }

    // ── Success screen ─────────────────────────────────────────────────────────

    if (status === "success") {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-8 md:p-10 flex flex-col items-center text-center gap-5">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-green-500">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Application Submitted!</h2>
                <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                    Thank you for applying for the <span className="font-semibold text-gray-800">{jobTitle}</span> position.
                    We&apos;ll review your application and get back to you soon.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 inline-flex items-center gap-2 bg-[#F34B02] hover:bg-[#E04500] text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                    Submit Another Application
                </button>
            </div>
        )
    }

    // ── Form ───────────────────────────────────────────────────────────────────

    const isSubmitting = status === "submitting"

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <form className="p-6 md:p-8 space-y-8" onSubmit={handleSubmit} noValidate>

                {/* ── Personal Information ── */}
                <fieldset className="space-y-5">
                    <legend className="text-base font-semibold text-gray-900">Personal Information</legend>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="First Name" required error={errors.first_name}>
                            <input
                                id="firstName"
                                name="first_name"
                                type="text"
                                placeholder="Enter your first name"
                                value={form.first_name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls(!!errors.first_name)}
                            />
                        </Field>
                        <Field label="Middle Name" hint="optional" error={errors.middle_name}>
                            <input
                                id="middleName"
                                name="middle_name"
                                type="text"
                                placeholder="Enter your middle name"
                                value={form.middle_name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls(false)}
                            />
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Last Name" required error={errors.last_name}>
                            <input
                                id="lastName"
                                name="last_name"
                                type="text"
                                placeholder="Enter your last name"
                                value={form.last_name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls(!!errors.last_name)}
                            />
                        </Field>
                        <Field label="Date of Birth" hint="optional">
                            <div className="relative">
                                <input
                                    id="dateOfBirth"
                                    type="date"
                                    disabled={isSubmitting}
                                    className={inputCls(false) + " pr-10"}
                                />
                                <CalendarIcon />
                            </div>
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="State of Origin" required error={errors.state_of_origin}>
                            <div className="relative">
                                <input
                                    id="stateOfOrigin"
                                    name="state_of_origin"
                                    type="text"
                                    placeholder="e.g. Lagos"
                                    value={form.state_of_origin}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className={inputCls(!!errors.state_of_origin)}
                                />
                            </div>
                        </Field>
                        <Field label="State of Residence" required error={errors.state_of_resident}>
                            <div className="relative">
                                <input
                                    id="stateOfResidence"
                                    name="state_of_resident"
                                    type="text"
                                    placeholder="e.g. Abuja"
                                    value={form.state_of_resident}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className={inputCls(!!errors.state_of_resident)}
                                />
                            </div>
                        </Field>
                    </div>

                    <Field label="Address" required error={errors.address}>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            placeholder="Enter your full address"
                            value={form.address}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className={inputCls(!!errors.address)}
                        />
                    </Field>
                </fieldset>

                {/* ── Contact Information ── */}
                <fieldset className="space-y-5">
                    <legend className="text-base font-semibold text-gray-900">Contact Information</legend>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Email Address" required error={errors.email}>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                value={form.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls(!!errors.email)}
                            />
                        </Field>
                        <Field label="Phone Number" required error={errors.phone}>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={form.phone}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls(!!errors.phone)}
                            />
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="LinkedIn / Social Profile" hint="optional">
                            <input
                                id="socialLink"
                                name="social_link"
                                type="url"
                                placeholder="https://linkedin.com/in/yourprofile"
                                value={form.social_link}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls(false)}
                            />
                        </Field>
                        <Field label="Portfolio Link" hint="optional">
                            <input
                                id="portfolio"
                                name="portfolio"
                                type="url"
                                placeholder="https://yourportfolio.com"
                                value={form.portfolio}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls(false)}
                            />
                        </Field>
                    </div>
                </fieldset>

                {/* ── Cover Letter Upload ── */}
                <div className="space-y-3">
                    <h2 className="text-base font-semibold text-gray-900">Cover Letter Upload</h2>
                    <p className="text-sm font-medium text-gray-600">Upload your cover letter <span className="text-gray-400">(optional)</span></p>
                    <FileUploadZone
                        id="coverLetter"
                        file={form.cover_letter_file}
                        inputRef={clRef}
                        disabled={isSubmitting}
                        onChange={(e) => handleFile("cover_letter_file", e)}
                        onRemove={() => removeFile("cover_letter_file")}
                    />
                </div>

                {/* ── CV / Resume Upload ── */}
                <div className="space-y-3">
                    <h2 className="text-base font-semibold text-gray-900">Resume Upload <span className="text-[#F34B02]">*</span></h2>
                    <p className="text-sm font-medium text-gray-600">Upload your CV / Resume</p>
                    <FileUploadZone
                        id="resume"
                        file={form.cv_file}
                        inputRef={cvRef}
                        disabled={isSubmitting}
                        error={errors.cv_file}
                        onChange={(e) => handleFile("cv_file", e)}
                        onRemove={() => removeFile("cv_file")}
                    />
                    {errors.cv_file && (
                        <p className="text-xs text-red-500 flex items-center gap-1" data-error>
                            <ErrorDot /> {errors.cv_file}
                        </p>
                    )}
                </div>

                {/* ── Server error banner ── */}
                {status === "error" && serverError && (
                    <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-red-500 flex-shrink-0 mt-0.5">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <p className="text-sm text-red-600">{serverError}</p>
                    </div>
                )}

                {/* ── Submit ── */}
                <button
                    type="submit"
                    id="submit-application"
                    disabled={isSubmitting}
                    className="w-full bg-[#F34B02] hover:bg-[#E04500] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Spinner />
                            Submitting…
                        </>
                    ) : (
                        <>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Submit Application
                        </>
                    )}
                </button>

                {/* ── Back ── */}
                <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => window.history.back()}
                    className="w-full bg-white hover:bg-gray-50 disabled:opacity-60 text-[#F34B02] font-semibold text-base py-3.5 rounded-full border-2 border-[#F34B02] transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </button>
            </form>
        </div>
    )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function inputCls(hasError: boolean) {
    return [
        "w-full px-4 py-3 rounded-lg border bg-[#F8F8FB] text-sm text-gray-900",
        "placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200",
        hasError
            ? "border-red-400 focus:ring-red-200 focus:border-red-400"
            : "border-gray-200 focus:ring-[#F34B02]/20 focus:border-[#F34B02]",
    ].join(" ")
}

function Field({
    label,
    hint,
    required,
    error,
    children,
}: {
    label: string
    hint?: string
    required?: boolean
    error?: string
    children: React.ReactNode
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
                {label}
                {required && <span className="text-[#F34B02] ml-0.5">*</span>}
                {hint && <span className="text-gray-400 font-normal ml-1">({hint})</span>}
            </label>
            {children}
            {error && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" data-error>
                    <ErrorDot /> {error}
                </p>
            )}
        </div>
    )
}

function FileUploadZone({
    id,
    file,
    inputRef,
    disabled,
    error,
    onChange,
    onRemove,
}: {
    id: string
    file: File | null
    inputRef: RefObject<HTMLInputElement>
    disabled: boolean
    error?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onRemove: () => void
}) {
    if (file) {
        return (
            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-[#F34B02]/30 bg-[#F34B02]/[0.03]">
                <div className="flex items-center gap-2 min-w-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#F34B02] flex-shrink-0">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-gray-700 truncate">{file.name}</span>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                </div>
                <button
                    type="button"
                    onClick={onRemove}
                    disabled={disabled}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove file"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        )
    }

    return (
        <label
            htmlFor={id}
            className={[
                "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer block transition-colors duration-200",
                error
                    ? "border-red-300 bg-red-50/50"
                    : "border-gray-200 hover:border-[#F34B02]/40 bg-[#F34B02]/[0.02]",
                disabled ? "opacity-60 cursor-not-allowed" : "",
            ].join(" ")}
        >
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                        <path d="M9 17H15M12 3V14M12 14L8 10M12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 17V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Tap to upload doc</p>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 2 MB)</p>
            </div>
            <input
                id={id}
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                disabled={disabled}
                onChange={onChange}
            />
        </label>
    )
}

// ─── Icon helpers ─────────────────────────────────────────────────────────────

function TagPill({ icon, children }: { icon: "location" | "clock" | "salary" | "calendar"; children: React.ReactNode }) {
    const icons = {
        location: (
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
        ),
        clock: (
            <>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),
        salary: (
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ),
        calendar: (
            <>
                <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                <path d="M8 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
        ),
    }
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-[#F8F8FB]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-500">{icons[icon]}</svg>
            <span className="text-sm text-gray-700">{children}</span>
        </div>
    )
}

function ArrowUpRight() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function CalendarIcon() {
    return (
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
            <path d="M8 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

function Spinner() {
    return (
        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
            <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    )
}

function ErrorDot() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 4v2.5M6 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}