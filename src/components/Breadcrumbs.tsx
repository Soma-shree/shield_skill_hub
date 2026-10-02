import React from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  to?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center flex-wrap gap-2 text-xs font-medium"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#f5b82e] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-[#dbe7e4]/40 shrink-0" />
            {isLast || !item.to ? (
              <span className="text-[#f5b82e] font-semibold truncate max-w-xs sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="text-slate-300 hover:text-[#f5b82e] transition-colors truncate max-w-xs"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
