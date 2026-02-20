"use client"
import { useState } from "react"
import Image from "next/image"

const corporateDocuments = [
  {
    title: "Smash Technology",
    imagePath: "/cac.svg",
    description: "Official CAC incorporation certificates for our registered <br class='hidden lg:block' /> entities. <br class='hidden lg:block' />Each document confirms our legal registration and operational credibility.<br class='hidden lg:block' />The certificate currently in view belongs to <strong>Smash<br class='hidden lg:block' />Technology.</strong><br class='hidden lg:block' />All registrations are issued and verified by the Corporate<br class='hidden lg:block' />Affairs Commission."
  },
  {
    title: "Smash Technology SA",
    imagePath: "/logistic.svg",
    description: "Official incorporation certificates for our registered <br class='hidden lg:block' /> entities. <br class='hidden lg:block' />Each document confirms our legal registration and operational credibility.<br class='hidden lg:block' />The certificate currently in view belongs to <strong>Smash<br class='hidden lg:block' />Bookings Limited.</strong><br class='hidden lg:block' />All registrations are issued and verified by the Corporate<br class='hidden lg:block' />Affairs Commission."
  }
]

export default function Corporate() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex < corporateDocuments.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const currentDocument = corporateDocuments[currentIndex]

  return (
    <main className="bg-[#F8F8FB] w-full py-16 px-6 lg:px-16">
      <h1 className="text-center text-3xl font-semibold py-5">Our  <span className="text-[#F34B02]">Corporate</span> Documents</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10">
        <div className="flex-1 flex justify-center lg:justify-start">
          <Image src={currentDocument.imagePath} alt="Corporate" width={500} height={500} className="w-full max-w-[500px] h-auto" />
        </div>
        <div className="flex-1 w-full lg:max-w-xl">
          <h1 className="text-2xl font-semibold lg:mt-20 mb-5 text-center lg:text-left">{currentDocument.title}</h1>
          <p className="font-light text-base leading-[2.4rem] lg:text-xl  text-center lg:text-left" dangerouslySetInnerHTML={{ __html: currentDocument.description }} />
          <div className="flex justify-between items-center pt-8 lg:pt-10">
            <div className="text-[#F34B02] text-lg lg:text-xl font-medium">{currentIndex + 1} of {corporateDocuments.length}</div>
            <div className="flex gap-4">
              {currentIndex > 0 && (
                <button onClick={handlePrevious} className="text-[#F34B02] text-lg lg:text-xl cursor-pointer hover:opacity-80 transition-opacity">
                  &lt;&lt;Previous
                </button>
              )}
              {currentIndex < corporateDocuments.length - 1 && (
                <button onClick={handleNext} className="text-[#F34B02] text-lg lg:text-xl cursor-pointer hover:opacity-80 transition-opacity">
                  Next&gt;&gt;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}