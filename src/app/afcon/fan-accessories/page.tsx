'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

// Sample data - will be manually filled by the user later
const ACCESSORIES: Accessory[] = [
  {
    id: '1',
    name: 'Morocco Home Jersey 2025',
    category: 'Jerseys',
    description: 'Official Morocco national team home jersey for AFCON 2025',
    retailer: 'Official Store',
    price: '$80',
  },
  {
    id: '2',
    name: 'AFCON 2025 Snapback Cap',
    category: 'Hats',
    description: 'Official tournament snapback cap with embroidered logo',
    retailer: 'Official Store',
    price: '$25',
  },
  {
    id: '3',
    name: 'Morocco Supporter Scarf',
    category: 'Scarves',
    description: 'Traditional supporter scarf in Morocco colors',
    retailer: 'Fan Shop',
    price: '$18',
  },
  {
    id: '4',
    name: 'AFCON 2025 Match Ball',
    category: 'Equipment',
    description: 'Official match ball replica for AFCON 2025',
    retailer: 'Sports Direct',
    price: '$45',
  },
  // More accessories will be added manually by the user
];

const CATEGORIES = ['All', 'Jerseys', 'Hats', 'Scarves', 'Flags', 'Equipment', 'Accessories'];

export default function AfconFanAccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAccessories = selectedCategory === 'All'
    ? ACCESSORIES
    : ACCESSORIES.filter(item => item.category === selectedCategory);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="border-b border-gray-100 bg-gradient-to-br from-green-50 to-red-50 px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700">
                AFCON 2025
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700">
                Shop
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Fan Accessories
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Official jerseys, hats, scarves, and more for AFCON 2025 fans
            </p>
          </div>
        </section>

        {/* Accessories Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Category Filter */}
            <div className="mb-8">
              <h2 className="mb-4 text-sm font-medium text-gray-700">Category:</h2>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories List */}
            {filteredAccessories.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredAccessories.map(item => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-100 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-sm"
                  >
                    {/* Placeholder for image */}
                    <div className="mb-4 aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-4xl">👕</span>
                    </div>

                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                        {item.category}
                      </span>
                      {item.price && (
                        <span className="text-lg font-bold text-gray-900">
                          {item.price}
                        </span>
                      )}
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="mb-3 text-sm text-gray-600">
                      {item.description}
                    </p>

                    <div className="mb-4 text-sm text-gray-600">
                      <span className="font-medium">Retailer:</span> {item.retailer}
                    </div>

                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
                      >
                        Buy Now
                      </a>
                    ) : (
                      <button
                        disabled
                        className="block w-full rounded-lg bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-400"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-12 text-center">
                <p className="text-gray-600">
                  No accessories found in this category yet.
                </p>
              </div>
            )}

            {/* Shopping Tips */}
            <div className="mt-12 mb-8 rounded-lg border border-gray-100 bg-gray-50 p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Shopping Tips</h2>
              <ul className="space-y-2 text-sm text-gray-600">
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
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> This is a curated list of where to buy fan accessories and merchandise.
                More retailers and products will be added manually. Items are sourced from official and trusted retailers only.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
