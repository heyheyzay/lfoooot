'use client';

import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ToolCard from '@/components/ToolCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CATEGORIES } from '@/lib/categories';
import { getFeaturedTools, MOCK_TOOLS } from '@/lib/mockData';

export default function Home() {
  const featuredTools = getFeaturedTools();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32" style={{ background: 'linear-gradient(180deg, rgba(1, 62, 92, 1) 0%, rgba(81, 144, 189, 1) 51%, rgba(255, 255, 255, 1) 100%)' }}>
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .hero-headline {
              animation: fadeIn 1s ease-out forwards;
            }
            .hero-subheading {
              animation: fadeIn 1s ease-out 0.3s forwards;
              opacity: 0;
            }
            .hero-search {
              animation: fadeIn 1s ease-out 0.6s forwards;
              opacity: 0;
            }
          `}</style>
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="hero-headline mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Everything Football, One Smart Directory
              </h1>
              <p className="hero-subheading mb-10 text-lg text-white md:text-xl">
                Discover the best curated tools for football fans, analysts, creators, and businesses. Updated weekly.
              </p>
              <div className="hero-search">
                <SearchBar large className="mx-auto max-w-2xl" placeholder="Search tools, teams, stats, streaming, analytics…" />
              </div>
            </div>
          </div>
        </section>

        {/* Football Action Marquee */}
        <section className="overflow-hidden bg-white py-12 dark:bg-gray-900">
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
            .marquee-content:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex">
            <div className="marquee-content">
              {/* First set of images */}
              <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=240&h=300&fit=crop" alt="Football action" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=240&h=300&fit=crop" alt="Morocco football" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=240&h=300&fit=crop" alt="Football celebration" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=240&h=300&fit=crop" alt="Football match" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=240&h=300&fit=crop" alt="Football stadium" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=240&h=300&fit=crop" alt="Morocco team" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=240&h=300&fit=crop" alt="Football goal" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=240&h=300&fit=crop" alt="Football players" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=240&h=300&fit=crop" alt="Football action shot" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1577223625816-7546f36921cd?w=240&h=300&fit=crop" alt="Football skills" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=240&h=300&fit=crop" alt="Football game" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=240&h=300&fit=crop" alt="Football moment" className="h-[300px] w-[240px] rounded-lg object-cover" />

              {/* Duplicate set for seamless loop */}
              <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=240&h=300&fit=crop" alt="Football action" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=240&h=300&fit=crop" alt="Morocco football" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=240&h=300&fit=crop" alt="Football celebration" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=240&h=300&fit=crop" alt="Football match" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=240&h=300&fit=crop" alt="Football stadium" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=240&h=300&fit=crop" alt="Morocco team" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=240&h=300&fit=crop" alt="Football goal" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=240&h=300&fit=crop" alt="Football players" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=240&h=300&fit=crop" alt="Football action shot" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1577223625816-7546f36921cd?w=240&h=300&fit=crop" alt="Football skills" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=240&h=300&fit=crop" alt="Football game" className="h-[300px] w-[240px] rounded-lg object-cover" />
              <img src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=240&h=300&fit=crop" alt="Football moment" className="h-[300px] w-[240px] rounded-lg object-cover" />
            </div>
          </div>
        </section>

        {/* AFCON 2025 Section */}
        <section className="border-b border-gray-100 bg-gradient-to-br from-green-50 to-red-50 px-6 py-16 dark:border-gray-800 dark:from-green-950 dark:to-red-950">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  AFCON 2025
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Morocco
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Tournament
                </span>
              </div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                AFCON 2025
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Everything you need for Africa Cup of Nations 2025
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Schedule - Orange Star */}
              <Link
                href="/afcon/schedule"
                className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                style={{ height: '240px', paddingBottom: '3rem' }}
              >
                <div className="flex items-center justify-center bg-black px-4" style={{ height: '168px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.89 107.29" className="h-32 w-auto">
                    <path fill="#ff6333" d="M108.25,39.82c-1.92-8.4-7.55-14.27-12.58-13.12-3.97.91-28.09,16.39-38.04,22.86,8.51-8.26,28.98-28.33,30.75-32,2.24-4.65-2.24-11.44-9.99-15.18-7.76-3.73-15.86-2.99-18.1,1.65-1.77,3.68-4.7,32.19-5.85,43.99-1.15-11.8-4.08-40.32-5.85-43.99-2.24-4.64-10.34-5.38-18.1-1.65-7.76,3.73-12.23,10.53-9.99,15.18,1.77,3.68,22.24,23.74,30.75,32-9.95-6.46-34.07-21.95-38.04-22.85-5.03-1.15-10.66,4.73-12.58,13.12-1.92,8.4.61,16.13,5.64,17.28,3.97.91,32.42-2.58,44.19-4.09-11.25,3.75-38.4,12.95-41.59,15.49-4.03,3.22-2.95,11.28,2.42,18.01,5.37,6.73,12.99,9.58,17.02,6.36,3.19-2.54,18.2-26.96,24.35-37.09-4.08,11.13-13.82,38.09-13.82,42.17,0,5.16,6.98,9.34,15.59,9.34s15.59-4.18,15.59-9.34c0-4.08-9.73-31.03-13.82-42.17,6.16,10.14,21.17,34.55,24.35,37.09,4.03,3.22,11.65.36,17.02-6.36s6.45-14.79,2.42-18.01c-3.19-2.54-30.33-11.74-41.59-15.49,11.77,1.5,40.21,4.99,44.19,4.09,5.05-1.15,7.57-8.89,5.65-17.28Z"/>
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                    Schedule & Fixtures
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Match dates & times
                  </p>
                </div>
              </Link>

              {/* Card 2: Teams - Green Blob */}
              <Link
                href="/afcon/teams"
                className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                style={{ height: '240px', paddingBottom: '3rem' }}
              >
                <div className="flex items-center justify-center bg-black px-4" style={{ height: '168px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.14 103.06" className="h-32 w-auto">
                    <path fill="#00eb8f" fillRule="evenodd" d="M43.84,63.49c-.21,104.63-105.57-33.06,11.12-17.94-90.57-52.58,81.44-75.03,9.97,18.57,90.78-52.16,24.24,107.99-21.09-.63Z"/>
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                    Teams & Squads
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Participating nations
                  </p>
                </div>
              </Link>

              {/* Card 3: Watch - Green Splatter */}
              <Link
                href="/afcon/watch"
                className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                style={{ height: '240px', paddingBottom: '3rem' }}
              >
                <div className="flex items-center justify-center bg-black px-4" style={{ height: '168px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.49 99.89" className="h-32 w-auto">
                    <path fill="#00eb8f" d="M54.11,0h-.07s0,0,0,0,0,0,0,0c-5.65.04-8.19,3.14-10.11,7.7-.8,1.89-1.25,3.59-1.69,5.23-.63,2.35-1.24,4.61-2.78,7.23-1.69,2.85-4.41,4.32-7,5.71-3.24,1.74-6.27,3.37-6.84,7.48-.69,4.99,3.77,6.82,8.46,8.75,4.39,1.81,8.99,3.7,9.77,8.36.01.07.02.14.03.21.4,2.8-1.23,5.62-3.87,6.62-4.42,1.67-8.37-1.35-12.14-4.24-4.02-3.08-7.85-6.01-11.82-2.91-3.27,2.55-3.15,6-3.03,9.67.1,2.94.2,6.02-1.41,8.92-1.48,2.66-3.13,4.31-4.85,6.04-1.2,1.21-2.44,2.45-3.67,4.1-2.97,3.95-4.38,7.7-1.57,12.61,0,0,0,0,0,0,0,0,0,0,0,0l.04.07.04.06s0,0,0,0h0c2.9,4.85,6.85,5.47,11.76,4.82,2.04-.27,3.73-.74,5.37-1.19,2.35-.65,4.6-1.27,7.64-1.26,3.32.01,5.95,1.61,8.46,3.14,3.14,1.91,6.08,3.7,9.91,2.11,4.65-1.94,3.98-6.7,3.26-11.72-.67-4.7-1.37-9.63,2.26-12.66,2.28-1.9,5.74-1.9,8.01.02,3.61,3.04,2.89,7.97,2.21,12.67-.73,5.02-1.43,9.78,3.22,11.74,3.82,1.61,6.77-.17,9.92-2.07,2.52-1.52,5.16-3.11,8.48-3.11,3.04,0,5.29.63,7.64,1.29,1.64.46,3.33.93,5.37,1.21,4.9.67,8.86.07,11.78-4.77.01-.02.03-.05.04-.07l.03-.06h0c2.83-4.9,1.44-8.65-1.52-12.62-1.23-1.65-2.46-2.9-3.66-4.11-1.71-1.73-3.35-3.4-4.82-6.06-1.61-2.9-1.49-5.99-1.38-8.92.14-3.67.27-7.12-2.99-9.68-3.96-3.12-7.79-.21-11.83,2.86-3.78,2.87-7.74,5.88-12.15,4.19-.38-.14-.75-.32-1.13-.51-2.31-1.2-3.74-3.77-3.3-6.34.8-4.65,5.4-6.53,9.8-8.32,4.7-1.91,9.16-3.72,8.49-8.72-.55-4.11-3.58-5.75-6.81-7.51-2.58-1.4-5.3-2.87-6.97-5.73-1.54-2.62-2.13-4.88-2.76-7.24-.43-1.65-.88-3.34-1.67-5.24C62.35,3.17,59.83.07,54.18,0c0,0,0,0,0,0s0,0,0,0h-.07Z"/>
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                    How to Watch
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Broadcasters & streaming
                  </p>
                </div>
              </Link>

              {/* Card 4: Venues - Orange Cross */}
              <Link
                href="/afcon/venues"
                className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                style={{ height: '240px', paddingBottom: '3rem' }}
              >
                <div className="flex items-center justify-center bg-black px-4" style={{ height: '168px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.89 109.04" className="h-32 w-auto">
                    <path fill="#ff6333" d="M108.89,54.52c0-6.78-10.12-12.73-25.35-16.11,2.23-5.74,2.4-10.34,0-12.76-2.41-2.41-7.11-2.24-12.92.06C67.24,10.28,61.26,0,54.45,0s-12.84,10.35-16.2,25.88c-6.02-2.46-10.85-2.73-13.35-.23-2.42,2.43-2.24,7.07.03,12.85C9.93,41.9,0,47.8,0,54.52s10.09,12.71,25.29,16.1c-2.61,6.2-2.94,11.2-.39,13.75,2.52,2.53,7.44,2.22,13.55-.32,3.39,15.03,9.29,24.99,16,24.99s12.56-9.88,15.96-24.81c5.91,2.38,10.66,2.61,13.12.14,2.54-2.54,2.22-7.5-.35-13.65,15.43-3.36,25.72-9.36,25.72-16.19h0Z"/>
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                    Venues & Stadiums
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Host cities
                  </p>
                </div>
              </Link>

              {/* Card 5: Events - Lime Plus */}
              <Link
                href="/afcon/events"
                className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                style={{ height: '240px', paddingBottom: '3rem' }}
              >
                <div className="flex items-center justify-center bg-black px-4" style={{ height: '168px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.89 108.89" className="h-32 w-auto">
                    <path fill="#a0ec06" d="M90.74,36.3h-15.12c-1.67,0-3.02-1.35-3.02-3.02v-15.12c0-10.02-8.13-18.15-18.15-18.15s-18.15,8.13-18.15,18.15v15.12c0,1.67-1.35,3.02-3.02,3.02h-15.12C8.13,36.3,0,44.42,0,54.45s8.13,18.15,18.15,18.15h15.12c1.67,0,3.02,1.35,3.02,3.02v15.12c0,10.02,8.13,18.15,18.15,18.15s18.15-8.13,18.15-18.15v-15.12c0-1.67,1.35-3.02,3.02-3.02h15.12c10.02,0,18.15-8.13,18.15-18.15s-8.13-18.15-18.15-18.15ZM90.74,57.47h-15.12c-10.02,0-18.15,8.13-18.15,18.15v15.12c0,1.67-1.35,3.02-3.02,3.02s-3.02-1.35-3.02-3.02v-15.12c0-10.02-8.13-18.15-18.15-18.15h-15.12c-1.67,0-3.02-1.35-3.02-3.02s1.35-3.02,3.02-3.02h15.12c10.02,0,18.15-8.13,18.15-18.15v-15.12c0-1.67,1.35-3.02,3.02-3.02s3.02,1.35,3.02,3.02v15.12c0,10.02,8.13,18.15,18.15,18.15h15.12c1.67,0,3.02,1.35,3.02,3.02s-1.35,3.02-3.02,3.02Z"/>
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                    Related Events
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Activities & fan zones
                  </p>
                </div>
              </Link>

              {/* Card 6: Fan Accessories - Orange Diamond */}
              <Link
                href="/afcon/fan-accessories"
                className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                style={{ height: '240px', paddingBottom: '3rem' }}
              >
                <div className="flex items-center justify-center bg-black px-4" style={{ height: '168px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.45 106.45" className="h-32 w-auto">
                    <path fill="#ff6333" d="M106.45,39.92c0-11.02-8.94-19.96-19.96-19.96,0-11.02-8.94-19.96-19.96-19.96-5.11,0-9.78,1.92-13.31,5.09-3.53-3.16-8.19-5.09-13.31-5.09-11.02,0-19.96,8.94-19.96,19.96C8.94,19.96,0,28.9,0,39.92c0,5.11,1.92,9.77,5.09,13.31-3.16,3.53-5.09,8.19-5.09,13.31,0,11.02,8.94,19.96,19.96,19.96,0,11.02,8.94,19.96,19.96,19.96,5.11,0,9.77-1.92,13.31-5.09,3.53,3.16,8.19,5.09,13.31,5.09,11.02,0,19.96-8.94,19.96-19.96,11.02,0,19.96-8.94,19.96-19.96,0-5.11-1.92-9.78-5.09-13.31,3.16-3.53,5.09-8.19,5.09-13.31ZM73.18,19.96v13.31h13.31v13.31h-26.61v-26.61h13.31ZM19.96,33.27h13.31v-13.31h13.31v26.61h-26.61v-13.31ZM33.27,86.49v-13.31h-13.31v-13.31h26.61v26.61h-13.31ZM86.49,73.18h-13.31v13.31h-13.31v-26.61h26.61v13.31Z"/>
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                    Fan Accessories
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Jerseys, hats & more
                  </p>
                </div>
              </Link>
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
              {featuredTools.slice(0, 6).map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-6 py-16 md:py-24 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                Browse by Category
              </h2>
              <p className="text-gray-600">
                Find exactly what you&#39;re looking for
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {CATEGORIES.map((category) => (
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
      <Footer />
    </>
  );
}
