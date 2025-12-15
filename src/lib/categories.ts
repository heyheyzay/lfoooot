import { Category } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'data-apis',
    name: 'Data & APIs',
    slug: 'data-apis',
    description: 'Football data providers, APIs, and live feeds for developers and analysts',
    icon: '⚡',
    toolCount: 0,
    order: 1,
  },
  {
    id: 'news-media',
    name: 'News & Media',
    slug: 'news-media',
    description: 'News aggregators, journalism sites, podcasts, and media platforms',
    icon: '📡',
    toolCount: 0,
    order: 2,
  },
  {
    id: 'live-scores',
    name: 'Live Scores & Fixtures',
    slug: 'live-scores',
    description: 'Live score apps, fixture calendars, and match results',
    icon: '⚽',
    toolCount: 0,
    order: 3,
  },
  {
    id: 'fantasy',
    name: 'Fantasy Football',
    slug: 'fantasy',
    description: 'DFS platforms, lineup optimizers, and player projections',
    icon: '🎯',
    toolCount: 0,
    order: 4,
  },
  {
    id: 'betting',
    name: 'Betting Tools',
    slug: 'betting',
    description: 'Odds comparison, calculators, and betting analytics',
    icon: '🎲',
    toolCount: 0,
    order: 5,
  },
  {
    id: 'analytics',
    name: 'Analytics & Stats',
    slug: 'analytics',
    description: 'xG tools, player analysis, and tactical software',
    icon: '📊',
    toolCount: 0,
    order: 6,
  },
  {
    id: 'streaming',
    name: 'Streaming & Broadcasting',
    slug: 'streaming',
    description: 'Where-to-watch guides and streaming finders',
    icon: '📺',
    toolCount: 0,
    order: 7,
  },
  {
    id: 'community',
    name: 'Social & Community',
    slug: 'community',
    description: 'Forums, prediction games, and fan platforms',
    icon: '💬',
    toolCount: 0,
    order: 8,
  },
  {
    id: 'training',
    name: 'Training & Coaching',
    slug: 'training',
    description: 'Tactical boards, drill databases, and video analysis',
    icon: '🏋️',
    toolCount: 0,
    order: 9,
  },
  {
    id: 'merchandise',
    name: 'Merchandise & Tickets',
    slug: 'merchandise',
    description: 'Jersey sites, ticket marketplaces, and price comparison',
    icon: '🎫',
    toolCount: 0,
    order: 10,
  },
  {
    id: 'games',
    name: 'Management Games',
    slug: 'games',
    description: 'FM tools, FIFA companions, and squad builders',
    icon: '🎮',
    toolCount: 0,
    order: 11,
  },
  {
    id: 'predictors',
    name: 'Predictors & Simulations',
    slug: 'predictors',
    description: 'Match predictors and season simulators',
    icon: '🔮',
    toolCount: 0,
    order: 12,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
