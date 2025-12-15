'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getBlogPostBySlug } from '@/lib/blogData';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Post Not Found</h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="inline-block rounded-full bg-[#e4e24e] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#f4f280]"
            >
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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
        {/* Article Header */}
        <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          {/* Back Link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Featured Badge */}
          {post.featured && (
            <span className="mb-4 inline-block rounded-full bg-[#e4e24e] px-4 py-1.5 text-sm font-semibold text-black">
              Featured Article
            </span>
          )}

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <span className="font-medium">{post.author}</span>
            </div>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          {/* Cover Image */}
          <div className="mb-12 overflow-hidden rounded-lg">
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              View All Articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
