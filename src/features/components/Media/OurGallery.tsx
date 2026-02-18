
import { getGallery } from "@/services/gallery.service";
import Image from "next/image";

export default async function OurGallery() {
  // Fetch gallery images from API (or mock data)
  const images = await getGallery({ 
    isActive: true,
    sortBy: 'order',
    sortOrder: 'asc'
  });

  return (
    <section className="w-full bg-[#F8F8FB] py-16 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#F34B02] font-semibold text-sm uppercase tracking-wider mb-3">
            OUR GALLERY
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Happenings within the Organization.
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.slice(0, 8).map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={image.image}
                alt={image.alt || `Gallery ${image.id}`}
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
