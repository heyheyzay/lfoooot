// AFCON 2025 Morocco Data
// Tournament: 21 Dec 2025 - 18 Jan 2026

export interface Team {
  code: string;
  name: string;
  group: string;
  flag?: string;
}

export interface Stadium {
  id: string;
  name: string;
  city: string;
  capacity?: number;
}

export interface Match {
  id: number;
  date: string;
  time?: string;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  group?: string;
  stage: 'group' | 'round-of-16' | 'quarter-final' | 'semi-final' | '3rd-place' | 'final';
}

// Teams by Group
export const TEAMS: Team[] = [
  // Group A
  { code: 'MAR', name: 'Morocco', group: 'A' },
  { code: 'MLI', name: 'Mali', group: 'A' },
  { code: 'ZAM', name: 'Zambia', group: 'A' },
  { code: 'COM', name: 'Comoros', group: 'A' },

  // Group B
  { code: 'EGY', name: 'Egypt', group: 'B' },
  { code: 'RSA', name: 'South Africa', group: 'B' },
  { code: 'ANG', name: 'Angola', group: 'B' },
  { code: 'ZIM', name: 'Zimbabwe', group: 'B' },

  // Group C
  { code: 'NGA', name: 'Nigeria', group: 'C' },
  { code: 'TUN', name: 'Tunisia', group: 'C' },
  { code: 'UGA', name: 'Uganda', group: 'C' },
  { code: 'TAN', name: 'Tanzania', group: 'C' },

  // Group D
  { code: 'SEN', name: 'Senegal', group: 'D' },
  { code: 'COD', name: 'DR Congo', group: 'D' },
  { code: 'BEN', name: 'Benin', group: 'D' },
  { code: 'BOT', name: 'Botswana', group: 'D' },

  // Group E
  { code: 'ALG', name: 'Algeria', group: 'E' },
  { code: 'BFA', name: 'Burkina Faso', group: 'E' },
  { code: 'EQG', name: 'Equatorial Guinea', group: 'E' },
  { code: 'SDN', name: 'Sudan', group: 'E' },

  // Group F
  { code: 'CIV', name: 'Côte d\'Ivoire', group: 'F' },
  { code: 'CMR', name: 'Cameroon', group: 'F' },
  { code: 'GAB', name: 'Gabon', group: 'F' },
  { code: 'MOZ', name: 'Mozambique', group: 'F' },
];

// Stadiums
export const STADIUMS: Stadium[] = [
  {
    id: 'rabat-1',
    name: 'Complexe Sportif Prince Moulay Abdellah',
    city: 'Rabat',
  },
  {
    id: 'rabat-2',
    name: 'Complexe Sportif Prince Héritier Moulay El Hassan',
    city: 'Rabat',
  },
  {
    id: 'rabat-3',
    name: 'Stade El Barid',
    city: 'Rabat',
  },
  {
    id: 'rabat-4',
    name: 'Stade Annexe Olympique Complexe Sportif Prince Moulay Abdellah',
    city: 'Rabat',
  },
  {
    id: 'casablanca',
    name: 'Stade Mohammed V',
    city: 'Casablanca',
  },
  {
    id: 'fes',
    name: 'Complexe Sportif de Fes',
    city: 'Fes',
  },
  {
    id: 'tangier',
    name: 'Grand Stade de Tanger',
    city: 'Tangier',
  },
  {
    id: 'marrakech',
    name: 'Grand Stade de Marrakech',
    city: 'Marrakech',
  },
  {
    id: 'agadir',
    name: 'Grand Stade d\'Agadir',
    city: 'Agadir',
  },
];

