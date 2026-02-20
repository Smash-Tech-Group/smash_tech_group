import { assets } from '../../../../assets/assets'
import BusinessCard from './Businesscard'

const products = [
  {
    icon: assets.ridesmash_logo,
    bgImage: assets.ridesmash_banner,
    category: 'TRANSPORTATION',
    name: 'RideSmash',
    description:
      'RideSmash is a modern ride-hailing platform designed to offer fast, safe, and transparent transportation for everyday commuters.',
    status: 'active' as const,
    website: 'https://ridesmash.com'
  },
  {
    icon: assets.smashfood_logo,
    bgImage: assets.smashfood_banner,
    category: 'Food & Delivery',
    name: 'SmashFood',
    description:
      'A hybrid food-tech platform that allows users to order meals from restaurants and book private chefs for home dining experiences.',
    status: 'active' as const,
    website: 'https://www.smashfood247.com'
  },
  {
    icon: assets.smashchat_logo,
    bgImage: assets.smashchat_banner,
    category: 'Communication',
    name: 'SmashChat',
    description:
      'A multi-functional social app that allows users to chat, post, comment, share, and socialize from one platform.',
    status: 'active' as const,
    website: 'https://smashchat.org'
  },
  {
    icon: assets.qiimeet_logo,
    bgImage: assets.qiimeet_banner,
    category: 'Dating',
    name: 'Qiimeet',
    description:
      'Qiimeet is a video app designed for individuals and teams to hold virtual meetings through compatibility-based matching.',
    status: 'active' as const,
    website: 'https://www.qiimeet.com'
  },
  {
    icon: assets.smashmail_logo,
    bgImage: assets.smashmail_banner,
    category: 'Email service',
    name: 'SmashMail',
    description:
      'A robust email management platform featuring an organized inbox for seamless and optimal communication.',
    status: 'active' as const,
    website: '#'
  },
  {
    icon: assets.smashremit_logo,
    bgImage: assets.smashremit_banner,
    category: 'Fintech',
    name: 'SmashRemit',
    description:
      'A remittance service that empowers individuals and businesses to move money around the world with ease, speed, and transparency.',
    status: 'active' as const,
    website: 'https://smashremit.com'
  },
  {
    icon: assets.smashinvoice_logo,
    bgImage: assets.smashinvoice_banner,
    category: 'Finance',
    name: 'Smash Invoice',
    description:
      'An invoicing suite designed for individuals, businesses, contractors, and freelancers to manage, track, and invoice customers.',
    status: 'active' as const,
    website: '#'
  },
  {
    icon: assets.smashapartments_logo,
    bgImage: assets.smashapartments_banner,
    category: 'Real estate',
    name: 'Smash Apartments',
    description:
      'A real estate web platform that allows users to browse, inspect, contact landlord, and pay rent.',
    status: 'active' as const,
    website: 'https://ridesmash.com'
  },
  {
    icon: assets.smashtravels_logo,
    bgImage: assets.smashtravels_banner,
    category: 'Travel & Tourism',
    name: 'SmashTravel',
    description:
      'A team platform where users can book flights, find hotels, and travel arrangements in one place.',
    status: 'active' as const,
    website: 'https://smashtravels.com/'
  },
  {
    icon: assets.smashwise_logo,
    bgImage: assets.smashwise_banner,
    category: 'E-Commerce',
    name: 'SmashWise',
    description:
      'A collection card wallet for women users that allows users to manage bills and execute simple loan processes.',
    status: 'active' as const,
    website: '#'
  },
  {
    icon: assets.smashlogistics_logo,
    bgImage: assets.smashlogistics_banner,
    category: 'Logistics',
    name: 'Smash Logistics',
    description:
      'Smash Logistics simplifies logistics for shipping tools, assets, and properties from location to location.',
    status: 'active' as const,
    website: '#'
  },
  {
    icon: assets.smashtechhub_logo,
    bgImage: assets.smashtechhubg_banner,
    category: 'Software Development',
    name: 'SmashTechHub',
    description:
      'Smash Tech Hub combines product strategy, design, and engineering to build digital products.',
    status: 'active' as const,
    website: 'https://ridesmash.com'
  },
  {
    icon: assets.smashlaundry_logo,
    bgImage: assets.smashlaundry_banner,
    category: 'Laundry',
    name: 'SmashLaundry',
    description:
      'A laundry platform for pickups, cleaning, and delivery of laundry through GPS tracking for easy delivery.',
    status: 'in-progress' as const,
    website: 'https://ridesmash.com'
  },
  {
    icon: assets.smashcredit_1_logo,
    bgImage: assets.smashcredit_banner,
    category: 'Financial services',
    name: 'SmashCredit',
    description:
      'A platform where users can build up credit, pay later through a simple, secure, and flexible payment experience.',
    status: 'in-progress' as const,
    website: 'https://ridesmash.com'
  }
]

export default function ProductsSection() {
  return (
    <section className="py-16 px-6 bg-[#F8F8FB]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-orange-500 text-sm font-medium mb-3 uppercase tracking-wide">
            OUR BUSINESS SUITE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A portfolio of technology products and platforms.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <BusinessCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
