import Image from "next/image";
import { assets } from "../../../assets/assets";

export default function CEOSection() {
  return (
    <section className="relative w-full bg-[#FEF6F2] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-16 overflow-hidden">
      {/* Decorative Orange Curve - Top Left (LARGE) */}
      <div className="absolute top-0 left-0 w-48 md:w-64 lg:w-[50rem] h-48 md:h-64 lg:h-[50rem] -translate-x-1/4 -translate-y-1/4 pointer-events-none hidden md:block">
        <Image
          src={assets.ceo_curve_top_left || "/top-left.png"}
          alt="Decorative curve"
          fill
          sizes="(max-width: 768px) 256px, (max-width: 1024px) 256px, 800px"
          className="object-contain"
        />
      </div>

      {/* Decorative Orange Curve - Bottom Right (SMALL) */}
      <div className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 translate-x-1/4 translate-y-1/4 pointer-events-none hidden md:block">
        <Image
          src={assets.ceo_curve_bottom_right || "/bottom-right.png"}
          alt="Decorative curve"
          fill
          sizes="(max-width: 768px) 256px, (max-width: 1024px) 256px, 320px"
          className="object-contain"
        />
      </div>

      <div className="relative max-w-[100rem] mx-auto">
        {/* Desktop Layout Only */}
        <div className="hidden lg:flex relative items-center justify-center lg:justify-start min-h-[40rem]">
          {/* CEO Image - Left Side (Reduced size) */}
          <div className="relative w-[20rem] lg:w-[30rem] h-[16rem] lg:h-[25rem] rounded-xl lg:rounded-3xl overflow-hidden shadow-lg z-10 lg:-left-14 xl:w-[37rem] xl:h-[25rem] xl:-left-[1rem]">
            <Image
              src={assets.ceo_image || "/ceo-paul.png"}
              alt="Paul Eigbefoh - CEO Smash Technology"
              fill
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 320px, 384px"
              className="object-cover"
              priority
            />
          </div>

          {/* White Card - Right Side (Overlapping - Reduced size) */}
          <div className="absolute left-[10rem] lg:left-[27rem] top-1/2 -translate-y-1/2 w-[85%] md:w-[65%] lg:w-[32rem] xl:w-[45rem] bg-white rounded-xl lg:rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl z-20 xl:left-[38rem]">
            <h2
              className="text-[#393838] text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-tight mb-4 lg:mb-6"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              Paul Eigbefoh
            </h2>

            <p
              className="text-[#393838] text-lg md:text-xl lg:text-2xl font-medium mb-6 lg:mb-8 pb-6 lg:pb-8 border-b border-gray-300 text-bold"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              Chief Executive Officer Smash Technology
            </p>

            <p
              className="text-[#393838] text-base md:text-lg lg:text-xl font-light leading-relaxed md:leading-[1.5] lg:leading-[1.6]"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              Paul Eigbefoh is the visionary CEO of Smash Technology, a
              trailblazing company at the forefront of innovation in e-commerce,
              transport, travels, real estate, food delivery, and investment
              solutions. With a passion for technology and a keen eye for
              transformative opportunities, Paul has spearheaded the development
              of user-centric platforms that redefine convenience and
              connectivity. Under his leadership, Smash Technology has grown
              into a dynamic force in the tech industry, driven by a commitment
              to sustainability, innovation, and empowering individuals and
              businesses worldwide.
            </p>
          </div>
        </div>

        {/* Mobile and Tablet Layout - Stacked */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* CEO Image */}
          <div className="relative w-full h-[20rem] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={assets.ceo_image || "/ceo-paul.png"}
              alt="Paul Eigbefoh - CEO Smash Technology"
              fill
              sizes="(max-width: 768px) calc(100vw - 2rem), 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* White Card */}
          <div className="bg-white rounded-xl p-6 shadow-xl">
            <h2
              className="text-[#393838] text-2xl font-medium leading-tight mb-3"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              Paul Eigbefoh
            </h2>

            <p
              className="text-[#393838] text-lg font-medium mb-4 pb-4 border-b border-gray-300"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif text-bold" }}
            >
              Chief Executive Officer Smash Technology
            </p>

            <p
              className="text-[#393838] text-base font-light leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              Paul Eigbefoh is the visionary CEO of Smash Technology, a
              trailblazing company at the forefront of innovation in e-commerce,
              transport, travels, real estate, food delivery, and investment
              solutions. With a passion for technology and a keen eye for
              transformative opportunities, Paul has spearheaded the development
              of user-centric platforms that redefine convenience and
              connectivity. Under his leadership, Smash Technology has grown
              into a dynamic force in the tech industry, driven by a commitment
              to sustainability, innovation, and empowering individuals and
              businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}