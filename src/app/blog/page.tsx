'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllBlogPosts } from '@/lib/blogData';

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="border-b border-gray-100 px-6 py-16 md:py-24 dark:border-gray-800">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Football Insights & News
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Latest articles, analysis, and guides from the world of football tools and technology
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                >
                  {/* Cover Image */}
                  <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Featured Badge */}
                    {post.featured && (
                      <span className="mb-3 inline-block rounded-full bg-[#e4e24e] px-3 py-1 text-xs font-semibold text-black">
                        Featured
                      </span>
                    )}

                    {/* Title */}
                    <h2 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mb-4 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
