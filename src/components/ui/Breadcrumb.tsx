import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mx-auto max-w-container px-4 pt-2 md:px-6">
      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
        {items.map((item, index) => (
          <span key={item.label} className="flex items-center gap-2">
            {index > 0 && (
              <MaterialIcon name="chevron_right" className="text-base" />
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-primary">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
