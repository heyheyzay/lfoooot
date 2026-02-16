import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';
import ToolCard from '@/components/ToolCard';
import CategoryIcon from '@/components/icons/CategoryIcon';
import { getCategoryBySlug, filterToolsByCategory } from '@/lib/categories';
import type { Metadata } from 'next';
import type { Tool } from '@/types';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.name} - Football Tools | Footfolio`,
    description: category.description,
  };
}

async function getToolsByCategory(categorySlug: string): Promise<Tool[]> {
  try {
    const category = getCategoryBySlug(categorySlug);
    if (!category) return [];

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/tools`, {
      cache: 'no-store'
    });
    const data = await response.json();

    if (data.data) {
      return filterToolsByCategory(data.data, category);
    }
    return [];
  } catch (error) {
    console.error('Error fetching tools:', error);
    return [];
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const tools = await getToolsByCategory(category.slug);

  return (
    <PageLayout>
      <Breadcrumb items={[{ label: category.name }]} />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <section className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex justify-center">
                <CategoryIcon categoryId={category.id} size="lg" />
              </div>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">{category.description}</p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {tools.length} {tools.length === 1 ? 'tool' : 'tools'} available
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {tools.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex justify-center">
                  <CategoryIcon categoryId={category.id} size="lg" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  No tools yet
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  We&#39;re currently curating the best {category.name.toLowerCase()} tools. Check back soon!
                </p>
                <a
                  href="/submit"
                  className="inline-block rounded-md bg-pitch-600 px-6 py-3 font-medium text-white hover:bg-pitch-700"
                >
                  Submit a Tool
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
