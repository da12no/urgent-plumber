import type { Metadata } from 'next'
import Link from 'next/link'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CTAButton } from '@/components/ui/CTAButton'
import { SERVICES } from '@/lib/services'
import { SITE_URL, PHONE_DISPLAY, BUSINESS_NAME } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Plumbing Services in Phoenix, AZ | Urgent Plumber',
  description: 'Plumbing services throughout the Phoenix metro area - drain cleaning, water heaters, slab leaks, emergency plumbing, repiping, and more.',
  alternates: { canonical: `${SITE_URL}/services` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `Plumbing Services - ${BUSINESS_NAME}`,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${SITE_URL}/services/${s.slug}`,
    description: s.shortDesc,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Plumbing Services' }]} />
        </div>
      </div>

      <section className="py-14" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Plumbing Services in Phoenix, AZ</h1>
          <p className="text-white/70 text-lg max-w-xl">From emergency repairs to scheduled installations, we cover the full range of plumbing services across Greater Phoenix.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Don&apos;t See Your Problem?</h2>
          <p className="text-brand-muted mb-6 max-w-md mx-auto text-sm">Call us - we handle a wide range of plumbing situations beyond what&apos;s listed here.</p>
          <CTAButton label={`Call Now · ${PHONE_DISPLAY}`} size="lg" />
          <p className="mt-3 text-xs text-brand-muted">
            Serving Phoenix, Mesa, Scottsdale, Chandler, Tempe,{' '}
            <Link href="/#service-areas" className="text-brand-blue hover:text-brand-red transition-colors">and more</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
