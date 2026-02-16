'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import CategoryCard from '@/components/CategoryCard';
import ToolCard from '@/components/ToolCard';
import PageLayout from '@/components/PageLayout';
import { getCategoriesWithCounts } from '@/lib/categories';
import { MARQUEE_IMAGES, AFCON_CARDS } from '@/lib/constants';
import type { Tool } from '@/types';

export default function Home() {
  const [featuredTools, setFeaturedTools] = useState<Tool[]>([]);
  const [allTools, setAllTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTools() {
      try {
        const response = await fetch('/api/tools');
        const data = await response.json();

        if (data.data) {
          setAllTools(data.data);
          setFeaturedTools(data.data.filter((tool: Tool) => tool.featured));
        }
      } catch (error) {
        console.error('Error fetching tools:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTools();
  }, []);

  const categoriesWithCounts = getCategoriesWithCounts(allTools);

  return (
    <PageLayout>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32" style={{ background: 'linear-gradient(180deg, rgba(1, 62, 92, 1) 0%, rgba(81, 144, 189, 1) 51%, rgba(255, 255, 255, 1) 100%)' }}>
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .hero-headline { animation: fadeIn 1s ease-out forwards; }
            .hero-subheading { animation: fadeIn 1s ease-out 0.3s forwards; opacity: 0; }
          `}</style>
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="hero-headline mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Everything Football, One Smart Directory
              </h1>
              <p className="hero-subheading mb-10 text-lg text-white md:text-xl">
                Discover the best curated tools for football fans, analysts, creators, and businesses. Updated weekly.
              </p>
            </div>
          </div>
        </section>

        {/* Football Action Marquee */}
        <section className="overflow-hidden bg-white py-4 dark:bg-gray-900">
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-content {
              animation: scroll 35s linear infinite;
              display: flex;
              gap: 1rem;
            }
            .marquee-content:hover { animation-play-state: paused; }
          `}</style>
          <div className="flex">
            <div className="marquee-content">
              {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="h-[300px] w-[240px] rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        {/* AFCON 2025 Section */}
        <section className="border-b border-gray-100 bg-gradient-to-br from-green-50 to-red-50 px-6 py-16 dark:border-gray-800 dark:from-green-950 dark:to-red-950">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {['AFCON 2025', 'Morocco', 'Tournament'].map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                AFCON 2025
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Everything you need for Africa Cup of Nations 2025
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AFCON_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                  style={{ height: '240px', paddingBottom: '3rem' }}
                >
                  <div className="flex items-center justify-center bg-black px-4" style={{ height: '168px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={card.svgViewBox} className="h-32 w-auto">
                      <path
                        fill={card.svgFill}
                        d={card.svgPath}
                        {...(card.svgFillRule ? { fillRule: card.svgFillRule } : {})}
                      />
                    </svg>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {card.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="border-b border-gray-100 px-6 py-16 md:py-24 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                  Featured Tools
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Top-rated and most popular in the directory
                </p>
              </div>
              <Link
                href="/tools"
                className="hidden text-sm font-medium text-gray-900 hover:text-pitch-600 md:block dark:text-white dark:hover:text-pitch-400"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                ))
              ) : featuredTools.length > 0 ? (
                featuredTools.slice(0, 6).map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
                  No featured tools available yet.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-6 py-16 md:py-24 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Browse by Category
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Find exactly what you&#39;re looking for
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoriesWithCounts.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-100 px-6 py-16 md:py-24 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Can&#39;t find what you&#39;re looking for?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Submit a tool and help grow the directory
            </p>
            <Link
              href="/submit"
              className="inline-block rounded-full bg-[#E4F222] px-8 py-4 font-semibold text-black transition-colors duration-200 hover:bg-[#F5F84D] dark:bg-[#E4F222] dark:hover:bg-[#E4F222]"
            >
              Submit a Tool
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
