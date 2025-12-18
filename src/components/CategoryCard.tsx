import Link from 'next/link';
import { Category } from '@/types';
import { cn } from '@/lib/utils';
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

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const getCategoryIcon = (categoryId: string, icon: string) => {
  switch (categoryId) {
    case 'data-apis':
      return <DataApiIcon className="h-6 w-6 text-purple-500" />;
    case 'news-media':
      return <NewsMediaIcon className="h-6 w-6 text-green-500" />;
    case 'live-scores':
      return <LiveScoreIcon className="h-6 w-6 text-purple-500" />;
    case 'fantasy':
      return <FantasyIcon className="h-6 w-6 text-purple-500" />;
    case 'betting':
      return <BettingIcon className="h-6 w-6 text-green-500" />;
    case 'analytics':
      return <AnalyticsIcon className="h-6 w-6 text-orange-500" />;
    case 'streaming':
      return <StreamingIcon className="h-6 w-6 text-blue-500" />;
    case 'community':
      return <CommunityIcon className="h-6 w-6 text-green-500" />;
    case 'training':
      return <TrainingIcon className="h-6 w-6 text-blue-500" />;
    case 'merchandise':
      return <MerchandiseIcon className="h-6 w-6 text-green-500" />;
    case 'games':
      return <ManagementIcon className="h-6 w-6 text-blue-500" />;
    case 'predictors':
      return <PredictorsIcon className="h-6 w-6 text-orange-500" />;
    default:
      return <span className="text-2xl">{icon}</span>;
  }
};

export default function CategoryCard({ category, className }: CategoryCardProps) {
  // Use the toolCount passed from the parent component
  const toolCount = category.toolCount || 0;

  return (
    <Link
      href={`/category/${category.slug}`}
      className={cn(
        'group block rounded-lg border border-gray-100 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-sm',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {getCategoryIcon(category.id, category.icon)}
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-gray-700">
            {category.name}
          </h3>
          <p className="text-xs text-gray-600">
            {toolCount > 0 ? `${toolCount} tools` : 'Coming soon'}
          </p>
        </div>
      </div>
    </Link>
  );
}
