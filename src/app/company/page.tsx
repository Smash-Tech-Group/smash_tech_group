import LHero from "@/features/components/LHero"
import Corporate from "@/features/components/Corporate"
import CompanyImage from "../../../public/company.svg"
import MeetOurTeam from "@/features/components/MeetOurTeam"
export default function Company() {
  return (
    <main className="min-h-screen bg-[#F8F8FB] w-full py-16 px-6 lg:px-16">
        <LHero
            image={CompanyImage}
            title="Company" />
            <Corporate />
            <MeetOurTeam />
    </main>
  )
}