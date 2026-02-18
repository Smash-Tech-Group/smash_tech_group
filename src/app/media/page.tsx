import Navbar from '@/features/components/Navbar';
import MediaHero from '@/features/components/Media/MediaHero';
import Cta from '@/features/components/Media/Cta';
import Blog from '@/features/components/Blog';
import StoriesSection from '@/features/components/Media/StoriesSection';
import OurGallery from '@/features/components/Media/OurGallery';



export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white">
        <MediaHero />
        <StoriesSection />
        <OurGallery />
        <Blog />
        <Cta />
    </main>
  );
}
