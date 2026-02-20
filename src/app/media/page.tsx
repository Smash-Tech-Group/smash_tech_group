import Navbar from '@/features/components/Navbar';
import Cta from '@/features/components/Media/Cta';
import Blog from '@/features/components/Blog';
import StoriesSection from '@/features/components/Media/StoriesSection';
import OurGallery from '@/features/components/Media/OurGallery';
import LHero from '@/features/components/LHero';
import Hero from '../../../public/media.png';

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white">
        <LHero 
        image={Hero}
        title="Media"
        />
        <StoriesSection />
        <OurGallery />
        {/* <Blog /> */}
        <Cta />
    </main>
  );
}
