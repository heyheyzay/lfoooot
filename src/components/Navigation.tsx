'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';
import DataApiIcon from './icons/DataApiIcon';
import NewsMediaIcon from './icons/NewsMediaIcon';
import LiveScoreIcon from './icons/LiveScoreIcon';
import FantasyIcon from './icons/FantasyIcon';
import BettingIcon from './icons/BettingIcon';
import AnalyticsIcon from './icons/AnalyticsIcon';
import StreamingIcon from './icons/StreamingIcon';
import CommunityIcon from './icons/CommunityIcon';
import TrainingIcon from './icons/TrainingIcon';
import MerchandiseIcon from './icons/MerchandiseIcon';
import ManagementIcon from './icons/ManagementIcon';
import PredictorsIcon from './icons/PredictorsIcon';

const getCategoryIcon = (categoryId: string) => {
  const iconClass = "h-5 w-5";
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

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [desktopCategoriesOpen, setDesktopCategoriesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopCategoriesOpen(false);
      }
    };

    if (desktopCategoriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopCategoriesOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src={isDarkMode ? "/logo-white.svg" : "/logo-black.svg"}
              alt="Footfolio"
              style={{ width: '6rem', height: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDesktopCategoriesOpen(!desktopCategoriesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Categories
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${desktopCategoriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {desktopCategoriesOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-gray-100 bg-white py-2 shadow-xl z-50 dark:border-gray-700 dark:bg-gray-800">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      onClick={() => setDesktopCategoriesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {getCategoryIcon(category.id)}
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/submit" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Submit
            </Link>

            <Link href="/blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Blog
            </Link>

            <Link href="/about" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Hamburger Menu Button - Mobile/Tablet */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 lg:hidden bg-white dark:bg-gray-900"
          style={{
            zIndex: 9999,
            opacity: 1,
            height: '100vh',
            width: '100vw'
          }}
        >
          <div className="flex flex-col" style={{ height: '100vh', width: '100vw' }}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-900">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <img
                  src={isDarkMode ? "/logo-white.svg" : "/logo-black.svg"}
                  alt="Footfolio"
                  style={{ width: '6rem', height: 'auto' }}
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-gray-900 hover:bg-gray-100 transition-colors dark:text-white dark:hover:bg-gray-800"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto bg-white py-6 dark:bg-gray-900">
              {/* Categories Section */}
              <div className="border-b border-gray-200 pb-6 dark:border-gray-700">
                <button
                  onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                  className="flex w-full items-center justify-between bg-white px-6 py-3 text-base font-semibold text-gray-900 dark:bg-gray-900 dark:text-white"
                >
                  Categories
                  <svg
                    className={`h-5 w-5 transition-transform ${categoriesExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {categoriesExpanded && (
                  <div className="mt-2 space-y-1 bg-white dark:bg-gray-900">
                    {CATEGORIES.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 bg-white px-6 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                      >
                        {getCategoryIcon(category.id)}
                        <span>{category.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Links */}
              <div className="space-y-1 bg-white py-6 dark:bg-gray-900">
                <Link
                  href="/submit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  Submit
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  About
                </Link>
                <button
                  onClick={toggleDarkMode}
                  className="flex w-full items-center gap-3 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  {isDarkMode ? (
                    <>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Light Mode
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
