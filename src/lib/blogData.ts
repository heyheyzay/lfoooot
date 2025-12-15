import { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Football Analytics Tools for 2025',
    slug: 'top-10-football-analytics-tools-2025',
    excerpt: 'Discover the best football analytics tools that are transforming how teams and fans analyze the beautiful game.',
    content: `Football analytics has revolutionized the way we understand and appreciate the beautiful game. From performance metrics to tactical analysis, modern tools provide unprecedented insights into player and team performance.

## Why Football Analytics Matter

In today's data-driven world, successful teams rely heavily on analytics to gain competitive advantages. Whether you're a professional scout, coach, or passionate fan, understanding these tools can deepen your appreciation of the game.

## The Evolution of Football Analytics

The journey from basic statistics to advanced machine learning models has been remarkable. Today's tools can predict player movements, analyze tactical patterns, and even forecast match outcomes with impressive accuracy.

## Key Features to Look For

When choosing analytics tools, consider factors like data accuracy, visualization capabilities, real-time updates, and integration with other platforms. The best tools combine powerful algorithms with intuitive interfaces.`,
    author: 'Sarah Johnson',
    publishedAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-10'),
    coverImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop',
    tags: ['Analytics', 'Technology', 'Data Science'],
    readTime: 5,
    featured: true,
  },
  {
    id: '2',
    title: 'How Live Score Apps Are Changing Fan Engagement',
    slug: 'live-score-apps-fan-engagement',
    excerpt: 'Explore how real-time score tracking and notifications have transformed the way fans follow football matches worldwide.',
    content: `Live score applications have fundamentally changed how football fans engage with the sport. No longer do we need to wait for television broadcasts or radio updates – everything is available instantly at our fingertips.

## The Mobile Revolution

The rise of smartphones has made following live football more accessible than ever. Modern apps provide not just scores, but detailed statistics, commentary, and even video highlights in real-time.

## Features That Matter

Today's fans expect more than just score updates. Push notifications, lineup changes, player statistics, and tactical maps have become standard features that enhance the viewing experience.

## The Social Aspect

Many live score apps now include social features, allowing fans to discuss matches, share reactions, and connect with supporters worldwide. This community aspect adds a new dimension to football fandom.`,
    author: 'Michael Chen',
    publishedAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
    coverImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop',
    tags: ['Live Scores', 'Mobile Apps', 'Fan Experience'],
    readTime: 4,
    featured: true,
  },
  {
    id: '3',
    title: 'Fantasy Football: Strategies for Success in 2025',
    slug: 'fantasy-football-strategies-2025',
    excerpt: 'Master the art of fantasy football with data-driven strategies and insights from top players.',
    content: `Fantasy football has evolved from a casual pastime into a serious competition requiring strategic thinking and data analysis. Success in modern fantasy leagues demands more than just knowing your favorite players.

## Understanding the Basics

Before diving into advanced strategies, it's crucial to understand point systems, transfer windows, and chip strategies. Each league has its own nuances that can significantly impact your success.

## Data-Driven Decision Making

The best fantasy managers rely on statistics, form analysis, and fixture difficulty to make informed decisions. Learning to interpret underlying numbers beyond goals and assists is key to consistent success.

## Common Mistakes to Avoid

From knee-jerk reactions to ignoring upcoming fixtures, many managers make predictable errors. Understanding these pitfalls can help you gain an edge over your competition.`,
    author: 'David Martinez',
    publishedAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-01-05'),
    coverImage: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&h=400&fit=crop',
    tags: ['Fantasy Football', 'Strategy', 'Gaming'],
    readTime: 6,
    featured: false,
  },
  {
    id: '4',
    title: 'The Rise of Football Streaming Platforms',
    slug: 'rise-of-football-streaming-platforms',
    excerpt: 'How streaming services are disrupting traditional football broadcasting and creating new viewing experiences.',
    content: `The landscape of football broadcasting is undergoing a dramatic transformation. Traditional television is no longer the only way to watch matches, as streaming platforms offer flexibility and features that TV cannot match.

## Cord-Cutting Revolution

More fans are abandoning traditional cable subscriptions in favor of streaming services that offer better value, flexibility, and additional features like multi-angle views and interactive statistics.

## Enhanced Viewing Experience

Modern streaming platforms provide features like pause and rewind, multiple camera angles, and integrated statistics that enhance the viewing experience beyond what traditional broadcasting offers.

## The Future of Football Broadcasting

As technology continues to evolve, we can expect even more innovation in how we consume football content. Virtual reality, augmented reality, and AI-powered personalization are just the beginning.`,
    author: 'Emma Thompson',
    publishedAt: new Date('2025-01-03'),
    updatedAt: new Date('2025-01-03'),
    coverImage: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=400&fit=crop',
    tags: ['Streaming', 'Broadcasting', 'Technology'],
    readTime: 5,
    featured: false,
  },
  {
    id: '5',
    title: 'AFCON 2025: Essential Tools for Following the Tournament',
    slug: 'afcon-2025-essential-tools',
    excerpt: 'Your complete guide to apps and platforms for tracking every moment of the Africa Cup of Nations.',
    content: `The Africa Cup of Nations is one of football's most exciting tournaments, bringing together the best teams from across the continent. With matches spanning multiple time zones and venues, having the right tools is essential for fans.

## Must-Have Apps for AFCON 2025

From live score trackers to tactical analysis platforms, we cover the essential applications every AFCON fan needs to stay connected with the tournament.

## Real-Time Updates

Following AFCON requires apps that provide instant notifications, accurate lineups, and reliable streaming information. We'll help you find the best options for comprehensive coverage.

## Social Media Integration

Connecting with other fans across Africa and around the world adds to the tournament experience. Discover platforms that facilitate this global football community.`,
    author: 'Kwame Nkrumah',
    publishedAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
    coverImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop',
    tags: ['AFCON', 'Tournament', 'Africa'],
    readTime: 4,
    featured: true,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.featured).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}
