import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 px-6 py-4 text-sm text-gray-600">
      <Link href="/" className="hover:text-black hover:underline">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span>/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-black hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-black">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
