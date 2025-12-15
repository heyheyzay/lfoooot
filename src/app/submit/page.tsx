'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CATEGORIES } from '@/lib/categories';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    toolName: '',
    url: '',
    category: '',
    pricing: 'free',
    platforms: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handlePlatformToggle = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toolName: formData.toolName,
          url: formData.url,
          category: formData.category,
          pricing: formData.pricing,
          platforms: formData.platforms.join(', '),
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitStatus('success');
      setFormData({
        toolName: '',
        url: '',
        category: '',
        pricing: 'free',
        platforms: [],
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const platformOptions = [
    { id: 'web', label: 'Web' },
    { id: 'ios', label: 'iOS' },
    { id: 'android', label: 'Android' },
    { id: 'api', label: 'API' },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                Submit a Football Tool
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Help grow our directory by submitting a football tool
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
              {/* Left Section - Form */}
              <div className="flex-1">
                <div className="rounded-2xl border border-[#212121] border-opacity-40 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tool Name */}
              <div>
                <label htmlFor="toolName" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white">
                  Tool Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="toolName"
                  required
                  value={formData.toolName}
                  onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-gray-500"
                  placeholder="Enter tool name"
                />
              </div>

              {/* URL */}
              <div>
                <label htmlFor="url" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white">
                  Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="url"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-gray-500"
                  placeholder="https://example.com"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-gray-500"
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pricing */}
              <div>
                <label htmlFor="pricing" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white">
                  Pricing Model <span className="text-red-500">*</span>
                </label>
                <select
                  id="pricing"
                  required
                  value={formData.pricing}
                  onChange={(e) => setFormData({ ...formData, pricing: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-gray-500"
                >
                  <option value="free">Free</option>
                  <option value="freemium">Freemium</option>
                  <option value="paid">Paid</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>

              {/* Platforms */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-900 dark:text-white">
                  Platforms <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {platformOptions.map((platform) => (
                    <label
                      key={platform.id}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500"
                    >
                      <input
                        type="checkbox"
                        checked={formData.platforms.includes(platform.id)}
                        onChange={() => handlePlatformToggle(platform.id)}
                        className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                      />
                      <span className="text-sm text-gray-900 dark:text-white">{platform.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                  Thank you! Your tool submission has been received and will be reviewed shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
                  There was an error submitting your tool. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || formData.platforms.length === 0}
                className="w-full rounded-full bg-[#E4F222] px-8 py-4 font-semibold text-black transition-colors duration-200 hover:bg-[#F5F84D] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Tool'}
              </button>
            </form>
                </div>
              </div>

          {/* Right Section - Boosted Listing */}
          <div className="flex-1">
            <div className="sticky top-24 rounded-2xl bg-[#1a1919] p-8 text-white">
              <svg width="96" height="145" viewBox="0 0 96 145" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 h-20 w-auto">
                <path d="M61.4567 52.5743C60.3717 54.2369 61.8766 56.3679 63.8142 55.9128L87.8053 50.2776C93.8675 48.8537 97.9988 56.2447 93.5907 60.6277L10.592 143.153C5.72268 147.995 -2.25075 142.482 0.599688 136.245L25.0106 82.8281C25.9122 80.8553 23.7072 78.9105 21.8504 80.0408L10.5167 87.5645C5.52974 90.6003 -0.672397 86.1821 0.59962 80.5L15.6923 8.60159C16.8176 3.57496 21.295 0 26.4653 0H81.9336C87.8888 0 91.4722 6.5771 88.2266 11.5507L61.4567 52.5743Z" fill="#E4F222"/>
              </svg>
              <h2 className="mb-3 text-2xl font-bold">
                Boosted Listing — Get Seen Faster
              </h2>
              <p className="mb-8 text-sm text-gray-300">
                Turn your submission into a premium placement and reach more football fans, analysts, and decision-makers.
              </p>

              <h3 className="mb-4 text-lg font-semibold">What You Get</h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-white mb-1">Priority Review</h4>
                  <p className="text-sm text-gray-300">Your tool goes live within 24 hours (Standard listings take ~3–4 weeks)</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">Homepage Visibility</h4>
                  <p className="text-sm text-gray-300">Featured among the latest 12 submissions on the homepage — where attention is highest.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">Custom Thumbnail</h4>
                  <p className="text-sm text-gray-300">Stand out visually and increase click-through rate, especially on mobile.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">Verified Badge</h4>
                  <p className="text-sm text-gray-300">Build instant trust with users and signal product credibility.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">Real-Time Analytics</h4>
                  <p className="text-sm text-gray-300">Track views, clicks, and performance of your listing.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">Add Exclusive Discounts</h4>
                  <p className="text-sm text-gray-300">Promote special offers directly on your listing to drive conversions.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">Optimized Mobile Display</h4>
                  <p className="text-sm text-gray-300">Thumbnail-first layout to capture attention on mobile devices.</p>
                </div>
              </div>

              <a
                href="#boost"
                className="block w-full rounded-full bg-[#E4F222] px-8 py-4 text-center font-semibold text-black transition-colors duration-200 hover:bg-[#F5F84D]"
              >
                Get boosted now
              </a>
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