// Group Stage Matches
export const MATCHES: Match[] = [
  // Group A
  { id: 1, date: '2025-12-21', homeTeam: 'MAR', awayTeam: 'COM', stadium: 'rabat-1', group: 'A', stage: 'group' },
  { id: 2, date: '2025-12-22', homeTeam: 'MLI', awayTeam: 'ZAM', stadium: 'casablanca', group: 'A', stage: 'group' },
  { id: 13, date: '2025-12-25', homeTeam: 'MAR', awayTeam: 'MLI', stadium: 'rabat-1', group: 'A', stage: 'group' },
  { id: 14, date: '2025-12-25', homeTeam: 'ZAM', awayTeam: 'COM', stadium: 'casablanca', group: 'A', stage: 'group' },
  { id: 25, date: '2025-12-29', homeTeam: 'ZAM', awayTeam: 'MAR', stadium: 'rabat-1', group: 'A', stage: 'group' },
  { id: 26, date: '2025-12-29', homeTeam: 'COM', awayTeam: 'MLI', stadium: 'casablanca', group: 'A', stage: 'group' },

  // Group B
  { id: 3, date: '2025-12-21', homeTeam: 'EGY', awayTeam: 'ZIM', stadium: 'agadir', group: 'B', stage: 'group' },
  { id: 4, date: '2025-12-21', homeTeam: 'RSA', awayTeam: 'ANG', stadium: 'marrakech', group: 'B', stage: 'group' },
  { id: 15, date: '2025-12-25', homeTeam: 'EGY', awayTeam: 'RSA', stadium: 'agadir', group: 'B', stage: 'group' },
  { id: 16, date: '2025-12-26', homeTeam: 'ANG', awayTeam: 'ZIM', stadium: 'marrakech', group: 'B', stage: 'group' },
  { id: 27, date: '2025-12-29', homeTeam: 'ANG', awayTeam: 'EGY', stadium: 'agadir', group: 'B', stage: 'group' },
  { id: 28, date: '2025-12-29', homeTeam: 'ZIM', awayTeam: 'RSA', stadium: 'marrakech', group: 'B', stage: 'group' },

  // Group C
  { id: 5, date: '2025-12-22', homeTeam: 'NGA', awayTeam: 'TAN', stadium: 'fes', group: 'C', stage: 'group' },
  { id: 6, date: '2025-12-22', homeTeam: 'TUN', awayTeam: 'UGA', stadium: 'rabat-4', group: 'C', stage: 'group' },
  { id: 17, date: '2025-12-26', homeTeam: 'NGA', awayTeam: 'TUN', stadium: 'fes', group: 'C', stage: 'group' },
  { id: 18, date: '2025-12-26', homeTeam: 'UGA', awayTeam: 'TAN', stadium: 'rabat-3', group: 'C', stage: 'group' },
  { id: 29, date: '2025-12-30', homeTeam: 'UGA', awayTeam: 'NGA', stadium: 'fes', group: 'C', stage: 'group' },
  { id: 30, date: '2025-12-30', homeTeam: 'TAN', awayTeam: 'TUN', stadium: 'rabat-4', group: 'C', stage: 'group' },

  // Group D
  { id: 7, date: '2025-12-22', homeTeam: 'SEN', awayTeam: 'BOT', stadium: 'tangier', group: 'D', stage: 'group' },
  { id: 8, date: '2025-12-22', homeTeam: 'COD', awayTeam: 'BEN', stadium: 'rabat-3', group: 'D', stage: 'group' },
  { id: 19, date: '2025-12-26', homeTeam: 'SEN', awayTeam: 'COD', stadium: 'tangier', group: 'D', stage: 'group' },
  { id: 20, date: '2025-12-26', homeTeam: 'BEN', awayTeam: 'BOT', stadium: 'rabat-4', group: 'D', stage: 'group' },
  { id: 31, date: '2025-12-30', homeTeam: 'BEN', awayTeam: 'SEN', stadium: 'tangier', group: 'D', stage: 'group' },
  { id: 32, date: '2025-12-30', homeTeam: 'BOT', awayTeam: 'COD', stadium: 'rabat-3', group: 'D', stage: 'group' },

  // Group E
  { id: 9, date: '2025-12-23', homeTeam: 'ALG', awayTeam: 'SDN', stadium: 'rabat-2', group: 'E', stage: 'group' },
  { id: 10, date: '2025-12-23', homeTeam: 'BFA', awayTeam: 'EQG', stadium: 'casablanca', group: 'E', stage: 'group' },
  { id: 21, date: '2025-12-27', homeTeam: 'ALG', awayTeam: 'BFA', stadium: 'rabat-2', group: 'E', stage: 'group' },
  { id: 22, date: '2025-12-27', homeTeam: 'EQG', awayTeam: 'SDN', stadium: 'casablanca', group: 'E', stage: 'group' },
  { id: 33, date: '2025-12-31', homeTeam: 'EQG', awayTeam: 'ALG', stadium: 'rabat-2', group: 'E', stage: 'group' },
  { id: 34, date: '2025-12-31', homeTeam: 'SDN', awayTeam: 'BFA', stadium: 'casablanca', group: 'E', stage: 'group' },

  // Group F
  { id: 11, date: '2025-12-23', homeTeam: 'CIV', awayTeam: 'MOZ', stadium: 'marrakech', group: 'F', stage: 'group' },
  { id: 12, date: '2025-12-23', homeTeam: 'CMR', awayTeam: 'GAB', stadium: 'agadir', group: 'F', stage: 'group' },
  { id: 23, date: '2025-12-27', homeTeam: 'CIV', awayTeam: 'CMR', stadium: 'marrakech', group: 'F', stage: 'group' },
  { id: 24, date: '2025-12-28', homeTeam: 'GAB', awayTeam: 'MOZ', stadium: 'agadir', group: 'F', stage: 'group' },
  { id: 35, date: '2026-01-01', homeTeam: 'GAB', awayTeam: 'CIV', stadium: 'marrakech', group: 'F', stage: 'group' },
  { id: 36, date: '2026-01-01', homeTeam: 'MOZ', awayTeam: 'CMR', stadium: 'agadir', group: 'F', stage: 'group' },

  // Round of 16
  { id: 37, date: '2026-01-05', homeTeam: '1D', awayTeam: '3B/E/F', stadium: 'tangier', stage: 'round-of-16' },
  { id: 38, date: '2026-01-05', homeTeam: '2A', awayTeam: '2C', stadium: 'agadir', stage: 'round-of-16' },
  { id: 39, date: '2026-01-06', homeTeam: '1A', awayTeam: '3C/D/E', stadium: 'agadir', stage: 'round-of-16' },
  { id: 40, date: '2026-01-06', homeTeam: '2B', awayTeam: '2F', stadium: 'rabat-1', stage: 'round-of-16' },
  { id: 41, date: '2026-01-07', homeTeam: '1B', awayTeam: '3A/C/D', stadium: 'marrakech', stage: 'round-of-16' },
  { id: 42, date: '2026-01-07', homeTeam: '1C', awayTeam: '3A/B/F', stadium: 'rabat-1', stage: 'round-of-16' },
  { id: 43, date: '2026-01-08', homeTeam: '1E', awayTeam: '2D', stadium: 'agadir', stage: 'round-of-16' },
  { id: 44, date: '2026-01-08', homeTeam: '1F', awayTeam: '2E', stadium: 'marrakech', stage: 'round-of-16' },

  // Quarter Finals
  { id: 45, date: '2026-01-11', homeTeam: 'W45', awayTeam: 'W48', stadium: 'rabat-1', stage: 'quarter-final' },
  { id: 46, date: '2026-01-12', homeTeam: 'W47', awayTeam: 'W46', stadium: 'rabat-1', stage: 'quarter-final' },
  { id: 47, date: '2026-01-11', homeTeam: 'W43', awayTeam: 'W42', stadium: 'marrakech', stage: 'quarter-final' },
  { id: 48, date: '2026-01-12', homeTeam: 'W41', awayTeam: 'W44', stadium: 'marrakech', stage: 'quarter-final' },

  // Semi Finals
  { id: 49, date: '2026-01-15', homeTeam: 'W45', awayTeam: 'W48', stadium: 'rabat-1', stage: 'semi-final' },
  { id: 50, date: '2026-01-16', homeTeam: 'W47', awayTeam: 'W46', stadium: 'rabat-1', stage: 'semi-final' },

  // 3rd Place
  { id: 51, date: '2026-01-17', homeTeam: 'L49', awayTeam: 'L50', stadium: 'rabat-1', stage: '3rd-place' },

  // Final
  { id: 52, date: '2026-01-18', homeTeam: 'W49', awayTeam: 'W50', stadium: 'rabat-1', stage: 'final' },
];

// Helper functions
export function getTeamsByGroup(group: string): Team[] {
  return TEAMS.filter(team => team.group === group);
}

export function getMatchesByGroup(group: string): Match[] {
  return MATCHES.filter(match => match.group === group);
}

export function getMatchesByStage(stage: Match['stage']): Match[] {
  return MATCHES.filter(match => match.stage === stage);
}

export function getStadiumById(id: string): Stadium | undefined {
  return STADIUMS.find(stadium => stadium.id === id);
}

export function getTeamByCode(code: string): Team | undefined {
  return TEAMS.find(team => team.code === code);
}

export const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F'];

export const TOURNAMENT_INFO = {
  name: 'TotalEnergies CAF Africa Cup of Nations',
  year: 'Morocco 2025',
  startDate: '2025-12-21',
  endDate: '2026-01-18',
  host: 'Morocco',
};
