import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  crumbs: Crumb[]
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: c.href } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-brand-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {crumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true" className="text-brand-border">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-brand-red transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-navy font-medium" aria-current="page">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
