import GrowWithUs from "@/features/components/GrowWithUs"
import CurrentOpenings from "@/features/components/CurrentOpenings"
import NewsLetter from "@/features/components/NewsLetter"
import CTA from "@/features/components/Cta"
export default function Careers() {
    return (
        <main className="min-h-screen bg-white">
            <GrowWithUs />
            <CurrentOpenings />
            {/* <NewsLetter /> */}
            <CTA />
        </main>
    )
}

