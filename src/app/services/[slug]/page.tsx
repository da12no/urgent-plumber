import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CTAButton } from '@/components/ui/CTAButton'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SERVICES, getService, getRelatedServices } from '@/lib/services'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF, BUSINESS_NAME } from '@/lib/config'

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: { title: service.title, description: service.metaDescription, url: `${SITE_URL}/services/${service.slug}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = getRelatedServices(service.relatedSlugs)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.intro,
    provider: { '@type': 'Organization', name: BUSINESS_NAME, url: SITE_URL },
    areaServed: { '@type': 'City', name: 'Phoenix', containedInPlace: { '@type': 'State', name: 'Arizona' } },
    serviceType: service.name,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.name },
          ]} />
        </div>
      </div>

      <section className="py-14" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-white/10 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-white" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{service.h1}</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-2xl">{service.intro}</p>
            <CTAButton label={`Call Now · ${PHONE_DISPLAY}`} size="lg" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-12">

            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-5">Signs You May Need {service.name}</h2>
              <ul className="space-y-3">
                {service.symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-brand-red shrink-0 mt-0.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-muted leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-5">Common Causes</h2>
              <ul className="space-y-3">
                {service.causes.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-muted leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border-l-4 border-brand-red bg-red-50 p-6">
              <h2 className="text-xl font-bold text-brand-navy mb-3">When to Call</h2>
              <p className="text-brand-muted leading-relaxed">{service.whenToCall}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">About This Service</h2>
              <p className="text-brand-muted leading-relaxed">{service.serviceDescription}</p>
            </div>

            <div className="rounded-xl bg-brand-surface border border-brand-border p-6">
              <h2 className="text-xl font-bold text-brand-navy mb-3">{service.name} in Phoenix, Arizona</h2>
              <p className="text-brand-muted leading-relaxed">{service.phoenixContext}</p>
            </div>

            {service.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">{service.name} - Common Questions</h2>
                <FAQAccordion faqs={service.faqs} />
              </div>
            )}
          </div>

          <aside className="mt-12 lg:mt-0 space-y-5">
            <div className="rounded-xl bg-brand-navy text-white p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-2">Need Help?</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Call Urgent Plumber for {service.name.toLowerCase()} anywhere in the Phoenix metro area.
              </p>
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

            <div className="rounded-xl border border-brand-border bg-white p-5">
              <h3 className="font-bold text-brand-navy mb-2 text-sm">Service Areas</h3>
              <p className="text-brand-muted text-sm mb-3 leading-relaxed">Serving Phoenix, Mesa, Scottsdale, Chandler, Tempe, Glendale, and throughout Greater Phoenix.</p>
              <Link href="/#service-areas" className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors">All locations →</Link>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-brand-border">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(s => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
