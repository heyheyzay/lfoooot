import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AFCON 2025 Schedule & Fixtures | Footfolio',
  description: 'Complete schedule and fixtures for the Africa Cup of Nations 2025 in Morocco',
};

interface Match {
  id: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
  venue: string;
  group?: string;
  round?: string;
}

// Sample data - will be replaced with real data from external sources
const MATCHES: Match[] = [
  {
    id: '1',
    date: '2025-12-21',
    time: '17:00',
    team1: 'Morocco',
    team2: 'TBD',
    venue: 'Stade Mohammed V, Casablanca',
    group: 'Group A',
  },
  {
    id: '2',
    date: '2025-12-21',
    time: '20:00',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'Stade Prince Moulay Abdellah, Rabat',
    group: 'Group A',
  },
  // More matches will be added when data is fetched from external sources
];

export default function AfconSchedulePage() {
  const groupedMatches = MATCHES.reduce((acc, match) => {
    const key = match.group || match.round || 'TBD';
    if (!acc[key]) acc[key] = [];
    acc[key].push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'AFCON 2025', href: '/#afcon' }, { label: 'Schedule & Fixtures' }]} />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="border-b border-gray-100 bg-gradient-to-br from-green-50 to-red-50 px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700">
                AFCON 2025
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700">
                Schedule
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Schedule & Fixtures
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Complete match schedule for Africa Cup of Nations 2025
            </p>
          </div>
        </section>

        {/* Schedule Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {Object.entries(groupedMatches).map(([groupName, matches]) => (
              <div key={groupName} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">{groupName}</h2>
                <div className="space-y-4">
                  {matches.map((match) => (
                    <div
                      key={match.id}
                      className="rounded-lg border border-gray-100 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-sm md:p-6"
                    >
                      <div className="grid gap-4 md:grid-cols-[200px_1fr_200px] md:items-center">
                        <div className="text-sm text-gray-600">
                          <div className="font-medium text-gray-900">
                            {new Date(match.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </div>
                          <div>{match.time}</div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                          <div className="flex-1 text-center md:text-right">
                            <div className="font-semibold text-gray-900">{match.team1}</div>
                          </div>
                          <div className="text-sm font-medium text-gray-400">vs</div>
                          <div className="flex-1 text-center md:text-left">
                            <div className="font-semibold text-gray-900">{match.team2}</div>
                          </div>
                        </div>

                        <div className="text-center text-sm text-gray-600 md:text-right">
                          📍 {match.venue}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Data source note */}
            <div className="mt-12 rounded-lg border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Full schedule data will be updated from official sources.
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
