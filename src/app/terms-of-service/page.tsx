import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SITE_URL, BUSINESS_NAME, EMAIL, DISCLAIMER } from '@/lib/config'

export const metadata: Metadata = {
  title: `Terms of Service | ${BUSINESS_NAME}`,
  description: `Terms of service for ${BUSINESS_NAME} at urgentplumberaz.com.`,
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  robots: { index: false, follow: false },
}

export default function TermsOfServicePage() {
  return (
    <>
      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Terms of Service' },
          ]} />
        </div>
      </div>

      <section className="py-12" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
          <p className="text-white/60 text-sm">Last updated: October 2025</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose prose-lg max-w-none text-brand-muted space-y-8">

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Agreement to Terms</h2>
            <p>
              By accessing or using the website urgentplumberaz.com or the contractor connection service provided by {BUSINESS_NAME}, you agree to these Terms of Service. If you do not agree, please do not use this website or service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Nature of Service</h2>
            <p>
              {BUSINESS_NAME} is a contractor connection service. We help homeowners in the Greater Phoenix metropolitan area connect with independent local plumbing contractors who may be available to assist with plumbing needs.
            </p>
            <p>
              <strong>{BUSINESS_NAME} is not a licensed plumbing contractor.</strong> We do not perform plumbing work, employ plumbers, or guarantee the availability, quality, licensing, or performance of any contractor connected through this service. Contractors are independent parties who operate their own businesses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">No Warranty or Guarantee</h2>
            <p>
              {DISCLAIMER}
            </p>
            <p>
              This service is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, error-free, or that any contractor will be available to assist at any given time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Homeowner Responsibilities</h2>
            <p>
              It is the sole responsibility of the homeowner to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Verify that any contractor they hire holds a valid and appropriate license for the work being performed in the State of Arizona</li>
              <li>Verify that any contractor they hire carries adequate liability insurance and workers&apos; compensation coverage</li>
              <li>Negotiate and agree on pricing, scope of work, and warranties directly with the contractor</li>
              <li>Conduct their own due diligence regarding any contractor before allowing them to perform work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {BUSINESS_NAME} shall not be liable for any damages arising out of or related to your use of this service, including any work performed by contractors connected through this service. This includes direct, indirect, incidental, consequential, and punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Third-Party Contractors</h2>
            <p>
              Contractors connected through this service are independent third parties. {BUSINESS_NAME} does not supervise, direct, or control their work, and is not responsible for any act or omission by any contractor. Any dispute regarding plumbing services performed is between the homeowner and the contractor directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Acceptable Use</h2>
            <p>
              You agree to use this website and service only for lawful purposes. You may not use the service to obtain contractor connections for properties you do not own or have permission to access, or for any fraudulent purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of Arizona. Any disputes shall be resolved in the courts of Maricopa County, Arizona.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Changes to These Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the service after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Contact</h2>
            <p>
              Questions about these Terms of Service can be directed to{' '}
              <a href={`mailto:${EMAIL}`} className="text-brand-blue hover:text-brand-red transition-colors">{EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
