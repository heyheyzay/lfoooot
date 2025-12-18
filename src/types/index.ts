export type PricingType = 'free' | 'freemium' | 'paid' | 'enterprise';
export type PlatformType = 'web' | 'ios' | 'android' | 'api';

export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  logoUrl?: string;
  screenshots?: string[];
  categories: string[];
  tags: string[];
  pricing: PricingType | string;
  pricingDetails?: string;
  platforms: PlatformType[] | string[];
  rating?: number;
  reviewCount?: number;
  featured: boolean;
  verified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  features?: string[];
  pros?: string[];
  cons?: string[];
  alternatives?: string[];
  externalRatings?: {
    appStore?: number;
    playStore?: number;
    userCount?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  toolCount: number;
  order: number;
}

export interface Review {
  id: string;
  toolId: string;
  userName: string;
  rating: number;
  comment: string;
  verified: boolean;
  createdAt: Date;
}

export interface FilterOptions {
  pricing?: PricingType[];
  platforms?: PlatformType[];
  rating?: number;
  categories?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  coverImage: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}
