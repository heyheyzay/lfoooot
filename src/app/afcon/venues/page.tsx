import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AFCON 2025 Venues & Stadiums | Footfolio',
  description: 'All host cities and stadiums for the Africa Cup of Nations 2025 in Morocco',
};

interface Venue {
  id: string;
  name: string;
  city: string;
  capacity: number;
  opened?: number;
  description?: string;
}

// Sample data - will be replaced with real data from external sources
const VENUES: Venue[] = [
  {
    id: 'mohammed-v',
    name: 'Stade Mohammed V',
    city: 'Casablanca',
    capacity: 67000,
    opened: 1955,
    description: 'Morocco\'s largest stadium and primary venue for major matches',
  },
  {
    id: 'prince-moulay-abdellah',
    name: 'Stade Prince Moulay Abdellah',
    city: 'Rabat',
    capacity: 53000,
    opened: 1983,
    description: 'Located in the capital city, a key venue for international matches',
  },
  {
    id: 'grand-stade-agadir',
    name: 'Grand Stade d\'Agadir',
    city: 'Agadir',
    capacity: 45000,
    opened: 2013,
    description: 'Modern stadium in the coastal city of Agadir',
  },
  {
    id: 'grand-stade-marrakech',
    name: 'Grand Stade de Marrakech',
    city: 'Marrakech',
    capacity: 45000,
    opened: 2011,
    description: 'State-of-the-art venue in the tourist hub of Marrakech',
  },
  {
    id: 'stade-adrar',
    name: 'Stade Adrar',
    city: 'Agadir',
    capacity: 45000,
    opened: 2013,
    description: 'Secondary venue in Agadir with modern facilities',
  },
  {
    id: 'stade-honneur',
    name: 'Stade d\'Honneur',
    city: 'Oujda',
    capacity: 20000,
    opened: 1976,
    description: 'Historic stadium in eastern Morocco',
  },
  // More venues will be added when data is fetched from external sources
];

export default function AfconVenuesPage() {
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
                Venues
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Venues & Stadiums
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Explore the host cities and stadiums across Morocco
            </p>
          </div>
        </section>

        {/* Venues Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {VENUES.map((venue) => (
                <div
                  key={venue.id}
                  className="rounded-lg border border-gray-100 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-sm md:p-8"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h2 className="mb-1 text-2xl font-bold text-gray-900">
                        {venue.name}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>📍</span>
                        <span className="font-medium">{venue.city}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
                    <div>
                      <div className="text-xs text-gray-500">Capacity</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {venue.capacity.toLocaleString()}
                      </div>
                    </div>
                    {venue.opened && (
                      <div>
                        <div className="text-xs text-gray-500">Opened</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {venue.opened}
                        </div>
                      </div>
                    )}
                  </div>

                  {venue.description && (
                    <p className="text-sm text-gray-600">{venue.description}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="mb-12 rounded-lg border border-gray-100 bg-gray-50 p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Host Cities Map</h2>
              <div className="aspect-video rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="mb-2 text-4xl">🗺️</div>
                  <div className="text-sm">Interactive map coming soon</div>
                </div>
              </div>
            </div>

            {/* Data source note */}
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Full venue information including photos and detailed facilities will be updated from official sources.
                Data sources: <a href="https://afrikacup2025.nl/en/africa-cup-2025/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-700">afrikacup2025.nl</a> and <a href="https://cupofnations2025.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-700">cupofnations2025.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
