import { Tool } from '@/types';
import { cn, getPricingBadgeColor, formatNumber } from '@/lib/utils';

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export default function ToolCard({ tool, className }: ToolCardProps) {
  return (
    <a
      href={tool.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group block rounded-lg border border-gray-100 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md',
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="mb-1 text-base font-semibold text-gray-900 group-hover:text-gray-700">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{tool.tagline}</p>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            <span
              className={cn(
                'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
                getPricingBadgeColor(tool.pricing)
              )}
            >
              {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
            </span>
            {(tool as any).verified && (
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                ✓ Verified
              </span>
            )}
          </div>

          {tool.rating && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span className="text-yellow-400">★</span>
              <span className="font-medium text-gray-900">{tool.rating}</span>
              {(tool as any).reviewCount && (
                <>
                  <span className="text-gray-400">·</span>
                  <span>{formatNumber((tool as any).reviewCount)} reviews</span>
                </>
              )}
            </div>
          )}

          {tool.platforms && tool.platforms.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tool.platforms.slice(0, 3).map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                >
                  {platform}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
