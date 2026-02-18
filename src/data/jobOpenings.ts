import { assets } from "../../assets/assets"

export interface JobOpening {
    id: string
    slug: string
    title: string
    description: string
    fullDescription: {
        roleOverview: string
        keyResponsibilities: {
            heading: string
            items: string[]
        }[]
        otherRequirements: string[]
        requirements: string[]
    }
    location: {
        country: string
        flagSrc: typeof assets.Nigeria | typeof assets.southAfrica
    }
    workType: string
    employmentType: string
}

/**
 * Helper to generate a URL-friendly slug from a job title
 */
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
}

export const jobOpenings: JobOpening[] = [
    {
        id: "1",
        slug: "freelance-marketer",
        title: "Freelance Marketer",
        description:
            "Role Overview We are in search of freelance marketers across all locations to help drive our products and services to the public. This is a flexible, commission-based opportunity for self-motivated individuals who are passionate about sales, marketing, and building customer relationships. As a freelance marketer, your role is to convert clients into sales; for every first payment, you get a 5% commission. This role is fully remote, nationwide.",
        fullDescription: {
            roleOverview:
                "Role Overview We are in search of freelance marketers across all locations to help drive our products and services to the public. This is a flexible, commission-based opportunity for self-motivated individuals who are passionate about sales, marketing, and building customer relationships. As a freelance marketer, your role is to convert clients into sales; for every first payment, you get a 5% commission. This role is fully remote, nationwide.",
            keyResponsibilities: [
                {
                    heading: "Education & Experience",
                    items: [
                        "Minimum of OND / HND / Bachelor's degree in Business Administration, Communications, Marketing, or a related field.",
                        "3–8 years of proven experience in customer service, client relations, or a related role.",
                    ],
                },
                {
                    heading: "Skills & Competencies",
                    items: [
                        "Excellent verbal and written communication skills.",
                        "Strong interpersonal skills with the ability to build positive relationships.",
                        "Problem-solving and conflict resolution skills.",
                        "Ability to remain calm and professional under pressure.",
                        "Proficiency in Microsoft Office (Word, Excel, Outlook) and familiarity with CRM software.",
                        "Strong organizational and multitasking ability.",
                        "Customer-focused mindset and keen attention to detail.",
                    ],
                },
            ],
            otherRequirements: [
                "Willingness to work flexible schedules (including remote weekends if required).",
                "High level of integrity and professionalism.",
                "Team-oriented with a proactive attitude.",
            ],
            requirements: [
                "SSCE, OND, HND, BSC.",
                "Strong communication and interpersonal skills.",
                "Self-motivated, target-driven, and results-oriented.",
                "Prior marketing or sales experience is an added advantage (not compulsory).",
                "Ability to work independently with minimal supervision.",
                "Open to individuals across all locations.",
            ],
        },
        location: {
            country: "Nigeria",
            flagSrc: assets.southAfrica,
        },
        workType: "100% Onsite",
        employmentType: "Full Time",
    },
    {
        id: "2",
        slug: "customer-sales-officer",
        title: "Customer Sales Officer",
        description:
            "The Customer Sales Officer is a full-time, office-based role focused on achieving measurable sales results through effective client engagement, communication, and conversion. This role does not require outdoor marketing; rather, it requires a candidate with strong persuasive and communication skills who can convert generated leads into paying clients through follow-up, negotiation, and excellent service delivery. This is a strictly result-driven position designed for individuals who are motivated by performance, accountability, and growth...",
        fullDescription: {
            roleOverview:
                "The Customer Sales Officer is a full-time, office-based role focused on achieving measurable sales results through effective client engagement, communication, and conversion. This role does not require outdoor marketing; rather, it requires a candidate with strong persuasive and communication skills who can convert generated leads into paying clients through follow-up, negotiation, and excellent service delivery. This is a strictly result-driven position designed for individuals who are motivated by performance, accountability, and growth.",
            keyResponsibilities: [
                {
                    heading: "Education & Experience",
                    items: [
                        "Minimum of OND / HND / Bachelor's degree in Business Administration, Communications, Marketing, or a related field.",
                        "2–5 years of proven experience in sales, customer engagement, or a related role.",
                    ],
                },
                {
                    heading: "Skills & Competencies",
                    items: [
                        "Excellent verbal and written communication skills.",
                        "Strong persuasive and negotiation abilities.",
                        "Problem-solving and conflict resolution skills.",
                        "Ability to remain calm and professional under pressure.",
                        "Proficiency in Microsoft Office (Word, Excel, Outlook) and familiarity with CRM software.",
                        "Strong organizational and multitasking ability.",
                        "Customer-focused mindset and keen attention to detail.",
                    ],
                },
            ],
            otherRequirements: [
                "Willingness to work flexible schedules (including weekends if required).",
                "High level of integrity and professionalism.",
                "Team-oriented with a proactive attitude.",
            ],
            requirements: [
                "SSCE, OND, HND, BSC.",
                "Strong communication and interpersonal skills.",
                "Self-motivated, target-driven, and results-oriented.",
                "Prior sales or customer engagement experience is required.",
                "Ability to work independently with minimal supervision.",
                "Must be available for on-site work.",
            ],
        },
        location: {
            country: "Nigeria",
            flagSrc: assets.Nigeria,
        },
        workType: "100% Onsite",
        employmentType: "Full Time",
    },
]

/**
 * Find a job by its slug
 */
export function getJobBySlug(slug: string): JobOpening | undefined {
    return jobOpenings.find((job) => job.slug === slug)
}

/**
 * Get all valid slugs (useful for static generation)
 */
export function getAllJobSlugs(): string[] {
    return jobOpenings.map((job) => job.slug)
}
