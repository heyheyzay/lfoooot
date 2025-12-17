import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';
import { TEAMS, GROUPS, TOURNAMENT_INFO, getTeamsByGroup, getMatchesByGroup } from '@/lib/afconData';

export const metadata: Metadata = {
  title: 'AFCON 2025 Teams & Squads | Footfolio',
  description: 'All participating teams and squads for the Africa Cup of Nations 2025 in Morocco',
};

export default function AfconTeamsPage() {
  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'AFCON 2025', href: '/#afcon' }, { label: 'Teams & Squads' }]} />
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
              Teams & Squads
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              24 nations competing across 6 groups
            </p>
          </div>
        </section>

        {/* Teams Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {GROUPS.map((group) => {
              const groupTeams = getTeamsByGroup(group);

              return (
                <div key={group} className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    Group {group}
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {groupTeams.map((team) => (
                      <div
                        key={team.code}
                        className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                      >
                        <div className="text-center">
                          <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-red-100 text-2xl font-bold text-gray-900 dark:from-green-900 dark:to-red-900 dark:text-white">
                            {team.code}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {team.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Tournament Info */}
            <div className="mt-12 rounded-lg border border-gray-200 bg-gradient-to-br from-green-50 to-red-50 p-6 dark:border-gray-700 dark:from-green-950 dark:to-red-950">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Tournament Format
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The 24 teams are divided into 6 groups of 4 teams each. The top 2 teams from each group, along with the 4 best third-placed teams, will advance to the Round of 16 knockout stage.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
