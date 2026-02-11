export default function IntroSection() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    {/* Left Column */}
                    <div>
                        <p className="text-[#F34B02] text-2xl md:text-3xl font-medium mb-4 uppercase tracking-wide">
                            A Diverse Portfolio of Technology Businesses
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        <p className="text-[#393939] leading-relaxed">
                            SmashTech Group operates a diverse portfolio of technology businesses across multiple industries, including finance, mobility, commerce, workforce management, logistics, and community platforms.
                        </p>
                    </div>

                    {/* Full Width Paragraph */}
                    <div className="md:col-span-2">
                        <p className="text-[#393939] leading-relaxed">
                            Each business is built to address specific market needs while benefiting from shared infrastructure, technical expertise, and governance standards across the group. This approach allows us to innovate across sectors, scale faster, and deliver consistent quality in every product we launch.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
