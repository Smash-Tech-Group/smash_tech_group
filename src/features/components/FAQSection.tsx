export default function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: "What does SmashTech Group do?",
      answer:
        "SmashTech Group is a technology company that builds, operates, and supports digital products across multiple industries, including finance, mobility, workforce management, digital services, and community platforms.",
    },
    {
      id: 2,
      question: "Is SmashTech Group a product company or a service company?",
      answer:
        "We are a product-led technology group. While we offer consulting and development services, our core focus is building scalable platforms and products that serve businesses and everyday users.",
    },
    {
      id: 3,
      question: "Who does SmashTech Group work with?",
      answer:
        "We work with startups, growing businesses, enterprises, and strategic partners across regions. Our platforms support both consumer-facing and enterprise-level use cases.",
    },
    {
      id: 4,
      question: "Where does SmashTech Group operate?",
      answer:
        "SmashTech Group is Africa-rooted and globally focused. Our products and services extend across multiple markets, serving users and organisations in different countries and regions.",
    },
    {
      id: 5,
      question: "How can I partner with or work with SmashTech Group?",
      answer:
        "SmashTech Group is a technology company that builds, operates, and supports digital products across multiple industries, including finance, mobility, workforce management, digital services, and community platforms.",
    },
    {
      id: 6,
      question: "Does SmashTech Group build custom solutions for businesses?",
      answer:
        "Yes. In addition to our products, we design and develop custom digital solutions tailored to business needs, including enterprise systems, automation, and cloud-based platforms.",
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
            Frequently Asked Questions
          </p>
          <h2
            className="text-[#393838] text-2xl md:text-3xl lg:text-5xl font-medium leading-tight md:leading-snug lg:leading-[2.75rem] max-w-4xl"
            style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
          >
            Have Questions? We've Got Answers
          </h2>
        </div>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-transparent hover:bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-none hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              {/* Question Box */}
              <div className="bg-[#FBF3F0] rounded-lg p-4 md:p-5 lg:p-6 mb-4 md:mb-5 lg:mb-6 min-h-[10rem] md:min-h-[11rem] lg:min-h-[12rem] flex items-center">
                <h3
                  className="text-[#393838] text-lg md:text-xl lg:text-[2rem] font-bold leading-relaxed tracking-[0.04em]"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                >
                  {faq.question}
                </h3>
              </div>

              {/* Answer */}
              <p
                className="text-[#393838] text-sm md:text-base lg:text-xl font-light leading-relaxed tracking-[0.04em]"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
