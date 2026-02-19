
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getJobs, getJobById, slugToJobId } from "@/services/jobs.service"
import JobDetailsClient from "./JobDetailsClient"

interface PageProps {
    params: Promise<{ slug: string }>
}

/**
 * Generate static params from the live API at build time.
 * Falls back to an empty array if the API is unavailable.
 */
export async function generateStaticParams() {
    try {
        const jobs = await getJobs()
        return jobs
            .filter((j) => j.is_active)
            .map((job) => {
                const titleSlug = job.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")
                return { slug: `${titleSlug}-${job.id}` }
            })
    } catch {
        return []
    }
}

/**
 * Generate SEO metadata for each job page
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const id = slugToJobId(slug)

    if (isNaN(id)) {
        return {
            title: "Job Not Found | Smash Technology",
            description: "The job you are looking for does not exist.",
        }
    }

    const job = await getJobById(id)

    if (!job) {
        return {
            title: "Job Not Found | Smash Technology",
            description: "The job you are looking for does not exist.",
        }
    }

    return {
        title: `${job.title} | Careers | Smash Technology`,
        description: job.description,
        openGraph: {
            title: `${job.title} — Apply Now`,
            description: job.description,
            type: "website",
        },
    }
}

export default async function JobDetailsPage({ params }: PageProps) {
    const { slug } = await params
    const id = slugToJobId(slug)

    if (isNaN(id)) notFound()

    const job = await getJobById(id)

    if (!job) notFound()

    return <JobDetailsClient job={job} />
}
