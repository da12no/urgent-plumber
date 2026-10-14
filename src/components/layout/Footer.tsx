import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF, EMAIL, DISCLAIMER } from '@/lib/config'
import { SERVICES } from '@/lib/services'
import { CITIES } from '@/lib/cities'

const footerServices = SERVICES.slice(0, 10)
const footerCities = CITIES.slice(0, 12)

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Business */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4" aria-label="Urgent Plumber - Home">
              <Image src="/logo-transparent.png" alt="Urgent Plumber" width={48} height={48} className="h-12 w-auto" />
              <span className="font-bold text-xl text-white">Urgent<br /><span className="text-brand-red">Plumber</span></span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Helping Phoenix metro homeowners connect with independent local plumbing contractors for repairs, installations, and urgent plumbing needs.
            </p>
            <div className="space-y-2 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 text-brand-red" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5z" clipRule="evenodd" />
                </svg>
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 text-brand-red" aria-hidden="true">
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3z" />
                  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839z" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Plumbing Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">Plumbing Services</h3>
            <ul className="space-y-2">
              {footerServices.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-brand-blue-light hover:text-white transition-colors font-medium">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {footerCities.map(c => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {c.name}, AZ
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#service-areas" className="text-sm text-brand-blue-light hover:text-white transition-colors font-medium">
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">Information</h3>
            <ul className="space-y-2 mb-8">
              <li><Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Urgent Plumber</Link></li>
              <li><Link href="/faqs" className="text-sm text-white/70 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap.xml" className="text-sm text-white/70 hover:text-white transition-colors">Sitemap</Link></li>
            </ul>

            <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(200,18,18,0.15)' }}>
              <p className="text-xs font-bold text-brand-red mb-1">⚠ Placeholder Number</p>
              <p className="text-xs text-white/60">Update {PHONE_DISPLAY} in <code className="text-white/80">src/lib/config.ts</code> before launch.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar + disclaimer */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-white/40 leading-relaxed mb-3">{DISCLAIMER}</p>
          <p className="text-xs text-white/30">© 2025 {BUSINESS_NAME}. All rights reserved. Phoenix, Arizona.</p>
        </div>
      </div>
    </footer>
  )
}
