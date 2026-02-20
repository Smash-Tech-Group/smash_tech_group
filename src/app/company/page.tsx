import LHero from "@/features/components/LHero"
import Corporate from "@/features/components/Corporate"
import CompanyImage from "../../../public/company.png"
import MeetOurTeam from "@/features/components/MeetOurTeam"
export default function Company() {
  return (
    <main className="min-h-screen bg-white">
        <LHero
            image={CompanyImage}
            title="Company" />
            <Corporate />
            {/* <MeetOurTeam /> */}
    </main>
  )
}