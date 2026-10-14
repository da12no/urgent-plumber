import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF, EMAIL, BUSINESS_NAME } from '@/lib/config'

export const metadata: Metadata = {
  title: `Contact | ${BUSINESS_NAME} - Phoenix, AZ`,
  description: `Contact Urgent Plumber for plumbing help in the Phoenix metro area. Call ${PHONE_DISPLAY} or email ${EMAIL}.`,
  alternates: { canonical: `${SITE_URL}/contact` },
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        </div>
      </div>

      <section className="py-14" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contact Urgent Plumber</h1>
          <p className="text-white/70 text-lg">Get plumbing help anywhere in the Phoenix metro area.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl bg-brand-red text-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Call Us</h2>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">The fastest way to get help. Call and describe your situation - we'll get you sorted.</p>
            <a href={PHONE_HREF} className="flex items-center justify-center w-full py-4 px-6 rounded-xl font-bold text-brand-red bg-white text-xl hover:bg-white/90 transition-colors">
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="rounded-2xl border border-brand-border bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-surface mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-blue" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-brand-navy mb-2">Email Us</h2>
            <p className="text-brand-muted mb-6 text-sm leading-relaxed">For general questions. We respond during business hours. For urgent issues, call.</p>
            <a href={`mailto:${EMAIL}`} className="flex items-center justify-center w-full py-4 px-6 rounded-xl font-bold text-white text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-brand-surface border border-brand-border p-6">
          <p className="text-brand-muted text-sm leading-relaxed">
            Urgent Plumber serves Phoenix, Mesa, Scottsdale, Chandler, Tempe, Gilbert, Glendale, Peoria, Surprise, Goodyear, Avondale, Buckeye, Queen Creek, and communities throughout Greater Phoenix.
          </p>
        </div>
      </div>
    </>
  )
}
