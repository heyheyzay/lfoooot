'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  tags: string[];
  imageUrl?: string;
}

// Sample data - will be manually filled by the user later
const EVENTS: Event[] = [
  {
    id: '1',
    title: 'AFCON Opening Concert',
    description: 'Grand opening ceremony featuring top African artists and cultural performances',
    date: '2025-12-20',
    location: 'Casablanca',
    tags: ['music', 'opening ceremony'],
  },
  {
    id: '2',
    title: 'Fan Fest - Rabat',
    description: 'Live match screenings, food stalls, and entertainment in the heart of Rabat',
    date: '2025-12-21',
    location: 'Rabat',
    tags: ['watch party', 'fan zone'],
  },
  {
    id: '3',
    title: 'African Football Heritage Exhibition',
    description: 'Interactive museum showcasing the history of African football and AFCON',
    date: '2025-12-15',
    location: 'Marrakech',
    tags: ['exhibition', 'culture'],
  },
  {
    id: '4',
    title: 'Street Football Tournament',
    description: 'Community football tournament open to all ages and skill levels',
    date: '2025-12-22',
    location: 'Agadir',
    tags: ['sports', 'community'],
  },
  {
    id: '5',
    title: 'Moroccan Music Night',
    description: 'Traditional and contemporary Moroccan music performances',
    date: '2025-12-28',
    location: 'Casablanca',
    tags: ['music', 'culture'],
  },
  // More events will be added manually by the user
];

const ALL_TAGS = ['music', 'watch party', 'exhibition', 'culture', 'sports', 'community', 'opening ceremony', 'fan zone'];

export default function AfconEventsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredEvents = selectedTags.length === 0
    ? EVENTS
    : EVENTS.filter(event =>
        selectedTags.some(tag => event.tags.includes(tag))
      );

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
                Events
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Related Events
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Cultural events, watch parties, and fan activities during AFCON 2025
            </p>
          </div>
        </section>

        {/* Events Content */}
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Filter Tags */}
            <div className="mb-8">
              <h2 className="mb-4 text-sm font-medium text-gray-700">Filter by:</h2>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="mt-3 text-sm text-gray-600 hover:text-gray-900"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Events List */}
            {filteredEvents.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map(event => (
                  <div
                    key={event.id}
                    className="rounded-lg border border-gray-100 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-sm"
                  >
                    <div className="mb-3 flex flex-wrap gap-2">
                      {event.tags.map(tag => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {event.title}
                    </h3>

                    <p className="mb-4 text-sm text-gray-600">
                      {event.description}
                    </p>

                    <div className="space-y-1 text-sm text-gray-600">
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
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-12 text-center">
                <p className="text-gray-600">
                  No events found matching the selected filters.
                </p>
              </div>
            )}

            {/* Add Event Notice */}
            <div className="mt-12 rounded-lg border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> This is a curated list of cultural events and fan activities.
                More events will be added as they are announced. The list is manually maintained and updated regularly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
