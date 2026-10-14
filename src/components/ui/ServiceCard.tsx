import Link from 'next/link'
import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Pick<Service, 'slug' | 'name' | 'shortDesc' | 'iconPath'>
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-brand-border bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-blue transition-all duration-200"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-surface group-hover:bg-brand-blue transition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-brand-blue group-hover:text-white transition-colors duration-200"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
        </svg>
      </div>
      <div>
        <h3 className="font-bold text-brand-navy text-lg mb-1 group-hover:text-brand-red transition-colors">
          {service.name}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">{service.shortDesc}</p>
      </div>
      <span className="mt-auto text-sm font-semibold text-brand-blue group-hover:text-brand-red transition-colors flex items-center gap-1">
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z" clipRule="evenodd" />
        </svg>
      </span>
    </Link>
  )
}
