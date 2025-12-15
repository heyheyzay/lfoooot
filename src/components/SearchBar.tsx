'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SearchIcon } from './SearchIcon';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  large?: boolean;
}

export default function SearchBar({
  className,
  placeholder = 'Search football tools...',
  large = false
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn('w-full', className)}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-full border border-gray-200 bg-white px-4 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none',
            large ? 'py-4 text-base pr-14' : 'py-3 text-sm pr-12'
          )}
        />
        <button
          type="submit"
          className={cn(
            'absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#E4F222] font-semibold text-black transition-colors duration-200 hover:bg-[#F5F84D] focus:outline-none flex items-center justify-center',
            large ? 'p-2.5' : 'p-2'
          )}
        >
          <SearchIcon size={large ? 20 : 16} color="#000000" />
        </button>
      </div>
    </form>
  );
}
