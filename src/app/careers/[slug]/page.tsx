import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getJobBySlug, getAllJobSlugs } from "@/data/jobOpenings"
import JobDetailsClient from "./JobDetailsClient"

interface PageProps {
    params: Promise<{ slug: string }>
}

/**
 * Generate static params for all job slugs — enables static generation
 */
export async function generateStaticParams() {
    const slugs = getAllJobSlugs()
    return slugs.map((slug) => ({ slug }))
}

/**
 * Generate SEO metadata for each job page
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const job = getJobBySlug(slug)

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
    const job = getJobBySlug(slug)

    if (!job) {
        notFound()
    }

    return <JobDetailsClient job={job} />
}
