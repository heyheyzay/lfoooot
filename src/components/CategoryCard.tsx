import Link from 'next/link';
import { Category } from '@/types';
import { cn } from '@/lib/utils';
import CategoryIcon from './icons/CategoryIcon';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export default function CategoryCard({ category, className }: CategoryCardProps) {
  const toolCount = category.toolCount || 0;

  return (
    <Link
      href={`/category/${category.slug}`}
      className={cn(
        'group block rounded-lg border border-gray-100 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <CategoryIcon categoryId={category.id} fallbackEmoji={category.icon} />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
            {category.name}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {toolCount > 0 ? `${toolCount} tools` : 'Coming soon'}
          </p>
        </div>
      </div>
    </Link>
  );
}
