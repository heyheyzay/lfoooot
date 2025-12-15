import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black dark:border-gray-700 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <img
                src="/logo-white.svg"
                alt="Footfolio"
                style={{ width: '6rem', height: 'auto' }}
              />
            </div>
            <p className="text-sm text-gray-400">
              Curated directory of football tools and platforms.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#E4F222] font-medium transition-colors duration-200 hover:text-[#F5F84D]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[#E4F222] font-medium transition-colors duration-200 hover:text-[#F5F84D]">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-[#E4F222] font-medium transition-colors duration-200 hover:text-[#F5F84D]">
                  Submit Tool
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-[#E4F222] font-medium transition-colors duration-200 hover:text-[#F5F84D]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#E4F222] font-medium transition-colors duration-200 hover:text-[#F5F84D]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#E4F222] font-medium transition-colors duration-200 hover:text-[#F5F84D]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Stay Updated</h3>
            <p className="mb-3 text-sm text-gray-400">
              Get notified when new tools are added.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full border border-gray-600 bg-gray-900 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#E4F222] px-6 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:bg-[#F5F84D]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Footfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
