import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  // Static pages
  const routes = ['', '/tools', '/submit', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch tools for dynamic routes
  let toolRoutes: MetadataRoute.Sitemap = [];
  try {
    const response = await fetch(`${baseUrl}/api/tools`, {
      cache: 'no-store'
    });
    const data = await response.json();

    if (data.data) {
      toolRoutes = data.data.map((tool: any) => ({
        url: `${baseUrl}/tools/${tool.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error('Error fetching tools for sitemap:', error);
  }

  // Category routes
  const categories = [
    'data-apis',
    'news-media',
    'live-scores',
    'fantasy',
    'betting',
    'analytics',
    'streaming',
    'community',
    'training',
    'merchandise',
    'games',
    'predictors'
  ];

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...categoryRoutes, ...toolRoutes];
}
