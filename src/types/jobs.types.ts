/**
 * Jobs API Types
 * Matches the shape returned by GET /jobs
 */

export interface Job {
    id: number
    title: string
    description: string
    requirements: string
    responsibility: string
    location: string
    job_type: string
    salary: number | null
    salary_range: string | null
    application_deadline: string
    is_active: boolean
    created_at: string
    updated_at: string
}

export interface JobsApiResponse {
    jobs: Job[]
}

/**
 * Response returned by POST /jobs/:id/apply on success
 */
export interface JobApplication {
    id: number
    job_id: number
    first_name: string
    middle_name: string
    last_name: string
    state_of_origin: string
    address: string
    email: string
    phone: string
    portfolio: string
    social_link: string
    state_of_resident: string
    cover_letter: string
    cv_filename: string
    applied_at: string
    status: string
}
