import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CTAButton } from '@/components/ui/CTAButton'
import { SITE_URL, PHONE_DISPLAY, EMAIL, BUSINESS_NAME, DISCLAIMER } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About Urgent Plumber | Phoenix Metro Plumbing Contractor Connection Service',
  description: 'Learn how Urgent Plumber helps Phoenix metro homeowners connect with independent local plumbing contractors. We are a free connection service, not a plumbing company.',
  alternates: { canonical: `${SITE_URL}/about` },
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]} />
        </div>
      </div>

      <section className="py-14 md:py-18" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About {BUSINESS_NAME}</h1>
          <p className="text-white/70 text-lg leading-relaxed">
            A free service helping Phoenix metro homeowners connect with independent local plumbing contractors.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">What Is Urgent Plumber?</h2>
          <div className="prose prose-lg text-brand-muted space-y-4">
            <p>
              Urgent Plumber is a free connection service. We help homeowners throughout the Greater Phoenix metropolitan area get in touch with independent local plumbing contractors who may be available to assist with their plumbing needs.
            </p>
            <p>
              We are not a plumbing company. We do not employ plumbers or send our own technicians to your home. The contractors you connect with through Urgent Plumber are independent professionals who operate their own businesses. You work directly with the contractor on service details, pricing, and scheduling.
            </p>
            <p>
              The service is free to homeowners. There is no charge to call us and no obligation to proceed if you connect with a contractor.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">How the Process Works</h2>
          <div className="grid gap-6">
            {[
              {
                step: '1',
                title: 'Call and Describe Your Problem',
                desc: "Call Urgent Plumber and tell us about your plumbing issue. Let us know what's happening, where you're located in the Phoenix metro area, and any other relevant details.",
              },
              {
                step: '2',
                title: 'We Attempt to Connect You',
                desc: "We work to connect you with an independent local plumbing contractor in your area who may be available to assist. Availability varies - we can't guarantee a contractor will always be immediately available, but we do our best to connect you.",
              },
              {
                step: '3',
                title: 'You Work Directly With the Contractor',
                desc: "Once connected, the contractor speaks with you directly about your situation, what the work involves, pricing, and when they can assist. All service decisions are made between you and the contractor.",
              },
            ].map(step => (
              <div key={step.step} className="flex gap-5 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy text-lg mb-1">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-brand-surface border border-brand-border p-8">
          <h2 className="text-xl font-bold text-brand-navy mb-4">Important Information</h2>
          <ul className="space-y-3 text-brand-muted">
            <li className="flex gap-2">
              <span className="text-brand-red font-bold shrink-0">-</span>
              {BUSINESS_NAME} is a contractor connection service. We are not a licensed plumbing contractor.
            </li>
            <li className="flex gap-2">
              <span className="text-brand-red font-bold shrink-0">-</span>
              Contractors connected through this service are independent. They are not employees or agents of {BUSINESS_NAME}.
            </li>
            <li className="flex gap-2">
              <span className="text-brand-red font-bold shrink-0">-</span>
              Homeowners should verify that any contractor they hire holds the necessary license and insurance required for the work being performed in Arizona.
            </li>
            <li className="flex gap-2">
              <span className="text-brand-red font-bold shrink-0">-</span>
              {BUSINESS_NAME} does not guarantee the availability of contractors, response times, quality of work, or pricing.
            </li>
            <li className="flex gap-2">
              <span className="text-brand-red font-bold shrink-0">-</span>
              Use of this service is subject to our{' '}
              <Link href="/terms-of-service" className="text-brand-blue hover:text-brand-red transition-colors">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="text-brand-blue hover:text-brand-red transition-colors">Privacy Policy</Link>.
            </li>
          </ul>
          <p className="mt-5 text-xs text-brand-muted border-t border-brand-border pt-4">{DISCLAIMER}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Service Area</h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Urgent Plumber serves homeowners throughout the Greater Phoenix metropolitan area, including Phoenix, Mesa, Scottsdale, Chandler, Tempe, Gilbert, Glendale, Peoria, Surprise, Goodyear, Avondale, Buckeye, Queen Creek, and many other communities across the East and West Valley.
          </p>
          <Link href="/#service-areas" className="text-brand-blue font-semibold hover:text-brand-red transition-colors">
            View the full service area →
          </Link>
        </section>

        <section className="rounded-xl bg-brand-navy text-white p-8">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Help?</h2>
          <p className="text-white/70 mb-6">
            Call Urgent Plumber to discuss your plumbing needs and get connected with a local independent contractor.
          </p>
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
