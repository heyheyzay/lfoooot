import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function getPricingBadgeColor(pricing: string): string {
  switch (pricing) {
    case 'free':
      return 'bg-green-100 text-green-800';
    case 'freemium':
      return 'bg-blue-100 text-blue-800';
    case 'paid':
      return 'bg-purple-100 text-purple-800';
    case 'enterprise':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function getPlatformIcon(platform: string): string {
  switch (platform) {
    case 'web':
      return '🌐';
    case 'ios':
      return '🍎';
    case 'android':
      return '🤖';
    case 'api':
      return '⚡';
    default:
      return '💻';
  }
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
