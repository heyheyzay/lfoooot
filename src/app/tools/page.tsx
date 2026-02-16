'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ToolCard from '@/components/ToolCard';
import PageLayout from '@/components/PageLayout';
import { CATEGORIES, matchesCategory } from '@/lib/categories';
import type { Tool } from '@/types';

export default function ToolsPage() {
  const [allTools, setAllTools] = useState<Tool[]>([]);
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTools() {
      try {
        const response = await fetch('/api/tools');
        const data = await response.json();

        if (data.data) {
          setAllTools(data.data);
          setFilteredTools(data.data);
        }
      } catch (error) {
        console.error('Error fetching tools:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTools();
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredTools(allTools);
    } else {
      const filtered = allTools.filter((tool) =>
        tool.categories.some((cat) =>
          selectedCategories.some(selectedCat =>
            cat.toLowerCase() === selectedCat.toLowerCase() ||
            cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '') === selectedCat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')
          )
        )
      );
      setFilteredTools(filtered);
    }
  }, [selectedCategories, allTools]);

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const clearFilters = () => setSelectedCategories([]);

  return (
    <PageLayout>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">All Tools</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              All Football Tools
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Browse {filteredTools.length} tools across {CATEGORIES.length} categories
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Filter by Category
              </h2>
              {selectedCategories.length > 0 && (
                <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  Clear all
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategories.includes(category.name);
                const toolCount = allTools.filter((tool) =>
                  tool.categories.some(cat => matchesCategory(cat, category))
                ).length;

                return (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.name)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs ${
                      isSelected
                        ? 'bg-blue-700 text-white dark:bg-blue-600'
                        : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                    }`}>
                      {toolCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
              ))
            ) : filteredTools.length > 0 ? (
              filteredTools.map((tool) => <ToolCard key={tool.id} tool={tool} />)
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  No tools found for the selected categories.
                </p>
                <button onClick={clearFilters} className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
