import Image from "next/image";
import { assets } from '../../../assets/assets'

export default function HeroLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-black opacity-90 z-10" />
        <Image
          src={assets.Hero_bg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navbar + Hero */}
      {children}
    </section>
  );
}
