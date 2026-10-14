import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SITE_URL, BUSINESS_NAME, EMAIL } from '@/lib/config'

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS_NAME}`,
  description: `Privacy policy for ${BUSINESS_NAME} - how we collect, use, and protect information on urgentplumberaz.com.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Privacy Policy' },
          ]} />
        </div>
      </div>

      <section className="py-12" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: October 2025</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose prose-lg max-w-none text-brand-muted space-y-8">

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Overview</h2>
            <p>
              This Privacy Policy describes how {BUSINESS_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles information in connection with the website urgentplumberaz.com and the contractor connection service offered through it. By using this website, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Information We Collect</h2>
            <p>
              <strong>Information you provide:</strong> If you call us or send us an email, we may collect your name, phone number, email address, and the details you share about your plumbing situation and location. This information is used solely to attempt to connect you with a local contractor.
            </p>
            <p>
              <strong>Automatically collected information:</strong> Like most websites, this site collects standard log data through hosting and analytics services. This may include your IP address, browser type, pages visited, and referring URL. This information is used to understand how the site is used and to improve it.
            </p>
            <p>
              <strong>Cookies:</strong> This site may use cookies or similar technologies for basic functionality and analytics. You can control cookie behavior through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">How We Use Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Connect you with independent local plumbing contractors</li>
              <li>Respond to your inquiries</li>
              <li>Understand how the website is used and improve it</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use your information for advertising profiling or share it with third parties except as described below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Information Shared With Contractors</h2>
            <p>
              The core function of this service is connecting you with local plumbing contractors. When we connect you with a contractor, relevant information you have shared (such as your name, phone number, location, and description of your plumbing situation) may be passed to the contractor so they can contact you. Contractors are independent parties and have their own privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Third-Party Services</h2>
            <p>
              This site may use third-party services for analytics and hosting. These services may collect information subject to their own privacy policies. We do not control these third parties and their practices are governed by their respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Data Retention</h2>
            <p>
              We retain information you provide only as long as necessary to fulfill the purpose for which it was collected or as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Children&apos;s Privacy</h2>
            <p>
              This website is not directed at children under 13 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the website after changes are posted constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Contact</h2>
            <p>
              Questions about this Privacy Policy can be directed to us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-brand-blue hover:text-brand-red transition-colors">{EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
