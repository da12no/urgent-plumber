import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CTAButton } from '@/components/ui/CTAButton'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CITIES, getCity } from '@/lib/cities'
import { SERVICES } from '@/lib/services'
import { buildCitySchema, buildFAQSchema } from '@/lib/schema'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/config'

export function generateStaticParams() {
  return CITIES.map(c => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCity(citySlug)
  if (!city) return {}
  return {
    title: city.title,
    description: city.metaDescription,
    alternates: { canonical: `${SITE_URL}/${city.slug}` },
    openGraph: { title: city.title, description: city.metaDescription, url: `${SITE_URL}/${city.slug}` },
  }
}

const featuredServices = SERVICES.slice(0, 8)

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params
  const city = getCity(citySlug)
  if (!city) notFound()

  const nearbyCities = city.nearbySlug
    .map(s => CITIES.find(c => c.slug === s))
    .filter(Boolean) as typeof CITIES

  const localBusinessSchema = buildCitySchema(city.name, city.slug)
  const faqSchema = buildFAQSchema(city.faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: `Plumber in ${city.name}, AZ` },
          ]} />
        </div>
      </div>

      <section className="py-14" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-blue-light text-sm font-bold uppercase tracking-widest mb-3">{city.name}, Arizona</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{city.h1}</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-2xl">{city.intro}</p>
            <CTAButton label={`Call Now · ${PHONE_DISPLAY}`} size="lg" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-12">

            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Plumbing in {city.name}</h2>
              <p className="text-brand-muted leading-relaxed">{city.localFacts}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-5">Common Issues in {city.name}</h2>
              <ul className="space-y-3">
                {city.commonIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-brand-red shrink-0 mt-0.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-muted leading-relaxed">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Plumbing Services in {city.name}</h2>
              <p className="text-brand-muted mb-6">Call Urgent Plumber for any of these services in {city.name} and surrounding areas.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredServices.map(s => <ServiceCard key={s.slug} service={s} />)}
              </div>
              <div className="mt-4">
                <Link href="/services" className="text-brand-blue font-semibold hover:text-brand-red transition-colors text-sm">View all services →</Link>
              </div>
            </div>

            {city.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Questions About Plumbing in {city.name}</h2>
                <FAQAccordion faqs={city.faqs} />
              </div>
            )}
          </div>

          <aside className="mt-12 lg:mt-0 space-y-5">
            <div className="rounded-xl bg-brand-navy text-white p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-2">Plumber in {city.name}?</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">Call Urgent Plumber for plumbing help in {city.name}, AZ.</p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full py-4 px-4 rounded-lg font-bold text-white text-base transition-colors"
                style={{ backgroundColor: 'var(--color-brand-red)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>

            {nearbyCities.length > 0 && (
              <div className="rounded-xl border border-brand-border bg-white p-5">
                <h3 className="font-bold text-brand-navy mb-3 text-sm">Nearby Areas</h3>
                <ul className="space-y-2">
                  {nearbyCities.map(c => (
                    <li key={c.slug}>
                      <Link href={`/${c.slug}`} className="text-sm text-brand-muted hover:text-brand-red transition-colors flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-brand-blue shrink-0" aria-hidden="true">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z" clipRule="evenodd" />
                        </svg>
                        Plumber in {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  )
}
