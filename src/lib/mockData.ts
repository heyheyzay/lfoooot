import { Tool } from '@/types';

export const MOCK_TOOLS: Tool[] = [
  {
    id: '1',
    name: 'FotMob',
    slug: 'fotmob',
    tagline: 'The world\'s best football app for live scores and stats',
    description: 'FotMob is a comprehensive football app that provides live scores, news, stats, and video highlights from leagues around the world. Features detailed match statistics, player ratings, and personalized notifications.',
    websiteUrl: 'https://www.fotmob.com',
    logoUrl: '/logos/fotmob.png',
    screenshots: [],
    categories: ['live-scores'],
    tags: ['live scores', 'statistics', 'mobile app', 'news'],
    pricing: 'freemium',
    pricingDetails: 'Free with optional Pro subscription ($5.99/month)',
    platforms: ['web', 'ios', 'android'],
    rating: 4.8,
    reviewCount: 15234,
    featured: true,
    verified: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-12-10'),
    features: [
      'Live scores and match updates',
      'Detailed player statistics',
      'Video highlights',
      'Push notifications',
      'League tables and fixtures',
      'Team and player profiles'
    ],
    pros: [
      'Clean, intuitive interface',
      'Comprehensive coverage of leagues worldwide',
      'Fast live updates',
      'Excellent mobile apps'
    ],
    cons: [
      'Some features require Pro subscription',
      'Ads in free version'
    ],
    alternatives: ['2', '3'],
    externalRatings: {
      appStore: 4.8,
      playStore: 4.7,
      userCount: '10M+'
    }
  },
  {
    id: '2',
    name: 'OneFootball',
    slug: 'onefootball',
    tagline: 'All the football you love, in one place',
    description: 'OneFootball delivers news, live scores, and video highlights from over 200 football competitions worldwide. Personalize your feed with your favorite teams and leagues.',
    websiteUrl: 'https://www.onefootball.com',
    logoUrl: '/logos/onefootball.png',
    screenshots: [],
    categories: ['live-scores', 'news-media'],
    tags: ['live scores', 'news', 'videos', 'mobile app'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.6,
    reviewCount: 8932,
    featured: true,
    verified: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-12-09'),
    features: [
      'Live scores from 200+ competitions',
      'Personalized news feed',
      'Video highlights',
      'Match statistics',
      'Transfer news',
      'Starting lineups'
    ],
    pros: [
      'Completely free',
      'Great video content',
      'Personalization options',
      'Wide competition coverage'
    ],
    cons: [
      'Interface can feel cluttered',
      'Ads can be intrusive'
    ],
    alternatives: ['1', '3'],
    externalRatings: {
      appStore: 4.7,
      playStore: 4.5,
      userCount: '50M+'
    }
  },
  {
    id: '3',
    name: 'FlashScore',
    slug: 'flashscore',
    tagline: 'The fastest live score service',
    description: 'FlashScore provides lightning-fast live scores for football and 30+ other sports. Known for being one of the quickest score update services available.',
    websiteUrl: 'https://www.flashscore.com',
    logoUrl: '/logos/flashscore.png',
    screenshots: [],
    categories: ['live-scores'],
    tags: ['live scores', 'fast updates', 'statistics'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.5,
    reviewCount: 12456,
    featured: false,
    verified: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-12-08'),
    features: [
      'Ultra-fast live score updates',
      'Detailed match statistics',
      'Head-to-head comparisons',
      'Standings and fixtures',
      'Custom notifications',
      'Multi-sport coverage'
    ],
    pros: [
      'Extremely fast updates',
      'Clean, minimalist design',
      'Reliable service',
      'Free to use'
    ],
    cons: [
      'Basic design',
      'Limited news content',
      'Ads present'
    ],
    alternatives: ['1', '2'],
    externalRatings: {
      appStore: 4.6,
      playStore: 4.4,
      userCount: '5M+'
    }
  },
  {
    id: '4',
    name: 'FBref',
    slug: 'fbref',
    tagline: 'Advanced football statistics and data',
    description: 'FBref is the go-to resource for advanced football statistics. Powered by Opta and StatsBomb data, it offers comprehensive stats for players, teams, and competitions.',
    websiteUrl: 'https://www.fbref.com',
    logoUrl: '/logos/fbref.png',
    screenshots: [],
    categories: ['analytics'],
    tags: ['statistics', 'analytics', 'data', 'advanced stats'],
    pricing: 'free',
    platforms: ['web'],
    rating: 4.9,
    reviewCount: 3421,
    featured: true,
    verified: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-11'),
    features: [
      'Advanced statistics (xG, xA, progressive passes)',
      'Player comparison tools',
      'Historical data',
      'Squad statistics',
      'Match reports with detailed stats',
      'Export data functionality'
    ],
    pros: [
      'Industry-leading statistical depth',
      'Free access to premium data',
      'Clean, data-focused interface',
      'Trusted by analysts worldwide'
    ],
    cons: [
      'Can be overwhelming for casual fans',
      'Mobile experience not optimized',
      'No app available'
    ],
    alternatives: ['5', '6'],
    externalRatings: {
      userCount: '2M+'
    }
  },
  {
    id: '5',
    name: 'Understat',
    slug: 'understat',
    tagline: 'Football analytics and xG data',
    description: 'Understat provides advanced analytics with a focus on expected goals (xG) models. Offers shot maps, player statistics, and team performance analysis.',
    websiteUrl: 'https://www.understat.com',
    logoUrl: '/logos/understat.png',
    screenshots: [],
    categories: ['analytics'],
    tags: ['xG', 'analytics', 'statistics', 'data visualization'],
    pricing: 'free',
    platforms: ['web'],
    rating: 4.7,
    reviewCount: 1876,
    featured: true,
    verified: true,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-12-07'),
    features: [
      'Expected goals (xG) analysis',
      'Shot maps and visualizations',
      'Player performance metrics',
      'Team statistics',
      'League tables with xG data',
      'Match-by-match breakdown'
    ],
    pros: [
      'Excellent xG model',
      'Great data visualizations',
      'Completely free',
      'Focus on key metrics'
    ],
    cons: [
      'Limited league coverage',
      'Basic design',
      'No mobile app'
    ],
    alternatives: ['4', '6'],
    externalRatings: {
      userCount: '500K+'
    }
  },
  {
    id: '6',
    name: 'WhoScored',
    slug: 'whoscored',
    tagline: 'Live scores, results and statistics',
    description: 'WhoScored combines live scores with detailed Opta-powered statistics and unique player ratings. Features match previews, team statistics, and transfer news.',
    websiteUrl: 'https://www.whoscored.com',
    logoUrl: '/logos/whoscored.png',
    screenshots: [],
    categories: ['analytics', 'live-scores'],
    tags: ['statistics', 'ratings', 'Opta', 'analysis'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.4,
    reviewCount: 5643,
    featured: false,
    verified: true,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-12-06'),
    features: [
      'Opta-powered player ratings',
      'Live match statistics',
      'Detailed player stats',
      'Team statistics and analysis',
      'Match previews and reports',
      'Chalkboard tactical analysis'
    ],
    pros: [
      'Comprehensive statistics',
      'Unique rating system',
      'Tactical analysis tools',
      'Good mobile apps'
    ],
    cons: [
      'Heavy advertising',
      'Interface feels dated',
      'Some stats require account'
    ],
    alternatives: ['4', '5'],
    externalRatings: {
      appStore: 4.3,
      playStore: 4.2,
      userCount: '3M+'
    }
  },
  {
    id: '7',
    name: 'API-Football',
    slug: 'api-football',
    tagline: 'The most complete football API',
    description: 'API-Football provides comprehensive football data through a REST API. Covers 1000+ competitions with live scores, statistics, fixtures, and historical data.',
    websiteUrl: 'https://www.api-football.com',
    logoUrl: '/logos/api-football.png',
    screenshots: [],
    categories: ['data-apis'],
    tags: ['API', 'developer', 'data', 'integration'],
    pricing: 'freemium',
    pricingDetails: 'Free tier: 100 requests/day. Paid plans from $15/month',
    platforms: ['api'],
    rating: 4.8,
    reviewCount: 892,
    featured: true,
    verified: true,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-12-10'),
    features: [
      'RESTful API',
      'Live scores and events',
      'Fixtures and results',
      'Player and team statistics',
      'Predictions and odds',
      'Historical data access',
      'Comprehensive documentation'
    ],
    pros: [
      'Extensive coverage',
      'Reliable and fast',
      'Great documentation',
      'Generous free tier'
    ],
    cons: [
      'Free tier limitations',
      'Can be expensive for high volume',
      'Rate limiting on lower tiers'
    ],
    alternatives: ['8', '9'],
    externalRatings: {
      userCount: '50K+ developers'
    }
  },
  {
    id: '8',
    name: 'Sportmonks',
    slug: 'sportmonks',
    tagline: 'Sports data API for developers',
    description: 'Sportmonks provides sports data APIs covering football and other sports. Offers flexible pricing and comprehensive data coverage for applications.',
    websiteUrl: 'https://www.sportmonks.com',
    logoUrl: '/logos/sportmonks.png',
    screenshots: [],
    categories: ['data-apis'],
    tags: ['API', 'developer', 'data', 'sports data'],
    pricing: 'freemium',
    pricingDetails: 'Free trial available. Plans from $19/month',
    platforms: ['api'],
    rating: 4.6,
    reviewCount: 567,
    featured: false,
    verified: true,
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-12-09'),
    features: [
      'Football data API',
      'Live scores and commentary',
      'Fixtures and standings',
      'Team and player data',
      'Betting odds integration',
      'WebSocket support',
      'Multi-sport coverage'
    ],
    pros: [
      'Competitive pricing',
      'Good documentation',
      'WebSocket support',
      'Multi-sport options'
    ],
    cons: [
      'Less comprehensive than some competitors',
      'Support can be slow',
      'Some data gaps'
    ],
    alternatives: ['7', '9'],
    externalRatings: {
      userCount: '20K+ developers'
    }
  },
  {
    id: '9',
    name: 'Football-Data.org',
    slug: 'football-data-org',
    tagline: 'Free football data API',
    description: 'Football-Data.org offers a free API for football data enthusiasts and developers. Covers major European competitions with fixtures, results, and standings.',
    websiteUrl: 'https://www.football-data.org',
    logoUrl: '/logos/football-data.png',
    screenshots: [],
    categories: ['data-apis'],
    tags: ['API', 'free', 'developer', 'open source'],
    pricing: 'free',
    platforms: ['api'],
    rating: 4.3,
    reviewCount: 432,
    featured: false,
    verified: true,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-12-08'),
    features: [
      'Free REST API',
      'Major European competitions',
      'Fixtures and results',
      'League standings',
      'Team and player data',
      'Simple authentication'
    ],
    pros: [
      'Completely free',
      'No credit card required',
      'Easy to use',
      'Good for learning'
    ],
    cons: [
      'Limited competition coverage',
      'Rate limits',
      'Less comprehensive data',
      'No live updates'
    ],
    alternatives: ['7', '8'],
    externalRatings: {
      userCount: '15K+ developers'
    }
  },
  {
    id: '10',
    name: 'The Athletic',
    slug: 'the-athletic',
    tagline: 'In-depth football journalism',
    description: 'The Athletic provides premium, ad-free sports journalism with in-depth analysis, investigative reporting, and expert commentary from top football writers.',
    websiteUrl: 'https://www.theathletic.com',
    logoUrl: '/logos/theathletic.png',
    screenshots: [],
    categories: ['news-media'],
    tags: ['news', 'journalism', 'analysis', 'premium'],
    pricing: 'paid',
    pricingDetails: '$9.99/month or $79.99/year',
    platforms: ['web', 'ios', 'android'],
    rating: 4.7,
    reviewCount: 4532,
    featured: true,
    verified: true,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-12-11'),
    features: [
      'Ad-free experience',
      'In-depth articles',
      'Podcasts',
      'Expert analysis',
      'Live match coverage',
      'Exclusive interviews',
      'Mobile apps'
    ],
    pros: [
      'High-quality journalism',
      'No ads',
      'Excellent writers',
      'Comprehensive coverage'
    ],
    cons: [
      'Subscription required',
      'Can be expensive',
      'No free tier'
    ],
    alternatives: ['11', '12'],
    externalRatings: {
      appStore: 4.6,
      playStore: 4.5,
      userCount: '2M+ subscribers'
    }
  },
  {
    id: '11',
    name: 'ESPN FC',
    slug: 'espn-fc',
    tagline: 'Football news and scores from ESPN',
    description: 'ESPN FC delivers the latest football news, scores, stats, and highlights from around the world. Features expert analysis, transfer news, and comprehensive coverage of major leagues.',
    websiteUrl: 'https://www.espn.com/soccer/',
    logoUrl: '/logos/espn.png',
    screenshots: [],
    categories: ['news-media', 'live-scores'],
    tags: ['news', 'scores', 'analysis', 'ESPN'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.5,
    reviewCount: 8234,
    featured: false,
    verified: true,
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-12-10'),
    features: [
      'Latest news and updates',
      'Live scores and results',
      'Expert analysis and commentary',
      'Transfer news and rumors',
      'Video highlights',
      'Team and player stats'
    ],
    pros: [
      'Trusted brand',
      'Free to access',
      'Comprehensive coverage',
      'Good video content'
    ],
    cons: [
      'Ads can be intrusive',
      'US-focused coverage',
      'Mobile app can be buggy'
    ],
    alternatives: ['10', '2'],
    externalRatings: {
      appStore: 4.4,
      playStore: 4.3,
      userCount: '5M+'
    }
  },
  {
    id: '12',
    name: 'DraftKings',
    slug: 'draftkings',
    tagline: 'Daily fantasy sports platform',
    description: 'DraftKings is a leading daily fantasy sports platform offering football contests with real money prizes. Features player projections, lineup builders, and live scoring.',
    websiteUrl: 'https://www.draftkings.com',
    logoUrl: '/logos/draftkings.png',
    screenshots: [],
    categories: ['fantasy'],
    tags: ['fantasy', 'DFS', 'contests', 'prizes'],
    pricing: 'freemium',
    pricingDetails: 'Free to join, pay entry fees for contests',
    platforms: ['web', 'ios', 'android'],
    rating: 4.4,
    reviewCount: 12345,
    featured: false,
    verified: true,
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date('2024-12-11'),
    features: [
      'Daily and weekly contests',
      'Real money prizes',
      'Player projections',
      'Lineup optimizer',
      'Live scoring',
      'Multiple contest types'
    ],
    pros: [
      'Large prize pools',
      'User-friendly interface',
      'Beginner-friendly contests',
      'Reliable payouts'
    ],
    cons: [
      'House takes significant cut',
      'Can be addictive',
      'Legal restrictions in some states'
    ],
    alternatives: ['13', '14'],
    externalRatings: {
      appStore: 4.5,
      playStore: 4.3,
      userCount: '5M+'
    }
  },
  {
    id: '13',
    name: 'FanDuel',
    slug: 'fanduel',
    tagline: 'Fantasy sports and sportsbook',
    description: 'FanDuel offers daily fantasy sports contests and sports betting. Features easy-to-use lineup building, live scoring, and competitive prize pools.',
    websiteUrl: 'https://www.fanduel.com',
    logoUrl: '/logos/fanduel.png',
    screenshots: [],
    categories: ['fantasy', 'betting'],
    tags: ['fantasy', 'DFS', 'betting', 'sportsbook'],
    pricing: 'freemium',
    pricingDetails: 'Free to join, pay entry fees for contests',
    platforms: ['web', 'ios', 'android'],
    rating: 4.5,
    reviewCount: 10987,
    featured: false,
    verified: true,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-12-09'),
    features: [
      'Daily fantasy contests',
      'Sports betting',
      'Live scoring',
      'Player projections',
      'Cash out options',
      'Beginner contests'
    ],
    pros: [
      'Easy to use',
      'Good promotions',
      'Fast payouts',
      'Reliable platform'
    ],
    cons: [
      'High rake',
      'Legal limitations',
      'Can be overwhelming for beginners'
    ],
    alternatives: ['12', '14'],
    externalRatings: {
      appStore: 4.6,
      playStore: 4.4,
      userCount: '4M+'
    }
  },
  {
    id: '14',
    name: 'Fantasy Premier League',
    slug: 'fantasy-premier-league',
    tagline: 'Official Premier League fantasy game',
    description: 'The official Fantasy Premier League game where you build and manage your dream team of Premier League players. Compete in leagues with friends and millions of players worldwide.',
    websiteUrl: 'https://fantasy.premierleague.com',
    logoUrl: '/logos/fpl.png',
    screenshots: [],
    categories: ['fantasy'],
    tags: ['fantasy', 'Premier League', 'free', 'official'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.7,
    reviewCount: 234567,
    featured: true,
    verified: true,
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-12-11'),
    features: [
      'Completely free to play',
      'Official PL data',
      'Private and public leagues',
      'Weekly prizes',
      'Transfer market',
      'Captain and vice-captain selection',
      'Chips and wildcards'
    ],
    pros: [
      'Totally free',
      'Huge player base',
      'Official PL integration',
      'Simple to understand'
    ],
    cons: [
      'Only Premier League',
      'Can be frustrating',
      'Limited in-game features'
    ],
    alternatives: ['12', '13'],
    externalRatings: {
      appStore: 4.7,
      playStore: 4.6,
      userCount: '11M+'
    }
  },
  {
    id: '15',
    name: 'OddsChecker',
    slug: 'oddschecker',
    tagline: 'Compare betting odds and find best value',
    description: 'OddsChecker is a comprehensive odds comparison site that helps you find the best betting value across hundreds of bookmakers. Features live odds updates and betting tips.',
    websiteUrl: 'https://www.oddschecker.com',
    logoUrl: '/logos/oddschecker.png',
    screenshots: [],
    categories: ['betting'],
    tags: ['odds comparison', 'betting', 'value', 'bookmakers'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.6,
    reviewCount: 5432,
    featured: true,
    verified: true,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-12-10'),
    features: [
      'Compare odds from 100+ bookmakers',
      'Live odds updates',
      'Betting tips',
      'Best odds guaranteed',
      'Odds movement tracking',
      'Accumulator calculator'
    ],
    pros: [
      'Comprehensive comparison',
      'Free to use',
      'Live updates',
      'User-friendly'
    ],
    cons: [
      'Ads present',
      'UK-focused',
      'Some bookmakers missing'
    ],
    alternatives: ['16', '17'],
    externalRatings: {
      appStore: 4.5,
      playStore: 4.4,
      userCount: '1M+'
    }
  },
  {
    id: '16',
    name: 'OddsPortal',
    slug: 'oddsportal',
    tagline: 'Betting odds and results archive',
    description: 'OddsPortal offers betting odds comparison, results archive, and betting trends. Features historical odds data and detailed statistics for informed betting decisions.',
    websiteUrl: 'https://www.oddsportal.com',
    logoUrl: '/logos/oddsportal.png',
    screenshots: [],
    categories: ['betting'],
    tags: ['odds', 'betting', 'historical data', 'statistics'],
    pricing: 'freemium',
    pricingDetails: 'Free with Premium subscription available',
    platforms: ['web'],
    rating: 4.4,
    reviewCount: 3421,
    featured: false,
    verified: true,
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-12-08'),
    features: [
      'Odds comparison',
      'Historical results',
      'Betting trends',
      'Dropping odds alerts',
      'Value bets finder',
      'Tipster ratings'
    ],
    pros: [
      'Extensive historical data',
      'Good for research',
      'Free basic features',
      'Multiple sports'
    ],
    cons: [
      'Dated interface',
      'Premium features paywall',
      'Can be complex'
    ],
    alternatives: ['15', '17'],
    externalRatings: {
      userCount: '500K+'
    }
  },
  {
    id: '17',
    name: 'Bet365',
    slug: 'bet365',
    tagline: 'World\'s favorite online sports betting company',
    description: 'Bet365 is one of the world\'s largest online gambling companies offering sports betting, live streaming, and in-play betting on football and other sports.',
    websiteUrl: 'https://www.bet365.com',
    logoUrl: '/logos/bet365.png',
    screenshots: [],
    categories: ['betting', 'streaming'],
    tags: ['betting', 'sportsbook', 'live streaming', 'in-play'],
    pricing: 'free',
    pricingDetails: 'Free to join, deposit required for betting',
    platforms: ['web', 'ios', 'android'],
    rating: 4.5,
    reviewCount: 45678,
    featured: false,
    verified: true,
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-12-11'),
    features: [
      'Live streaming of matches',
      'In-play betting',
      'Cash out options',
      'Competitive odds',
      'Mobile app',
      'Live match statistics'
    ],
    pros: [
      'Excellent live streaming',
      'Wide market coverage',
      'Reliable platform',
      'Good odds'
    ],
    cons: [
      'Requires deposit for streaming',
      'Can restrict winning accounts',
      'Addictive nature of gambling'
    ],
    alternatives: ['15', '16'],
    externalRatings: {
      appStore: 4.6,
      playStore: 4.5,
      userCount: '80M+'
    }
  },
  {
    id: '18',
    name: 'LiveSoccerTV',
    slug: 'livesoccertv',
    tagline: 'Find where to watch football on TV and streaming',
    description: 'LiveSoccerTV helps you find where to watch any football match on TV or streaming services. Features global TV schedules and streaming guides.',
    websiteUrl: 'https://www.livesoccertv.com',
    logoUrl: '/logos/livesoccertv.png',
    screenshots: [],
    categories: ['streaming'],
    tags: ['streaming', 'TV guide', 'where to watch', 'schedules'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.7,
    reviewCount: 6789,
    featured: false,
    verified: true,
    createdAt: new Date('2024-03-25'),
    updatedAt: new Date('2024-12-09'),
    features: [
      'Global TV schedules',
      'Streaming availability',
      'Match reminders',
      'Team-specific filters',
      'Competition coverage',
      'Time zone conversion'
    ],
    pros: [
      'Comprehensive coverage',
      'Free to use',
      'Accurate information',
      'Global reach'
    ],
    cons: [
      'Ads present',
      'UI could be better',
      'Sometimes outdated info'
    ],
    alternatives: ['17', '1'],
    externalRatings: {
      appStore: 4.6,
      playStore: 4.5,
      userCount: '2M+'
    }
  },
  {
    id: '19',
    name: 'Transfermarkt',
    slug: 'transfermarkt',
    tagline: 'Football transfers, market values, and news',
    description: 'Transfermarkt is the leading platform for football transfer news, market values, and player statistics. Features detailed player profiles and transfer histories.',
    websiteUrl: 'https://www.transfermarkt.com',
    logoUrl: '/logos/transfermarkt.png',
    screenshots: [],
    categories: ['news-media', 'analytics'],
    tags: ['transfers', 'market values', 'statistics', 'news'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.6,
    reviewCount: 9876,
    featured: false,
    verified: true,
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-12-11'),
    features: [
      'Player market values',
      'Transfer news and rumors',
      'Detailed player profiles',
      'Transfer history',
      'Club information',
      'Contract details'
    ],
    pros: [
      'Comprehensive database',
      'Free access',
      'Active community',
      'Regular updates'
    ],
    cons: [
      'Market values subjective',
      'Heavy advertising',
      'Mobile experience varies'
    ],
    alternatives: ['10', '11'],
    externalRatings: {
      appStore: 4.5,
      playStore: 4.4,
      userCount: '10M+'
    }
  },
  {
    id: '20',
    name: 'Wyscout',
    slug: 'wyscout',
    tagline: 'Professional football video and data platform',
    description: 'Wyscout is a professional platform used by scouts, coaches, and analysts. Provides video analysis, player data, and scouting tools for professional use.',
    websiteUrl: 'https://www.wyscout.com',
    logoUrl: '/logos/wyscout.png',
    screenshots: [],
    categories: ['analytics', 'training'],
    tags: ['scouting', 'video analysis', 'professional', 'data'],
    pricing: 'enterprise',
    pricingDetails: 'Contact for pricing - professional/club licenses',
    platforms: ['web'],
    rating: 4.8,
    reviewCount: 1234,
    featured: false,
    verified: true,
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-12-10'),
    features: [
      'Match video footage',
      'Advanced statistics',
      'Player scouting tools',
      'Team analysis',
      'Custom reports',
      'Global player database'
    ],
    pros: [
      'Professional-grade tools',
      'Extensive video library',
      'Used by top clubs',
      'Comprehensive data'
    ],
    cons: [
      'Very expensive',
      'Professional use only',
      'Steep learning curve',
      'Requires training'
    ],
    alternatives: ['4', '5'],
    externalRatings: {
      userCount: '1000+ organizations'
    }
  },
  {
    id: '21',
    name: 'SofaScore',
    slug: 'sofascore',
    tagline: 'Live scores and statistics for football',
    description: 'SofaScore provides detailed live scores, statistics, and standings for football and other sports. Features heatmaps, player ratings, and in-depth match analysis.',
    websiteUrl: 'https://www.sofascore.com',
    logoUrl: '/logos/sofascore.png',
    screenshots: [],
    categories: ['live-scores', 'analytics'],
    tags: ['live scores', 'statistics', 'heatmaps', 'ratings'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.8,
    reviewCount: 18765,
    featured: true,
    verified: true,
    createdAt: new Date('2024-04-10'),
    updatedAt: new Date('2024-12-11'),
    features: [
      'Live scores with commentary',
      'Player ratings and heatmaps',
      'Attack momentum graphs',
      'Detailed statistics',
      'Head-to-head records',
      'Lineups and formations'
    ],
    pros: [
      'Beautiful interface',
      'Detailed statistics',
      'Free to use',
      'Great mobile apps'
    ],
    cons: [
      'Some ads present',
      'Occasional bugs',
      'Battery drain on mobile'
    ],
    alternatives: ['1', '3'],
    externalRatings: {
      appStore: 4.8,
      playStore: 4.7,
      userCount: '15M+'
    }
  },
  {
    id: '22',
    name: 'Football Manager',
    slug: 'football-manager',
    tagline: 'The world\'s best football management simulation',
    description: 'Football Manager is the most realistic football management simulation game. Build your dream team, develop tactics, and lead your club to glory.',
    websiteUrl: 'https://www.footballmanager.com',
    logoUrl: '/logos/fm.png',
    screenshots: [],
    categories: ['games'],
    tags: ['management', 'simulation', 'game', 'tactics'],
    pricing: 'paid',
    pricingDetails: '$49.99 for full game, mobile versions available',
    platforms: ['web'],
    rating: 4.6,
    reviewCount: 45678,
    featured: false,
    verified: true,
    createdAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-12-09'),
    features: [
      'Realistic match engine',
      'Comprehensive player database',
      'Tactical customization',
      'Transfer market',
      'Youth development',
      'Multiple leagues'
    ],
    pros: [
      'Incredibly detailed',
      'Highly realistic',
      'Great depth',
      'Active community'
    ],
    cons: [
      'Steep learning curve',
      'Time-consuming',
      'Can be overwhelming',
      'Annual purchase required'
    ],
    alternatives: ['23', '24'],
    externalRatings: {
      userCount: '3M+'
    }
  },
  {
    id: '23',
    name: 'FUTBIN',
    slug: 'futbin',
    tagline: 'FIFA Ultimate Team database and squad builder',
    description: 'FUTBIN is the ultimate FIFA Ultimate Team companion with player prices, squad builder, SBC solutions, and market analysis.',
    websiteUrl: 'https://www.futbin.com',
    logoUrl: '/logos/futbin.png',
    screenshots: [],
    categories: ['games'],
    tags: ['FIFA', 'Ultimate Team', 'squad builder', 'prices'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.7,
    reviewCount: 12345,
    featured: false,
    verified: true,
    createdAt: new Date('2024-04-20'),
    updatedAt: new Date('2024-12-10'),
    features: [
      'Player price tracking',
      'Squad builder',
      'SBC solutions',
      'Player comparisons',
      'Market trends',
      'Player ratings database'
    ],
    pros: [
      'Free to use',
      'Comprehensive database',
      'Active community',
      'Regular updates'
    ],
    cons: [
      'FIFA-specific only',
      'Ads present',
      'Can lag during peak times'
    ],
    alternatives: ['24', '22'],
    externalRatings: {
      appStore: 4.6,
      playStore: 4.5,
      userCount: '5M+'
    }
  },
  {
    id: '24',
    name: 'FiveThirtyEight Soccer',
    slug: 'fivethirtyeight-soccer',
    tagline: 'Data-driven football predictions and analysis',
    description: 'FiveThirtyEight provides data-driven football predictions, power rankings, and match forecasts using advanced statistical models.',
    websiteUrl: 'https://www.fivethirtyeight.com/soccer',
    logoUrl: '/logos/538.png',
    screenshots: [],
    categories: ['analytics', 'predictors'],
    tags: ['predictions', 'statistics', 'data', 'analysis'],
    pricing: 'free',
    platforms: ['web'],
    rating: 4.5,
    reviewCount: 2345,
    featured: false,
    verified: true,
    createdAt: new Date('2024-04-25'),
    updatedAt: new Date('2024-12-11'),
    features: [
      'Match predictions',
      'Power rankings',
      'Title probabilities',
      'Historical data',
      'Methodology transparency',
      'Interactive charts'
    ],
    pros: [
      'Data-driven approach',
      'Free access',
      'Transparent methodology',
      'Well-researched'
    ],
    cons: [
      'Limited league coverage',
      'No mobile app',
      'Updates can be slow'
    ],
    alternatives: ['4', '5'],
    externalRatings: {
      userCount: '1M+'
    }
  },
  {
    id: '25',
    name: 'The Guardian Football',
    slug: 'guardian-football',
    tagline: 'Award-winning football journalism',
    description: 'The Guardian offers award-winning football journalism with match reports, analysis, opinion pieces, and breaking news from around the world.',
    websiteUrl: 'https://www.theguardian.com/football',
    logoUrl: '/logos/guardian.png',
    screenshots: [],
    categories: ['news-media'],
    tags: ['news', 'journalism', 'analysis', 'free'],
    pricing: 'free',
    platforms: ['web', 'ios', 'android'],
    rating: 4.6,
    reviewCount: 7890,
    featured: false,
    verified: true,
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-12-10'),
    features: [
      'Breaking news',
      'Match reports',
      'Opinion and analysis',
      'Podcasts',
      'Live blogs',
      'Video content'
    ],
    pros: [
      'High-quality journalism',
      'Free to access',
      'No paywall',
      'Great writers'
    ],
    cons: [
      'Some ads',
      'Donation requests',
      'UK-centric at times'
    ],
    alternatives: ['10', '11'],
    externalRatings: {
      appStore: 4.5,
      playStore: 4.4,
      userCount: '3M+'
    }
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return MOCK_TOOLS.find((tool) => tool.slug === slug);
}

export function getToolById(id: string): Tool | undefined {
  return MOCK_TOOLS.find((tool) => tool.id === id);
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return MOCK_TOOLS.filter((tool) => tool.categories.includes(categoryId));
}

export function getFeaturedTools(): Tool[] {
  return MOCK_TOOLS.filter((tool) => tool.featured);
}

export function searchTools(query: string): Tool[] {
  const lowercaseQuery = query.toLowerCase();
  return MOCK_TOOLS.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
