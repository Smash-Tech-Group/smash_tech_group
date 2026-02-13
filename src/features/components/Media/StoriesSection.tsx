import Image from "next/image"
import { assets } from "../../../../assets/assets"
assets

export default function StoriesSection() {
  return (
    <section className="relative bg-[#F8F8FB] py-24 px-6 overflow-hidden">
      <div className="max-w-screen mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-20 leading-tight">
          <span className="text-[#F34B02]">Stories</span>
          <span className="text-[#393838]">, Insights & </span>
          <span className="text-[#F34B02]">Impact</span>
          <span className="text-[#393838]"> from</span>
          <br />
          <span className="text-[#F34B02]">SmashTech</span>
          <span className="text-[#393838]"> Group</span>
        </h2>

        {/* Background Image Container */}
        <div className="relative w-full h-[520px] md:h-[620px] lg:h-[680px] rounded-3xl overflow-hidden">

          {/* Background Image */}
          <Image
            src={assets.stories_bg} // 👉 put your combined image here
            alt="Stories collage"
            fill
            priority
            className="object-contain"
          />

          {/* Bottom Left Text */}
          <div className="absolute bottom-8 left-8 text-[#000000]">
            <u><i><p className="text-xl font-semibold">Stay Updated with <br /> SmashTech</p></i></u>
          </div>

          {/* Top Right Text */}
          <div className="absolute top-8 right-8 text-right text-[#000000]">
            <u><i><p className="text-xl font-semibold">Insights <br /> Tech Innovation</p></i></u>
          </div>

        </div>
      </div>
    </section>
  )
}
