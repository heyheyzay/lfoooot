import { Suspense } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import SearchBar from '@/components/SearchBar';
import ToolCard from '@/components/ToolCard';
import { searchTools } from '@/lib/mockData';

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

function SearchResults({ query }: { query: string }) {
  const results = searchTools(query);

  return (
    <>
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Search Results
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {results.length > 0
            ? `Found ${results.length} ${results.length === 1 ? 'tool' : 'tools'} matching "${query}"`
            : `No tools found matching "${query}"`}
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 text-6xl">🔍</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            No results found
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Try adjusting your search terms or browse our categories
          </p>
          <Link
            href="/"
            className="inline-block rounded-md bg-pitch-600 px-6 py-3 font-medium text-white hover:bg-pitch-700"
          >
            Back to Home
          </Link>
        </div>
      )}
    </>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || '';

  return (
    <PageLayout>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <section className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
                Search Football Tools
              </h1>
              <SearchBar />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Suspense fallback={<div className="text-gray-500 dark:text-gray-400">Loading...</div>}>
              {query && <SearchResults query={query} />}
              {!query && (
                <div className="text-center text-gray-600 dark:text-gray-400">
                  Enter a search term to find football tools
                </div>
              )}
            </Suspense>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
