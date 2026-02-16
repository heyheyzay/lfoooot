import DataApiIcon from './DataApiIcon';
import NewsMediaIcon from './NewsMediaIcon';
import LiveScoreIcon from './LiveScoreIcon';
import FantasyIcon from './FantasyIcon';
import BettingIcon from './BettingIcon';
import AnalyticsIcon from './AnalyticsIcon';
import StreamingIcon from './StreamingIcon';
import CommunityIcon from './CommunityIcon';
import TrainingIcon from './TrainingIcon';
import MerchandiseIcon from './MerchandiseIcon';
import ManagementIcon from './ManagementIcon';
import PredictorsIcon from './PredictorsIcon';

const ICON_MAP: Record<string, { component: React.ComponentType<{ className?: string }>; color: string }> = {
  'data-apis': { component: DataApiIcon, color: 'text-purple-500' },
  'news-media': { component: NewsMediaIcon, color: 'text-green-500' },
  'live-scores': { component: LiveScoreIcon, color: 'text-purple-500' },
  'fantasy': { component: FantasyIcon, color: 'text-purple-500' },
  'betting': { component: BettingIcon, color: 'text-green-500' },
  'analytics': { component: AnalyticsIcon, color: 'text-orange-500' },
  'streaming': { component: StreamingIcon, color: 'text-blue-500' },
  'community': { component: CommunityIcon, color: 'text-green-500' },
  'training': { component: TrainingIcon, color: 'text-blue-500' },
  'merchandise': { component: MerchandiseIcon, color: 'text-green-500' },
  'games': { component: ManagementIcon, color: 'text-blue-500' },
  'predictors': { component: PredictorsIcon, color: 'text-orange-500' },
};

interface CategoryIconProps {
  categoryId: string;
  size?: 'sm' | 'md' | 'lg';
  fallbackEmoji?: string;
}

const SIZE_CLASSES = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-16 w-16',
};

export default function CategoryIcon({ categoryId, size = 'md', fallbackEmoji }: CategoryIconProps) {
  const entry = ICON_MAP[categoryId];
  if (!entry) {
    return fallbackEmoji ? <span className="text-2xl">{fallbackEmoji}</span> : null;
  }
  const IconComponent = entry.component;
  return <IconComponent className={`${SIZE_CLASSES[size]} ${entry.color}`} />;
}
