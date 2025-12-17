'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { TOURNAMENT_INFO } from '@/lib/afconData';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  city: string;
  tags: string[];
  url?: string;
  imageUrl?: string;
}

// Events data
const EVENTS: Event[] = [
  {
    id: '1',
    title: 'AFCON Opening Concert',
    description: 'Grand opening ceremony featuring top African artists and cultural performances',
    date: '2025-12-20',
    location: 'Casablanca',
    city: 'Casablanca',
    tags: ['music', 'opening ceremony'],
  },
  {
    id: '2',
    title: 'Fan Fest - Rabat',
    description: 'Live match screenings, food stalls, and entertainment in the heart of Rabat',
    date: '2025-12-21',
    location: 'Rabat',
    city: 'Rabat',
    tags: ['watch party', 'fan zone'],
  },
  {
    id: 'en-jeu-exhibition',
    title: '"En jeu" ("In Play") Group Exhibition',
    description: 'Collective exhibition featuring 13 contemporary artists exploring football through painting, sculpture, photo, and collage. Treats the sport as a shared language across Africa — carrying identity, movement, passion, and collective memory.',
    date: '2025-12-19',
    location: 'Khalid Fine Arts Gallery, Marrakech',
    city: 'Marrakech',
    tags: ['exhibition', 'culture', 'art'],
    url: 'https://mwnlifestyle.com/2025/12/17/marrakech-gallery-opens-en-jeu-in-play-group-exhibition-for-afcon/',
  },
  {
    id: 'casamemoire-heritage',
    title: 'Sport, Ville et Patrimoine (Sports, City, and Heritage)',
    description: 'Cultural program featuring exhibitions, conferences, film screenings, and guided tours linking sport to Casablanca&#39;s architecture and collective memory.',
    date: '2025-12-15',
    location: 'Casablanca',
    city: 'Casablanca',
    tags: ['exhibition', 'culture', 'heritage'],
    url: 'https://mwnlifestyle.com/2025/12/17/casamemoire-launches-sports-city-and-heritage-ahead-of-afcon-2025/',
  },
  {
    id: 'winter-africa-festival',
    title: 'Winter Africa Festival',
    description: 'Cultural festival celebrating African arts, music, and performances',
    date: '2025-12-21',
    location: 'Casablanca',
    city: 'Casablanca',
    tags: ['music', 'culture', 'festival'],
    url: 'https://www.instagram.com/wecasablanca/',
  },
  {
    id: 'laftercan',
    title: 'LAFTERCan',
    description: 'AFCON afterparty events and celebrations in Rabat',
    date: '2025-12-21',
    location: 'Rabat',
    city: 'Rabat',
    tags: ['music', 'fan zone', 'festival'],
    url: 'https://www.instagram.com/laftercan/',
  },
];

const ALL_TAGS = ['music', 'watch party', 'exhibition', 'culture', 'art', 'heritage', 'festival', 'opening ceremony', 'fan zone'];
const CITIES = ['Casablanca', 'Rabat', 'Marrakech'];

export default function AfconEventsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Filter by tags and city
  let filteredEvents = EVENTS;

  // Filter by tags
  if (selectedTags.length > 0) {
    filteredEvents = filteredEvents.filter(event =>
      selectedTags.some(tag => event.tags.includes(tag))
    );
  }

  // Filter by city
  if (selectedCity !== 'all') {
    filteredEvents = filteredEvents.filter(event => event.city === selectedCity);
  }

  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: 'AFCON 2025', href: '/#afcon' }, { label: 'Related Events' }]} />
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
              Related Events
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Cultural events, exhibitions, and fan activities during AFCON 2025
            </p>
          </div>
        </section>

        {/* Events Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* City Filter */}
            <div className="mb-6">
              <h2 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">Filter by City:</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCity('all')}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCity === 'all'
                      ? 'bg-[#E4F222] text-black'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  All Cities
                </button>
                {CITIES.map(city => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      selectedCity === city
                        ? 'bg-[#E4F222] text-black'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div className="mb-8">
              <h2 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Tags:</h2>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-[#E4F222] text-black'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {(selectedTags.length > 0 || selectedCity !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedTags([]);
                    setSelectedCity('all');
                  }}
                  className="mt-3 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Events List */}
            {filteredEvents.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map(event => {
                  const EventWrapper = event.url ? 'a' : 'div';
                  const linkProps = event.url
                    ? {
                        href: event.url,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {};

                  return (
                    <EventWrapper
                      key={event.id}
                      {...linkProps}
                      className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                    >
                      <div className="mb-3 flex flex-wrap gap-2">
                        {event.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {event.title}
                      </h3>

                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {event.description}
                      </p>

                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <span>📅</span>
                          <span>
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📍</span>
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {event.url && (
                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#E4F222]">
                          Learn More →
                        </div>
                      )}
                    </EventWrapper>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-400">
                  No events found matching the selected filters.
                </p>
              </div>
            )}

            {/* Add Event Notice */}
            <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Note:</strong> This is a curated list of cultural events, exhibitions, and fan activities during AFCON 2025.
                Events are sourced from official announcements and cultural organizations across Morocco.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
