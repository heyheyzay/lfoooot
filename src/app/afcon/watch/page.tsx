'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { TOURNAMENT_INFO } from '@/lib/afconData';
import { useState } from 'react';


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

interface Fanzone {
  id: string;
  name: string;
  city: string;
  location: string;
  mapsUrl: string;
}

const FANZONES: Fanzone[] = [
  {
    id: 'anfa-park',
    name: 'Anfa Park',
    city: 'Casablanca',
    location: 'Anfa Park, Casablanca',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Anfa+Park+Casablanca',
  },
  {
    id: 'cfc-um6ss',
    name: 'CFC near UM6SS',
    city: 'Casablanca',
    location: 'CFC, near UM6SS, Casablanca',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=CFC+UM6SS+Casablanca',
  },
  {
    id: 'espace-toto',
    name: 'Espace Toto',
    city: 'Casablanca',
    location: 'Espace Toto, Casablanca',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Espace+Toto+Casablanca',
  },
  {
    id: 'morocco-mall',
    name: 'Morocco Mall',
    city: 'Casablanca',
    location: 'Morocco Mall, Casablanca',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Morocco+Mall+Casablanca',
  },
  {
    id: 'complexe-amal',
    name: 'Complexe Amal',
    city: 'Casablanca',
    location: 'Complexe Amal, Casablanca',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Complexe+Amal+Casablanca',
  },
  {
    id: 'parc-ligue-arab',
    name: 'Parc de La ligue Arab',
    city: 'Casablanca',
    location: 'Parc de La ligue Arab, Casablanca',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parc+de+La+ligue+Arab+Casablanca',
  },
  {
    id: 'porte-17-ain-diab',
    name: 'Porte 17 Ain Diab',
    city: 'Casablanca',
    location: 'Porte 17, Ain Diab, Casablanca',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Porte+17+Ain+Diab+Casablanca',
  },
];

export default function AfconWatchPage() {
  const [activeTab, setActiveTab] = useState<'how' | 'where'>('how');
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const groupedBroadcasters = BROADCASTERS.reduce((acc, broadcaster) => {
    const region = broadcaster.region.split(',')[0].trim(); // Use first region for grouping
    if (!acc[region]) acc[region] = [];
    acc[region].push(broadcaster);
    return acc;
  }, {} as Record<string, Broadcaster[]>);

  // Get unique cities from fanzones
  const cities = Array.from(new Set(FANZONES.map(fz => fz.city)));

  // Filter fanzones by selected city
  const filteredFanzones = selectedCity === 'all'
    ? FANZONES
    : FANZONES.filter(fz => fz.city === selectedCity);

  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'AFCON 2025', href: '/#afcon' }, { label: 'How/Where to Watch' }]} />
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
              How/Where to Watch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Find broadcasters, streaming options, and fanzones for AFCON 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Tabs */}
            <div className="mb-8 flex gap-2 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('how')}
                className={`px-6 py-3 text-lg font-semibold transition-colors ${
                  activeTab === 'how'
                    ? 'border-b-2 border-[#E4F222] text-gray-900 dark:text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                How
              </button>
              <button
                onClick={() => setActiveTab('where')}
                className={`px-6 py-3 text-lg font-semibold transition-colors ${
                  activeTab === 'where'
                    ? 'border-b-2 border-[#E4F222] text-gray-900 dark:text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Where
              </button>
            </div>

            {/* How Tab - Broadcasters */}
            {activeTab === 'how' && (
              <div className="mb-12 space-y-8">
              {Object.entries(groupedBroadcasters).map(([region, broadcasters]) => (
                <div key={region}>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{region}</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {broadcasters.map((broadcaster) => (
                      <div
                        key={broadcaster.id}
                        className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {broadcaster.name}
                          </h3>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                            {broadcaster.type}
                          </span>
                        </div>
                        <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                          {broadcaster.region}
                        </div>
                        {broadcaster.url && (
                          <a
                            href={broadcaster.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm font-medium text-gray-900 hover:text-[#E4F222] dark:text-white dark:hover:text-[#E4F222]"
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
            )}

            {/* Where Tab - Fanzones */}
            {activeTab === 'where' && (
              <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Fanzones
              </h2>

              {/* City Filter Badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCity('all')}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCity === 'all'
                      ? 'bg-[#E4F222] text-black'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  All Cities
                </button>
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCity === city
                        ? 'bg-[#E4F222] text-black'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              {/* Fanzones Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredFanzones.map((fanzone) => (
                  <div
                    key={fanzone.id}
                    className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {fanzone.name}
                    </h3>
                    <div className="mb-3 flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>📍</span>
                      <span>{fanzone.location}</span>
                    </div>
                    <a
                      href={fanzone.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#E4F222] dark:text-white dark:hover:text-[#E4F222]"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                ))}
              </div>
              </div>
            )}

            {/* Tips Section */}
            <div className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Viewing Tips</h2>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
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
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Note:</strong> Broadcasting rights are subject to change. Check with your local provider for the most up-to-date information.
                Data sources: <a href="https://afrikacup2025.nl/en/africa-cup-2025/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-700 dark:text-white dark:hover:text-gray-300">afrikacup2025.nl</a> and <a href="https://cupofnations2025.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-700 dark:text-white dark:hover:text-gray-300">cupofnations2025.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
