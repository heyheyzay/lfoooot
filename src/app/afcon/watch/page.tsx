import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Watch AFCON 2025 | Footfolio',
  description: 'Find out where to watch Africa Cup of Nations 2025 - TV channels, streaming services, and broadcasters worldwide',
};

interface Broadcaster {
  id: string;
  name: string;
  region: string;
  type: 'TV' | 'Streaming' | 'Both';
  url?: string;
  logo?: string;
}

// Sample data - will be replaced with real data from external sources
const BROADCASTERS: Broadcaster[] = [
  {
    id: 'bein-sports-mena',
    name: 'beIN SPORTS',
    region: 'Middle East & North Africa',
    type: 'Both',
    url: 'https://www.beinsports.com',
  },
  {
    id: 'supersport',
    name: 'SuperSport',
    region: 'Sub-Saharan Africa',
    type: 'Both',
    url: 'https://www.supersport.com',
  },
  {
    id: 'espn-us',
    name: 'ESPN+',
    region: 'United States',
    type: 'Streaming',
    url: 'https://www.espn.com',
  },
  {
    id: 'sky-sports',
    name: 'Sky Sports',
    region: 'United Kingdom',
    type: 'Both',
    url: 'https://www.skysports.com',
  },
  {
    id: 'canal-plus',
    name: 'Canal+',
    region: 'France',
    type: 'Both',
    url: 'https://www.canalplus.com',
  },
  {
    id: 'dazn',
    name: 'DAZN',
    region: 'Germany, Italy, Spain',
    type: 'Streaming',
    url: 'https://www.dazn.com',
  },
  {
    id: 'sporttv',
    name: 'Sport TV',
    region: 'Portugal',
    type: 'Both',
  },
  {
    id: 'snrt',
    name: 'SNRT (Moroccan TV)',
    region: 'Morocco (Free)',
    type: 'TV',
  },
  // More broadcasters will be added when data is fetched from external sources
];

export default function AfconWatchPage() {
  const groupedBroadcasters = BROADCASTERS.reduce((acc, broadcaster) => {
    const region = broadcaster.region.split(',')[0].trim(); // Use first region for grouping
    if (!acc[region]) acc[region] = [];
    acc[region].push(broadcaster);
    return acc;
  }, {} as Record<string, Broadcaster[]>);

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
                Watch
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              How to Watch
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Find your local broadcaster and streaming options for AFCON 2025
            </p>
          </div>
        </section>

        {/* Broadcasters Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 space-y-8">
              {Object.entries(groupedBroadcasters).map(([region, broadcasters]) => (
                <div key={region}>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">{region}</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {broadcasters.map((broadcaster) => (
                      <div
                        key={broadcaster.id}
                        className="rounded-lg border border-gray-100 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-sm"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {broadcaster.name}
                          </h3>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                            {broadcaster.type}
                          </span>
                        </div>
                        <div className="mb-3 text-sm text-gray-600">
                          {broadcaster.region}
                        </div>
                        {broadcaster.url && (
                          <a
                            href={broadcaster.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm font-medium text-gray-900 hover:text-gray-700"
                          >
                            Visit website →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tips Section */}
            <div className="mb-12 rounded-lg border border-gray-100 bg-gray-50 p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Viewing Tips</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Check if your existing sports streaming subscription includes AFCON coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Some matches may be available for free on local broadcasters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>VPN services may help access region-specific streaming options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Match times are displayed in local Moroccan time (GMT+1)</span>
                </li>
              </ul>
            </div>

            {/* Data source note */}
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Broadcasting rights are subject to change. Check with your local provider for the most up-to-date information.
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
