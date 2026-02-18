import Image, { StaticImageData } from "next/image";

interface LHeroProps {
  image: StaticImageData | string;
  title: string;
}

export default function LHero({ image, title }: LHeroProps) {
  return (
    <section className="w-full bg-[#F8F8FB] pt-20 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Mobile: Stacked layout, Tablet+: Overlapping layout */}
        <div className="relative sm:rounded-3xl sm:overflow-hidden">

          {/* Full image with responsive heights */}
          <div className="relative h-[300px] sm:h-[280px] md:h-[350px] lg:h-[420px] rounded-b-none sm:rounded-3xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center sm:object-right"
              priority
            />
          </div>

          {/* White cut-out block - responsive positioning and sizing */}
          <div className="
            bg-white shadow-lg
            /* Mobile: Directly below image */
            sm:absolute
            rounded-b-2xl sm:rounded-3xl
            px-6 py-5
            sm:px-8 sm:py-6
            md:px-10 md:py-8
            lg:px-12 lg:py-10
            /* Tablet+: Positioned at bottom-left with cut-out effect */
            sm:bottom-0 sm:left-0
            sm:w-[65%] md:w-[67%] lg:w-[68%] xl:w-[77%]
            sm:shadow-xl
          ">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-[#FF6B35]">
              {title}
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}