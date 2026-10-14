import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SERVICES } from '@/lib/services'
import { CITIES, REGION_LABELS } from '@/lib/cities'
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF, SITE_URL, EMAIL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Plumber in Phoenix, AZ | Urgent Plumber',
  description: 'Need a plumber in Phoenix? Call Urgent Plumber for drain cleaning, water heater repair, slab leaks, emergency plumbing, and more throughout the Phoenix metro area.',
  openGraph: {
    title: 'Plumber in Phoenix, AZ | Urgent Plumber',
    description: 'Plumbing help throughout the Phoenix metro area. Call for drain cleaning, water heaters, slab leaks, emergency plumbing, and more.',
    url: SITE_URL,
  },
  alternates: { canonical: SITE_URL },
}

const homepageFAQs = [
  {
    question: 'What should I do if a pipe bursts?',
    answer: "Turn off your main water shutoff valve immediately - it's usually in the garage, utility room, or near the water meter at the street. Then call us. Take photos of any visible damage for your insurance company.",
  },
  {
    question: 'Why is my water heater not producing hot water?',
    answer: "Most common causes: failed heating element (electric), pilot light out (gas), faulty thermostat, or heavy sediment buildup. Phoenix's hard water accelerates sediment and can shorten a water heater's life significantly.",
  },
  {
    question: 'When should I call about a clogged drain?',
    answer: "If a plunger doesn't clear it quickly, or multiple drains are slow at the same time, call. Multiple slow drains usually mean a main sewer line blockage - not something a plunger will fix.",
  },
  {
    question: 'How do I know if I have a slab leak?',
    answer: "Watch for: unexplained spike in your water bill, warm or wet spot on the floor, sound of running water when everything is off, or cracking floor tiles. Most Phoenix homes are slab-on-grade with copper lines through the foundation - slab leaks are common here.",
  },
  {
    question: 'Do you serve Mesa, Chandler, Scottsdale and other cities?',
    answer: "Yes - we serve the entire Greater Phoenix metro area including the East Valley and West Valley. Call and tell us your location.",
  },
]

const commonProblems = [
  {
    question: 'No hot water',
    answer: "Failed heating element, tripped breaker, pilot light out, or sediment buildup. Phoenix's hard water shortens water heater life - if yours is 8+ years old it may be time.",
    service: '/services/water-heater-repair',
  },
  {
    question: 'Slow or clogged drain',
    answer: "Grease, debris, and hard water scale build up over time. Multiple slow drains at once usually means a main line issue.",
    service: '/services/drain-cleaning',
  },
  {
    question: 'Toilet running constantly',
    answer: "Wastes hundreds of gallons a day. Usually a worn flapper or fill valve - a quick, inexpensive fix.",
    service: '/services/toilet-repair',
  },
  {
    question: 'Water bill jumped for no reason',
    answer: "Classic sign of a hidden leak. In Phoenix homes, often a slab leak. Turn off all water and watch your meter - if it moves, water is going somewhere it shouldn't.",
    service: '/services/leak-detection',
  },
  {
    question: 'Low pressure throughout the home',
    answer: "Could be a failing pressure regulator, water main issue, or in older homes - galvanized lines corroded from the inside out.",
    service: '/services/pipe-repair',
  },
  {
    question: 'Sewer smell inside or outside',
    answer: "Indoors usually means a dry trap, failed wax ring, or cracked drain line. In the yard it often points to a damaged sewer line.",
    service: '/services/sewer-line-repair',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  description: 'Plumbing services throughout the Greater Phoenix metropolitan area.',
  areaServed: { '@type': 'City', name: 'Phoenix', containedInPlace: { '@type': 'State', name: 'Arizona' } },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="absolute inset-0">
          <Image src="/van.jpg" alt="Urgent Plumber in Phoenix, AZ" fill className="object-cover object-center opacity-20" priority sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Need a Plumber<br />in Phoenix?<br />
              <span className="text-brand-red">We&apos;re Here to Help.</span>
            </h1>
            <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Plumbing help throughout the Phoenix metro area - from emergency repairs to water heaters, drain cleaning, slab leaks, and more.
            </p>
            <CTAButton label={`Call Now · ${PHONE_DISPLAY}`} size="lg" />
            <p className="mt-4 text-white/40 text-sm">Phoenix · Mesa · Chandler · Scottsdale · Tempe · Glendale and more</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">Plumbing Services in Phoenix, AZ</h2>
            <p className="text-brand-muted max-w-xl">From burst pipe emergencies to routine maintenance - we cover it all throughout Greater Phoenix.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 md:py-20 bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">Common Plumbing Problems in Phoenix</h2>
            <p className="text-brand-muted max-w-xl">Hard water, slab-on-grade foundations, and desert heat create specific plumbing challenges across the Valley.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commonProblems.map((p, i) => (
              <div key={i} className="bg-white rounded-xl border border-brand-border p-6">
                <h3 className="font-bold text-brand-navy text-base mb-2">{p.question}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{p.answer}</p>
                <Link href={p.service} className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - simplified */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Why Call Urgent Plumber?</h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                One call gets you connected to a local plumber who knows Phoenix - the hard water, the slab foundations, the aging copper pipes in older neighborhoods. No runaround, no forms to fill out.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { title: 'One Call', desc: 'No apps, no online forms. Just call and tell us what you need.' },
                  { title: 'Phoenix Metro', desc: 'East Valley, West Valley, and everywhere in between.' },
                  { title: 'All Services', desc: 'Emergency, routine, installation - we cover the full range.' },
                  { title: 'Local Knowledge', desc: 'Contractors who know Phoenix plumbing - slab leaks, hard water, the whole picture.' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-brand-surface border border-brand-border p-5">
                    <h3 className="font-bold text-brand-navy mb-1">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/van.jpg" alt="Urgent Plumber Phoenix, AZ" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-brand-surface" id="service-areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">Phoenix Metro Service Area</h2>
            <p className="text-brand-muted">We serve homeowners throughout Greater Phoenix.</p>
          </div>
          {(['phoenix', 'east-valley', 'west-valley'] as const).map(region => (
            <div key={region} className="mb-7">
              <h3 className="text-sm font-bold text-brand-muted uppercase tracking-wider mb-3">{REGION_LABELS[region]}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {CITIES.filter(c => c.region === region).map(city => (
                  <Link key={city.slug} href={`/${city.slug}`} className="rounded-lg border border-brand-border bg-white px-4 py-3 text-sm font-medium text-brand-navy hover:border-brand-blue hover:text-brand-red transition-all text-center">
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-8">Frequently Asked Questions</h2>
          <FAQAccordion faqs={homepageFAQs} />
          <div className="mt-6">
            <Link href="/faqs" className="text-brand-blue font-semibold hover:text-brand-red transition-colors text-sm">View all FAQs →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-brand-red">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Need a Plumber Now?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">Call Urgent Plumber for plumbing help anywhere in the Phoenix metro area.</p>
          <a href={PHONE_HREF} className="inline-flex items-center gap-3 px-10 py-5 text-xl font-extrabold text-brand-red bg-white rounded-xl hover:bg-white/90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  )
}
