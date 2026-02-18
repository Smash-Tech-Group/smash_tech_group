/**
 * Jobs Service
 * Handles all job-related API calls against the backend.
 *
 * Base URL is controlled via NEXT_PUBLIC_API_URL environment variable.
 * Defaults to http://localhost:8000 for local development.
 */

import type { Job, JobApplication } from "@/types/jobs.types"

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ApplyFormData {
    first_name: string
    middle_name: string
    last_name: string
    email: string
    phone: string
    address: string
    state_of_origin: string
    state_of_resident: string
    portfolio: string
    social_link: string
    cv_file: File | null
    cover_letter_file: File | null
}

// ─── GET /jobs ────────────────────────────────────────────────────────────────

/**
 * Fetches all job openings from the backend.
 */
export async function getJobs(): Promise<Job[]> {
    const res = await fetch(`${API_BASE_URL}/jobs`, {
        headers: { accept: "application/json" },
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        throw new Error(`Failed to fetch jobs: ${res.status} ${res.statusText}`)
    }

    return res.json() as Promise<Job[]>
}

// ─── GET /jobs/:id ────────────────────────────────────────────────────────────

/**
 * Fetches a single job by its numeric ID.
 * Returns null if the job is not found (404).
 */
export async function getJobById(id: number): Promise<Job | null> {
    const res = await fetch(`${API_BASE_URL}/jobs/${id}`, {
        headers: { accept: "application/json" },
        next: { revalidate: 60 },
    })

    if (res.status === 404) return null

    if (!res.ok) {
        throw new Error(`Failed to fetch job ${id}: ${res.status} ${res.statusText}`)
    }

    return res.json() as Promise<Job>
}

// ─── POST /jobs/:id/apply ─────────────────────────────────────────────────────

/**
 * Submits a job application as multipart/form-data.
 * Do NOT set Content-Type manually — the browser adds the correct boundary.
 */
export async function applyToJob(
    jobId: number,
    data: ApplyFormData
): Promise<JobApplication> {
    const form = new FormData()
    form.append("first_name", data.first_name)
    form.append("middle_name", data.middle_name)
    form.append("last_name", data.last_name)
    form.append("email", data.email)
    form.append("phone", data.phone)
    form.append("address", data.address)
    form.append("state_of_origin", data.state_of_origin)
    form.append("state_of_resident", data.state_of_resident)
    form.append("portfolio", data.portfolio)
    form.append("social_link", data.social_link)
    if (data.cv_file) form.append("cv_file", data.cv_file)
    if (data.cover_letter_file) form.append("cover_letter_file", data.cover_letter_file)

    const res = await fetch(`${API_BASE_URL}/jobs/${jobId}/apply`, {
        method: "POST",
        headers: { accept: "application/json" },
        body: form,
    })

    if (!res.ok) {
        const errorText = await res.text().catch(() => res.statusText)
        throw new Error(errorText || `Failed to submit application: ${res.status}`)
    }

    return res.json() as Promise<JobApplication>
}

// ─── Slug helpers ─────────────────────────────────────────────────────────────

/**
 * Derive a URL-friendly slug from a job title + id.
 * e.g. "Frontend Developer" + 1  →  "frontend-developer-1"
 */
export function jobToSlug(job: Pick<Job, "id" | "title">): string {
    const titleSlug = job.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    return `${titleSlug}-${job.id}`
}

/**
 * Parse the numeric job ID from a slug produced by jobToSlug.
 * e.g. "frontend-developer-1"  →  1
 * Returns NaN if the slug doesn't contain a valid trailing ID.
 */
export function slugToJobId(slug: string): number {
    const parts = slug.split("-")
    return parseInt(parts[parts.length - 1], 10)
}
