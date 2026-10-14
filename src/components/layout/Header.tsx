'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/config'
import { SERVICES } from '@/lib/services'
import { CITIES, REGION_LABELS } from '@/lib/cities'

const featuredServices = SERVICES.slice(0, 8)
const phoenixCities = CITIES.filter(c => c.region === 'phoenix').slice(0, 4)
const eastCities = CITIES.filter(c => c.region === 'east-valley').slice(0, 5)
const westCities = CITIES.filter(c => c.region === 'west-valley').slice(0, 5)

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const areasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'border-b border-brand-border'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2" aria-label="Urgent Plumber - Home">
            <Image src="/logo-transparent.png" alt="Urgent Plumber" width={48} height={48} className="h-10 w-auto" priority />
            <span className="hidden sm:block font-bold text-brand-navy text-lg leading-tight">
              Urgent<br /><span className="text-brand-red">Plumber</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-red transition-colors rounded-md">
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-red transition-colors rounded-md"
                aria-expanded={servicesOpen}
              >
                Plumbing Services
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-brand-border py-2 z-50">
                  {featuredServices.map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm text-brand-navy hover:bg-brand-surface hover:text-brand-red transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                  <div className="border-t border-brand-border mt-1 pt-1">
                    <Link href="/services" onClick={() => setServicesOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors">
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Areas dropdown */}
            <div className="relative" ref={areasRef}>
              <button
                onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-red transition-colors rounded-md"
                aria-expanded={areasOpen}
              >
                Service Areas
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-brand-border py-4 z-50">
                  <div className="grid grid-cols-2 gap-x-4 px-4">
                    <div>
                      <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">Phoenix</p>
                      {phoenixCities.map(c => (
                        <Link key={c.slug} href={`/${c.slug}`} onClick={() => setAreasOpen(false)} className="block py-1.5 text-sm text-brand-navy hover:text-brand-red transition-colors">{c.name}</Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">East Valley</p>
                      {eastCities.map(c => (
                        <Link key={c.slug} href={`/${c.slug}`} onClick={() => setAreasOpen(false)} className="block py-1.5 text-sm text-brand-navy hover:text-brand-red transition-colors">{c.name}</Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-brand-border mt-3 pt-3 px-4">
                    <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">West Valley</p>
                    <div className="grid grid-cols-2 gap-x-4">
                      {westCities.map(c => (
                        <Link key={c.slug} href={`/${c.slug}`} onClick={() => setAreasOpen(false)} className="block py-1.5 text-sm text-brand-navy hover:text-brand-red transition-colors">{c.name}</Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-brand-border mt-3 pt-3 px-4">
                    <Link href="/#service-areas" onClick={() => setAreasOpen(false)} className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors">
                      View All Locations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-red transition-colors rounded-md">About</Link>
            <Link href="/faqs" className="px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-red transition-colors rounded-md">FAQs</Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-brand-navy hover:text-brand-red transition-colors rounded-md">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <a
            href={PHONE_HREF}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-white text-sm transition-colors duration-150"
            style={{ backgroundColor: 'var(--color-brand-red)' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-red-hover)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-red)')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            {PHONE_DISPLAY}
          </a>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={PHONE_HREF} className="flex items-center justify-center h-10 w-10 rounded-lg text-brand-red" aria-label={`Call ${PHONE_DISPLAY}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center h-10 w-10 rounded-lg text-brand-navy"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-30 overflow-y-auto pb-24">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-3 font-medium text-brand-navy border-b border-brand-border">Home</Link>

            <div className="border-b border-brand-border pb-3">
              <p className="px-3 py-3 text-xs font-bold text-brand-muted uppercase tracking-wider">Plumbing Services</p>
              {SERVICES.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm text-brand-navy hover:text-brand-red transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>

            <div className="border-b border-brand-border pb-3">
              <p className="px-3 py-3 text-xs font-bold text-brand-muted uppercase tracking-wider">Service Areas</p>
              {CITIES.map(c => (
                <Link key={c.slug} href={`/${c.slug}`} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm text-brand-navy hover:text-brand-red transition-colors">
                  {c.name}
                </Link>
              ))}
            </div>

            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-3 font-medium text-brand-navy border-b border-brand-border">About</Link>
            <Link href="/faqs" onClick={() => setMobileOpen(false)} className="block px-3 py-3 font-medium text-brand-navy border-b border-brand-border">FAQs</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-3 font-medium text-brand-navy">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
