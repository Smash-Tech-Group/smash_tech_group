export default function CommitmentSection() {
  const commitments = [
    {
      id: 1,
      title: "Commitment to Sustainability",
      description:
        "We integrate sustainability into how we design and operate our platforms. We adopt eco-friendly practices, in building digital solutions, we aim to reduce environmental impact while creating long-term value for people and businesses. Our goal is a future where technology and sustainability work together seamlessly.",
    },
    {
      id: 2,
      title: "Commitment to Quality",
      description:
        "Quality is embedded in every stage of our development process. Through rigorous testing, continuous improvement, and adherence to globally recognised frameworks such as ISO 9001, CMMI, NIST, and ISO 27001, we ensure our products are secure, reliable, and built to the highest standards.",
    },
    {
      id: 3,
      title: "Exceptional Customer Service",
      description:
        "We believe strong relationships drive successful outcomes. Our dedicated support team responds quickly, listens carefully, and works closely with clients to understand their unique challenges. This allows us to deliver tailored solutions that create real impact and long-term value.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-16 bg-[#F8F8FB]">
      <div className="max-w-[100rem] mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <p
            className="text-[#F34B02] text-base md:text-lg lg:text-xl font-medium mb-3 md:mb-4 tracking-[0.04em] uppercase"
            style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
          >
            Our Commitment to Excellence
          </p>
          <h2
            className="text-[#393838] text-2xl md:text-3xl lg:text-5xl font-medium leading-tight md:leading-snug lg:leading-[2.75rem] max-w-4xl"
            style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
          >
            Standards that shape our technology and partnerships.
          </h2>
        </div>

        {/* Commitment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {commitments.map((commitment) => (
            <div
              key={commitment.id}
              className="border border-[#D2D2D2] rounded-xl md:rounded-2xl lg:rounded-3xl px-6 md:px-8 lg:px-10 py-8 md:py-10 lg:py-[3.75rem] hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              {/* Title */}
              <h3
                className="text-[#393838] text-xl md:text-2xl lg:text-[1.75rem] font-bold leading-tight mb-4 md:mb-5 lg:mb-6"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                {commitment.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#393838] text-base md:text-lg lg:text-2xl font-light leading-relaxed md:leading-7 lg:leading-8"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
