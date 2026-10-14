import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CTAButton } from '@/components/ui/CTAButton'
import { SITE_URL, PHONE_DISPLAY, EMAIL, BUSINESS_NAME } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About Urgent Plumber | Phoenix Metro Plumbing',
  description: 'Urgent Plumber helps Phoenix homeowners get plumbing help fast. Serving the entire Greater Phoenix metro area.',
  alternates: { canonical: `${SITE_URL}/about` },
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
        </div>
      </div>

      <section className="py-14" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About {BUSINESS_NAME}</h1>
          <p className="text-white/70 text-lg">Plumbing help throughout the Greater Phoenix metropolitan area.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-10">

        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">What We Do</h2>
          <p className="text-brand-muted leading-relaxed text-lg">
            Urgent Plumber helps homeowners throughout the Greater Phoenix area get connected with local plumbing help for everything from emergency repairs to routine maintenance. One call is all it takes - no forms, no apps.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Service Area</h2>
          <p className="text-brand-muted leading-relaxed mb-3">
            We serve the entire Phoenix metropolitan area - Phoenix, Mesa, Scottsdale, Chandler, Tempe, Gilbert, Glendale, Peoria, Surprise, Goodyear, Avondale, Buckeye, Queen Creek, and more across the East and West Valley.
          </p>
          <Link href="/#service-areas" className="text-brand-blue font-semibold hover:text-brand-red transition-colors text-sm">View all service areas →</Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Services We Cover</h2>
          <p className="text-brand-muted leading-relaxed mb-3">
            Emergency plumbing, drain cleaning, water heater repair and replacement, slab leak detection and repair, toilet and faucet repair, pipe repair and repiping, sewer line work, hydro jetting, and more.
          </p>
          <Link href="/services" className="text-brand-blue font-semibold hover:text-brand-red transition-colors text-sm">View all services →</Link>
        </section>

        <section className="rounded-xl bg-brand-navy text-white p-8">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Help?</h2>
          <p className="text-white/70 mb-6">Call Urgent Plumber anytime to get plumbing help in the Phoenix metro area.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton label={`Call · ${PHONE_DISPLAY}`} size="lg" />
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:border-white/60 transition-colors">
              Email Us
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
