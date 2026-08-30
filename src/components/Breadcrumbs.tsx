import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  variant?: "default" | "inverse";
  className?: string;
};

const Breadcrumbs = ({
  items,
  variant = "default",
  className = "",
}: BreadcrumbsProps) => {
  const muted = variant === "inverse" ? "text-white/70" : "text-muted-foreground";
  const current = variant === "inverse" ? "text-white" : "text-foreground";
  const hover = variant === "inverse" ? "hover:text-white" : "hover:text-foreground";

  return (
    <nav aria-label="Breadcrumb" className={`${muted} ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm leading-6">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 opacity-60" />
              ) : null}
              {item.to && !isCurrent ? (
                <Link to={item.to} className={`${hover} underline-offset-4 hover:underline`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isCurrent ? "page" : undefined} className={isCurrent ? current : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
