import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';
import { MATCHES, TOURNAMENT_INFO, getTeamByCode, getStadiumById, type Match } from '@/lib/afconData';

export const metadata: Metadata = {
  title: 'AFCON 2025 Schedule & Fixtures | Footfolio',
  description: 'Complete schedule and fixtures for the Africa Cup of Nations 2025 in Morocco',
};

export default function AfconSchedulePage() {
  // Group matches by stage
  const groupStageMatches = MATCHES.filter(m => m.stage === 'group');
  const roundOf16Matches = MATCHES.filter(m => m.stage === 'round-of-16');
  const quarterFinals = MATCHES.filter(m => m.stage === 'quarter-final');
  const semiFinals = MATCHES.filter(m => m.stage === 'semi-final');
  const thirdPlace = MATCHES.filter(m => m.stage === '3rd-place');
  const final = MATCHES.filter(m => m.stage === 'final');

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getTeamName = (code: string) => {
    const team = getTeamByCode(code);
    return team ? team.name : code;
  };

  const getVenueName = (stadiumId: string) => {
    const stadium = getStadiumById(stadiumId);
    return stadium ? `${stadium.name}, ${stadium.city}` : stadiumId;
  };

  const renderMatch = (match: Match) => (
    <div
      key={match.id}
      className="rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 md:p-6"
    >
      <div className="grid gap-4 md:grid-cols-[200px_1fr_200px] md:items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <div className="font-medium text-gray-900 dark:text-white">
            {formatDate(match.date)}
          </div>
          {match.time && <div>{match.time}</div>}
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 text-center md:text-right">
            <div className="font-semibold text-gray-900 dark:text-white">
              {getTeamName(match.homeTeam)}
            </div>
          </div>
          <div className="rounded-full bg-[#E4F222] px-3 py-1 text-sm font-bold text-black">
            VS
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="font-semibold text-gray-900 dark:text-white">
              {getTeamName(match.awayTeam)}
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400 md:text-right">
          📍 {getVenueName(match.stadium)}
        </div>
      </div>
    </div>
  );

  const renderMatchGroup = (title: string, matches: Match[], groupBy?: string) => {
    if (matches.length === 0) return null;

    if (groupBy === 'group') {
      // Group by match group (A, B, C, etc.)
      const grouped = matches.reduce((acc, match) => {
        const key = `Group ${match.group}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(match);
        return acc;
      }, {} as Record<string, Match[]>);

      return (
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
          {Object.entries(grouped).map(([groupName, groupMatches]) => (
            <div key={groupName} className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{groupName}</h3>
              <div className="space-y-4">
                {groupMatches.map(renderMatch)}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <div className="space-y-4">
          {matches.map(renderMatch)}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'AFCON 2025', href: '/#afcon' }, { label: 'Schedule & Fixtures' }]} />
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
              Schedule & Fixtures
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Complete match schedule from {formatDate(TOURNAMENT_INFO.startDate)} to {formatDate(TOURNAMENT_INFO.endDate)}
            </p>
          </div>
        </section>

        {/* Schedule Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {renderMatchGroup('Group Stage', groupStageMatches, 'group')}
            {renderMatchGroup('Round of 16', roundOf16Matches)}
            {renderMatchGroup('Quarter Finals', quarterFinals)}
            {renderMatchGroup('Semi Finals', semiFinals)}
            {renderMatchGroup('3rd Place Match', thirdPlace)}
            {renderMatchGroup('Final', final)}

            {/* Tournament Info */}
            <div className="mt-12 rounded-lg border border-gray-200 bg-gradient-to-br from-green-50 to-red-50 p-6 dark:border-gray-700 dark:from-green-950 dark:to-red-950">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {TOURNAMENT_INFO.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                📍 Host: {TOURNAMENT_INFO.host}<br />
                📅 Dates: {formatDate(TOURNAMENT_INFO.startDate)} - {formatDate(TOURNAMENT_INFO.endDate)}<br />
                ⚽ Teams: 24 teams competing across 6 groups
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
