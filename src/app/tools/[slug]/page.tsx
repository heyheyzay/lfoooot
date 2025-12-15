import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ToolCard from '@/components/ToolCard';
import { getToolBySlug, getToolById } from '@/lib/mockData';
import { getCategoryById } from '@/lib/categories';
import { getPricingBadgeColor, getPlatformIcon, formatNumber } from '@/lib/utils';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - ${tool.tagline} | Footfolio`,
    description: tool.description,
    keywords: tool.tags,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const alternatives = tool.alternatives
    .map((id) => getToolById(id))
    .filter((t) => t !== undefined);

  const category = getCategoryById(tool.categories[0]);
  const breadcrumbItems = category
    ? [
        { label: category.name, href: `/category/${category.slug}` },
        { label: tool.name },
      ]
    : [{ label: tool.name }];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-gray-50">
        {/* Tool Header */}
        <section className="border-b border-gray-200 bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100 text-4xl">
                  ⚽
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {tool.name}
                    </h1>
                    {tool.verified && (
                      <span className="text-pitch-600" title="Verified">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="mb-4 text-xl text-gray-600">{tool.tagline}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
                        getPricingBadgeColor(tool.pricing)
                      )}
                    >
                      {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                    </span>
                    {tool.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                      >
                        <span>{getPlatformIcon(platform)}</span>
                        <span>{platform.toUpperCase()}</span>
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.floor(tool.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">{tool.rating}</span>
                      <span className="text-gray-500">
                        ({formatNumber(tool.reviewCount)} reviews)
                      </span>
                    </div>
                    {tool.externalRatings?.userCount && (
                      <div className="text-gray-500">
                        {tool.externalRatings.userCount} users
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    <a
                      href={tool.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-[#e4e24e] px-8 py-3 font-semibold text-black transition-colors duration-200 hover:bg-[#f4f280]"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    About {tool.name}
                  </h2>
                  <p className="text-gray-700">{tool.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    Key Features
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 text-pitch-600">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pros and Cons */}
                <div className="mb-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <h3 className="mb-4 font-semibold text-gray-900">Pros</h3>
                    <ul className="space-y-2">
                      {tool.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600">+</span>
                          <span className="text-sm text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <h3 className="mb-4 font-semibold text-gray-900">Cons</h3>
                    <ul className="space-y-2">
                      {tool.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600">-</span>
                          <span className="text-sm text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Alternatives */}
                {alternatives.length > 0 && (
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">
                      Similar Tools
                    </h2>
                    <div className="grid gap-4">
                      {alternatives.map((alt) => (
                        <ToolCard key={alt.id} tool={alt} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Pricing */}
                {tool.pricingDetails && (
                  <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
                    <h3 className="mb-3 font-semibold text-gray-900">Pricing</h3>
                    <p className="text-sm text-gray-700">{tool.pricingDetails}</p>
                  </div>
                )}

                {/* Categories */}
                <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
                  <h3 className="mb-3 font-semibold text-gray-900">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.categories.map((catId) => {
                      const category = getCategoryById(catId);
                      return category ? (
                        <Link
                          key={catId}
                          href={`/category/${category.slug}`}
                          className="inline-flex items-center gap-1 rounded-full bg-pitch-50 px-3 py-1 text-sm text-pitch-700 hover:bg-pitch-100"
                        >
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Tags */}
                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <h3 className="mb-3 font-semibold text-gray-900">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
