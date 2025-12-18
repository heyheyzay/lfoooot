import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ToolCard from '@/components/ToolCard';
import { getCategoryBySlug } from '@/lib/categories';
import type { Metadata } from 'next';
import DataApiIcon from '@/components/icons/DataApiIcon';
import NewsMediaIcon from '@/components/icons/NewsMediaIcon';
import LiveScoreIcon from '@/components/icons/LiveScoreIcon';
import FantasyIcon from '@/components/icons/FantasyIcon';
import BettingIcon from '@/components/icons/BettingIcon';
import AnalyticsIcon from '@/components/icons/AnalyticsIcon';
import StreamingIcon from '@/components/icons/StreamingIcon';
import CommunityIcon from '@/components/icons/CommunityIcon';
import TrainingIcon from '@/components/icons/TrainingIcon';
import MerchandiseIcon from '@/components/icons/MerchandiseIcon';
import ManagementIcon from '@/components/icons/ManagementIcon';
import PredictorsIcon from '@/components/icons/PredictorsIcon';

const getCategoryIcon = (categoryId: string) => {
  const iconClass = "h-16 w-16";
  switch (categoryId) {
    case 'data-apis':
      return <DataApiIcon className={`${iconClass} text-purple-500`} />;
    case 'news-media':
      return <NewsMediaIcon className={`${iconClass} text-green-500`} />;
    case 'live-scores':
      return <LiveScoreIcon className={`${iconClass} text-purple-500`} />;
    case 'fantasy':
      return <FantasyIcon className={`${iconClass} text-purple-500`} />;
    case 'betting':
      return <BettingIcon className={`${iconClass} text-green-500`} />;
    case 'analytics':
      return <AnalyticsIcon className={`${iconClass} text-orange-500`} />;
    case 'streaming':
      return <StreamingIcon className={`${iconClass} text-blue-500`} />;
    case 'community':
      return <CommunityIcon className={`${iconClass} text-green-500`} />;
    case 'training':
      return <TrainingIcon className={`${iconClass} text-blue-500`} />;
    case 'merchandise':
      return <MerchandiseIcon className={`${iconClass} text-green-500`} />;
    case 'games':
      return <ManagementIcon className={`${iconClass} text-blue-500`} />;
    case 'predictors':
      return <PredictorsIcon className={`${iconClass} text-orange-500`} />;
    default:
      return null;
  }
};

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} - Football Tools | Footfolio`,
    description: category.description,
  };
}

async function getToolsByCategory(categorySlug: string, categoryName: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/tools`, {
      cache: 'no-store'
    });
    const data = await response.json();

    if (data.data) {
      // Filter tools that match the category name or slug
      return data.data.filter((tool: any) =>
        tool.categories.some((cat: string) =>
          cat.toLowerCase() === categoryName.toLowerCase() ||
          cat.toLowerCase() === categorySlug.toLowerCase() ||
          cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '') === categorySlug.toLowerCase()
        )
      );
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

  const tools = await getToolsByCategory(category.slug, category.name);

  return (
    <>
      <Navigation />
      <Breadcrumb items={[{ label: category.name }]} />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="border-b border-gray-200 bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex justify-center">{getCategoryIcon(category.id)}</div>
              <h1 className="mb-4 text-4xl font-bold text-gray-900">
                {category.name}
              </h1>
              <p className="text-lg text-gray-600">{category.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                {tools.length} {tools.length === 1 ? 'tool' : 'tools'} available
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {tools.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
                <div className="mb-4 flex justify-center">{getCategoryIcon(category.id)}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  No tools yet
                </h3>
                <p className="mb-6 text-gray-600">
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
      <Footer />
    </>
  );
}
