import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';
import { STADIUMS, MATCHES, TOURNAMENT_INFO } from '@/lib/afconData';

export const metadata: Metadata = {
  title: 'AFCON 2025 Venues & Stadiums | Footfolio',
  description: 'All host cities and stadiums for the Africa Cup of Nations 2025 in Morocco',
};

export default function AfconVenuesPage() {
  // Count matches per stadium
  const getMatchCount = (stadiumId: string) => {
    return MATCHES.filter(m => m.stadium === stadiumId).length;
  };

  // Group stadiums by city
  const stadiumsByCity = STADIUMS.reduce((acc, stadium) => {
    if (!acc[stadium.city]) {
      acc[stadium.city] = [];
    }
    acc[stadium.city].push(stadium);
    return acc;
  }, {} as Record<string, typeof STADIUMS>);

  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'AFCON 2025', href: '/#afcon' }, { label: 'Venues & Stadiums' }]} />
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
              Venues & Stadiums
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              {STADIUMS.length} world-class stadiums across {Object.keys(stadiumsByCity).length} Moroccan cities
            </p>
          </div>
        </section>

        {/* Venues Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Group stadiums by city */}
            {Object.entries(stadiumsByCity).map(([city, stadiums]) => (
              <div key={city} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {city} <span className="text-lg font-normal text-gray-600 dark:text-gray-400">({stadiums.length} {stadiums.length === 1 ? 'venue' : 'venues'})</span>
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {stadiums.map((stadium) => (
                    <div
                      key={stadium.id}
                      className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 md:p-8"
                    >
                      <div className="mb-4">
                        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                          {stadium.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <span>📍</span>
                          <span className="font-medium">{stadium.city}</span>
                        </div>
                      </div>

                      <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Hosting Matches
                        </div>
                        <div className="text-2xl font-bold text-[#E4F222]">
                          {getMatchCount(stadium.id)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Tournament Info */}
            <div className="mt-12 rounded-lg border border-gray-200 bg-gradient-to-br from-green-50 to-red-50 p-6 dark:border-gray-700 dark:from-green-950 dark:to-red-950">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Host Country: {TOURNAMENT_INFO.host}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Morocco will host the {TOURNAMENT_INFO.name} across {Object.keys(stadiumsByCity).length} cities, utilizing {STADIUMS.length} state-of-the-art stadiums to deliver an unforgettable tournament experience.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
