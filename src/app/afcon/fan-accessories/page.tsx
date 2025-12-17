'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { TOURNAMENT_INFO } from '@/lib/afconData';

interface Accessory {
  id: string;
  name: string;
  category: string;
  description: string;
  retailer: string;
  price?: string;
  url?: string;
  imageUrl?: string;
}

// Official retailers and stores
const ACCESSORIES: Accessory[] = [
  {
    id: 'trikko',
    name: 'Trikko',
    category: 'Store',
    description: 'Official football merchandise and jerseys',
    retailer: 'Trikko',
    url: 'https://trikko.ma',
    imageUrl: 'https://trikko.ma/cdn/shop/files/TRIKKO_LOGO_TRANSPARENT_150x.png',
  },
  {
    id: 'jerseyland',
    name: 'Jerseyland.ma',
    category: 'Store',
    description: 'Authentic football jerseys and sportswear',
    retailer: 'Jerseyland',
    url: 'https://jerseyland.ma',
    imageUrl: 'https://jerseyland.ma/wp-content/uploads/2023/03/cropped-logo-jerseyland.png',
  },
  {
    id: 'frmf-official',
    name: 'FRMF Official Store',
    category: 'Store',
    description: 'Official Morocco national team jerseys and merchandise',
    retailer: 'FRMF',
    url: 'https://store.frmf.ma/collections/official-jerseys',
    imageUrl: 'https://store.frmf.ma/cdn/shop/files/FRMF_STORE_LOGO_d69f7d36-9ac9-412d-857b-3b2c1f1dc13c_300x.png',
  },
  {
    id: 'planetsport',
    name: 'Planet Sport Morocco',
    category: 'Store',
    description: 'FRMF Home Jersey Replica and official sportswear',
    retailer: 'Planet Sport',
    url: 'https://planetsport.ma/maillotsdefoot/49926-frmf-home-jersey-replica.html',
    imageUrl: 'https://planetsport.ma/img/planetsport-logo-1585646073.jpg',
  },
  {
    id: 'puma-morocco',
    name: 'PUMA Morocco',
    category: 'Store',
    description: 'Official Morocco football gear and apparel',
    retailer: 'PUMA',
    url: 'https://ma.puma.com/recherche?controller=search&s=Morocco',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/PUMA_logo.svg/1200px-PUMA_logo.svg.png',
  },
];

export default function AfconFanAccessoriesPage() {

  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'AFCON 2025', href: '/#afcon' }, { label: 'Fan' }]} />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <section className="border-b border-gray-100 bg-gradient-to-br from-green-50 to-red-50 px-6 py-12 dark:border-gray-800 dark:from-green-950 dark:to-red-950 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {TOURNAMENT_INFO.name}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {TOURNAMENT_INFO.year}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Fan
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Official stores for jerseys, merchandise, and fan gear
            </p>
          </div>
        </section>

        {/* Accessories Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Retailers List */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ACCESSORIES.map(item => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                  >
                    {/* Store Logo */}
                    <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-white p-4">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="text-4xl">🏪</span>
                      )}
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-[#E4F222]">
                      Visit Store →
                    </div>
                  </a>
                ))}
              </div>

            {/* Shopping Tips */}
            <div className="mt-12 mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Shopping Tips</h2>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Official merchandise can be purchased from authorized retailers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Check for authenticity certificates on official jerseys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Stadium stores offer exclusive tournament merchandise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Online stores ship internationally with tracking</span>
                </li>
              </ul>
            </div>

            {/* Add Item Notice */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Note:</strong> This is a curated list of official and trusted retailers for AFCON 2025 fan gear and Morocco national team merchandise.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
