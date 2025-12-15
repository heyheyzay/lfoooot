import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AFCON 2025 Teams & Squads | Footfolio',
  description: 'All participating teams and squads for the Africa Cup of Nations 2025 in Morocco',
};

interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
  fifaRanking?: number;
  previousBest?: string;
}

// Sample data - will be replaced with real data from external sources
const TEAMS: Team[] = [
  {
    id: 'morocco',
    name: 'Morocco',
    flag: '🇲🇦',
    group: 'Group A',
    fifaRanking: 13,
    previousBest: 'Winner (1976)',
  },
  {
    id: 'senegal',
    name: 'Senegal',
    flag: '🇸🇳',
    group: 'Group B',
    fifaRanking: 20,
    previousBest: 'Winner (2021, 2022)',
  },
  {
    id: 'egypt',
    name: 'Egypt',
    flag: '🇪🇬',
    group: 'Group C',
    fifaRanking: 36,
    previousBest: 'Winner (7 times)',
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    flag: '🇳🇬',
    group: 'Group D',
    fifaRanking: 44,
    previousBest: 'Winner (1980, 1994, 2013)',
  },
  {
    id: 'algeria',
    name: 'Algeria',
    flag: '🇩🇿',
    group: 'Group A',
    fifaRanking: 37,
    previousBest: 'Winner (1990, 2019)',
  },
  {
    id: 'cameroon',
    name: 'Cameroon',
    flag: '🇨🇲',
    group: 'Group B',
    fifaRanking: 49,
    previousBest: 'Winner (5 times)',
  },
  {
    id: 'ghana',
    name: 'Ghana',
    flag: '🇬🇭',
    group: 'Group C',
    fifaRanking: 64,
    previousBest: 'Winner (4 times)',
  },
  {
    id: 'ivory-coast',
    name: 'Ivory Coast',
    flag: '🇨🇮',
    group: 'Group D',
    fifaRanking: 39,
    previousBest: 'Winner (2015, 2024)',
  },
  // More teams will be added when data is fetched from external sources
];

export default function AfconTeamsPage() {
  const groupedTeams = TEAMS.reduce((acc, team) => {
    if (!acc[team.group]) acc[team.group] = [];
    acc[team.group].push(team);
    return acc;
  }, {} as Record<string, Team[]>);

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
                Teams
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Teams & Squads
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              All 24 participating nations in Africa Cup of Nations 2025
            </p>
          </div>
        </section>

        {/* Teams Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {Object.entries(groupedTeams).map(([groupName, teams]) => (
              <div key={groupName} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">{groupName}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {teams.map((team) => (
                    <div
                      key={team.id}
                      className="rounded-lg border border-gray-100 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-sm"
                    >
                      <div className="mb-4 text-center text-5xl">{team.flag}</div>
                      <h3 className="mb-2 text-center text-lg font-semibold text-gray-900">
                        {team.name}
                      </h3>
                      {team.fifaRanking && (
                        <div className="mb-1 text-center text-sm text-gray-600">
                          FIFA Rank: #{team.fifaRanking}
                        </div>
                      )}
                      {team.previousBest && (
                        <div className="text-center text-xs text-gray-500">
                          {team.previousBest}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Data source note */}
            <div className="mt-12 rounded-lg border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Full team squads and player information will be updated from official sources.
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
