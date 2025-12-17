import type { Tool } from '@/types';

export async function getTools(): Promise<Tool[]> {
  try {
    // Determine the base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
                    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

    const response = await fetch(`${baseUrl}/api/tools`, {
      // Revalidate every 15 minutes
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tools');
    }

    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching tools:', error);
    // Return empty array on error (fallback)
    return [];
  }
}

export async function getFeaturedTools(): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter(tool => tool.featured);
}

export async function getToolsByCategory(categoryId: string): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter(tool => tool.categories.includes(categoryId));
}

export async function getToolBySlug(slug: string): Promise<Tool | undefined> {
  const tools = await getTools();
  return tools.find(tool => tool.slug === slug);
}

export async function searchTools(query: string): Promise<Tool[]> {
  const tools = await getTools();
  const lowerQuery = query.toLowerCase();

  return tools.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.tagline.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
